<template>
  <Component :is="containerComponent" :class="[themeClass, avatarClasses]">
    <slot v-if="showFallback" name="fallback">
      {{ fallback }}
    </slot>
    <slot v-else>
      <img :class="selectedStyle.image" :src="src" :alt="alt" @error="onError">
    </slot>
  </Component>
</template>

<script setup lang="ts">
import { ref, computed, type PropType } from "vue";
import type { AuiStyleName, AuiSize } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const src = defineModel({
  type: String,
  default: null
});

const props = defineProps({
  containerComponent: {
    type: String,
    default: "span"
  },
  alt: {
    type: String,
    default: "User avatar"
  },
  fallback: {
    type: String,
    default: ""
  },
  size: {
    type: String as PropType<AuiSize>,
    default: "md"
  },
  shape: {
    type: String as PropType<"rounded" | "square">,
    default: "rounded",
    validator: (val: string) => ["rounded", "square"].includes(val)
  },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined
  }
});

const selectedStyle = computed(
  () => styleMapping[props.styleName || currentStyle.value]
);

const imageError = ref(false);

const onError = () => {
  imageError.value = true;
};

const showFallback = computed(() => !src.value || imageError.value);

const avatarClasses = computed(() => {
  if (!selectedStyle.value || !selectedStyle.value.sizes) return "";
  return [
    selectedStyle.value.root,
    selectedStyle.value.sizes[props.size],
    selectedStyle.value.shapes[props.shape],
    showFallback.value ? selectedStyle.value.fallback : ""
  ].join(" ");
});
</script>
