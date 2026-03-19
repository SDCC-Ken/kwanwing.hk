<template>
  <div v-if="selectedStyle" :class="[themeClass, selectedStyle.base]" />
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
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

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);
</script>
