<template>
  <div v-if="selectedStyle" :class="[themeClass, rootClasses]" role="separator">
    <div :class="lineClasses" />
    <div v-if="label || slots.default" :class="labelClasses">
      <slot>{{ label }}</slot>
    </div>
    <div :class="lineClasses" />
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots, type PropType } from "vue";
import type { AuiStyleName, AuiSize } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  label: {
    type: String,
    default: ""
  },
  orientation: {
    type: String as PropType<"horizontal" | "vertical">,
    default: "horizontal"
  },
  size: {
    type: String as PropType<AuiSize>,
    default: "xs"
  },
  type: {
    type: String as PropType<"solid" | "dashed" | "dotted">,
    default: "solid"
  },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined
  }
});

const slots = useSlots();

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const rootClasses = computed(() => {
  if (!selectedStyle.value) return "";
  return [
    selectedStyle.value.root,
    selectedStyle.value.orientations[props.orientation]
  ].join(" ");
});

const lineClasses = computed(() => {
  if (!selectedStyle.value) return "";
  const sizeClass = selectedStyle.value.sizes[props.size];
  const typeClass = selectedStyle.value.types[props.type];

  const orientationClass =
    props.orientation === "vertical" ?
      sizeClass.replace("border-t", "border-l") :
      sizeClass;

  return [selectedStyle.value.line, orientationClass, typeClass].join(" ");
});

const labelClasses = computed(() => {
  if (!selectedStyle.value) return "";
  return props.orientation === "vertical" ?
    selectedStyle.value.label.replace("px-", "py-") :
    selectedStyle.value.label;
});
</script>
