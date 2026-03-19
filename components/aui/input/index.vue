<!-- aui-input -->
<template>
  <div v-if="selectedStyle" :class="[themeClass, selectedStyle.root]">
    <label v-if="label" :for="inputId" :class="['selectedStyle.label', error ? 'text-(--color-danger-500)!' : '']">
      {{ label }}
    </label>
    <div :class="selectedStyle.inputContainer">
      <span v-if="slots.left" :class="leftIconClasses">
        <slot name="left" />
      </span>
      <slot :input-value="computedValue" :input-classes="inputClasses">
        <input v-bind="attrs" :id="inputId" ref="inputRef" v-model="computedValue" :class="inputClasses">
      </slot>

      <span v-if="slots.right" :class="rightIconClasses">
        <slot name="right" />
      </span>
    </div>
    <p v-if="error" :class="[selectedStyle.helpText, 'text-(--color-danger-500)!']">
      {{ error }}
    </p>
    <p v-else-if="helpText" :class="selectedStyle.helpText">
      {{ helpText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs, useSlots, type PropType, defineModel, onMounted, ref } from "vue";
import type { AuiStyleName, AuiSize, AuiVariant } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const computedValue = defineModel<string | number>();

const props = defineProps({
  label: {
    type: String,
    default: ""
  },
  error: {
    type: String,
    default: ""
  },
  helpText: {
    type: String,
    default: ""
  },
  size: {
    type: String as PropType<AuiSize>,
    default: "md"
  },
  variant: {
    type: String as PropType<AuiVariant>,
    default: "neutral"
  },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined
  },
  inputId: {
    type: String,
    default: ""
  }
});
const inputRef = ref<HTMLInputElement | null>(null);
const emit = defineEmits(["mounted"]);
onMounted(() => {
  if (inputRef.value) {
    emit("mounted", { inputRef });
  }
});
const slots = useSlots();
const attrs = useAttrs();

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const inputClasses = computed(() => {
  if (!selectedStyle.value) return "";

  const variantClass = props.error ?
    selectedStyle.value.variants.error :
    selectedStyle.value.variants[props.variant];

  return [
    selectedStyle.value.input,
    selectedStyle.value.sizes[props.size],
    variantClass,
    slots.left ? selectedStyle.value.inputWithLeftIcon : "",
    slots.right ? selectedStyle.value.inputWithRightIcon : "",
    (attrs.disabled as boolean) ? "opacity-70 cursor-not-allowed" : ""
  ].join(" ");
});

const leftIconClasses = computed(() => [selectedStyle.value.icon, "left-3", 
  "z-10" ]);
const rightIconClasses = computed(() => [selectedStyle.value.icon, "right-3", 
  "z-10" ]);
</script>
