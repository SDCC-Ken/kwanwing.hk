<template>
  <div
    class="flex flex-col min-h-screen bg-background text-text transition-colors duration-300 font-sans scroll-smooth snap-y snap-mandatory scroll-pt-20">


    <!-- Navigation Bar -->
    <header class="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-background-200/50">
      <div class="container mx-auto px-6 h-20 flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/"
          class="text-xl md:text-2xl font-black tracking-tighter uppercase font-serif text-text hover:text-primary transition-colors">
          Kwan Wing <span class="text-primary">.</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-4">
          <AuiNavigationMenu :items="menus" />
          <div class="h-6 w-px bg-background-200 mx-2"></div>
          <AuiStyleSelector />
          <AuiThemeSelector />
        </div>

        <!-- Mobile Toggle -->
        <div class="flex md:hidden items-center gap-1">
          <AuiDrawer v-model="drawerOpen" title="Menu">
            <template #trigger>
              <AuiButton variant="ghost" size="icon" @click="drawerOpen = true">
                <Icon name="ic:round-menu" class="text-2xl" />
              </AuiButton>
            </template>
            <div class="p-4 space-y-4">
              <AuiNavigationMenu :items="menus" orientation="vertical" @item-click="drawerOpen = false" />
              <div class="h-px bg-background-200" />
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium">Style</span>
                <AuiStyleSelector />
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium">Theme</span>
                <AuiThemeSelector />
              </div>
            </div>
          </AuiDrawer>
        </div>
      </div>
    </header>



    <!-- Main Content -->
    <main class="flex-grow mt-5">
      <div class="relative">
        <!-- Hero Section -->
        <section id="hero" class="snap-start min-h-screen flex items-center relative overflow-hidden bg-background">
          <div class="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <!-- Text Content -->
            <div class="space-y-8 z-10">
              <AuiBadge variant="primary" style-name="liquid-glass" size="lg"
                class="px-5 py-2.5 rounded-full ring-1 ring-primary/20 animate-pulse-slow">
                <div class="w-2 h-2 rounded-full bg-primary mr-3 shadow-[0_0_8px_rgba(var(--color-primary-500),0.5)]">
                </div>
                <span class="text-xs font-black uppercase tracking-widest">Active for New Opportunities</span>
              </AuiBadge>

              <div class="space-y-4">
                <p class="text-4xl md:text-5xl lg:text-6xl special text-text/80 animate-float inline-block">Hey there!
                </p>
                <h1
                  class="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-text leading-[0.9] font-serif">
                  I'm <span class="text-primary italic">Ken.</span>
                </h1>
              </div>

              <div class="space-y-8">
                <p class="text-xl md:text-2xl leading-relaxed text-text-muted font-medium italic">
                  My name is <span class="text-primary font-black relative inline-block">
                    Chan Kwan Wing
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary/30 -z-10"></span>
                  </span>
                  and you can call me
                  <span class="text-secondary font-black px-2 py-0.5 bg-secondary/10 rounded-lg">Ken</span>.
                  I'm a developer and researcher focused on building AI systems that actually matter.
                  <br /><br />
                  I am a Senior Full-Stack Engineer and Tech Lead with a deep passion for building scalable, production-ready web applications. While I enjoy architecting AI-driven automation systems, my true strength lies in writing clean, self-healing code and fostering a stable, efficient engineering culture.
                </p>

                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-5 group">
                    <div
                      class="p-4 bg-primary/5 rounded-2xl text-primary ring-1 ring-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                      <Icon name="ph:phone-duotone" class="text-2xl" />
                    </div>
                    <div>
                      <p class="text-[10px] font-black uppercase tracking-widest text-text-muted mb-0.5">Direct Line</p>
                      <p class="text-base font-bold text-text">(852) 6590 9479</p>
                    </div>
                  </div>

                  <div class="flex items-center gap-5 group">
                    <div
                      class="p-4 bg-primary/5 rounded-2xl text-primary ring-1 ring-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                      <Icon name="ph:envelope-duotone" class="text-2xl" />
                    </div>
                    <div>
                      <p class="text-[10px] font-black uppercase tracking-widest text-text-muted mb-0.5">Work Email</p>
                      <p class="text-base font-bold text-text">kenchanjp2024@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div class="flex flex-wrap gap-4 pt-4">
                  <AuiButton variant="primary" size="lg" component="a" href="#projects"
                    class="rounded-full px-8 py-6 text-lg font-bold transition-all shadow-xl hover:shadow-primary/20">
                    Explore Projects
                  </AuiButton>
                  <AuiButton variant="neutral" size="lg" component="a" href="#cv"
                    class="rounded-full px-8 py-6 text-lg font-bold border-2 transition-all">
                    View my CV
                  </AuiButton>
                </div>
              </div>
            </div>

            <!-- Carousel in Hero -->
            <div class="relative items-center justify-center lg:justify-end">
              <div
                class="relative w-full aspect-[16/11] lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-white/10 group bg-background-100">
                <AuiCarousel class="w-full h-full">
                  <div v-for="(item, idx) in carouselItems" :key="idx"
                    class="min-w-full h-full relative flex items-center justify-center p-4 lg:p-8"
                    :class="item.bg || 'bg-black'">
                    <img :src="item.src" class="max-w-full max-h-full w-auto h-auto block rounded-xl shadow-2xl"
                      :style="{ objectPosition: item.position || 'center' }" :alt="'Slide ' + (idx + 1)" />
                  </div>
                </AuiCarousel>
              </div>
              <AuiCard
                class="p-8 mt-8 flex flex-col justify-center bg-background-50 border-none relative overflow-hidden group rounded-[3rem] shadow-sm ring-1 ring-background-200/50">
                <Icon name="fa6-solid:quote-left"
                  class="absolute -top-8 -right-8 text-[12rem] text-primary/5 group-hover:rotate-12 transition-transform duration-1000" />
                <blockquote class="relative z-10 italic text-text leading-relaxed text-sm md:text-xl font-medium">
                  "Your time is limited, so don’t waste it living someone else’s life... have the courage to follow your
                  heart and intuition."
                  <footer class="mt-10 flex items-center gap-4">
                    <div class="h-px w-10 bg-primary/30"></div>
                    <span class="text-xs font-black uppercase tracking-widest text-primary">Steve Jobs</span>
                  </footer>
                </blockquote>
              </AuiCard>
            </div>
          </div>
          <!-- Scroll Indicator -->
          <a href="#cv"
            class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hover:scale-110 transition-transform cursor-pointer z-20"
            aria-label="Scroll to CV">
            <Icon name="ph:caret-down-bold" class="text-3xl text-primary" />
          </a>
        </section>

        <section id="cv" class="snap-start min-h-screen py-32 bg-background relative overflow-hidden">
          <div class="container mx-auto px-6 lg:px-12 space-y-20">
            <div class="text-center space-y-4">
              <h2 class="text-5xl md:text-7xl font-black tracking-tighter special text-primary">Curriculum Vitae</h2>
              <p class="text-xl text-text-muted font-medium">My professional journey and technical arsenal.</p>

              <!-- Download Button -->
              <div class="pt-8">
                <AuiButton component="a" href="/cv.pdf" download="Chan_Kwan_Wing_CV.pdf" variant="primary" size="lg"
                  class="rounded-full px-8 py-6 text-lg font-bold shadow-xl hover:shadow-primary/20 transition-all">
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
                      <a href="https://kwanwing.me" target="_blank"
                        class="flex items-center gap-3 hover:text-primary transition-all duration-300 group/link">
                        <div class="p-2.5 rounded-xl bg-primary/10 group-hover/link:bg-primary/20 transition-colors">
                          <Icon name="ph:globe-simple-duotone" class="text-xl" />
                        </div>
                        <span class="font-bold tracking-tight">kwanwing.me</span>
                      </a>
                    </div>
                  </div>
                  <div class="hidden md:flex flex-col items-center gap-2">
                    <div class="p-2 bg-white rounded-2xl shadow-lg border border-primary/10">
                      <img src="/qrcode.jpg" alt="Scan to save Ken's contact" class="w-24 h-24 object-contain" />
                    </div>
                    <span class="text-[10px] font-black uppercase tracking-widest text-primary/60">Save Contact</span>
                  </div>
                </div>
                <div class="border-t border-white/10 pt-10">
                  <p class="text-xl md:text-2xl leading-relaxed text-text/80 font-medium">
                    Senior Full-Stack Engineer & Technical Lead specializing in high-performance TypeScript ecosystems (Node.js & Vue.js). With a proven track record of architecting scalable SaaS platforms and integrating AI automation (Playwright, local LLMs), I am looking to bring my 0-to-1 system design experience and hands-on coding expertise to a forward-thinking, remote-friendly engineering team.
                  </p>
                </div>
              </div>
            </AuiCard>

            <!-- Experience & Skills Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div class="space-y-12">
                <!-- Experience -->
                <div class="space-y-8">
                  <AuiSeparator style-name="liquid-glass" class="mb-10">
                    <div class="flex items-center gap-4 px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
                      <Icon name="ph:briefcase-bold" class="text-2xl text-primary" />
                      <h4 class="text-2xl font-black tracking-tighter text-text uppercase">Experience</h4>
                    </div>
                  </AuiSeparator>
                  <AuiTimeline :items="workingItems" style-name="liquid-glass" size="lg">
                    <template #dot="{ index }">
                      <div class="shrink-0 aspect-square w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 border-2 border-primary/40 text-primary font-black text-sm">
                        {{ workingItems.length - index }}
                      </div>
                    </template>
                    <template #title="{ item }">
                      <div class="flex flex-col md:flex-row md:items-center gap-2">
                        <span class="font-black text-xl text-text leading-none">{{ item.role }}</span>
                        <span class="hidden md:block text-text/30">|</span>
                        <span class="text-primary font-bold">{{ item.company }}</span>
                      </div>
                      <div class="text-text-muted text-xs font-bold uppercase tracking-widest mt-1">{{ item.period }}
                      </div>
                    </template>
                    <template #description="{ item }">
                      <ul class="mt-4 space-y-2">
                        <li v-for="desc in item.description" :key="desc"
                          class="flex gap-3 text-text/85 text-sm leading-relaxed">
                          <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0"></div>
                          {{ desc }}
                        </li>
                      </ul>
                    </template>
                  </AuiTimeline>
                </div>

                <!-- Education -->
                <div class="space-y-8">
                  <AuiSeparator style-name="liquid-glass" class="mb-10">
                    <div
                      class="flex items-center gap-4 px-6 py-2 bg-secondary/10 rounded-full border border-secondary/20">
                      <Icon name="ph:student-bold" class="text-2xl text-secondary" />
                      <h4 class="text-2xl font-black tracking-tighter text-text uppercase">Academic History</h4>
                    </div>
                  </AuiSeparator>
                  <AuiTimeline :items="educationItems" style-name="liquid-glass" size="lg">
                    <template #dot="{ index }">
                      <div class="shrink-0 aspect-square w-10 h-10 rounded-full flex items-center justify-center bg-secondary/10 border-2 border-secondary/40 text-secondary font-black text-sm">
                        {{ educationItems.length - index }}
                      </div>
                    </template>
                    <template #title="{ item }">
                      <div class="flex flex-col md:flex-row md:items-center gap-2">
                        <span class="font-black text-xl text-text leading-none">{{ item.role }}</span>
                        <span class="hidden md:block text-text/30">|</span>
                        <span class="text-secondary font-bold">{{ item.company }}</span>
                      </div>
                      <div class="text-text-muted text-xs font-bold uppercase tracking-widest mt-1">{{ item.period }}
                      </div>
                    </template>
                    <template #description="{ item }">
                      <ul class="mt-4 space-y-2">
                        <li v-for="desc in item.description" :key="desc"
                          class="flex gap-3 text-text/85 text-sm leading-relaxed">
                          <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary/60 shrink-0"></div>
                          {{ desc }}
                        </li>
                      </ul>
                    </template>
                  </AuiTimeline>
                </div>
              </div>

              <!-- Skills -->
              <div class="space-y-8">
                <AuiSeparator style-name="liquid-glass" class="mb-10">
                  <div
                    class="flex items-center gap-4 px-6 py-2 bg-secondary/10 rounded-full border border-secondary/20">
                    <Icon name="ph:code-bold" class="text-2xl text-secondary" />
                    <h4 class="text-2xl font-black tracking-tighter text-text uppercase">Technical Arsenal</h4>
                  </div>
                </AuiSeparator>
                <div class="grid grid-cols-1 gap-6">
                  <div v-for="(skills, category) in skillGroups" :key="category"
                    class="p-6 rounded-3xl border border-background-200/50">
                    <h5
                      class="text-sm font-black tracking-[0.2em] text-primary-700 dark:text-primary-400 uppercase mb-4">
                      {{
                        category.replace(/([A-Z])/g, ' $1').trim() }}</h5>
                    <div class="flex flex-wrap gap-2">
                      <AuiBadge v-for="skill in skills" :key="skill" variant="secondary" size="sm">{{ skill
                      }}</AuiBadge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Projects Section -->
        <section id="projects" class="snap-start min-h-screen py-32  relative overflow-hidden">
          <div class="container mx-auto px-6 lg:px-12 space-y-20">
            <div class="text-center space-y-4">
              <h2 class="text-5xl md:text-7xl font-black tracking-tighter special text-primary">Software Work</h2>
              <p class="text-xl text-text-muted font-medium">A selection of my recent developments and experiments.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div v-for="item in program" :key="item.title" class="group h-full">
                <AuiCard
                  class="h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/20 border border-muted-200/20 group overflow-hidden shadow-xl">
                  <template #header>
                    <div class="p-8 pb-4 relative overflow-hidden">
                      <div
                        class="absolute top-0 left-0 w-1 h-full bg-primary-400/40 group-hover:h-full transition-all duration-500">
                      </div>
                      <h3
                        class="text-2xl font-black tracking-tight text-[var(--color-text-300)] transition-colors group-hover:text-primary-600 line-clamp-1"
                        :title="item.title">
                        {{ item.title }}
                      </h3>
                      <div class="h-1 w-12 group-hover:w-full transition-all duration-500 mt-2 rounded-full">
                      </div>
                    </div>
                  </template>

                  <div class="p-8 pt-4 space-y-6 flex-grow">
                    <div v-for="(itemInner, index) in item.content" :key="index"
                      class="text-lg leading-relaxed flex items-start gap-4 text-[var(--color-text-300)]">
                      <AuiBadge v-if="itemInner.label" variant="primary" style-name="liquid-glass" size="xs"
                        class="font-black uppercase tracking-tighter shadow-sm shrink-0 mt-1">
                        {{ itemInner.label }}
                      </AuiBadge>
                      <p class="leading-tight">
                        {{ itemInner.text }}
                      </p>
                    </div>
                  </div>

                  <template #footer v-if="item.actions && item.actions.length">
                    <div class="p-8 pt-0 flex flex-wrap gap-4 mt-auto">
                      <AuiButton v-for="(action, index) in item.actions" :key="index" variant="secondary"
                        style-name="liquid-glass" size="md" :href="action.url" target="_blank"
                        class="rounded-2xl px-6 transition-all group/btn flex items-center gap-2">
                        <span>{{ action.title }}</span>
                        <Icon name="ph:arrow-up-right-bold"
                          class="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </AuiButton>
                    </div>
                  </template>
                </AuiCard>
              </div>
            </div>

            <div class="text-center space-y-4 pt-20">
              <h2 class="text-5xl md:text-7xl font-black tracking-tighter special text-primary">Paper Work</h2>
              <p class="text-xl text-text-muted font-medium">Academic research and business case studies.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-[var(--color-text-300)]">
              <div v-for="item in paper" :key="item.title" class="group h-full">
                <AuiCard style-name="liquid-glass"
                  class="h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/20 border border-muted-200/20 group overflow-hidden shadow-xl">
                  <template #header>
                    <div class="p-8 pb-4 relative overflow-hidden">
                      <div
                        class="absolute top-0 left-0 w-1 h-full bg-primary-500/40 group-hover:h-full transition-all duration-500">
                      </div>
                      <h3
                        class="text-2xl font-black tracking-tight text-muted-900 transition-colors group-hover:text-primary-600 line-clamp-1"
                        :title="item.title">
                        {{ item.title }}
                      </h3>
                      <div
                        class="h-1 w-12 bg-primary-500/20 group-hover:w-full transition-all duration-500 mt-2 rounded-full">
                      </div>
                    </div>
                  </template>

                  <div class="p-8 pt-4 space-y-6 flex-grow">
                    <div v-for="(innerItem, index) in item.content" :key="index"
                      class="text-lg leading-relaxed flex items-start gap-4">
                      <AuiBadge v-if="innerItem.label" variant="primary" style-name="liquid-glass" size="xs"
                        class="font-black uppercase tracking-tighter shadow-sm shrink-0 mt-1">
                        {{ innerItem.label }}
                      </AuiBadge>
                      <p class="text-muted-700 leading-tight">
                        {{ innerItem.text }}
                      </p>
                    </div>
                  </div>

                  <template #footer v-if="item.actions && item.actions.length">
                    <div class="p-8 pt-0 flex flex-wrap gap-4 mt-auto">
                      <AuiButton v-for="(action, index) in item.actions" :key="index" variant="secondary"
                        style-name="liquid-glass" size="md" :href="action.url" target="_blank"
                        class="rounded-2xl px-6 transition-all group/btn flex items-center gap-2">
                        <span>{{ action.title }}</span>
                        <Icon name="ph:arrow-up-right-bold"
                          class="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </AuiButton>
                    </div>
                  </template>
                </AuiCard>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="snap-start min-h-screen py-32 bg-background relative overflow-hidden">
          <div class="container mx-auto px-6 lg:px-12 space-y-20">
            <div class="text-center space-y-4">
              <h2 class="text-5xl md:text-7xl font-black tracking-tighter special text-primary">Get In Touch</h2>
              <p class="text-xl text-text-muted font-medium">Let's build something extraordinary together.</p>
            </div>

            <AuiCard style-name="material"
              class="max-w-4xl mx-auto overflow-hidden shadow-2xl rounded-[3rem] border-none">
              <div class="flex flex-col md:flex-row">
                <!-- QR Code -->
                <div
                  class="md:w-1/3 p-12 flex flex-col items-center justify-center text-center space-y-6 border-b md:border-b-0 md:border-r border-background-200">
                  <div class="p-4 bg-white rounded-3xl shadow-xl">
                    <img src="/qrcode.jpg" alt="Scan to save Ken's contact" class="w-48 h-48 object-contain" />
                  </div>
                  <p class="text-sm text-text-muted font-bold uppercase tracking-widest">Scan to Save Contact</p>
                </div>

                <!-- Contact Info -->
                <div class="md:w-2/3 p-12 space-y-10">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div class="space-y-2">
                      <span class="text-primary font-black text-xs uppercase tracking-widest">Phone</span>
                      <p class="text-2xl font-bold text-text">(852) 6590 9479</p>
                    </div>
                    <div class="space-y-2">
                      <span class="text-primary font-black text-xs uppercase tracking-widest">Email</span>
                      <p class="text-xl font-bold text-text">kenchanjp2024@gmail.com</p>
                    </div>
                    <div class="space-y-2">
                      <span class="text-primary font-black text-xs uppercase tracking-widest">Website</span>
                      <p
                        class="text-xl font-bold text-text underline decoration-primary/30 hover:text-primary transition-colors">
                        <a href="https://kwanwing.me" target="_blank">kwanwing.me</a>
                      </p>
                    </div>
                  </div>

                  <div class="pt-10 border-t border-background-200">
                    <span class="text-primary font-black text-xs uppercase tracking-widest mb-6 block">Social
                      Ecosystem</span>
                    <div class="flex flex-wrap gap-4">
                      <AuiTooltip v-for="social in socials" :key="social.name" :content="social.name">
                        <AuiButton variant="neutral" size="icon" :href="social.url" target="_blank"
                          class="rounded-2xl w-14 h-14 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm border-none bg-background-200/50">
                          <Icon :name="social.icon" class="text-2xl" />
                        </AuiButton>
                      </AuiTooltip>
                    </div>
                  </div>
                </div>
              </div>
            </AuiCard>
          </div>


          <!-- Footer mini -->
          <div
            class="absolute bottom-10 left-0 right-0 text-center text-text-muted/80 text-xs font-bold uppercase tracking-widest">
            © {{ new Date().getFullYear() }} Kwan Wing. Handcrafted for excellence.
          </div>
        </section>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-background-50 border-t border-background-200 py-12 mt-auto">
      <div class="container mx-auto px-6 text-center text-text-muted">
        <div class="mb-6 flex justify-center gap-6">
          <AuiTooltip content="Instagram">
            <AuiButton variant="ghost" size="icon" component="a" href="#"
              class="hover:text-primary transition-colors h-12 w-12 rounded-xl">
              <Icon name="ph:instagram-logo-duotone" class="text-2xl" />
            </AuiButton>
          </AuiTooltip>
          <AuiTooltip content="LinkedIn">
            <AuiButton variant="ghost" size="icon" component="a" href="#"
              class="hover:text-primary transition-colors h-12 w-12 rounded-xl">
              <Icon name="ph:linkedin-logo-duotone" class="text-2xl" />
            </AuiButton>
          </AuiTooltip>
          <AuiTooltip content="GitHub">
            <AuiButton variant="ghost" size="icon" component="a" href="#"
              class="hover:text-primary transition-colors h-12 w-12 rounded-xl">
              <Icon name="ph:github-logo-duotone" class="text-2xl" />
            </AuiButton>
          </AuiTooltip>
        </div>
        <p class="text-sm font-medium">© {{ year }} Kwan Wing. All rights reserved.</p>
      </div>
    </footer>

    <!-- Floating Contact Tab -->
    <div class="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <NuxtLink to="/#contact"
        class="bg-black text-white py-6 px-2 [writing-mode:vertical-lr] rotate-180 rounded-l-xl font-bold tracking-widest uppercase text-xs hover:bg-primary transition-all duration-300 flex items-center gap-2 group">
        <Icon name="ph:paper-plane-tilt-bold" class="rotate-90 group-hover:translate-y-1 transition-transform" />
        Get in Touch
      </NuxtLink>
    </div>
  </div>

</template>

<script setup>
import { onMounted } from 'vue';
if (typeof window !== 'undefined') {
  console.log("App: Root script setup executing on client");
}
onMounted(() => {
  console.log("App mounted on client");
});
const drawerOpen = ref(false)
const year = new Date().getFullYear()

const menus = [
  { key: 'home', label: 'Home', to: '/#hero' },
  { key: 'cv', label: 'CV', to: '/#cv' },
  { key: 'project', label: 'Work', to: '/#projects' },
  { key: 'contact', label: 'Contact', to: '/#contact' }
]
const carouselItems = [
  {
    src: '/IMG_2609.jpg',
    position: 'center',
    fit: 'contain',
    bg: 'bg-[#2a2d31]'
  },
  {
    src: '/20260318_214537.png',
    position: 'center',
    fit: 'contain',
    bg: 'bg-[#2a2d31]'
  },
  {
    src: '/Screenshot.png',
    position: 'center',
    fit: 'contain',
    bg: 'bg-[#2a2d31]'
  },
  {
    src: '/IMG_2434.jpg',
    position: 'center',
    fit: 'contain',
    bg: 'bg-[#2a2d31]'
  }
]

const program = [
  {
    title: 'Backend Packages',
    content: [{ label: 'Type', text: 'Node.js + TypeScript For Fastify' }],
    actions: [{ title: 'Preview', url: 'https://github.com/SDCC-Ken/backend-packages' }]
  },
  {
    title: 'Frontend Package',
    content: [{ label: 'Type', text: 'Nuxt 4 + AUI' }],
    actions: [{ title: 'Preview', url: 'https://github.com/SDCC-Ken/frontend-packages' }]
  },
  {
    title: 'YourAIApps.Online',
    content: [{ label: 'Type', text: 'Web Application (TypeScript)' }, { label: "Company", text: "SkyDreamCity Team" }],
    actions: [{ title: 'Preview', url: 'https://www.youraiapps.online' }]
  },
  {
    title: 'Swivel 360',
    content: [{ label: 'Type', text: 'Web Application (TypeScript)' }, { label: "Company", text: "Swivel Software" }],
    actions: [{ title: 'Preview', url: 'https://www.swivelsoftware.com/swivel-360' }]
  },
  {
    title: 'Hurry Waiter',
    content: [{ label: 'Type', text: 'Web Application (JavaScript)' }],
    actions: [{ title: 'Preview', url: 'https://github.com/SDCC-Ken/hurry_waiter' }]
  },
  {
    title: 'Ghost Leg Game',
    content: [{ label: 'Type', text: 'Web Application (JavaScript)' }],
    actions: [{ title: 'Preview', url: 'https://github.com/SDCC-Ken/ghost_leg_game' }]
  },
  {
    title: '24Eating',
    content: [
      { label: 'Type', text: 'Web app (cordova)' },
      { label: 'Notices', text: 'ITACHO example. Requires unknown sources install.' }
    ],
    actions: [{ title: 'Preview', url: '/offlineproject/app24eating-v0.1.5-final.apk' }]
  },
  {
    title: 'School Management System',
    content: [{ label: 'Type', text: 'MySQL and website' }],
    actions: [
      { title: 'Preview', url: 'https://github.com/SDCC-Ken/database_work' },
      { title: 'Report', url: '/offlineproject/CCN2240_report.pdf' }
    ]
  },
  {
    title: 'English Vocabulary Game',
    content: [
      { label: 'Subject', text: 'ICT' },
      { label: 'Language', text: 'Chinese' }
    ],
    actions: [
      { title: 'Preview', url: 'https://github.com/SDCC-Ken/school' },
      { title: 'Website', url: '/offlineproject/ICT-SBA.pdf' }
    ]
  }
]

const paper = [
  {
    title: 'Somatosensory Game Study',
    content: [
      { label: 'Subject', text: 'Integrated Study' },
      { label: 'Language', text: 'English' }
    ],
    actions: [{ title: 'Download', url: '/offlineproject/Integrated_Study.pdf' }]
  },
  {
    title: 'Case Study - Royal View Hotel',
    content: [
      { label: 'Subject', text: 'E-Commerce' },
      { label: 'Language', text: 'English' }
    ],
    actions: [{ title: 'Download', url: '/offlineproject/Case-Study-Royal-View-Hotel.pdf' }]
  },
  {
    title: 'Legal Case - Napster v A&M Records',
    content: [
      { label: 'Subject', text: 'Policy' },
      { label: 'Language', text: 'English' }
    ],
    actions: [{ title: 'Download', url: '/offlineproject/Case-Study-A&M-Records-v-napster-inc.pdf' }]
  },
  {
    title: 'E-Business Start-up Plan',
    content: [
      { label: 'Subject', text: 'E-Business' },
      { label: 'Language', text: 'English' }
    ],
    actions: [
      { title: 'Download', url: '/offlineproject/E-Business_group_project.pdf' },
    ]
  },
  {
    title: 'Cyberbullying Investigation',
    content: [
      { label: 'Subject', text: 'Liberal Studies' },
      { label: 'Language', text: 'Chinese' }
    ],
    actions: [{ title: 'Download', url: '/offlineproject/IES.pdf' }]
  }
]

const workingItems = [
  {
    company: 'SkyDreamCity Team',
    period: 'Apr 2025 - NOW',
    role: 'Chief Software Engineer',
    description: [
      'Architected enterprise-grade AI-driven SaaS platforms and PWA applications for SMEs, leading the core technical strategy and end-to-end development as the primary technology partner.',
      'Spearheaded the development of a secure Retrieval-Augmented Generation (RAG) system and AI chat assistant, integrating LLMs to empower users to safely query and extract intelligent insights from private enterprise documents.',
      'Engineered autonomous AI web automation agents utilizing Playwright and LLM orchestration, building intelligent internal micro-systems to streamline and automate complex business operations.',
      'Established a high-performance full-stack architecture utilizing the TypeScript ecosystem, specifically Node.js (Fastify) for backend services and Vue.js (Nuxt 3 SSR) for frontends.',
      'Designed and implemented robust, self-healing code architectures using Fastify and Prisma, significantly reducing maintenance overhead and ensuring high system reliability.'
    ]
  },
  {
    company: 'Swivel Software',
    period: 'Jul 2022 - Apr 2025',
    role: 'Head of IT / Hands-on Tech Lead (360 Team)',
    description: [
      'Acted as a "player-coach" leading a compact agile team of 5 engineers to develop "360", a flagship B2B Collaborative Portal for enterprise clients.',
      'Hands-on architected and coded core system components, successfully transitioning legacy logistics platforms into scalable TypeScript, Node.js, and Vue.js architectures.',
      'Mentored developers and established best practices, while managing deployment pipelines and system reliability for global operations.'
    ]
  },
  {
    company: 'Swivel Software',
    period: 'Mar 2018 - Jun 2022',
    role: 'Software Engineer',
    description: [
      'Developed and optimized core backend microservices and databases for high-traffic logistics management systems using TypeScript and Node.js.',
      'Collaborated closely with senior management on architectural decisions, gradually taking on leadership responsibilities to improve system performance, scalability, and data processing efficiency.'
    ]
  },
  {
    company: 'Yakoo Technology Limited',
    period: 'Jun 2015 - Feb 2018',
    role: 'Programmer / Intern',
    description: [
      'Developed and maintained responsive web applications and customized CMS systems tailored for client needs.',
      'Gained foundational full-stack experience in PHP frameworks and frontend technologies.'
    ]
  }
]
const educationItems = [
  {
    company: 'PolyU (MSC)',
    period: '2016 - 2018',
    role: 'Master of Science in Software Technology',
    description: ['Focus on advanced software engineering and modern tech stacks.']
  },
  {
    company: 'PolyU SPEED',
    period: '2014 - 2016',
    role: 'BSc (Hons) in Applied Sciences',
    description: ['Information Systems and Web Technologies.']
  },
  {
    company: 'HKCC (PolyU)',
    period: '2012 - 2014',
    role: 'Associate in Information Technology',
    description: ['Foundational computing and IT systems.']
  },
  {
    company: 'C.C.C. Kei Chi Secondary',
    period: '2006 - 2012',
    role: 'Secondary Education',
    description: ['Graduated successfully.']
  }
]

const skillGroups = {
  aiAndAutomation: ['Playwright', 'Ollama', 'Proxmox', 'AI Agents'],
  coreStack: ['TypeScript', 'Nuxt 3', 'Node.js', 'Vue.js', 'Tailwind 4'],
  database: ['Prisma', 'MySQL', 'MSSQL', 'PostgreSQL', 'Redis'],
  infrastructure: ['Docker', 'Linux Cluster', 'GitHub Actions']
}

const socials = [
  { name: 'Facebook', icon: 'mdi:facebook', url: 'https://www.facebook.com/realwind2012' },
  { name: 'Twitter', icon: 'mdi:twitter', url: 'https://twitter.com/KenChan2012cc' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/ken-chan-hk' }
]

useHead({
  title: 'Ken Chan - One Page Portfolio'
})
</script>

<style scoped>
.special {
  font-family: "Architects Daughter", cursive;
}

/* Scroll Snap Customization */
section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

/* Performance optimizations for animations */
.animate-float {
  will-change: transform;
}
</style>
