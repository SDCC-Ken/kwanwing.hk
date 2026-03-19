<template>
  <section id="cv" class="snap-start min-h-screen py-32 bg-background relative overflow-hidden">
    <div class="container mx-auto px-6 lg:px-12 space-y-20">
      <div class="text-center space-y-4">
        <h2 class="text-5xl md:text-7xl font-black tracking-tighter special text-primary">Curriculum Vitae</h2>
        <p class="text-xl text-text-muted font-medium">My professional journey and technical arsenal.</p>
        
        <!-- Download Button -->
        <div class="pt-8">
          <AuiButton 
            component="a" 
            href="/cv.pdf" 
            download="Chan_Kwan_Wing_CV.pdf"
            variant="primary" 
            size="lg"
            class="rounded-full px-8 py-6 text-lg font-bold shadow-xl hover:shadow-primary/20 transition-all"
          >
            <Icon name="ph:download-simple-bold" class="mr-2 text-xl" />
            Download PDF CV
          </AuiButton>
        </div>
      </div>

      <!-- Professional Summary Card -->
      <AuiCard style-name="liquid-glass" class="relative group overflow-hidden border-none shadow-2xl">
        <div
          class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none">
        </div>
        <div class="p-8 md:p-12 relative flex flex-col gap-10">
          <div class="flex flex-col md:flex-row justify-between items-start gap-8">
            <div class="space-y-4">
              <h3 class="text-4xl md:text-6xl font-black tracking-tighter text-text">Chan Kwan Wing <span
                  class="text-primary">(Ken)</span></h3>
              <div class="flex flex-wrap gap-6 text-text/70 mt-4">
                <a href="mailto:kenchanjp2024@gmail.com"
                  class="flex items-center gap-3 hover:text-primary transition-all duration-300 group/link">
                  <div class="p-2.5 rounded-xl bg-primary/10 group-hover/link:bg-primary/20 transition-colors">
                    <Icon name="ph:envelope-simple-duotone" class="text-xl" />
                  </div>
                  <span class="font-bold tracking-tight">kenchanjp2024@gmail.com</span>
                </a>
                <div class="flex items-center gap-3">
                  <div class="p-2.5 rounded-xl bg-primary/10 transition-colors">
                    <Icon name="ph:phone-bold" class="text-xl" />
                  </div>
                  <span class="font-bold tracking-tight text-text/70">(852) 6590 9479</span>
                </div>
              </div>
            </div>
            <AuiBadge variant="primary" style-name="liquid-glass" size="lg" class="px-6 py-2 rounded-2xl">
              Active for New Opportunities
            </AuiBadge>
          </div>
          <div class="border-t border-white/10 pt-10">
            <p class="text-xl md:text-2xl leading-relaxed text-text/80 font-medium">
              Chief Software Engineer and technical founder specializing in full-stack TypeScript development. Focused
              on AI automation, leveraging Playwright and local LLM orchestration to deliver intelligent,
              production-ready web applications.
            </p>
          </div>
        </div>
      </AuiCard>

      <!-- Experience & Skills Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="space-y-12">
          <!-- Experience -->
          <div class="space-y-8">
            <div class="flex items-center gap-4">
              <div class="p-3 bg-primary/20 rounded-2xl text-primary">
                <Icon name="ph:briefcase-bold" class="text-3xl" />
              </div>
              <h4 class="text-3xl font-black tracking-tight text-text">Experience</h4>
            </div>
            <AuiTimeline :items="workingItems" style-name="liquid-glass" size="lg">
              <template #title="{ item }">
                <div class="flex flex-col md:flex-row md:items-center gap-2">
                  <span class="font-black text-xl text-text leading-none">{{ item.role }}</span>
                  <span class="hidden md:block text-text/30">|</span>
                  <span class="text-primary font-bold">{{ item.company }}</span>
                </div>
                <div class="text-text-muted text-xs font-bold uppercase tracking-widest mt-1">{{ item.period }}</div>
              </template>
              <template #description="{ item }">
                <ul class="mt-4 space-y-2">
                  <li v-for="desc in item.description" :key="desc" class="flex gap-3 text-text/70 text-sm leading-relaxed">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></div>
                    {{ desc }}
                  </li>
                </ul>
              </template>
            </AuiTimeline>
          </div>

          <!-- Education -->
          <div class="space-y-8">
            <div class="flex items-center gap-4">
              <div class="p-3 bg-accent/20 rounded-2xl text-accent">
                <Icon name="ph:student-bold" class="text-3xl" />
              </div>
              <h4 class="text-3xl font-black tracking-tight text-text">Academic History</h4>
            </div>
            <AuiTimeline :items="educationItems" style-name="liquid-glass" size="lg">
              <template #title="{ item }">
                <div class="flex flex-col md:flex-row md:items-center gap-2">
                  <span class="font-black text-xl text-text leading-none">{{ item.role }}</span>
                  <span class="hidden md:block text-text/30">|</span>
                  <span class="text-accent font-bold">{{ item.company }}</span>
                </div>
                <div class="text-text-muted text-xs font-bold uppercase tracking-widest mt-1">{{ item.period }}</div>
              </template>
              <template #description="{ item }">
                <ul class="mt-4 space-y-2">
                  <li v-for="desc in item.description" :key="desc" class="flex gap-3 text-text/70 text-sm leading-relaxed">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0"></div>
                    {{ desc }}
                  </li>
                </ul>
              </template>
            </AuiTimeline>
          </div>
        </div>

        <!-- Skills -->
        <div class="space-y-8">
          <div class="flex items-center gap-4">
            <div class="p-3 bg-secondary/20 rounded-2xl text-secondary">
              <Icon name="ph:code-bold" class="text-3xl" />
            </div>
            <h4 class="text-3xl font-black tracking-tight text-text">Technical Arsenal</h4>
          </div>
          <div class="grid grid-cols-1 gap-6">
            <div v-for="(skills, category) in skillGroups" :key="category"
              class="p-6 bg-background-50 rounded-3xl border border-background-200/50">
              <h5 class="text-sm font-black tracking-[0.2em] text-primary uppercase mb-4">{{
                category.replace(/([A-Z])/g, ' $1').trim() }}</h5>
              <div class="flex flex-wrap gap-2">
                <AuiBadge v-for="skill in skills" :key="skill" variant="secondary" style-name="liquid-glass"
                  size="sm">{{ skill }}</AuiBadge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  workingItems: {
    type: Array,
    required: true
  },
  educationItems: {
    type: Array,
    required: true
  },
  skillGroups: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.special {
  font-family: "Architects Daughter", cursive;
}
</style>
