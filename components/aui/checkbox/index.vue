<template>
  <label :class="[themeClass, rootClasses]">
    <input v-model="computedValue" type="checkbox" :disabled="disabled" :class="selectedStyle.input">
    <span :class="boxClasses" aria-hidden="true">
      <svg :class="selectedStyle.indicator" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span v-if="label || $slots.default" :class="labelClasses">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { AuiStyleName, AuiSize, AuiVariant } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  label: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<AuiSize>,
    default: "md"
  },
  variant: {
    type: String as PropType<AuiVariant>,
    default: "primary"
  },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined
  }
});

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const computedValue = defineModel<boolean>({
  type: Boolean,
  required: true
});

const rootClasses = computed(() => {
  return [
    selectedStyle.value.root,
    props.disabled ? "opacity-70 cursor-not-allowed" : ""
  ].join(" ");
});

const boxClasses = computed(() => {
  if (!selectedStyle.value.sizes) return selectedStyle.value.box;
  return [
    selectedStyle.value.box,
    selectedStyle.value.sizes[props.size]?.box,
    selectedStyle.value.variants[props.variant]
  ].join(" ");
});

const labelClasses = computed(() => {
  if (!selectedStyle.value.sizes) return selectedStyle.value.label;
  return [
    selectedStyle.value.label,
    selectedStyle.value.sizes[props.size]?.label
  ].join(" ");
});
</script>
