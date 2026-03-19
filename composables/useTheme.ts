import { useLocalStorage, usePreferredDark } from "@vueuse/core";
import { watch, computed, onMounted } from "vue";

export type Theme = "light" | "dark" | "system";

export function useTheme() {
  const prefix = "aui";
  const preferredDark = usePreferredDark();
  
  // Use a default for SSR to avoid mismatch
  const currentTheme = useLocalStorage<Theme>(
    `${prefix}-theme`,
    "system", // Default to system for better compatibility
    {
      listenToStorageChanges: true,
      writeDefaults: true,
    }
  );

  const themeClass = computed(() => {
    // If system, we still want to resolve the actual class for styling
    const themeValue = currentTheme.value === "system" 
      ? (preferredDark.value ? "dark" : "light") 
      : currentTheme.value;
    return `${prefix}-theme-${themeValue}`;
  });

  const updateBodyClass = (newTheme: string) => {
    if (typeof window === "undefined" || !document.body) return;
    
    const themeValue = newTheme === "system" 
      ? (preferredDark.value ? "dark" : "light") 
      : newTheme;

    const existingThemeClass = [...document.body.classList].find(
      (cls: string) => cls.startsWith(`${prefix}-theme-`)
    );
    if (existingThemeClass) {
      document.body.classList.remove(existingThemeClass);
    }
    document.body.classList.add(`${prefix}-theme-${themeValue}`);
  };

  if (typeof window !== "undefined") {
    watch([currentTheme, preferredDark], () => {
      updateBodyClass(currentTheme.value);
    }, { immediate: true });

    onMounted(() => {
      updateBodyClass(currentTheme.value);
    });
  }

  return {
    theme: currentTheme,
    themeClass,
    setTheme(newTheme: Theme) {
      currentTheme.value = newTheme;
    }
  };
}
