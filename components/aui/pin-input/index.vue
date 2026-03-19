<template>
  <div v-if="selectedStyle" :class="[themeClass, selectedStyle.root]">
    <div v-if="label" :class="selectedStyle.labelWrapper">
      <label :class="selectedStyle.label">
        {{ label }}
        <span v-if="isOptional" :class="selectedStyle.optional">(optional)</span>
      </label>
    </div>

    <div :class="selectedStyle.inputWrapper" @paste="handlePaste">
      <input v-for="(_, i) in length" :key="i" :ref="(el) => {
        if (el) inputRefs[i] = el as HTMLInputElement;
      }
        " :value="values[i]" :class="selectedStyle.input" type="text" maxlength="1" :placeholder="placeholder"
        :disabled="disabled" :aria-label="`PIN digit ${i + 1}`" :autocomplete="otp && i === 0 ? 'one-time-code' : 'off'"
        @input="handleInput($event, i)" @keydown="handleKeyDown($event, i)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, type PropType } from "vue";
import type { AuiStyleName, AuiSize } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const modelValue = defineModel<string>({ default: "" });

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  length: { type: Number, default: 6 },
  disabled: { type: Boolean, default: false },
  placeholder: { type: String, default: "○" },
  otp: { type: Boolean, default: false },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined,
  },
  label: { type: String, default: undefined },
  isOptional: { type: Boolean, default: false },
  size: {
    type: String as PropType<AuiSize>,
    default: "md",
  },
});

const emit = defineEmits(["complete", "mounted"]);

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(
  () => styleMapping(props.size)[activeStyleName.value],
);

const values = ref<string[]>([]);
const inputRefs = ref<HTMLInputElement[]>([]);

const init = () => {
  const modelChars = modelValue.value.split("");
  values.value = Array.from(
    { length: props.length },
    // eslint-disable-next-line security/detect-object-injection
    (_, i) => modelChars[i] || "",
  );
};
onMounted(() => {
  if (inputRefs.value[0]) {
    emit("mounted", { inputRef: inputRefs.value[0] });
  }
})
watch(modelValue, init, { immediate: true });

const handleInput = (event: Event, index: number) => {
  const target = event.target as HTMLInputElement;
  const value = target.value;

  // eslint-disable-next-line security/detect-object-injection
  values.value[index] = value.slice(-1);
  modelValue.value = values.value.join("");

  if (value && index < props.length - 1) {
    inputRefs.value[index + 1]?.focus();
  }

  if (values.value.join("").length === props.length) {
    emit("complete", values.value.join(""));
  }
};

const handleKeyDown = (event: KeyboardEvent, index: number) => {
  // eslint-disable-next-line security/detect-object-injection
  if (event.key === "Backspace" && !values.value[index] && index > 0) {
    inputRefs.value[index - 1]?.focus();
  }
};

const handlePaste = (event: ClipboardEvent) => {
  event.preventDefault();
  const pastedData =
    event.clipboardData?.getData("text").slice(0, props.length) || "";
  if (!pastedData) return;

  pastedData.split("").forEach((char, i) => {
    // eslint-disable-next-line security/detect-object-injection
    values.value[i] = char;
  });

  modelValue.value = values.value.join("");

  const lastFilledIndex = Math.min(pastedData.length, props.length) - 1;
  // eslint-disable-next-line security/detect-object-injection
  inputRefs.value[lastFilledIndex]?.focus();

  if (values.value.join("").length === props.length) {
    emit("complete", values.value.join(""));
  }
};
</script>
