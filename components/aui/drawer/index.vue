<!-- aui-drawer -->
<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="open && selectedStyle" :class="[themeClass, selectedStyle.overlay]" @click="close" />
    </Transition>
    <Transition name="slide" v-bind="transitionClasses">
      <div v-if="open && selectedStyle"
        :class="[themeClass, selectedStyle.panel, selectedStyle.positions[position]]" role="dialog"
        aria-modal="true" :aria-label="title">
        <!-- Header -->
        <div v-if="title || slots.header" :class="selectedStyle.header">
          <slot name="header">
            <h2 class="text-lg font-semibold">
              {{ title }}
            </h2>
          </slot>
          <button type="button" :class="selectedStyle.closeButton" aria-label="Close" @click="close">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Body -->
        <div :class="selectedStyle.body">
          <slot />
        </div>

        <!-- Footer -->
        <div v-if="slots.footer" :class="selectedStyle.footer">
          <slot name="footer" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch, type PropType, useSlots } from "vue";
import { onKeyStroke } from "@vueuse/core";
import type { AuiStyleName } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const open = defineModel({
  type: Boolean,
  default: false,
})

const props = defineProps({
  title: {
    type: String,
    default: ""
  },
  position: {
    type: String as PropType<"left" | "right" | "top" | "bottom">,
    default: "right"
  },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined
  }
});

const slots = useSlots();

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const close = () => {
  open.value = false;
};

onKeyStroke("Escape", (e) => {
  if (open.value) {
    e.preventDefault();
    close();
  }
});

watch(
  open,
  (isOpen) => {
    if (typeof document !== "undefined") {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      }
      else {
        document.body.style.overflow = "";
      }
    }
  }
);

const transitionClasses = computed(() => {
  switch (props.position) {
    case "left":
      return {
        enterFromClass: "-translate-x-full",
        leaveToClass: "-translate-x-full"
      };
    case "top":
      return {
        enterFromClass: "-translate-y-full",
        leaveToClass: "-translate-y-full"
      };
    case "bottom":
      return {
        enterFromClass: "translate-y-full",
        leaveToClass: "translate-y-full"
      };
    case "right":
    default:
      return {
        enterFromClass: "translate-x-full",
        leaveToClass: "translate-x-full"
      };
  }
});
</script>
