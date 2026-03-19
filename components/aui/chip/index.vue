<template>
  <div v-if="isVisible && selectedStyle" :class="[themeClass, chipClasses]">
    <slot />
    <button v-if="dismissible" type="button" :class="selectedStyle.closeButton" aria-label="Dismiss"
      @click="handleDismiss">
      <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type PropType } from "vue";
import type { AuiStyleName, AuiSize, AuiVariant } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  variant: {
    type: String as PropType<AuiVariant>,
    default: "neutral",
  },
  size: {
    type: String as PropType<AuiSize>,
    default: "md",
  },
  dismissible: {
    type: Boolean,
    default: false
  },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined
  }
});

const emit = defineEmits(["dismiss"]);

const isVisible = ref(true);

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const chipClasses = computed(() => {
  if (!selectedStyle.value) return "";
  return [
    selectedStyle.value.base,
    selectedStyle.value.sizes[props.size],
    selectedStyle.value.variants[props.variant]
  ].join(" ");
});

const handleDismiss = () => {
  isVisible.value = false;
  emit("dismiss");
};
</script>
