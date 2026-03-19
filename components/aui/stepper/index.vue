<template>
  <div
v-if="selectedStyle" :class="[
    themeClass,
    selectedStyle.root,
    selectedStyle.orientations[orientation],
    disabled && selectedStyle.states.disabled,
  ]">
    <template v-for="(step, index) in steps" :key="index">
      <!-- Step Wrapper -->
      <div
:class="[
        selectedStyle.step,
        orientation === 'vertical' ? 'grid-rows-[auto_1fr]' : '',
      ]">
        <button
:class="[
          selectedStyle.indicator,
          selectedStyle.sizes[size].indicator,
          getStepClasses(index).indicator,
        ]" type="button" :disabled="disabled" @click="!disabled && (modelValue = index)">
          <slot name="indicator" :step="step" :index="index" :state="getStepState(index)">
            <svg
v-if="!hideCheckmark && getStepState(index) === 'completed'" class="w-2/3 h-2/3" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span v-else>{{ reverseNumbering ? steps.length - index : index + 1 }}</span>
          </slot>
        </button>
        <div
:class="[
          selectedStyle.content,
          orientation === 'vertical' ? 'text-left ml-4 pt-2' : 'text-center mt-2',
        ]">
          <div
:class="[
            selectedStyle.label,
            selectedStyle.sizes[size].label,
            getStepClasses(index).label,
          ]">
            <slot name="label" :step="step" :index="index" :state="getStepState(index)">
              {{ step.label }}
            </slot>
          </div>
          <div
v-if="step.description || $slots.description" :class="[
            selectedStyle.description,
            selectedStyle.sizes[size].description,
            getStepClasses(index).description,
          ]">
            <slot name="description" :step="step" :index="index" :state="getStepState(index)">
              {{ step.description }}
            </slot>
          </div>
        </div>
      </div>
      <!-- Connector -->
      <div v-if="index < steps.length - 1" :class="getConnectorClasses(index)" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
import type { AuiStyleName, AuiSize } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

interface Step {
  label: string;
  description?: string;
}

const modelValue = defineModel<number>({ default: 0 });

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  steps: { type: Array as PropType<Step[]>, required: true },
  orientation: {
    type: String as PropType<"horizontal" | "vertical">,
    default: "horizontal",
  },
  size: { type: String as PropType<AuiSize>, default: "md" },
  disabled: { type: Boolean, default: false },
  styleName: { type: String as PropType<AuiStyleName>, default: undefined },
  hideCheckmark: { type: Boolean, default: false },
  reverseNumbering: { type: Boolean, default: false },
});

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const getStepState = (index: number) => {
  if (index < modelValue.value) return "completed";
  if (index === modelValue.value) return "active";
  return "inactive";
};

const getStepClasses = (index: number) => {
  if (!selectedStyle.value)
    return {};
  const state = getStepState(index);
  // eslint-disable-next-line security/detect-object-injection
  return selectedStyle.value.states[state];
};

const getConnectorClasses = (index: number) => {
  if (!selectedStyle.value)
    return "";
  const state = index < modelValue.value ? "completed" : "inactive";
  const connectorBase = selectedStyle.value.connector;
  // eslint-disable-next-line security/detect-object-injection
  const connectorState = selectedStyle.value.states[state].connector;
  const orientationClass =
    props.orientation === "vertical" ?
      "w-0.5 h-full mx-auto" :
      "h-0.5 w-full my-auto";
  return [connectorBase, connectorState, orientationClass].join(" ");
};
</script>
