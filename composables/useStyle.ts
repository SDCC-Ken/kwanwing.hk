import { watch, onMounted } from "vue";
import { type AuiStyleName } from "../components/aui/types";
import { useLocalStorage } from "@vueuse/core";

export function useStyle() {
  const prefix = "aui";
  const defaultValue: AuiStyleName = "material";
  
  const currentStyle = useLocalStorage<AuiStyleName>(
    `${prefix}-style`,
    defaultValue,
    {
      listenToStorageChanges: true,
      writeDefaults: true,
    }
  );

  const updateBodyClass = (newStyle: string) => {
    if (typeof window === "undefined" || !document.body) return;
    
    // Remove all existing style classes
    const classesToRemove = [...document.body.classList].filter(
      (cls: string) => cls.startsWith(`${prefix}-style-`)
    );
    if (classesToRemove.length > 0) {
      document.body.classList.remove(...classesToRemove);
    }
    
    // Add the specific style class
    document.body.classList.add(`${prefix}-style-${newStyle}`);
  };

  // Apply style to body only on client side
  if (typeof window !== "undefined") {
    watch(currentStyle, (newStyle) => {
      updateBodyClass(newStyle);
    }, { immediate: true });

    onMounted(() => {
      updateBodyClass(currentStyle.value);
    });
  }

  return {
    currentStyle
  };
}
