<template>
  <div v-if="isVisible" :class="[themeClass, alertClasses]" role="alert">
    <div class="flex items-start gap-3">
      <div class="flex-shrink-0 pt-0.5">
        <slot name="icon">
          <!-- Default icon logic based on variant -->
          <Icon v-if="variant === 'success'" name="heroicons:check-circle-20-solid" class="h-5 w-5" />
          <Icon v-else-if="variant === 'error' || variant === 'danger'" name="heroicons:x-circle-20-solid" class="h-5 w-5" />
          <Icon v-else-if="variant === 'warning'" name="heroicons:exclamation-triangle-20-solid" class="h-5 w-5" />
          <Icon v-else name="heroicons:information-circle-20-solid" class="h-5 w-5" />
        </slot>
      </div>

      <div class="flex-grow">
        <strong v-if="title || slots.title" :class="titleClasses">
          <slot name="title">{{ title }}</slot>
        </strong>
        <div :class="bodyClasses">
          <slot />
        </div>
      </div>

      <div v-if="dismissible" class="shrink-0">
        <button type="button" :class="closeButtonClasses" aria-label="Dismiss" @click="dismiss">
          <Icon name="heroicons:x-mark-20-solid" class="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type PropType, useSlots } from "vue";
import type { AuiStyleName, AuiSize, AuiVariant } from "../types";
import { styleMapping, sizeMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();
const slots = useSlots();

const props = defineProps({
  title: { type: String, default: "" },
  variant: {
    type: String as PropType<AuiVariant>,
    default: "info",
  },
  styleName: { type: String as PropType<AuiStyleName>, default: undefined },
  size: { type: String as PropType<AuiSize>, default: "md" },
  dismissible: { type: Boolean, default: false },
});

// Define Emits
const emit = defineEmits(['close']);

const isVisible = ref(true);

const selectedStyle = computed(
  () => styleMapping[props.styleName || currentStyle.value]
);
const selectedSize = computed(() => sizeMapping[props.size]);

// --- Computed Classes ---
const alertClasses = computed(() =>
  [
    selectedStyle.value.base,
    selectedStyle.value.variants[props.variant],
    selectedSize.value.padding,
  ].join(" ")
);

const titleClasses = computed(() =>
  [selectedStyle.value.title, selectedSize.value.title].join(" ")
);

const bodyClasses = computed(() =>
  [selectedStyle.value.body, selectedSize.value.body].join(" ")
);

const closeButtonClasses = computed(() => {
  const baseClasses = selectedStyle.value.closeButton;
  if (baseClasses && baseClasses.includes("absolute")) {
    return [baseClasses, selectedSize.value.closeButton].join(" ");
  }
  return baseClasses;
});

const dismiss = () => {
  isVisible.value = false;
  emit('close'); // Emit event to parent
};
</script>