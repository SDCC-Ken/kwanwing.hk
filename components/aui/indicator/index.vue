<template>
  <div v-if="selectedStyle" :class="[themeClass, selectedStyle.root]">
    <slot />
    <span v-if="!disabled" :class="indicatorClasses">
      <slot v-if="showIndicatorContent" name="indicator" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots, type PropType } from "vue";
import type { AuiStyleName, AuiSize, AuiVariant } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  variant: {
    type: String as PropType<AuiVariant>,
    default: "danger"
  },
  position: {
    type: String as PropType<
      "top-right" | "top-left" | "bottom-right" | "bottom-left"
    >,
    default: "top-right"
  },
  size: {
    type: String as PropType<AuiSize>,
    default: "md"
  },
  dot: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined
  }
});

const slots = useSlots();

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const indicatorClasses = computed(() => {
  if (!selectedStyle.value) return "";

  return [
    selectedStyle.value.indicator,
    selectedStyle.value.positions[props.position],
    selectedStyle.value.variants[props.variant],
    selectedStyle.value.sizes[props.size]
  ].join(" ");
});

const showIndicatorContent = computed(() => {
  return !props.dot || !!slots.indicator;
});
</script>
