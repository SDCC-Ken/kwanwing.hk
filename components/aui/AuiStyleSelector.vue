<template>
  <AuiDropdown placement="bottom-end" trigger-component="button" :trigger-component-props="{
    class: 'rounded-btn px-4 h-11 flex items-center justify-center  transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/20 gap-3 border border-background-200/50 shadow-sm rounded-lg whitespace-nowrap',
    title: 'Select UI Style'
  }">
    <template #trigger>
      <Icon name="ic:round-style" class="w-5 h-5 text-primary-500" />
      <span class="text-sm font-bold text-primary-500">{{ currentStyleLabel }}</span>
    </template>
    <template #content="{ close }">
      <div class="p-2 min-w-[170px] space-y-1 bg-background border border-background-200 rounded-lg shadow-xl">
        <div class="px-3 py-1.5 text-[10px] font-bold text-text/40 uppercase tracking-wider">
          UI Design System
        </div>
        <button v-for="option in styleOptions" :key="option.value" @click="currentStyle = option.value; close()"
          class="w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-500/40"
          :class="[
            currentStyle === option.value
              ? 'bg-primary-500/10 text-primary font-semibold'
              : 'hover:bg-background-200/60 text-text/80 hover:text-text',
          ]">
          <div class="w-2.5 h-2.5 rounded-full ring-2 ring-background" :class="option.color"></div>
          {{ option.label }}
        </button>
      </div>
    </template>
  </AuiDropdown>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { AuiStyleName } from "./types";

import { useStyle } from "#imports";

const { currentStyle } = useStyle();

const styleOptions = [
  { label: "Liquid Glass", value: "liquid-glass" as AuiStyleName, color: "bg-success-500" },
  { label: "Modern Material", value: "material" as AuiStyleName, color: "bg-info-500" },
  { label: "Bootstrap Plus", value: "bootstrap" as AuiStyleName, color: "bg-secondary-500" },
  { label: "Fluent Windows", value: "windows" as AuiStyleName, color: "bg-primary-500" },
];

const currentStyleLabel = computed(() => {
  const style = currentStyle?.value || currentStyle;
  return styleOptions.find((opt) => opt.value === style)?.label || "Material";
});
</script>
