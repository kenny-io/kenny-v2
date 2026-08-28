<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  link: string;
  github?: string;
  eyebrow: string;
  accent: string;
}

defineProps<{ projects: Project[] }>();
</script>

<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="mb-12 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 mb-3">Selected work</p>
        <h2 class="text-3xl md:text-5xl font-bold mb-4 text-white">Recent Projects</h2>
        <p class="text-gray-300 max-w-2xl mx-auto">Products and communities I’m building at the intersection of AI, developer experience, and real-world infrastructure.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="project in projects" :key="project.title" class="group bg-[#020617] rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1">
          <div :class="['h-2 bg-gradient-to-r', project.accent]"></div>
          <div class="p-7 flex flex-col h-[calc(100%-0.5rem)]">
            <p class="text-xs uppercase tracking-widest text-gray-400 mb-4">{{ project.eyebrow }}</p>
            <h3 class="text-2xl font-bold mb-3 text-white">{{ project.title }}</h3>
            <p class="text-gray-300 leading-relaxed flex-1">{{ project.description }}</p>
            <div class="flex items-center gap-5 mt-7">
              <a :href="project.link" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-white font-medium hover:text-cyan-300 transition-colors">
                Visit project <Icon name="ph:arrow-up-right-bold" class="w-4 h-4" />
              </a>
              <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors" :aria-label="`View ${project.title} on GitHub`">
                <Icon name="ph:github-logo-duotone" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
