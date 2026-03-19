<template>
  <label v-if="selectedStyle" :class="[themeClass, rootClasses]">
    <input v-model="modelValue" type="checkbox" class="sr-only" :disabled="props.disabled">
    <span :class="trackClasses">
      <span :class="thumbClasses" />
    </span>
    <span v-if="label || $slots.default" :class="selectedStyle.label">
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
  label: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
  size: { type: String as PropType<AuiSize>, default: "md" },
  variant: { type: String as PropType<AuiVariant>, default: "primary" },
  styleName: { type: String as PropType<AuiStyleName>, default: undefined }
});

const modelValue = defineModel<boolean>({ default: false });

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const rootClasses = computed(() => {
  if (!selectedStyle.value) return "";
  return [
    selectedStyle.value.root,
    selectedStyle.value.sizes[props.size].root,
    props.disabled ? "opacity-60 cursor-not-allowed" : ""
  ].join(" ");
});

const trackClasses = computed(() => {
  if (!selectedStyle.value) return "";
  return [
    selectedStyle.value.track,
    selectedStyle.value.sizes[props.size].track,
    modelValue.value ? selectedStyle.value.variants[props.variant] : ""
  ].join(" ");
});

const thumbClasses = computed(() => {
  if (!selectedStyle.value) return "";
  return [
    selectedStyle.value.thumb,
    selectedStyle.value.sizes[props.size].thumb,
    modelValue.value ? selectedStyle.value.thumbActive : ""
  ].join(" ");
});
</script>
