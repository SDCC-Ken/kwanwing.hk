<!-- aui-card -->
<template>
  <div v-if="selectedStyle" :class="[themeClass, selectedStyle.root]">
    <div v-if="slots.header" :class="selectedStyle.header">
      <slot name="header" />
    </div>
    <div :class="selectedStyle.body">
      <slot />
    </div>
    <div v-if="slots.footer" :class="selectedStyle.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots, type PropType } from "vue";
import type { AuiStyleName } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined
  }
});

const slots = useSlots();

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);
</script>
