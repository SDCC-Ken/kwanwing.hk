<template>
  <div class="flex flex-col min-h-screen bg-background text-text transition-colors duration-300 font-sans scroll-smooth snap-y snap-mandatory scroll-pt-20">


    <!-- Navigation Bar -->
    <header class="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-background-200/50">
      <div class="container mx-auto px-6 h-20 flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="text-xl md:text-2xl font-black tracking-tighter uppercase font-serif text-text hover:text-primary transition-colors">
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
          <AuiDrawer v-model="drawerOpen">
            <template #trigger>
              <AuiButton variant="ghost" size="icon">
                <Icon name="ic:round-menu" class="text-2xl" />
              </AuiButton>
            </template>
            <div class="p-4 space-y-4">
              <AuiNavigationMenu :items="menus" orientation="vertical" />
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

    <!-- Mobile Drawer Removal for Test -->

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-background-50 border-t border-background-200 py-12 mt-auto">
      <div class="container mx-auto px-6 text-center text-text-muted">
        <div class="mb-6 flex justify-center gap-6">
          <a href="#" class="hover:text-primary transition-colors"><Icon name="ph:instagram-logo-duotone" class="text-2xl" /></a>
          <a href="#" class="hover:text-primary transition-colors"><Icon name="ph:linkedin-logo-duotone" class="text-2xl" /></a>
          <a href="#" class="hover:text-primary transition-colors"><Icon name="ph:github-logo-duotone" class="text-2xl" /></a>
        </div>
        <p class="text-sm font-medium">© {{ year }} Kwan Wing. All rights reserved.</p>
      </div>
    </footer>

    <!-- Floating Contact Tab -->
    <div class="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <NuxtLink to="/contact" class="bg-black text-white py-6 px-2 [writing-mode:vertical-lr] rotate-180 rounded-l-xl font-bold tracking-widest uppercase text-xs hover:bg-primary transition-all duration-300 flex items-center gap-2 group">
        <Icon name="ph:paper-plane-tilt-bold" class="rotate-90 group-hover:translate-y-1 transition-transform" />
        Get in Touch
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const drawerOpen = ref(false)
const year = new Date().getFullYear()

const menus = [
  { key: 'home', label: 'Home', to: '/#hero' },
  { key: 'cv', label: 'CV', to: '/#cv' },
  { key: 'project', label: 'Work', to: '/#projects' },
  { key: 'contact', label: 'Contact', to: '/#contact' }
]
</script>

<style scoped>
.special {
  font-family: "Architects Daughter";
}
</style>
