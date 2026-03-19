<!-- aui-dialog -->
<template>
  <Teleport to="body" :disabled="!isMounted">
    <dialog
      ref="dialogRef"
      :class="[
        themeClass,
        sizeClass,
        selectedStyle?.panel,
        selectedStyle?.backdrop,
      ]"
      @close="handleDialogClose"
      @click="handleBackdropClick"
    >
      <!-- The structure of the dialog remains the same. -->
      <!-- The classes are now dynamically populated with CSS variables from the theme file. -->
      <div class="flex flex-col h-full w-full">
        <div v-if="title || slots.header" :class="selectedStyle?.header">
          <slot name="header">
            <h2 class="text-xl font-semibold">
              {{ title }}
            </h2>
          </slot>
          <slot name="close-button" :close="closeDialog">
            <button
              ref="closeButtonRef"
              type="button"
              :class="selectedStyle?.closeButton"
              aria-label="Close dialog"
              @click="closeDialog"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </slot>
        </div>

        <div :class="selectedStyle?.body">
          <slot :close-dialog="closeDialog" />
        </div>

        <div v-if="slots.footer" :class="selectedStyle?.footer">
          <slot name="footer" :close-dialog="closeDialog" />
        </div>
      </div>
    </dialog>
  </Teleport>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  watch,
  type PropType,
  useSlots,
  nextTick,
  onMounted,
} from "vue";
import { onKeyStroke, onClickOutside } from "@vueuse/core";
import type { AuiStyleName, AuiSize } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

// ✅ THE FIX: Disable attribute fallthrough
defineOptions({
  inheritAttrs: false,
});

const isMounted = ref(false);

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const open = defineModel({
  type: Boolean,
});

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  persistent: {
    type: Boolean,
    default: false,
  },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined,
  },
  // ✅ NEW: Add a size prop
  size: {
    type: String as PropType<AuiSize>,
    default: "lg",
  },
});
const slots = useSlots();

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const dialogRef = ref<HTMLDialogElement | null>(null);
const closeButtonRef = ref<HTMLButtonElement | null>(null);

const sizeClass = computed(() => {
  return {
    xs: "max-w-xs fhd:max-w-lg 2k:max-w-3xl 4k:max-w-6xl 8k:max-w-9xl",
    sm: "max-w-sm fhd:max-w-xl 2k:max-w-4xl 4k:max-w-7xl 8k:max-w-10xl",
    md: "max-w-md fhd:max-w-2xl 2k:max-w-5xl 4k:max-w-8xl 8k:max-w-11xl",
    lg: "max-w-lg fhd:max-w-3xl 2k:max-w-6xl 4k:max-w-9xl 8k:max-w-12xl",
    xl: "max-w-xl fhd:max-w-4xl 2k:max-w-7xl 4k:max-w-10xl 8k:max-w-13xl",
  }[props.size];
});

watch(
  () => open.value,
  (isOpen) => {
    if (dialogRef.value) {
      if (isOpen && !dialogRef.value.open) {
        dialogRef.value.showModal();
      } else if (!isOpen && dialogRef.value.open) {
        dialogRef.value.close();
      }
    }
  },
  {
    flush: "post", // <-- Add this option
  },
);

onClickOutside(dialogRef, (event) => {
  if (props.persistent) return;
  const rect = dialogRef.value?.getBoundingClientRect();
  if (
    rect &&
    (event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom)
  ) {
    closeDialog();
  }
});

const handleBackdropClick = (event: MouseEvent) => {
  if (props.persistent || event.target !== dialogRef.value) {
    return;
  }
  closeDialog();
};

onKeyStroke("Escape", (event) => {
  if (open.value && props.persistent) {
    event.preventDefault();
  }
});

const closeDialog = () => {
  open.value = false;
};

const handleDialogClose = () => {
  closeDialog();
};
onMounted(() => {
  isMounted.value = true;
  if (dialogRef.value) {
    if (open.value && !dialogRef.value.open) {
      dialogRef.value.showModal();
    } else if (!open.value && dialogRef.value.open) {
      dialogRef.value.close();
    }
  }
});
</script>
