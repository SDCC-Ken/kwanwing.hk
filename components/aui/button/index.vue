<!-- aui-button -->
<template>
  <component :is="is" v-bind="$attrs" :href="href" :disabled="isDisabled" :class="[themeClass, buttonClasses]">
    <span v-if="loading" class="">
      <svg
:class="['animate-spin', spinnerSizeClass]" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path
class="opacity-75" fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </span>
    <slot v-else />
  </component>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

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
    default: "primary",
  },
  size: {
    type: String as PropType<AuiSize>,
    default: "md",
  },
  href: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
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

const is = computed(() => (props.href ? "a" : "button"));
const isDisabled = computed(() => props.disabled || props.loading);

const buttonClasses = computed(() => {
  if (!selectedStyle.value) return "";
  return [
    selectedStyle.value.base,
    selectedStyle.value.sizes[props.size],
    selectedStyle.value.variants[props.variant],
    isDisabled.value ? selectedStyle.value.disabled : "",
  ].join(" ");
});

const spinnerSizeClass = computed(() => {
  switch (props.size) {
    case "sm":
      return "w-4 h-4";
    case "lg":
      return "w-6 h-6";
    default:
      return "w-5 h-5";
  }
});
</script>
