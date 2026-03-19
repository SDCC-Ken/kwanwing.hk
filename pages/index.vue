<template>
  <div class="relative">
    <!-- Hero Section -->
    <section id="hero" class="snap-start min-h-screen flex items-center relative overflow-hidden bg-background">
      <div class="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Text Content -->
        <div class="space-y-8 z-10">
          <div
            class="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full text-primary ring-1 ring-primary/20">
            <div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span class="text-xs font-black uppercase tracking-widest">Active for New Opportunities</span>
          </div>

          <div class="space-y-4">
            <p class="text-4xl md:text-5xl lg:text-6xl special text-text/80 animate-float inline-block">Hey there!</p>
            <h1 class="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-text leading-[0.9] font-serif">
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
              <AuiButton size="lg" component="a" href="#projects"
                class="rounded-full px-8 py-6 text-lg font-bold bg-black text-white hover:bg-primary transition-all shadow-xl hover:shadow-primary/20">
                Explore Projects
              </AuiButton>
              <AuiButton variant="outline" size="lg" component="a" href="#cv"
                class="rounded-full px-8 py-6 text-lg font-bold border-2 hover:bg-background-100 transition-all">
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
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ph:caret-down-bold" class="text-3xl text-primary" />
      </div>
    </section>

    <CvSection :working-items="workingItems" :education-items="educationItems" :skill-groups="skillGroups" />

    <!-- Projects Section -->
    <section id="projects" class="snap-start min-h-screen py-32 bg-background-50 relative overflow-hidden">
      <div class="container mx-auto px-6 lg:px-12 space-y-20">
        <div class="text-center space-y-4">
          <h2 class="text-5xl md:text-7xl font-black tracking-tighter special text-primary">Software Work</h2>
          <p class="text-xl text-text-muted font-medium">A selection of my recent developments and experiments.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="item in program" :key="item.title" class="group h-full">
            <ProjectCard :title="item.title" :content="item.content" :actions="item.actions"
              class="h-full transition-all duration-500 group-hover:-translate-y-2" />
          </div>
        </div>

        <div class="text-center space-y-4 pt-20">
          <h2 class="text-5xl md:text-7xl font-black tracking-tighter special text-primary">Paper Work</h2>
          <p class="text-xl text-text-muted font-medium">Academic research and business case studies.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="item in paper" :key="item.title" class="group h-full">
            <ProjectCard :title="item.title" :content="item.content" :actions="item.actions"
              class="h-full transition-all duration-500 group-hover:-translate-y-2" />
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

        <AuiCard style-name="material" class="max-w-4xl mx-auto overflow-hidden shadow-2xl rounded-[3rem] border-none">
          <div class="flex flex-col md:flex-row">
            <!-- QR Code -->
            <div
              class="md:w-1/3 bg-background-100 p-12 flex flex-col items-center justify-center text-center space-y-6 border-b md:border-b-0 md:border-r border-background-200">
              <div class="p-4 bg-white rounded-3xl shadow-xl">
                <img src="/qrcode.jpg" alt="My Contact QR Code" class="w-48 h-48 object-contain" />
              </div>
              <p class="text-sm text-text-muted font-bold uppercase tracking-widest">Scan to Connect</p>
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
              </div>

              <div class="pt-10 border-t border-background-200">
                <span class="text-primary font-black text-xs uppercase tracking-widest mb-6 block">Social
                  Ecosystem</span>
                <div class="flex flex-wrap gap-4">
                  <AuiButton v-for="social in socials" :key="social.name" variant="neutral" size="icon"
                    :href="social.url" target="_blank"
                    class="rounded-2xl w-14 h-14 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm border-none bg-background-200/50">
                    <Icon :name="social.icon" class="text-2xl" />
                  </AuiButton>
                </div>
              </div>
            </div>
          </div>
        </AuiCard>
      </div>


      <!-- Footer mini -->
      <div
        class="absolute bottom-10 left-0 right-0 text-center text-text-muted/50 text-xs font-bold uppercase tracking-widest">
        © {{ new Date().getFullYear() }} Kwan Wing. Handcrafted for excellence.
      </div>
    </section>
  </div>
</template>

<script setup>
const carouselItems = [
  {
    src: '/IMG_2609.png',
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
    src: '/IMG_2434.png',
    position: 'center',
    fit: 'contain',
    bg: 'bg-[#2a2d31]'
  }
]

const program = [
  {
    title: 'Hurry Waiter',
    content: [{ label: 'Type', text: 'Web Application (JavaScript)' }],
    actions: [{ title: 'Preview', url: 'showcase/hurry_waiter/index.html' }]
  },
  {
    title: 'Ghost Leg Game',
    content: [{ label: 'Type', text: 'Web Application (JavaScript)' }],
    actions: [{ title: 'Preview', url: 'showcase/ghost_leg_game/index.html' }]
  },
  {
    title: 'School Management System (MSSQL Version)',
    content: [
      { label: 'Type', text: 'DataBase (Microsoft SQL Server)' },
      { label: 'Notices', text: 'Requires Microsoft SQL Server.' }
    ],
    actions: [{ title: 'Preview', url: 'showcase/offlineproject/SPD4514.zip' }]
  },
  {
    title: '24Eating',
    content: [
      { label: 'Type', text: 'Web app (cordova)' },
      { label: 'Notices', text: 'ITACHO example. Requires unknown sources install.' }
    ],
    actions: [{ title: 'Preview', url: 'showcase/offlineproject/app24eating-v0.1.5-final.apk' }]
  },
  {
    title: 'School Management System',
    content: [{ label: 'Type', text: 'MySQL and website' }],
    actions: [
      { title: 'Preview', url: 'showcase/database_work/index.html' },
      { title: 'Report', url: 'showcase/offlineproject/CCN2240_report.pdf' }
    ]
  },
  {
    title: 'English Vocabulary Game',
    content: [
      { label: 'Subject', text: 'ICT' },
      { label: 'Language', text: 'Chinese' }
    ],
    actions: [
      { title: 'Preview', url: 'showcase/school/index.html' },
      { title: 'Website', url: 'showcase/offlineproject/ICT-SBA.pdf' }
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
    actions: [{ title: 'Download', url: 'showcase/offlineproject/Integrated_Study.pdf' }]
  },
  {
    title: 'Case Study - Royal View Hotel',
    content: [
      { label: 'Subject', text: 'E-Commerce' },
      { label: 'Language', text: 'English' }
    ],
    actions: [{ title: 'Download', url: 'showcase/offlineproject/Case-Study-Royal-View-Hotel.pdf' }]
  },
  {
    title: 'Legal Case - Napster v A&M Records',
    content: [
      { label: 'Subject', text: 'Policy' },
      { label: 'Language', text: 'English' }
    ],
    actions: [{ title: 'Download', url: 'showcase/offlineproject/Case-Study-A&M-Records-v-napster-inc.pdf' }]
  },
  {
    title: 'E-Business Start-up Plan',
    content: [
      { label: 'Subject', text: 'E-Business' },
      { label: 'Language', text: 'English' }
    ],
    actions: [
      { title: 'Download', url: 'showcase/offlineproject/E-Business_group_project.pdf' },
      { title: 'Website', url: 'showcase/sample_website/index.html' }
    ]
  },
  {
    title: 'Cyberbullying Investigation',
    content: [
      { label: 'Subject', text: 'Liberal Studies' },
      { label: 'Language', text: 'Chinese' }
    ],
    actions: [{ title: 'Download', url: 'showcase/offlineproject/IES.pdf' }]
  }
]

const workingItems = [
  {
    company: 'SkyDreamCity Team',
    period: 'Apr 2025 - NOW',
    role: 'Chief Software Engineer',
    description: [
      'Architected PWA applications and SaaS platforms including YourAIApps.Online.',
      'Engineered AI-driven web automation agents utilizing Playwright.',
      'Building AI software warehouses for SMEs.'
    ]
  },
  {
    company: 'Swivel Software',
    period: 'Jul 2022 - Apr 2025',
    role: 'Head of IT',
    description: [
      'Led development of scalable B2B/B2C logistics SaaS platforms.',
      'Managed deployment pipelines and system reliability.'
    ]
  },
  {
    company: 'Swivel Software',
    period: 'Mar 2018 - Jun 2022',
    role: 'Software Engineer',
    description: [
      'Developed core logistics systems using TypeScript and Node.js.'
    ]
  },
  {
    company: 'Yakoo Technology Limited',
    period: 'Jun 2015 - Feb 2018',
    role: 'Programmer / Intern',
    description: [
      'Developed web applications and CMS systems.',
      'Gained foundational experience in PHP and full-stack development.'
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
