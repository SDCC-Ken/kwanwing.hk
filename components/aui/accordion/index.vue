<!-- path: packages/my-frontend-module/src/runtime/aui-components/accordion/index.vue -->
<template>
  <div :class="[themeClass, selectedStyle.root]">
    <div v-for="item in items" :key="item.id" :class="getItemClasses(isItemOpen(item.id))">
      <h2>
        <button type="button" :aria-expanded="isItemOpen(item.id)" :aria-controls="`aui-accordion-content-${item.id}`"
          :class="getHeaderClasses()" @click="toggleItem(item.id)">
          <slot name="title" :item="item" :is-open="isItemOpen(item.id)">
            <span>{{ item.title }}</span>
          </slot>
          <svg v-if="trailingIcon" :class="getIconClasses(isItemOpen(item.id))" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </h2>
      <div v-show="isItemOpen(item.id)" :id="`aui-accordion-content-${item.id}`">
        <div :class="getContentClasses()">
          <slot name="content" :item="item" :is-open="isItemOpen(item.id)">
            <p>{{ item.content }}</p>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type PropType } from "vue";
// UPDATED: Import from the new central types file
import type { AuiStyleName, AuiSize } from "../types";
import { styleMapping, sizeMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

interface AccordionItem {
  id: string;
  title: string;
  content?: string;
}

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  items: {
    type: Array as PropType<AccordionItem[]>,
    default: () => []
  },
  type: {
    type: String as PropType<"single" | "multiple">,
    default: "single"
  },
  defaultValue: {
    type: [String, Array] as PropType<string | string[]>,
    default: null
  },
  trailingIcon: {
    type: Boolean,
    default: true
  },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined
  },
  size: {
    type: String as PropType<AuiSize>,
    default: "md"
  }
});

const modelValue = defineModel<string | string[] | null>({
  default: undefined
});

const emit = defineEmits(["update:modelValue"]);

const selectedStyle = computed(() => styleMapping[props.styleName || currentStyle.value]);
const selectedSize = computed(() => sizeMapping[props.size]);

const internalState = ref<string | string[] | null>(props.defaultValue);
const isControlled = computed(() => modelValue.value !== undefined);

const activeValues = computed({
  get: (): string | string[] | null =>
    isControlled.value ? modelValue.value : internalState.value,
  set: (val: string | string[] | null) => {
    if (isControlled.value) {
      emit("update:modelValue", val);
    }
    else {
      internalState.value = val;
    }
  }
});

const toggleItem = (id: string) => {
  if (props.type === "multiple") {
    const currentValues = Array.isArray(activeValues.value) ?
      [...activeValues.value] :
      [];
    const index = currentValues.indexOf(id);
    if (index === -1) {
      currentValues.push(id);
    }
    else {
      currentValues.splice(index, 1);
    }
    activeValues.value = currentValues;
  }
  else {
    activeValues.value = activeValues.value === id ? null : id;
  }
};

const isItemOpen = (id: string): boolean => {
  if (props.type === "multiple") {
    return Array.isArray(activeValues.value) && activeValues.value.includes(id);
  }
  return activeValues.value === id;
};

// --- Class computation methods ---
const getItemClasses = (isOpen: boolean): string =>
  [
    selectedStyle.value.item.base,
    isOpen ? selectedStyle.value.item.open : selectedStyle.value.item.closed
  ].join(" ");

const getHeaderClasses = (): string =>
  [selectedStyle.value.header, selectedSize.value.header].join(" ");

const getIconClasses = (isOpen: boolean): string =>
  [
    selectedStyle.value.icon,
    selectedSize.value.icon,
    isOpen ? "rotate-180" : ""
  ].join(" ");

const getContentClasses = (): string =>
  [selectedStyle.value.content, selectedSize.value.content].join(" ");
</script>
