<template>
  <div ref="triggerRef" class="inline-block">
    <slot />

    <Teleport to="body" :disabled="!isMounted">
      <div
        v-if="isHovered && selectedStyle"
        ref="panelRef"
        :style="floatingStyles"
        :class="[themeClass, selectedStyle.panel, 'fixed z-50']"
      >
        <slot name="content">
          {{ content }}
        </slot>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type PropType, onMounted } from "vue";
import { useFloating, offset, flip, shift, autoUpdate } from "@floating-ui/vue";
import { useElementHover } from "@vueuse/core";
import type { AuiStyleName } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  content: { type: String, default: "" },
  placement: { type: String as PropType<any>, default: "top" },
  styleName: { type: String as PropType<AuiStyleName>, default: undefined },
});

// 6. Add isMounted state for SSR-safe teleporting
const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const triggerRef = ref<HTMLElement | null>(null);
const panelRef = ref<HTMLElement | null>(null);

const isHovered = useElementHover(triggerRef, { delayEnter: 100, delayLeave: 100 });
const { floatingStyles } = useFloating(triggerRef, panelRef, {
  placement: computed(() => props.placement as any),
  whileElementsMounted: autoUpdate,
  middleware: [offset(10), flip({ padding: 8 }), shift({ padding: 8 })],
});

</script>
