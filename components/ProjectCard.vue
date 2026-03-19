<template>
  <AuiCard 
    style-name="liquid-glass" 
    class="h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 border border-white/10 dark:border-slate-800/50 group overflow-hidden shadow-xl"
  >
    <template #header>
      <div class="p-8 pb-4 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-1 h-full bg-primary/40 group-hover:h-full transition-all duration-500"></div>
        <h3 class="text-2xl font-black tracking-tight text-text transition-colors group-hover:text-primary line-clamp-1" :title="title">
          {{ title }}
        </h3>
        <div class="h-1 w-12 bg-primary/20 group-hover:w-full transition-all duration-500 mt-2 rounded-full"></div>
      </div>
    </template>
    
    <div class="p-8 pt-4 space-y-5 flex-grow">
      <div v-for="(item, index) in content" :key="index" class="text-lg leading-relaxed flex items-start gap-3">
        <div v-if="item.label" class="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></div>
        <p class="text-text/70">
          <span v-if="item.label" class="font-black text-text/90 mr-2 uppercase text-xs tracking-widest">{{ item.label }}:</span>
          {{ item.text }}
        </p>
      </div>
    </div>
    
    <template #footer v-if="actions && actions.length">
      <div class="p-8 pt-0 flex flex-wrap gap-4 mt-auto">
        <AuiButton
          v-for="(action, index) in actions"
          :key="index"
          variant="secondary"
          style-name="liquid-glass"
          size="md"
          :href="action.url"
          target="_blank"
          class="rounded-2xl px-6 transition-all group/btn flex items-center gap-2"
        >
          <span>{{ action.title }}</span>
          <Icon name="ph:arrow-up-right-bold" class="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </AuiButton>
      </div>
    </template>
  </AuiCard>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: Array as () => Array<{ label?: string; text: string }>,
    required: true
  },
  actions: {
    type: Array as () => Array<{ title: string; url: string }>,
    default: () => []
  }
})
</script>
