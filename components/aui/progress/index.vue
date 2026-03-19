<template>
  <div v-if="selectedStyle" :class="[themeClass, rootClasses]" role="progressbar"
    :aria-valuenow="isIndeterminate ? undefined : value" :aria-valuemin="0" :aria-valuemax="max"
    :aria-valuetext="isIndeterminate ? 'Loading' : `${percentage}%`">
    <div :class="indicatorClasses" :style="indicatorStyle" />
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { AuiStyleName, AuiSize, AuiVariant } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  value: {
    type: Number as PropType<number | null>,
    default: null,
  },
  max: {
    type: Number,
    default: 100,
  },
  animation: {
    type: String as PropType<"carousel" | "pulse" | "swing">,
    default: "carousel",
  },
  orientation: {
    type: String as PropType<"horizontal" | "vertical">,
    default: "horizontal",
  },
  size: {
    type: String as PropType<AuiSize>,
    default: "md",
  },
  variant: {
    type: String as PropType<AuiVariant>,
    default: "primary",
  },
  inverted: {
    type: Boolean,
    default: false,
  },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined,
  },
});

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const isIndeterminate = computed(
  () => props.value === null || props.value === undefined
);

const percentage = computed(() => {
  if (isIndeterminate.value || props.max === 0) return 0;
  return (props.value / props.max) * 100;
});

const rootClasses = computed(() => {
  if (!selectedStyle.value) return "";

  const sizeClass = selectedStyle.value.sizes[props.size][props.orientation];

  return [
    selectedStyle.value.root,
    selectedStyle.value.orientations[props.orientation],
    sizeClass,
    props.inverted ? "transform rotate-180" : "",
  ].join(" ");
});

const indicatorClasses = computed(() => {
  if (!selectedStyle.value) return "";
  const baseClasses = isIndeterminate.value ?
    [
      selectedStyle.value.indicatorIndeterminate,
      selectedStyle.value.animations[props.animation],
    ] :
    selectedStyle.value.indicator;

  return [baseClasses, selectedStyle.value.variants[props.variant]].join(" ");
});

const indicatorStyle = computed(() => {
  if (isIndeterminate.value) return {};
  if (props.orientation === "vertical") {
    return { height: `${percentage.value}%`, width: "100%" };
  }
  return { width: `${percentage.value}%`, height: "100%" };
});
</script>
