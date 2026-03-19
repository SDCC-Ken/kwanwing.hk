<template>
  <nav v-if="selectedStyle" :class="[themeClass, selectedStyle.root]" aria-label="Pagination">
    <ul :class="selectedStyle.list">
      <li :class="selectedStyle.item">
        <button :disabled="page === 1" :class="[
          selectedStyle.button,
          selectedStyle.sizes[size],
          page === 1 && selectedStyle.buttonDisabled,
        ]" @click="setPage(page - 1)" type="button">
          &lt;
        </button>
      </li>
      <li v-for="(item, index) in paginationRange" :key="`${item}-${index}`" :class="selectedStyle.item">
        <button v-if="typeof item === 'number'" :class="[
          selectedStyle.button,
          selectedStyle.sizes[size],
          item === page ? selectedStyle.variants[variant] : '',
          item === page && selectedStyle.buttonActive,
        ]" @click="setPage(item)" type="button">
          {{ item }}
        </button>
        <span v-else :class="selectedStyle.ellipsis">{{ item }}</span>
      </li>
      <li :class="selectedStyle.item">
        <button :disabled="page === totalPages" :class="[
          selectedStyle.button,
          selectedStyle.sizes[size],
          page === totalPages && selectedStyle.buttonDisabled,
        ]" @click="setPage(page + 1)">
          &gt;
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { AuiStyleName, AuiSize, AuiVariant } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  total: { type: Number, required: true },
  pageSize: { type: Number, default: 10 },
  siblings: { type: Number, default: 1 },
  boundaries: { type: Number, default: 1 },
  styleName: { type: String as PropType<AuiStyleName>, default: undefined },
  size: { type: String as PropType<AuiSize>, default: "md" },
  variant: { type: String as PropType<AuiVariant>, default: "primary" },
});

const page = defineModel<number>("page", { default: 1 });

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const totalPages = computed(() => Math.ceil(props.total / props.pageSize));

const setPage = (newPage: number) => {
  if (newPage < 1 || newPage > totalPages.value || newPage === page.value)
    return;
  page.value = newPage;
};

const paginationRange = computed(() => {
  const total = totalPages.value;
  const siblings = props.siblings;
  const boundaries = props.boundaries;
  const totalVisible = siblings * 2 + 1 + boundaries * 2;

  if (total <= totalVisible + 2) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = new Set<number>();

  for (let i = -siblings; i <= siblings; i++) {
    pages.add(page.value + i);
  }

  for (let i = 1; i <= boundaries; i++) {
    pages.add(i);
  }
  for (let i = total; i > total - boundaries; i--) {
    pages.add(i);
  }

  const sortedPages = Array.from(pages)
    .filter(p => p >= 1 && p <= total)
    .sort((a, b) => a - b);

  const result: (number | string)[] = [];
  let lastPage = 0;
  for (const p of sortedPages) {
    if (lastPage !== 0 && p > lastPage + 1) {
      result.push("...");
    }
    result.push(p);
    lastPage = p;
  }

  return result;
});
</script>
