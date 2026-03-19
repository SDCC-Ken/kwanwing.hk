<template>
  <AuiDropdown placement="bottom-end" trigger-component="button" :trigger-component-props="{
    class: 'rounded-xl px-4 h-11 flex items-center justify-center bg-background-100 hover:bg-background-200 active:bg-background-300 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/20 gap-3 border border-background-200/50 shadow-sm whitespace-nowrap',
    title: 'Select UI Style'
  }">
    <template #trigger>
      <Icon name="ic:round-style" class="w-5 h-5 text-primary-500" />
      <span class="text-sm font-bold text-text/80">{{ currentStyleLabel }}</span>
    </template>
    <template #content="{ close }">
      <div class="p-2 min-w-[160px] space-y-1">
        <div class="px-3 py-1 text-[10px] font-bold text-text/40 uppercase tracking-wider">
          UI Design System
        </div>
        <button
          v-for="option in styleOptions"
          :key="option.value"
          @click="currentStyle = option.value; close()"
          class="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-500/40"
          :class="[
            currentStyle === option.value
              ? 'bg-primary-600/10 text-primary-600 dark:text-primary-400 font-medium'
              : 'hover:bg-background-400/20 text-text/70 hover:text-text',
          ]"
        >
          <div 
            class="w-2 h-2 rounded-full" 
            :class="option.color"
          ></div>
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
  { label: "Liquid Glass", value: "liquid-glass" as AuiStyleName, color: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" },
  { label: "Modern Material", value: "material" as AuiStyleName, color: "bg-blue-600" },
  { label: "Bootstrap Plus", value: "bootstrap" as AuiStyleName, color: "bg-purple-600" },
  { label: "Fluent Windows", value: "windows" as AuiStyleName, color: "bg-sky-600" },
];

const currentStyleLabel = computed(() => {
  const style = currentStyle?.value || currentStyle;
  return styleOptions.find((opt) => opt.value === style)?.label || "Material";
});
</script>
