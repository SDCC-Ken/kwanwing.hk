<template>
  <Teleport to="body">
    <div v-if="selectedStyle" :class="[themeClass, selectedStyle.root, positionClasses]">
      <Transition enter-active-class="transition ease-out duration-300"
        enter-from-class="transform opacity-0 scale-90 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-200"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-90 translate-y-4 sm:translate-y-0 sm:scale-95">
        <div v-if="open" :class="toastClasses">
          <div class="flex-grow overflow-hidden">
            <div :class="selectedStyle.title">
              {{ title }}
            </div>
            <div v-if="description" :class="selectedStyle.description">
              {{ description }}
            </div>
          </div>
          <button type="button" :class="selectedStyle.closeButton" aria-label="Close" @click="close">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch, type PropType } from "vue";
import { useTimeoutFn } from "@vueuse/core";
import type { AuiStyleName, AuiSize, AuiVariant } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  variant: {
    type: String as PropType<AuiVariant>,
    default: "info"
  },
  size: {
    type: String as PropType<AuiSize>,
    default: "md"
  },
  duration: { type: Number, default: 5000 },
  position: {
    type: String as PropType<
      | "top-right" |
      "top-left" |
      "bottom-right" |
      "bottom-left" |
      "top-center" |
      "bottom-center"
    >,
    default: "top-right"
  },
  styleName: { type: String as PropType<AuiStyleName>, default: undefined }
});

const open = defineModel<boolean>("open", { default: false });

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const close = () => {
  open.value = false;
};

const { start, stop } = useTimeoutFn(close, props.duration, {
  immediate: false
});
watch(
  () => open.value,
  (isOpen) => {
    if (isOpen && props.duration !== Infinity) {
      start();
    }
    else {
      stop();
    }
  }
);

const positionClasses = computed(() => {
  const positions = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "top-center": "top-0 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2"
  };
  return positions[props.position];
});

const toastClasses = computed(() => {
  if (!selectedStyle.value) return "";
  return [
    selectedStyle.value.toast,
    selectedStyle.value.variants[props.variant],
    selectedStyle.value.sizes[props.size]
  ].join(" ");
});
</script>
