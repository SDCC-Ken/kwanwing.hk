<template>
  <div ref="triggerRef" @contextmenu.prevent="openMenu">
    <slot />
    <Teleport to="body">
      <div v-if="isOpen && selectedStyle" ref="menuRef" :style="menuStyle"
        :class="[themeClass, selectedStyle.panel]">
        <template v-for="(item, index) in items" :key="index">
          <div v-if="item.separator" :class="selectedStyle.separator" />
          <component :is="item.to && !item.disabled ? 'a' : 'div'" v-else :href="item.to" :class="[
            selectedStyle.item,
            item.disabled && selectedStyle.itemDisabled,
          ]" @click="handleItemClick(item)">
            <component :is="item.icon" v-if="item.icon" :class="selectedStyle.itemIcon" />
            <span>{{ item.label }}</span>
          </component>
        </template>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type PropType, nextTick } from "vue";
import { onClickOutside } from "@vueuse/core";
import type { AuiStyleName } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

interface MenuItem {
  label: string;
  icon?: any;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  separator?: boolean;
}

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  items: {
    type: Array as PropType<MenuItem[]>,
    default: () => []
  },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined
  }
});

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const isOpen = ref(false);
const menuRef = ref<HTMLElement | null>(null);
const triggerRef = ref<HTMLElement | null>(null);
const menuStyle = ref({ top: "0px", left: "0px" });

onClickOutside(menuRef, () => (isOpen.value = false));

const openMenu = async (event: MouseEvent) => {
  isOpen.value = true;
  await nextTick();

  let menuX = event.clientX;
  let menuY = event.clientY;

  if (menuRef.value) {
    const menuWidth = menuRef.value.offsetWidth;
    const menuHeight = menuRef.value.offsetHeight;

    if (menuX + menuWidth > window.innerWidth)
      menuX = window.innerWidth - menuWidth - 5;
    if (menuY + menuHeight > window.innerHeight)
      menuY = window.innerHeight - menuHeight - 5;
  }

  menuStyle.value = { top: `${menuY}px`, left: `${menuX}px` };
};

const handleItemClick = (item: MenuItem) => {
  if (item.disabled) return;
  if (item.onClick) item.onClick();
  isOpen.value = false;
};
</script>
