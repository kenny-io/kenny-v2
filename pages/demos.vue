<script setup lang="ts">
import { onMounted, ref } from 'vue';
import demosData from '../content/demos.json'; // Import the JSON file
interface Demo {
  title: string;
  description: string;
  date: string;
  hasSite: boolean;
  hasPost?: boolean;
  site: string;
  github: string;
  post?: string;
}

const demos = ref<Demo[]>([]);
// Fetch demos data from the imported JSON file
function fetchDemos() {
  demos.value = demosData.demos;
}
onMounted(() => {
  fetchDemos();
});
</script>
<template>
  <main>
    <section class="pt-20">
      <TheWrapper>
        <div class="flex flex-col items-center md:flex-row text-[#ABABAB] px-16">
          <div class="md:w-3/4 w-full md:mt-0 mt-6 order-2 md:order-none">
            <h1 class="md:text-left text-center text-4xl md:text-6xl font-semibold tracking-tighter text-[#fff]">Demos
            </h1>
            <p class="text-lg md:text-xl mt-6 text-center md:text-left">
              I have spoken at a couple of conferences, global and home. If you'd like to have me come speak
              at your conference
            </p>
          </div>
          <div class="w-1/2 md:w-2/4">
            <img class="w-[406px]" src="../assets/images/demos-hero-image.png" />
          </div>
        </div>
      </TheWrapper>
    </section>
    <section class=" mt-32 md:mt-12 mb-40">
      <TheWrapper>
        <div>
          <div class="border-b py-5 md:py-10 border-[#434343]">
            <div class="flex items-center gap-7">
              <h2 class="hover:text-white text-[#898989] text-4xl md:text-6xl tracking-tighter md:tracking-[-4.16px]">Pets
                Can Create</h2>
            </div>
          </div>
          <div class="border-b py-5 md:py-10 border-[#434343]">
            <div class="flex items-center gap-7">
              <h2 class="hover:text-white text-[#898989] text-4xl md:text-6xl tracking-tighter md:tracking-[-4.16px]">
                Local news site with Next.js a...</h2>
            </div>
          </div>
          <div class="border-b py-5 md:py-10 border-[#434343]">
            <div class="flex items-center gap-7">
              <h2 class="hover:text-white text-[#898989] text-4xl md:text-6xl tracking-tighter md:tracking-[-4.16px]">
                Leveraging community for
                product growth</h2>
            </div>
          </div>
        </div>
        <TheButton class="mx-auto">Show All</TheButton>
      </TheWrapper>
    </section>
    <section class="mt-12 mb-40">
      <TheWrapper>
        <div>
          <!-- Loop through the demos from the JSON file -->
          <div v-for="demo in demos" :key="demo.title" class="border-b py-10 border-[#434343]">
            <div class="flex items-center gap-7">
              <h2 class="hover:text-white text-[#898989] text-6xl tracking-[-4.16px]">
                {{ demo.title }}
              </h2>
            </div>
          </div>
        </div>
        <TheButton class="mx-auto">Show All</TheButton>
      </TheWrapper>
    </section>
  </main>
</template>
