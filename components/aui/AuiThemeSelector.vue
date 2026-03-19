<template>
  <AuiDropdown placement="bottom-end" trigger-component="button" :trigger-component-props="{
    class: 'rounded-xl w-11 h-11 p-0 flex items-center justify-center bg-background-100 hover:bg-background-200 active:bg-background-300 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/20 border border-background-200/50 shadow-sm',
    title: t('header.toggle_theme')
  }">
    <template #trigger>
      <Icon :name="currentIcon" class="w-5 h-5 text-primary-500 group-hover:text-primary-600" />
    </template>
    <template #content="{ close }">
      <div class="p-2 min-w-[140px] space-y-1">
        <button
          v-for="option in themeOptions"
          :key="option.value"
          @click="handleThemeChange(option.value); close()"
          class="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-500/40"
          :class="[
            theme === option.value
              ? 'bg-primary-600/10 text-primary-600 dark:text-primary-400 font-medium'
              : 'hover:bg-background-400/20 text-text/70 hover:text-text',
          ]"
        >
          <Icon :name="option.icon" class="w-4 h-4" />
          {{ option.label }}
        </button>
      </div>
    </template>
  </AuiDropdown>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import type { Theme } from "../../composables/useTheme";

import { useTheme } from "#imports";
import { useI18n } from "#imports";

const { theme, setTheme } = useTheme();
const { t } = useI18n();

onMounted(() => {
  console.log("AuiThemeSelector mounted on client");
});

const themeOptions = [
  {
    label: t("theme.light"),
    value: "light" as Theme,
    icon: "ic:baseline-light-mode",
  },
  {
    label: t("theme.dark"),
    value: "dark" as Theme,
    icon: "ic:outline-nightlight-round",
  },
  {
    label: t("theme.system"),
    value: "system" as Theme,
    icon: "ic:round-monitor",
  },
];

const currentIcon = computed(() => {
  const currentTheme = theme?.value || theme;
  return (
    themeOptions.find((opt) => opt.value === currentTheme)?.icon ||
    "ic:round-monitor"
  );
});

const handleThemeChange = (newTheme: Theme) => {
  setTheme(newTheme);
};
</script>
