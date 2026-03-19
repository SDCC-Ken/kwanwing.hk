<template>
  <div class="print-wrapper">
    <CvPrintView 
      :working-items="workingItems" 
      :education-items="educationItems" 
      :skill-groups="skillGroups" 
    />
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
  body, html, .print-container {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    background-color: white !important;
    color: black !important;
  }
}
</style>
