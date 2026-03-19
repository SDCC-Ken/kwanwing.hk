<template>
  <span :class="[themeClass, badgeClasses]">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { AuiStyleName, AuiSize, AuiVariant } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  variant: {
    type: String as PropType<AuiVariant>,
    default: "neutral",
  },
  size: {
    type: String as PropType<AuiSize>,
    default: "md",
  },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined,
  },
});

const activeStyleName = computed(() => props.styleName || currentStyle.value);

const selectedStyle = computed(() => {
  return styleMapping[activeStyleName.value];
});

const badgeClasses = computed(() => {
  if (!selectedStyle.value) return "";
  return [
    selectedStyle.value.base,
    selectedStyle.value.sizes[props.size],
    selectedStyle.value.variants[props.variant]
  ].join(" ");
});
</script>
