<template>
  <kbd v-if="selectedStyle" :class="[themeClass, kbdClasses]">
    <slot />
  </kbd>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { AuiStyleName, AuiSize } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
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
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const kbdClasses = computed(() => {
  if (!selectedStyle.value) return "";
  return [selectedStyle.value.root, selectedStyle.value.sizes[props.size]].join(
    " "
  );
});
</script>
