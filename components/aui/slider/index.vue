<template>
  <div v-if="selectedStyle" ref="sliderRef" :class="[themeClass, rootClasses]"
    @pointerdown.prevent="handlePointerDown">
    <div :class="trackClasses" />
    <div :class="rangeClasses" :style="rangeStyle" />

    <template v-if="multiple">
      <div :class="thumbClasses" :style="getThumbStyle(lowerPercentage)" tabindex="0" />
      <div :class="thumbClasses" :style="getThumbStyle(upperPercentage)" tabindex="0" />
    </template>
    <div v-else :class="thumbClasses" :style="getThumbStyle(upperPercentage)" tabindex="0" role="slider" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted, type PropType } from "vue";
import type { AuiStyleName } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 1 },
  multiple: { type: Boolean, default: false },
  orientation: {
    type: String as PropType<"horizontal" | "vertical">,
    default: "horizontal"
  },
  size: { type: String as PropType<"sm" | "md" | "lg">, default: "md" },
  inverted: { type: Boolean, default: false },
  styleName: { type: String as PropType<AuiStyleName>, default: undefined }
});

const modelValue = defineModel<number | [number, number]>({ default: 50 });

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const sliderRef = ref<HTMLElement | null>(null);
const activeThumb = ref<"lower" | "upper" | null>(null);

const valueAsArray = computed<[number, number]>(() => {
  return Array.isArray(modelValue.value) ?
    modelValue.value :
    [props.min, modelValue.value];
});

const lowerValue = computed(() =>
  Math.min(valueAsArray.value[0], valueAsArray.value[1])
);
const upperValue = computed(() =>
  Math.max(valueAsArray.value[0], valueAsArray.value[1])
);

const getPercentage = (value: number) => {
  const range = props.max - props.min;
  if (range === 0) return 0;
  const boundedValue = Math.max(props.min, Math.min(props.max, value));
  return ((boundedValue - props.min) / range) * 100;
};

const lowerPercentage = computed(() => getPercentage(lowerValue.value));
const upperPercentage = computed(() => getPercentage(upperValue.value));

const rootClasses = computed(() =>
  [
    selectedStyle.value?.root,
    selectedStyle.value?.orientations[props.orientation]
  ].join(" ")
);
const trackClasses = computed(() => {
  if (!selectedStyle.value) return "";
  const sizeClasses = selectedStyle.value.sizes[props.size].track.split(" | ");
  const orientationClass =
    props.orientation === "horizontal" ? sizeClasses[0] : sizeClasses[1];
  return [selectedStyle.value.track, orientationClass].join(" ");
});
const rangeClasses = computed(() =>
  [selectedStyle.value?.range, trackClasses.value].join(" ")
);
const thumbClasses = computed(() =>
  [
    selectedStyle.value?.thumb,
    selectedStyle.value?.sizes[props.size].thumb
  ].join(" ")
);

const rangeStyle = computed(() => {
  const start = props.multiple ? lowerPercentage.value : 0;
  const size =
    (props.multiple ? upperPercentage.value : upperValue.value === modelValue.value ? upperPercentage.value : lowerPercentage.value) - start;
  if (props.orientation === "vertical") {
    return {
      [props.inverted ? "top" : "bottom"]: `${start}%`,
      left: "0",
      right: "0",
      height: `${size}%`
    };
  }
  return {
    [props.inverted ? "right" : "left"]: `${start}%`,
    top: "0",
    bottom: "0",
    width: `${size}%`
  };
});

const getThumbStyle = (percentage: number) => {
  if (props.orientation === "vertical") {
    return {
      [props.inverted ? "top" : "bottom"]: `${100 - percentage}%`,
      left: "50%"
    };
  }
  return {
    left: `${percentage}%`,
    top: "50%"
  };
};

const updateValueFromEvent = (event: PointerEvent | MouseEvent) => {
  if (!sliderRef.value) return;
  const rect = sliderRef.value.getBoundingClientRect();
  let newPercentage: number;
  if (props.orientation === "horizontal") {
    newPercentage = ((event.clientX - rect.left) / rect.width) * 100;
  }
  else {
    newPercentage = ((event.clientY - rect.top) / rect.height) * 100;
  }
  if (props.inverted) newPercentage = 100 - newPercentage;
  newPercentage = Math.max(0, Math.min(100, newPercentage));
  const range = props.max - props.min;
  let newValue = (newPercentage / 100) * range + props.min;
  newValue = Math.round(newValue / props.step) * props.step;
  newValue = Math.max(props.min, Math.min(props.max, newValue));

  if (props.multiple) {
    if (activeThumb.value === "lower") {
      modelValue.value = [newValue, upperValue.value];
    }
    else if (activeThumb.value === "upper") {
      modelValue.value = [lowerValue.value, newValue];
    }
  }
  else {
    modelValue.value = newValue;
  }
};

const handlePointerDown = (event: PointerEvent) => {
  if (props.multiple) {
    const clickPos =
      props.orientation === "horizontal" ? event.clientX : event.clientY;
    const thumbLowerEl = sliderRef.value?.children[2] as HTMLElement;
    const thumbUpperEl = sliderRef.value?.children[3] as HTMLElement;
    const posLower =
      thumbLowerEl.getBoundingClientRect()[
      props.orientation === "horizontal" ? "x" : "y"
      ];
    const posUpper =
      thumbUpperEl.getBoundingClientRect()[
      props.orientation === "horizontal" ? "x" : "y"
      ];
    activeThumb.value =
      Math.abs(clickPos - posLower) < Math.abs(clickPos - posUpper) ?
        "lower" :
        "upper";
  }
  else {
    activeThumb.value = "upper";
  }
  updateValueFromEvent(event);
  window.addEventListener("pointermove", handlePointerMove);
  window.addEventListener("pointerup", handlePointerUp, { once: true });
};

const handlePointerMove = (event: PointerEvent) => updateValueFromEvent(event);
const handlePointerUp = () => {
  window.removeEventListener("pointermove", handlePointerMove);
};
onUnmounted(() => handlePointerUp());
</script>
