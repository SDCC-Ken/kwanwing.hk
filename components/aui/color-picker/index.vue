<!-- packages/aui-nuxt-module/src/runtime/components/color-picker/index.vue -->
<template>
  <div :class="[themeClass, selectedStyle.root]">
    <button type="button" :style="{ backgroundColor: modelValue }" :class="selectedStyle.trigger"
      @click="togglePicker" />
    <div v-if="isOpen" ref="pickerContainerRef" :class="selectedStyle.pickerContainer"
      data-testid="color-picker-container">
      <div class="p-2">
        <input :value="modelValue" type="color" class="w-full h-10" @input="onInput">
        <input :value="modelValue" type="text" class="mt-2 w-full p-1 border rounded text-black" @input="onInput">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type PropType } from "vue";
import { onClickOutside } from "@vueuse/core";
import type { AuiStyleName } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  modelValue: {
    type: String,
    default: "#000000"
  },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined
  }
});

const emit = defineEmits(["update:modelValue"]);

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const isOpen = ref(false);
const pickerContainerRef = ref(null);

onClickOutside(pickerContainerRef, () => {
  isOpen.value = false;
});

const togglePicker = () => {
  isOpen.value = !isOpen.value;
};

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>
