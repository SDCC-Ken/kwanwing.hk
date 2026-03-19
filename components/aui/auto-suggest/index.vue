<!-- aui-auto-suggest -->
<template>
  <div :class="themeClass">
    <label v-if="label" :for="inputId" :class="selectedStyle.label">
      {{ label }}
    </label>
    <div ref="autosuggestContainer" class="relative">
      <div :class="rootClasses" @click="focusInput">
        <div v-for="item in internalSelectedItems" :key="item[props.keyKey]" :class="chipClasses">
          <span>{{ item[props.valueKey] }}</span>
          <button v-if="props.multiple" type="button" :class="selectedStyle.chipButton"
            :aria-label="getRemoveButtonAriaLabel(item)" @click.stop="removeItem(item)">
            &times;
          </button>
        </div>

        <input ref="inputRef" v-model="searchQuery" type="text" :placeholder="isFocused ? props.placeholder : ''"
          :class="inputClasses" @keydown="keyFunction" @focus="isFocus">
      </div>
      <ul v-if="isDropdownVisible" :class="selectedStyle.dropdown">
        <li v-if="isLoading" :class="infoListItemClasses">
          Loading...
        </li>
        <template v-else>
          <li v-if="showNoResults" :class="infoListItemClasses">
            {{ props.noResultsText }}
          </li>
          <li v-for="(suggestion, index) in filteredSuggestions" :key="suggestion[props.keyKey]"
            :class="getSuggestionClasses(index)" @click="selectItem(suggestion)">
            <span>{{ suggestion[props.valueKey] }}</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, type PropType, onMounted } from "vue";
import { onClickOutside, useDebounceFn } from "@vueuse/core";
import type { AuiStyleName, AuiSize, AuiVariant } from "../types";
import { styleMapping, sizeMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

interface Item {
  [key: string]: unknown;
}

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  label: {
    type: String,
    default: ""
  },
  keyKey: { type: String, default: "id" },
  valueKey: { type: String, default: "name" },
  callSuggestion: {
    type: Function as PropType<(searchQuery: string) => Promise<Item[]>>,
    required: true
  },
  multiple: { type: Boolean, default: true },
  placeholder: { type: String, default: "Search..." },
  noResultsText: { type: String, default: "No results found." },
  styleName: { type: String as PropType<AuiStyleName>, default: undefined },
  size: { type: String as PropType<AuiSize>, default: "md" },
  variant: { type: String as PropType<AuiVariant>, default: "primary" },
  inputId: {
    type: String,
    default: ""
  },
  init: {
    type: Boolean,
    default: true
  }
});

const model = defineModel<Item[]>({ default: () => [] });
const internalSelectedItems = ref<Item[]>([]);

onMounted(() => {
  internalSelectedItems.value = [...model.value];

});

watch(model, (newValue) => {
  if (
    JSON.stringify(newValue) !== JSON.stringify(internalSelectedItems.value)
  ) {
    internalSelectedItems.value = [...newValue];
  }
});

const selectedStyle = computed(
  () => styleMapping[props.styleName || currentStyle.value]
);
const selectedSize = computed(() => sizeMapping[props.size]);

const searchQuery = ref("");
const suggestions = ref<Item[]>([]);
const isLoading = ref(false);
const isFocused = ref(false);
const highlightedIndex = ref(-1);
const autosuggestContainer = ref<HTMLElement | null>(null);
const inputRef = ref<HTMLInputElement | null>(null);

const focusInput = () => {
  inputRef.value?.focus();
  if (props.init) {
    fetchSuggestions();
  }
};
const isFocus = () => {
  isFocused.value = true;
};

onClickOutside(autosuggestContainer, () => (isFocused.value = false));

const selectedKeysSet = computed(
  () => new Set(internalSelectedItems.value.map(item => item[props.keyKey]))
);
const filteredSuggestions = computed(() =>
  suggestions.value.filter(
    item => !selectedKeysSet.value.has(item[props.keyKey])
  )
);
const isDropdownVisible = computed(
  () =>
    isFocused.value &&
    (isLoading.value ||
      searchQuery.value ||
      filteredSuggestions.value.length > 0)
);

// --- Computed Values for Template ---
const rootClasses = computed(() => {

  return [selectedStyle.value.root, selectedSize.value.root, isFocused.value ? "flex-wrap" : "flex-nowrap overflow-hidden"];
});
const chipClasses = computed(() =>
  [
    selectedStyle.value.chip,
    selectedSize.value.chip,
    selectedStyle.value.variants[props.variant]
  ].join(" ")
);
const inputClasses = computed(() =>
  [selectedStyle.value.input, selectedSize.value.input].join(" ")
);

const infoListItemClasses = computed(() =>
  [selectedStyle.value.noResults, selectedSize.value.item].join(" ")
);

const showNoResults = computed(
  () => filteredSuggestions.value.length === 0 && searchQuery.value
);

const getRemoveButtonAriaLabel = (item: Item): string => {
  return `Remove ${item[props.valueKey]}`;
};

const getSuggestionClasses = (index: number): string => {
  const classes = [selectedStyle.value.item, selectedSize.value.item];

  if (index === highlightedIndex.value) {
    classes.push(selectedStyle.value.itemHighlighted);
    if (
      selectedStyle.value.variants[props.variant] &&
      (selectedStyle.value.name === "bootstrap" ||
        selectedStyle.value.name === "windows")
    ) {
      classes.push(selectedStyle.value.variants[props.variant]);
    }
  }

  return classes.join(" ");
};

const fetchSuggestions = useDebounceFn(async () => {
  if (!props.init && !searchQuery.value) {
    suggestions.value = [];
    return;
  }
  isLoading.value = true;
  try {
    suggestions.value = await props.callSuggestion(searchQuery.value);
  }
  catch (error) {
    console.error("Failed to fetch suggestions:", error);
    suggestions.value = [];
  }
  finally {
    isLoading.value = false;
    highlightedIndex.value = -1;
  }
}, 300);

watch(searchQuery, fetchSuggestions);

const selectItem = (item: Item) => {
  if (props.multiple) {
    if (!selectedKeysSet.value.has(item[props.keyKey])) {
      internalSelectedItems.value.push(item);
    }
  }
  else {
    internalSelectedItems.value = [item];
    isFocused.value = false;
  }
  model.value = [...internalSelectedItems.value];
  searchQuery.value = "";
  suggestions.value = [];
  inputRef.value?.focus();
};

const removeItem = (itemToRemove: Item) => {
  internalSelectedItems.value = internalSelectedItems.value.filter(
    item => item[props.keyKey] !== itemToRemove[props.keyKey]
  );
  model.value = [...internalSelectedItems.value];
};

const handleBackspace = () => {
  if (
    props.multiple &&
    searchQuery.value === "" &&
    internalSelectedItems.value.length > 0
  ) {
    removeItem(
      internalSelectedItems.value[internalSelectedItems.value.length - 1]
    );
  }
};

const navigateSuggestionsUp = () => {
  navigateSuggestions("up");
};
const navigateSuggestionsDown = () => {
  navigateSuggestions("down");
};
const navigateSuggestions = (direction: "up" | "down") => {
  if (filteredSuggestions.value.length === 0) return;
  const count = filteredSuggestions.value.length;
  if (direction === "down") {
    highlightedIndex.value = (highlightedIndex.value + 1) % count;
  }
  else if (direction === "up") {
    highlightedIndex.value = (highlightedIndex.value - 1 + count) % count;
  }
};

const selectHighlighted = () => {
  const selected = filteredSuggestions.value[highlightedIndex.value];
  if (selected) selectItem(selected);
};
const keyFunction = (event: KeyboardEvent) => {
  if (event.key === "ArrowDown") {
    navigateSuggestionsDown();
  }
  else if (event.key === "ArrowUp") {
    navigateSuggestionsUp();
  }
  else if (event.key === "Enter") {
    selectHighlighted();
  }
  else if (event.key === "delete" || event.key === "Backspace") {
    handleBackspace();
  }
};
</script>
