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

  const updateBodyClass = (newTheme: Theme) => {
    if (typeof window === "undefined" || !document.documentElement) return;
    
    // Remove all existing theme classes
    const classesToRemove = [...document.documentElement.classList].filter(
      (cls: string) => cls.startsWith(`${prefix}-theme-`)
    );
    if (classesToRemove.length > 0) {
      document.documentElement.classList.remove(...classesToRemove);
    }
    
    // Add the specific theme class (light, dark, or system)
    document.documentElement.classList.add(`${prefix}-theme-${newTheme}`);
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
