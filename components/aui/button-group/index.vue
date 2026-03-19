<template>
  <div :class="[themeClass, groupClasses]" role="group">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { AuiStyleName } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  attached: {
    type: Boolean,
    default: false
  },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined
  }
});

const activeStyleName = computed(() => props.styleName || currentStyle.value);

const selectedStyle = computed(() => {
  return styleMapping[activeStyleName.value];
});

const groupClasses = computed(() => {
  if (!selectedStyle.value) return "";
  return [
    selectedStyle.value.base,
    props.attached ?
      selectedStyle.value.variants.attached :
      selectedStyle.value.variants.separate
  ].join(" ");
});
</script>
