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
          Senior Full-Stack Engineer & Technical Lead specializing in high-performance TypeScript ecosystems (Node.js & Vue.js). With a proven track record of architecting scalable SaaS platforms and integrating AI automation (Playwright, local LLMs), I am looking to bring my 0-to-1 system design experience and hands-on coding expertise to a forward-thinking, remote-friendly engineering team.
        </p>
      </section>

      <div class="main-grid">
        <!-- Left Column: Experience -->
        <div class="left-col mb-10">
          <section class="section">
            <AuiSeparator label="Experience" style-name="material"
              class="mb-8 font-black uppercase tracking-widest text-xs" />

            <AuiTimeline :items="workingItems" style-name="material" size="sm" class="mt-4 cv-timeline">
              <template #title="{ item }">
                <div class="font-bold text-lg text-black leading-tight">{{ item.role }}</div>
                <div class="font-black text-sm text-primary-700 uppercase tracking-tight">{{ item.company }}</div>
                <div class="text-[10px] font-bold text-gray-500 mt-0.5">{{ item.period }}</div>
              </template>
              <template #description="{ item }">
                <ul class="item-list mt-2">
                  <li v-for="desc in item.description" :key="desc">{{ desc }}</li>
                  <li v-if="showSalary && item.currentSalary" class="mt-2 list-none!">
                    <div
                      class="inline-flex items-center text-[10px] font-black uppercase text-primary-700 bg-primary-50 px-2 py-0.5 rounded border border-primary-200">
                      Current Salary: {{ item.currentSalary }}
                    </div>
                  </li>
                </ul>
              </template>
            </AuiTimeline>
          </section>

          <section class="section">
            <AuiSeparator label="Academic History" style-name="material"
              class="mb-8 font-black uppercase tracking-widest text-xs" />

            <AuiTimeline :items="educationItems" style-name="material" size="sm" class="mt-4 cv-timeline">
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

          <section v-if="showSalary" class="section">
            <AuiSeparator label="Salary Expectations" style-name="material"
              class="mb-8 font-black uppercase tracking-widest text-xs" />
            <div class="bg-gray-50 border border-gray-200 p-4 rounded-lg">
              <div class="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Expected Salary</div>
              <div class="text-xl font-black text-black">Negotiable / Competitive</div>
              <div class="text-[10px] font-bold text-gray-400 mt-2 italic">
                Open to global remote opportunities. Strong preference for hybrid/remote work arrangements.
              </div>
              <div class="mt-3 pt-3 border-t border-gray-200">
                <div class="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Availability</div>
                <div class="text-sm font-black text-black">Available from May 2026</div>
              </div>
            </div>
          </section>
          <section v-else class="section">
            <div class="bg-gray-50 border border-gray-200 p-4 rounded-lg">
              <div class="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Availability & Preference</div>
              <div class="text-sm font-black text-black mb-1">Available from May 2026</div>
              <div class="text-[10px] font-bold text-gray-400 italic">Open to global remote opportunities. Strong preference for hybrid/remote work arrangements.</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const showSalary = computed(() => route.query.salary === 'true')

// Define shared data (could be moved to a composable in a real app)
const workingItems = [
  {
    company: 'SkyDreamCity Team',
    period: 'Apr 2025 - NOW',
    role: 'Chief Software Engineer',
    currentSalary: 'Based on the project',
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
    currentSalary: 'HKD35,000 * 13 (exclude MPF)',
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

/* ── Page-break rules ────────────────────────────── */

/* Each timeline item (job / degree) must not split across pages */
.cv-timeline>div {
  break-inside: avoid;
  page-break-inside: avoid;
}

/* Skill groups in the right column must not split */
.skill-group {
  break-inside: avoid;
  page-break-inside: avoid;
}

/* Section separator (heading line) must stick to the content below it */
.section>*:first-child {
  break-after: avoid;
  page-break-after: avoid;
}

/* Availability / salary boxes must not split */
.section>div[class*="bg-gray"] {
  break-inside: avoid;
  page-break-inside: avoid;
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
