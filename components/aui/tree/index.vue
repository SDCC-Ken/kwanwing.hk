<!-- aut-tree -->
<template>
  <ul v-if="selectedStyle" :class="[themeClass, selectedStyle.root]">
    <AuiTreeNode v-for="node in data" :key="node.key" :node="node" :selected-key="modelValue"
      :expanded-keys="expandedKeys" :style-config="selectedStyle" @select="handleSelect" @toggle-expand="toggleExpand">
      <template #default="{ node, selected }">
        <slot :node="node" :selected="selected">
          <span>{{ node.label }}</span>
        </slot>
      </template>
    </AuiTreeNode>
  </ul>
</template>

<script setup lang="ts">
import {
  computed,
  type PropType,
  defineComponent,
  h,
  type VNode,
  type DefineComponent,
} from "vue";
import type { AuiStyleName } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

// --- Types ---
interface TreeNode {
  key: string;
  label: string;
  children?: TreeNode[];
  [key: string]: any;
}

// --- Main Component ---
const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  data: { type: Array as PropType<TreeNode[]>, default: () => [] },
  modelValue: {
    type: [String, Number] as PropType<string | number | null>,
    default: null,
  },
  expandedKeys: {
    type: Object as PropType<Set<string>>,
    default: () => new Set(),
  },
  styleName: { type: String as PropType<AuiStyleName>, default: undefined },
});

const emit = defineEmits(["update:modelValue", "update:expandedKeys"]);

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const handleSelect = (node: TreeNode) => {
  emit("update:modelValue", node.key);
  if (node.children) {
    toggleExpand(node.key);
  }
};

const toggleExpand = (key: string) => {
  const newExpanded = new Set(props.expandedKeys);
  if (newExpanded.has(key)) {
    newExpanded.delete(key);
  } else {
    newExpanded.add(key);
  }
  emit("update:expandedKeys", newExpanded);
};

// --- Internal Recursive Component ---
const treeNodeProps = {
  node: { type: Object as PropType<TreeNode>, required: true },
  selectedKey: {
    type: [String, Number] as PropType<string | number | null>,
    required: true,
  },
  expandedKeys: { type: Object as PropType<Set<string>>, required: true },
  styleConfig: { type: Object as any, required: true },
};

type AuiTreeNodeComponent = DefineComponent<
  typeof treeNodeProps,
  {},
  {},
  {},
  {},
  {},
  {},
  { select: (node: TreeNode) => void; toggleExpand: (key: string) => void }
>;

const AuiTreeNode: AuiTreeNodeComponent = defineComponent({
  name: "AuiTreeNode",
  props: treeNodeProps,
  emits: ["select", "toggleExpand"],
  setup(props, { emit, slots }) {
    const isExpanded = computed(() => props.expandedKeys.has(props.node.key));
    const isSelected = computed(() => props.selectedKey === props.node.key);

    return (): VNode =>
      h("li", { class: props.styleConfig.item }, [
        h(
          "div",
          {
            class: [
              props.styleConfig.itemContent,
              isSelected.value && props.styleConfig.itemActive,
            ],
            onClick: () => emit("select", props.node),
          },
          [
            props.node.children
              ? h(
                "svg",
                {
                  class: [
                    props.styleConfig.chevron,
                    isExpanded.value && "rotate-90",
                  ],
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                },
                [
                  h("path", {
                    "fill-rule": "evenodd",
                    d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
                    "clip-rule": "evenodd",
                  }),
                ]
              )
              : h("span", { class: "h-4 w-4" }),
            slots.default
              ? slots.default({ node: props.node, selected: isSelected.value })
              : h("span", props.node.label),
          ]
        ),
        isExpanded.value && props.node.children
          ? h(
            "ul",
            { class: props.styleConfig.branch },
            props.node.children.map((child) =>
              h(
                AuiTreeNode,
                {
                  node: child,
                  selectedKey: props.selectedKey,
                  expandedKeys: props.expandedKeys,
                  styleConfig: props.styleConfig,
                  onSelect: (node: TreeNode) => emit("select", node),
                  onToggleExpand: (key: string) => emit("toggleExpand", key),
                },
                slots
              )
            )
          )
          : null,
      ]);
  },
});
</script>
