<template>
  <div class="print-view">
    <!-- Header -->
    <header class="header">
      <h1 class="name">Chan Kwan Wing <span class="nickname">(Ken)</span></h1>
      <div class="contact-info">
        <div class="contact-item">
          <Icon name="ph:envelope-simple-bold" class="icon" />
          kenchanjp2024@gmail.com
        </div>
        <div class="contact-item">
          <Icon name="ph:phone-bold" class="icon" />
          (852) 6590 9479
        </div>
        <div class="contact-item">
          <Icon name="ph:globe-simple-bold" class="icon" />
          kwanwing.hk
        </div>
      </div>
    </header>

    <!-- Professional Summary -->
    <section class="section">
      <h2 class="section-title">Professional Summary</h2>
      <p class="summary-text text-justify">
        Chief Software Engineer and technical founder specializing in full-stack TypeScript development. Focused on AI automation, leveraging Playwright and local LLM orchestration to deliver intelligent, production-ready web applications. Expert in architecting scalable SaaS platforms and PWA applications.
      </p>
    </section>

    <div class="main-grid">
      <!-- Left Column: Experience -->
      <div class="left-col">
        <section class="section">
          <h2 class="section-title">Experience</h2>
          <div v-for="item in workingItems" :key="item.company + item.role" class="item timeline-item">
            <div class="item-header">
              <h3 class="item-role">{{ item.role }}</h3>
              <span class="item-period">{{ item.period }}</span>
            </div>
            <div class="item-company">{{ item.company }}</div>
            <ul class="item-list">
              <li v-for="desc in item.description" :key="desc">{{ desc }}</li>
            </ul>
          </div>
        </section>

        <section class="section">
          <h2 class="section-title">Academic History</h2>
          <div v-for="item in educationItems" :key="item.role" class="item">
            <div class="item-header">
              <h3 class="item-role font-bold">{{ item.role }}</h3>
              <span class="item-period">{{ item.period }}</span>
            </div>
            <div class="item-company">{{ item.company }}</div>
            <p v-if="item.description && item.description.length" class="item-desc">
              {{ item.description[0] }}
            </p>
          </div>
        </section>
      </div>

      <!-- Right Column: Skills -->
      <div class="right-col">
        <section class="section">
          <h2 class="section-title">Technical Arsenal</h2>
          <div v-for="(skills, category) in skillGroups" :key="category" class="skill-group">
            <h3 class="skill-category">{{ category.replace(/([A-Z])/g, ' $1').trim() }}</h3>
            <div class="skills-list">
              <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  workingItems: Array,
  educationItems: Array,
  skillGroups: Object
})
</script>

<style scoped>
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
  margin-bottom: 2rem;
}

.name {
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.nickname {
  color: #666;
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-weight: 600;
  font-size: 0.9rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  font-size: 1.1rem;
}

.section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  color: #000;
}

.summary-text {
  font-size: 1rem;
  color: #333;
}

.main-grid {
  display: grid;
  grid-template-cols: 2.2fr 1fr;
  gap: 3rem;
}

.item {
  margin-bottom: 1.5rem;
  break-inside: avoid;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
}

.item-role {
  font-size: 1.1rem;
  font-weight: 700;
}

.item-period {
  font-size: 0.8rem;
  font-weight: 700;
  color: #666;
}

.item-company {
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.5rem;
}

.item-list {
  padding-left: 1.2rem;
  margin-top: 0.5rem;
}

.item-list li {
  font-size: 0.9rem;
  color: #444;
  margin-bottom: 0.25rem;
}

.item-desc {
  font-size: 0.9rem;
  color: #555;
}

.skill-group {
  margin-bottom: 1.5rem;
  break-inside: avoid;
}

.skill-category {
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #666;
  margin-bottom: 0.75rem;
  letter-spacing: 0.05em;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  font-size: 0.75rem;
  font-weight: 700;
  background: #f4f4f4;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
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
