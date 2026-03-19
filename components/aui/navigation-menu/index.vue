<!-- aui-navigation-menu -->
<template>
  <nav v-if="selectedStyle" v-bind="$attrs"
    :class="[themeClass, selectedStyle.root, 'flex', orientation === 'horizontal' ? 'flex-row' : 'flex-col']">
    <slot name="before-menu" />
    <ul :class="listClasses">
      <li v-for="item in items" :key="item.key" :class="selectedStyle.item">
        <!-- Horizontal with Submenu: Use Dropdown -->

        <AuiDropdown v-if="item.children && orientation === 'horizontal'" :style-name="styleName"
          trigger-component="button" :trigger-component-props="{ class: getLinkClasses(item) }">
          <template #trigger>
            <div class="flex ">
              <slot :name="`trigger-${item.key}`">
                <span>{{ item.label }}</span>
              </slot>
              <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </div>
          </template>
          <template #content="{ close }">
            <div class="flex flex-col p-0.5">
              <slot :name="`submenu-${item.key}`" :children="item.children">
                <button v-for="child in item.children" :key="child.key"
                  class="p-2 font-medium whitespace-nowrap border-r-2 hover:bg-[var(--color-background-200)]"
                  @click.stop="(e) => onClick(e, child.to, close)">
                  <slot :name="`trigger-${child.key}`">
                    {{ child.label }}
                  </slot>
                </button>
              </slot>
            </div>
          </template>
        </AuiDropdown>

        <!-- Vertical with Submenu: Use Accordion -->
        <AuiAccordion v-else-if="item.children && orientation === 'vertical'" v-model="expandedVerticalItem"
          type="single"
          :items="item.children.map(({ label, key }) => ({ id: key, title: label || key, content: label }))">
          <template #title="{ item: accorditionItem }">
            <div class="w-full justify-between">
              <slot :name="`trigger-${accorditionItem.title}`">
                {{ accorditionItem.title }}
              </slot>
            </div>
          </template>
          <template #content="{ item: accorditionItem }">
            <button :class="[
              'w-full',
              selectedStyle.link,
              isLinkActive(item.children.find(child => child.key === accorditionItem.id)!) ? selectedStyle.linkActive : '',
            ]" @click.stop="(e) => onClick(e, item.children!.find(child => child.key === accorditionItem.id)!.to)">
              <slot :name="`trigger-${item.children.find(child => child.key === accorditionItem.id)!.key}`">
                {{item.children.find(child => child.key === accorditionItem.id)!.label}}
              </slot>
            </button>
          </template>
        </AuiAccordion>

        <!-- No Submenu: Simple Link -->
        <h2 v-else>
          <button
            :class="[getLinkClasses(item), 'flex w-full items-center justify-between text-left font-medium text-[var(--color-text-100)] focus:outline-none py-[var(--aui-spacing-3)] px-[var(--aui-spacing-4)] text-base']"
            @click.stop="(e) => onClick(e, item.to)">
            <slot :name="`trigger-${item.key}`">
              {{ item.label }}
            </slot>
          </button>
        </h2>
      </li>
    </ul>
    <slot name="after-menu" />
  </nav>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { ref, computed, type PropType } from "vue";
import type { AuiStyleName } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

// Assuming AuiDropdown is globally available or auto-imported
import AuiDropdown from "../dropdown/index.vue";

interface NavItem {
  key: string;
  label?: string;
  to?: string | ((e: MouseEvent) => void);
  children?: NavItem[];
}

const { currentStyle } = useStyle();
const { themeClass } = useTheme();
const route = useRoute();

const props = defineProps({
  items: {
    type: Array as PropType<NavItem[]>,
    default: () => []
  },
  orientation: {
    type: String as PropType<"horizontal" | "vertical">,
    default: "horizontal"
  },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined
  }
});

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);
const expandedVerticalItem = ref<string | null>(null);

const listClasses = computed(() => {
  if (!selectedStyle.value) return "";
  return selectedStyle.value.list[props.orientation];
});

const isLinkActive = (item: NavItem): boolean => {
  if (!item.to || typeof item.to === "function") return false;
  const currentPath = route.path;
  if (currentPath === item.to) return true;
  if (item.children) {
    return item.children.some(child => isLinkActive(child));
  }
  return false;
};

const getLinkClasses = (item: NavItem) => {
  if (!selectedStyle.value) return "";
  return [
    props.orientation === "horizontal" ? "h-full" : "w-full",
    selectedStyle.value.link,
    isLinkActive(item) ? selectedStyle.value.linkActive : ""
  ].join(" ");
};

function onClick(e: MouseEvent, to: string | ((e: MouseEvent) => void) | undefined, close?: () => void) {
  if (close) {
    close();
  }
  if (to) {
    if (typeof to === "function") {
      to(e);
    }
    else {
      navigateTo(to);
    }
  }
}
</script>
