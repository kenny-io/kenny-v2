<script setup lang="ts">
import { defineProps } from 'vue';

interface Course {
  title: string;
  description: string;
  image: string;
  url: string;
  dateAdded: string;
}

const props = defineProps<{
  courses: Course[];
}>();
</script>
<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="mb-12 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Recent Courses</h2>
        <p class="text-gray-300 max-w-2xl mx-auto">Level up with my latest courses and workshops.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(course, index) in courses" :key="index" class="bg-[#020617] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <a :href="course.url" target="_blank" rel="noopener noreferrer" class="block">
            <div class="relative overflow-hidden h-48">
              <img :src="course.image" :alt="course.title" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-white line-clamp-2">{{ course.title }}</h3>
              <p class="text-gray-300 mb-4 line-clamp-3">{{ course.description }}</p>
              <div class="flex justify-between items-center">
                <span class="inline-flex items-center text-sm text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{{ new Date(course.dateAdded).toLocaleDateString() }}</span>
                </span>
                <!-- <span class="text-gray-400 font-medium hover:underline">View course</span> -->
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template> 