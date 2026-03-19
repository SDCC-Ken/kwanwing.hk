<template>
  <nav v-if="selectedStyle" aria-label="Breadcrumb" :class="[themeClass, selectedStyle.root]">
    <ol :class="selectedStyle.list">
      <li v-for="(item, index) in items" :key="item.to || item.label" :class="selectedStyle.item">
        <a v-if="index < items.length - 1 && item.to" :href="item.to" :class="selectedStyle.link">
          {{ item.label }}
        </a>
        <span v-else :class="selectedStyle.currentPage" aria-current="page">
          {{ item.label }}
        </span>
        <span v-if="index < items.length - 1" :class="selectedStyle.separator" aria-hidden="true">
          <slot name="separator"> / </slot>
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { AuiStyleName } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  items: {
    type: Array as PropType<BreadcrumbItem[]>,
    default: () => []
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
</script>
