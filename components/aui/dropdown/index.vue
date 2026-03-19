<template>
  <Component :is="triggerComponent" ref="triggerRef" v-bind="triggerComponentProps" class="inline-block cursor-pointer"
    @click.stop="toggle">
    <slot name="trigger" />
  </Component>

  <Teleport to="body" :disabled="!isMounted">
    <div v-if="isOpen && selectedStyle" ref="panelRef" :style="floatingStyles" :class="[themeClass,
    selectedStyle.panel,
      'transform fixed z-50',
      originClass,
      // Add transition utilities for smooth animation
      'transition-opacity duration-100 ease-out',
    // Conditionally apply start/end animation states
    isPositioned ? 'opacity-100 scale-100' : 'opacity-0 scale-95']">
      <slot name="content" :close="close" />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, type PropType, onMounted } from "vue";
import { useFloating, offset, flip, shift, autoUpdate, type Placement } from "@floating-ui/vue";
import { onClickOutside } from "@vueuse/core";
import type { AuiStyleName } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined
  },
  placement: {
    type: String as PropType<Placement>,
    default: "bottom-start"
  },
  triggerComponent: {
    type: String,
    default: "div"
  },
  triggerComponentProps: {
    type: Object,
    default: () => ({})
  }
});

const isOpen = ref(false);
const triggerRef = ref<HTMLElement | null>(null);
const panelRef = ref<HTMLElement | null>(null);

const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const toggle = () => (isOpen.value = !isOpen.value);
const close = () => (isOpen.value = false);

onClickOutside(panelRef, close, { ignore: [triggerRef] });

// 1. Destructure `isPositioned` along with the others
const { floatingStyles, placement: finalPlacement, isPositioned } = useFloating(triggerRef, panelRef, {
  placement: computed(() => props.placement as Placement),
  whileElementsMounted: autoUpdate,
  middleware: [offset(8), flip(), shift({ padding: 8 })]
});

// 2. Create a computed property for the transform-origin class
const originClass = computed(() => {
  if (finalPlacement.value.startsWith("top")) return "origin-bottom";
  if (finalPlacement.value.startsWith("bottom")) return "origin-top";
  if (finalPlacement.value.startsWith("left")) return "origin-right";
  if (finalPlacement.value.startsWith("right")) return "origin-left";
  return "origin-top"; // Default fallback
});
</script>
