<template>
  <div :class="[themeClass, selectedStyle.root]">
    <!-- Visible Avatars -->
    <span v-for="(avatar, index) in visibleAvatars" :key="`visible-${index}`"
      :class="getAvatarClasses(!avatar.src || imageErrors[`visible-${index}`])">
      <span v-if="!avatar.src || imageErrors[`visible-${index}`]">
        {{ avatar.fallback }}
      </span>
      <img v-else :class="selectedAvatarStyle.image" :src="avatar.src" :alt="avatar.alt"
        @error="onImageError(`visible-${index}`)">
    </span>

    <!-- More Indicator with Tooltip -->
    <div v-if="moreCount > 0" class="relative" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
      <span :class="moreIndicatorClasses"> +{{ moreCount }} </span>
      <!-- Tooltip -->
      <div v-if="showTooltip && hiddenAvatars.length > 0" :class="tooltipContainerClasses">
        <ul class="space-y-2">
          <li v-for="(avatar, idx) in hiddenAvatars" :key="`hidden-${idx}`" class="flex items-center gap-3">
            <!-- Avatar inside Tooltip -->
            <span :class="[
              tooltipAvatarClasses,
              !avatar.src || imageErrors[`hidden-${idx}`]
                ? tooltipFallbackClasses
                : '',
            ]">
              <span v-if="!avatar.src || imageErrors[`hidden-${idx}`]">
                {{ avatar.fallback }}
              </span>
              <img v-else :class="selectedAvatarStyle.image" :src="avatar.src" :alt="avatar.alt"
                @error="onImageError(`hidden-${idx}`)">
            </span>
            <span>{{ avatar.alt || `User ${max + idx + 1}` }}</span>
          </li>
        </ul>
        <div :class="tooltipArrowClasses" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type PropType } from "vue";
import type { AuiStyleName, AuiSize } from "../types";
import { styleMapping } from "./theme";
import { styleMapping as avatarStyleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

interface AvatarItem {
  src?: string;
  alt?: string;
  fallback: string;
}

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  avatars: {
    type: Array as PropType<AvatarItem[]>,
    default: () => []
  },
  max: {
    type: Number,
    default: 3
  },
  size: {
    type: String as PropType<AuiSize>,
    default: "md"
  },
  shape: {
    type: String as PropType<"rounded" | "square">,
    default: "rounded"
  },
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined
  }
});

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);
const selectedAvatarStyle = computed(
  () => avatarStyleMapping[activeStyleName.value]
);

const imageErrors = ref<Record<string, boolean>>({});
const onImageError = (key: string) => {
  // eslint-disable-next-line security/detect-object-injection
  imageErrors.value[key] = true;
};

const visibleAvatars = computed(() => props.avatars.slice(0, props.max));
const hiddenAvatars = computed(() => props.avatars.slice(props.max));
const moreCount = computed(() => hiddenAvatars.value.length);
const showTooltip = ref(false);

const getAvatarClasses = (isFallback: boolean) => {
  if (!selectedAvatarStyle.value) return "";
  return [
    selectedAvatarStyle.value.root,
    selectedAvatarStyle.value.sizes[props.size],
    selectedAvatarStyle.value.shapes[props.shape],
    isFallback ? selectedAvatarStyle.value.fallback : "",
    "ring-2 ring-[var(--color-background-500)]"
  ].join(" ");
};

const moreIndicatorClasses = computed(() => {
  if (!selectedAvatarStyle.value) return "";
  return [
    selectedAvatarStyle.value.root,
    selectedAvatarStyle.value.fallback,
    selectedAvatarStyle.value.sizes[props.size],
    selectedAvatarStyle.value.shapes[props.shape],
    "ring-2 ring-[var(--color-background-500)] cursor-pointer"
  ].join(" ");
});

const tooltipContainerClasses = computed(
  () =>
    "absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max min-w-[200px] p-3 bg-[var(--color-background-600)] border border-[var(--color-background-700)] text-[var(--color-text-500)] text-sm rounded-lg shadow-2xl z-10 transition-opacity duration-200"
);

const tooltipArrowClasses = computed(
  () =>
    "absolute left-1/2 -translate-x-1/2 bottom-[-5px] w-2.5 h-2.5 bg-[var(--color-background-600)] transform rotate-45 border-r border-b border-[var(--color-background-700)]"
);

const tooltipAvatarClasses = computed(() => {
  if (!selectedAvatarStyle.value) return "";
  return [
    selectedAvatarStyle.value.root,
    selectedAvatarStyle.value.sizes["sm"],
    selectedAvatarStyle.value.shapes[props.shape]
  ].join(" ");
});

const tooltipFallbackClasses = computed(() => {
  if (!selectedAvatarStyle.value) return "";
  return selectedAvatarStyle.value.fallback;
});
</script>
