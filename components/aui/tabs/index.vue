<template>
  <div v-if="selectedStyle" :class="[
    themeClass,
    selectedStyle.root,
    selectedStyle.orientations[orientation].root,
  ]">
    <!-- Tab List -->
    <div :class="[selectedStyle.list, selectedStyle.orientations[orientation].list]" role="tablist">
      <button v-for="item in items" :id="`aui-tab-${item.key}`" :key="item.key" role="tab"
        :aria-selected="item.key === activeTab" :aria-controls="`aui-tabpanel-${item.key}`" :disabled="item.disabled"
        :class="getTabClasses(item)" type="button" @click="!item.disabled && (activeTab = item.key)">
        <slot name="label" :item="item" :active="item.key === activeTab">
          {{ item.label }}
        </slot>
      </button>
    </div>

    <!-- Tab Panels -->
    <div :class="selectedStyle.panel">
      <template v-for="item in items" :key="item.key">
        <div v-if="item.key === activeTab" :id="`aui-tabpanel-${item.key}`" role="tabpanel"
          :aria-labelledby="`aui-tab-${item.key}`">
          <slot :name="item.key" :item="item" />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { AuiStyleName } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

interface TabItem {
  key: string;
  label: string;
  disabled?: boolean;
}

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  modelValue: { type: String, required: true },
  items: { type: Array as PropType<TabItem[]>, default: () => [] },
  orientation: {
    type: String as PropType<"horizontal" | "vertical">,
    default: "horizontal"
  },
  styleName: { type: String as PropType<AuiStyleName>, default: undefined }
});

const emit = defineEmits(["update:modelValue"]);

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const activeTab = computed({
  get: () => props.modelValue,
  set: value => emit("update:modelValue", value)
});

const getTabClasses = (item: TabItem) => {
  if (!selectedStyle.value) return "";
  const isActive = item.key === activeTab.value;
  return [
    selectedStyle.value.tab,
    selectedStyle.value.orientations[props.orientation].tab,
    isActive ? selectedStyle.value.tabActive : "",
    item.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  ].join(" ");
};
</script>
