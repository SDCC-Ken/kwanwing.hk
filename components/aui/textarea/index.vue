<!-- src/runtime/components/textarea/index.vue -->
<template>
  <div v-if="selectedStyle" :class="[themeClass, selectedStyle.root]">
    <label v-if="label" :for="($attrs.id as string)" :class="selectedStyle.label">
      {{ label }}
    </label>
    <div class="relative">
      <textarea ref="textareaRef" v-bind="attrs" v-model="computedValue" :class="textareaClasses" />
    </div>
    <p v-if="error" :class="[selectedStyle.helpText, 'text-[var(--color-danger-500)]']">
      {{ error }}
    </p>
    <p v-else-if="helpText" :class="selectedStyle.helpText">
      {{ helpText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, useAttrs, type PropType, watch } from "vue";
import { useTextareaAutosize } from "@vueuse/core";
import type { AuiStyleName, AuiSize, AuiVariant } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  modelValue: { type: String, default: "" },
  label: { type: String, default: "" },
  error: { type: String, default: "" },
  helpText: { type: String, default: "" },
  size: {
    type: String as PropType<AuiSize>,
    default: "md",
  },
  variant: {
    type: String as PropType<AuiVariant>,
    default: "neutral",
  },
  styleName: { type: String as PropType<AuiStyleName>, default: undefined },
});

const emit = defineEmits(["update:modelValue"]);
const attrs = useAttrs();

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const textareaRef = ref<HTMLTextAreaElement | null>(null);
useTextareaAutosize({ input: textareaRef });

const computedValue = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit("update:modelValue", val);
  },
});

watch(computedValue, (val) => {
  // This watch is needed to keep the autosize in sync when the modelValue changes externally
  if (textareaRef.value && textareaRef.value.value !== val) {
    textareaRef.value.value = val;
  }
});

const textareaClasses = computed(() => {
  if (!selectedStyle.value) return "";

  const variantClass = props.error
    ? selectedStyle.value.variants.error
    : selectedStyle.value.variants[props.variant];

  return [
    selectedStyle.value.textarea,
    selectedStyle.value.sizes[props.size],
    variantClass,
    (attrs.disabled as boolean) ? "opacity-70 cursor-not-allowed" : "",
  ].join(" ");
});
</script>
