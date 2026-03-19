<!-- aui-timeline -->
<template>
  <div v-if="selectedStyle" :class="[themeClass, rootClasses]">
    <div v-for="(item, index) in items" :key="index" :class="itemClasses">
      <!-- Connector Line -->
      <div v-if="index < items.length - 1" :class="separatorClasses">
        <div :class="selectedStyle.connector" />
      </div>

      <!-- Dot -->
      <div :class="[
        selectedStyle.dot,
        selectedStyle.sizes[size].dot,
        selectedStyle.variants[variant],
      ]">
        <slot name="dot" :item="item" :index="index">
          <span class="h-2.5 w-2.5 rounded-full bg-[var(--color-secondary-400)]" />
        </slot>
      </div>

      <!-- Content -->
      <div :class="contentClasses">
        <div :class="[selectedStyle.title, selectedStyle.sizes[size].title]">
          <slot name="title" :item="item" :index="index">
            {{ item.title }}
          </slot>
        </div>
        <div :class="[
          selectedStyle.description,
          selectedStyle.sizes[size].description,
        ]">
          <slot name="description" :item="item" :index="index">
            {{ item.description }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { AuiStyleName, AuiSize, AuiVariant } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

interface TimelineItem {
  title: string;
  description?: string;
  [key: string]: any;
}

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  items: {
    type: Array as PropType<TimelineItem[]>,
    default: () => [],
  },
  orientation: {
    type: String as PropType<"horizontal" | "vertical">,
    default: "vertical",
  },
  size: {
    type: String as PropType<AuiSize>,
    default: "md",
  },
  variant: {
    type: String as PropType<AuiVariant>,
    default: "primary",
  },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined,
  },
});

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const rootClasses = computed(() => {
  if (!selectedStyle.value) return "";
  return [
    selectedStyle.value.root,
    selectedStyle.value.orientations[props.orientation].root
  ].join(" ");
});

const itemClasses = computed(() => {
  if (!selectedStyle.value) return "";
  return [
    selectedStyle.value.item,
    selectedStyle.value.orientations[props.orientation].item
  ].join(" ");
});

const separatorClasses = computed(() => {
  if (!selectedStyle.value) return "";
  return [
    selectedStyle.value.separator,
    selectedStyle.value.orientations[props.orientation].separator
  ].join(" ");
});

const contentClasses = computed(() => {
  if (!selectedStyle.value) return "";
  return [
    selectedStyle.value.content,
    props.orientation === "vertical" ? "ml-12" : "mt-4"
  ].join(" ");
});
</script>
