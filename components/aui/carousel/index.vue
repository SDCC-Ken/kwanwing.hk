<template>
  <div v-if="selectedStyle" :class="[themeClass, selectedStyle.root]">
    <div ref="scrollContainerRef" :class="[selectedStyle.scrollContainer, 'aui-scrollbar-hide']">
      <slot />
    </div>

    <!-- Navigation Buttons -->
    <button type="button" :class="[selectedStyle.navButton, selectedStyle.navButtonPrev]" aria-label="Previous slide"
      @click="prev">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button type="button" :class="[selectedStyle.navButton, selectedStyle.navButtonNext]" aria-label="Next slide"
      @click="next">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Pagination -->
    <div :class="selectedStyle.pagination">
      <button v-for="(_, index) in totalSlides" :key="index" :class="[
        selectedStyle.paginationDot,
        index === activeIndex ? selectedStyle.paginationDotActive : '',
      ]" :aria-label="`Go to slide ${index + 1}`" @click="scrollToSlide(index)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, type PropType } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import type { AuiStyleName } from "../types";
import { styleMapping } from "./theme";
import { useStyle, useTheme } from "#imports";

const { currentStyle } = useStyle();
const { themeClass } = useTheme();

const props = defineProps({
  styleName: {
    type: String as PropType<AuiStyleName>,
    default: undefined
  },
  autoPlay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 12000 // 12 seconds as requested (10-15s range)
  }
});

const activeStyleName = computed(() => props.styleName || currentStyle.value);
const selectedStyle = computed(() => styleMapping[activeStyleName.value]);

const scrollContainerRef = ref<HTMLElement | null>(null);
const slides = ref<HTMLElement[]>([]);
const activeIndex = ref(0);
const totalSlides = ref(0);
let autoPlayInterval: any = null;

const startAutoPlay = () => {
  if (!props.autoPlay) return;
  stopAutoPlay();
  autoPlayInterval = setInterval(() => {
    next();
  }, props.interval);
};

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
};

const scrollToSlide = (index: number) => {
  const container = scrollContainerRef.value;
  if (container) {
    const slideWidth = container.clientWidth;
    container.scrollTo({
      left: index * slideWidth,
      behavior: "smooth"
    });
    activeIndex.value = index;
    if (props.autoPlay) startAutoPlay(); // Reset timer on manual interaction
  }
};

const prev = () => {
  if (totalSlides.value === 0) return;
  const newIndex =
    activeIndex.value > 0 ? activeIndex.value - 1 : totalSlides.value - 1;
  scrollToSlide(newIndex);
};

const next = () => {
  if (totalSlides.value === 0) return;
  const newIndex =
    activeIndex.value < totalSlides.value - 1 ? activeIndex.value + 1 : 0;
  scrollToSlide(newIndex);
};

onMounted(() => {
  console.log("AuiCarousel: onMounted started");
  if (typeof window !== "undefined" && scrollContainerRef.value) {
    console.log("AuiCarousel: scrollContainerRef found");
    const children = Array.from(scrollContainerRef.value.children);
    slides.value = children.filter(
      (node) => node.nodeType === 1
    ) as HTMLElement[];
    totalSlides.value = slides.value.length;
    console.log("AuiCarousel: totalSlides =", totalSlides.value);

    // Only observe if we have slides
    if (totalSlides.value > 0) {
      slides.value.forEach((slide) => {
        useIntersectionObserver(
          slide,
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
                const index = slides.value.indexOf(entry.target as HTMLElement);
                if (index !== -1) {
                  activeIndex.value = index;
                }
              }
            });
          },
          {
            root: scrollContainerRef.value,
            threshold: 0.6
          }
        );
      });

      if (props.autoPlay) {
        startAutoPlay();
      }
    }
  }
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<style>
.aui-scrollbar-hide {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.aui-scrollbar-hide::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, and Opera */
}
</style>
