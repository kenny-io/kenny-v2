<script setup lang="ts">
import { defineProps } from 'vue';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
}

const props = defineProps<{ projects: Project[] }>();
</script>
<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="mb-12 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Recent Projects</h2>
        <p class="text-gray-300 max-w-2xl mx-auto">A selection of my latest work and initiatives.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <a v-for="(project, index) in projects" :key="index" :href="project.link" target="_blank" rel="noopener" class="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 block focus:outline-none focus:ring-2 focus:ring-primary-400 group relative">
          <div class="relative overflow-hidden h-48">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" @click.stop class="absolute top-2 right-2 bg-gray-800 bg-opacity-80 rounded-full p-2 hover:bg-primary-500 transition-colors" title="View on GitHub">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z"/>
              </svg>
            </a>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 text-white">{{ project.title }}</h3>
            <p class="text-gray-300 mb-4">{{ project.description }}</p>
            <span class="inline-flex items-center text-primary-400 font-medium hover:underline">
              Explore Project
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template> 