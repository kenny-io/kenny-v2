<template>
  <section class="w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 py-20">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
      <!-- Book Cover -->
      <div class="flex-1 flex justify-center items-center relative">
        <div class="rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-primary/40 to-accent/30 p-2">
          <img src="/images/book/netlify-cover.jpeg" alt="Web Development on Netlify Book Cover" class="w-[32rem] md:w-[40rem] rounded-xl object-cover" />
        </div>
      </div>
      <!-- Book Details -->
      <div class="flex-1 flex flex-col justify-center">
        <!-- Testimonial -->
        <div class="mb-6 bg-gray-900/80 rounded-xl shadow p-6">
          <div class="flex items-center mb-2">
            <span class="text-primary-400 text-lg mr-2">★★★★★</span>
          </div>
          <p class="text-gray-200 italic mb-2">
            "This book is designed to help developers of all skill levels build, deploy, optimize, and scale web applications efficiently on the Netlify platform."
          </p>
          <span class="text-sm text-gray-400">— Ekene Eze, Author</span>
        </div>
        <!-- Book Info -->
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Web Development on Netlify</h2>
        <p class="text-lg text-gray-300 mb-8 max-w-xl">
          A practical book that teaches you how to build, deploy, optimize, and scale modern web applications using Netlify. Perfect for developers of all skill levels.
        </p>
        <div class="flex gap-4">
          
          <a href="https://packt.link/toh2U" target="_blank" rel="noopener" class="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-white hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400">Buy on Amazon</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script logic needed for static showcase
</script>

<style scoped>
/* Responsive tweaks if needed */
@media (max-width: 768px) {
  .max-w-6xl {
    flex-direction: column;
    gap: 2rem;
  }
}
</style> 