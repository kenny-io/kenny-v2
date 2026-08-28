<script setup lang="ts">
interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  link: string;
}

defineProps<{ experiences: Experience[] }>();
</script>

<template>
  <section class="py-20 bg-[#020617]">
    <div class="container mx-auto px-4 max-w-5xl">
      <div class="mb-12">
        <p class="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 mb-3">Experience</p>
        <h2 class="text-3xl md:text-5xl font-bold text-white">Leading developer experience and building products</h2>
      </div>
      <div class="divide-y divide-white/10 border-y border-white/10">
        <a v-for="experience in experiences" :key="`${experience.company}-${experience.role}`" :href="experience.link" target="_blank" rel="noopener noreferrer" class="grid md:grid-cols-[1fr_1.6fr] gap-4 md:gap-10 py-8 group">
          <div>
            <p class="text-sm text-gray-400 mb-2">{{ experience.period }}</p>
            <h3 class="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{{ experience.role }}</h3>
            <p class="text-gray-300">{{ experience.company }}</p>
          </div>
          <p class="text-gray-300 leading-relaxed">{{ experience.description }}</p>
        </a>
      </div>
    </div>
  </section>
</template>
