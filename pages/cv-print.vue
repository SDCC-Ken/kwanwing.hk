<template>
  <div class="print-wrapper">

    <div class="print-view">
      <!-- Header -->
      <header class="header my-5">
        <div class="header-main">
          <div class="header-text">
            <h1 class="name">Chan Kwan Wing <span class="nickname">(Ken)</span></h1>
            <div class="contact-info">
              <AuiBadge variant="neutral" style-name="material" size="sm" class="font-bold border">
                <Icon name="ph:envelope-simple-bold" class="mr-2" />
                kenchanjp2024@gmail.com
              </AuiBadge>
              <AuiBadge variant="neutral" style-name="material" size="sm" class="font-bold border">
                <Icon name="ph:phone-bold" class="mr-2" />
                (852) 6590 9479
              </AuiBadge>
              <AuiBadge variant="neutral" style-name="material" size="sm" class="font-bold border">
                <Icon name="ph:globe-simple-bold" class="mr-2" />
                kwanwing.me
              </AuiBadge>
            </div>
          </div>
          <div class="header-qr">
            <img src="/qrcode.jpg" alt="Scan to save Ken's contact" />
            <span class="qr-label">Save Contact</span>
          </div>
        </div>
      </header>

      <!-- Professional Summary -->
      <section class="section my-5">
        <AuiSeparator label="Professional Summary" style-name="material"
          class="mb-6 font-black uppercase tracking-widest text-xs" />
        <p class="summary-text text-justify">
          Chief Software Engineer and technical founder specializing in full-stack TypeScript development. Focused on AI
          automation, leveraging Playwright and local LLM orchestration to deliver intelligent, production-ready web
          applications. Expert in architecting scalable SaaS platforms and PWA applications.
        </p>
      </section>

      <div class="main-grid">
        <!-- Left Column: Experience -->
        <div class="left-col mb-10">
          <section class="section">
            <AuiSeparator label="Experience" style-name="material"
              class="mb-8 font-black uppercase tracking-widest text-xs" />

            <AuiTimeline :items="workingItems" style-name="material" size="sm" class="mt-4">
              <template #title="{ item }">
                <div class="font-bold text-lg text-black leading-tight">{{ item.role }}</div>
                <div class="font-black text-sm text-primary-700 uppercase tracking-tight">{{ item.company }}</div>
                <div class="text-[10px] font-bold text-gray-500 mt-0.5">{{ item.period }}</div>
              </template>
              <template #description="{ item }">
                <ul class="item-list mt-2">
                  <li v-for="desc in item.description" :key="desc">{{ desc }}</li>
                </ul>
              </template>
            </AuiTimeline>
          </section>

          <section class="section">
            <AuiSeparator label="Academic History" style-name="material"
              class="mb-8 font-black uppercase tracking-widest text-xs" />

            <AuiTimeline :items="educationItems" style-name="material" size="sm" class="mt-4">
              <template #title="{ item }">
                <div class="font-bold text-lg text-black leading-tight">{{ item.role }}</div>
                <div class="font-black text-sm text-gray-800 uppercase tracking-tight">{{ item.company }}</div>
                <div class="text-[10px] font-bold text-gray-500 mt-0.5">{{ item.period }}</div>
              </template>
              <template #description="{ item }">
                <p v-if="item.description && item.description.length" class="text-sm text-gray-600 mt-1 italic">
                  {{ item.description[0] }}
                </p>
              </template>
            </AuiTimeline>
          </section>
        </div>

        <!-- Right Column: Skills -->
        <div class="right-col">
          <section class="section">
            <AuiSeparator label="Technical Arsenal" style-name="material"
              class="mb-8 font-black uppercase tracking-widest text-xs" />

            <div v-for="(skills, category) in skillGroups" :key="category" class="skill-group mb-8">
              <h3 class="skill-category text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-3">
                {{ category.replace(/([A-Z])/g, ' $1').trim() }}
              </h3>
              <div class="skills-list flex flex-wrap gap-2">
                <AuiBadge v-for="skill in skills" :key="skill" variant="neutral" style-name="material" size="xs"
                  class="font-black border border-gray-200">
                  {{ skill }}
                </AuiBadge>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Define shared data (could be moved to a composable in a real app)
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

definePageMeta({
  layout: false
})
</script>

<style>
/* Global print styles to ensure clean PDF */
@page {
  size: A4;
  margin: 1cm;
}

body {
  background: white !important;
  color: black !important;
}

@media print {
  .print-container {
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: none;
  }

  /* Force white background and black text on all elements */
  body,
  html,
  .print-container {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    background-color: white !important;
    color: black !important;
  }
}

.print-view {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: #1a1a1a;
  line-height: 1.5;
  background: white;
  padding: 0;
  width: 100%;
}

.header {
  border-bottom: 2px solid #000;
  padding-bottom: 1.5rem;
  margin-bottom: 2.5rem;
}

.header-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.header-text {
  flex: 1;
}

.header-qr {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.header-qr img {
  width: 80px;
  height: 80px;
  padding: 4px;
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
}

.qr-label {
  font-size: 8px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #666;
}

.name {
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  line-height: 1;
}

.nickname {
  color: #666;
  font-size: 1.5rem;
  margin-left: 0.5rem;
  font-weight: 400;
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.section {
  margin-bottom: 2.5rem;
}

.summary-text {
  font-size: 0.95rem;
  color: #333;
}

.main-grid {
  display: grid;
  grid-template-cols: 2.2fr 1fr;
  gap: 3rem;
}

.item-list {
  padding-left: 1.2rem;
  list-style-type: disc;
}

.item-list li {
  font-size: 0.85rem;
  color: #444;
  margin-bottom: 0.25rem;
}

.text-justify {
  text-align: justify;
}

@media print {
  .print-view {
    padding: 0;
  }
}
</style>
