<template>
  <div ref="triggerRef" class="inline-block" @click.stop="toggle">
    <slot name="trigger" />
  </div>

  <Teleport to="body" :disabled="!isMounted">

    <div v-if="isOpen && selectedStyle" ref="panelRef" :style="floatingStyles" :class="[themeClass,
    selectedStyle.panel,
      'transform fixed z-50',
      originClass,
      // 3. Animation is now handled by declarative CSS classes
      'transition-opacity duration-100 ease-out',
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
  open: {
    type: Boolean,
    default: false
  },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined
  },
  placement: {
    type: String as PropType<any>,
    default: "bottom-start"
  }
});

const emit = defineEmits(["update:open"]);

// 6. Add isMounted state for SSR-safe teleporting
const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const triggerRef = ref<HTMLElement | null>(null);
const panelRef = ref<HTMLElement | null>(null);

const isOpen = computed({
  get: () => props.open,
  set: value => emit("update:open", value)
});

const close = () => {
  isOpen.value = false;
};

const toggle = () => {
  isOpen.value = !isOpen.value;
};

onClickOutside(panelRef, close, { ignore: [triggerRef] });

// 7. Destructure isPositioned and the final placement from useFloating
const { floatingStyles, placement: finalPlacement, isPositioned } = useFloating(triggerRef, panelRef, {
  placement: computed(() => props.placement as Placement),
  whileElementsMounted: autoUpdate,
  middleware: [offset(8), flip(), shift({ padding: 8 })]
});

// 8. Add originClass computed property for correct transform-origin
const originClass = computed(() => {
  if (finalPlacement.value.startsWith("top")) return "origin-bottom";
  if (finalPlacement.value.startsWith("bottom")) return "origin-top";
  if (finalPlacement.value.startsWith("left")) return "origin-right";
  if (finalPlacement.value.startsWith("right")) return "origin-left";
  return "origin-top"; // Default fallback
});
</script>
