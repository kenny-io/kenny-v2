<script setup lang="ts">
import { onMounted, ref } from 'vue';
import demosData from '../content/demos.json'; // Import the JSON file
import useDateFormatter from '../composables/useDate';
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
const { formatDate } = useDateFormatter();
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
        <div
          class="flex flex-col items-center md:flex-row text-[#ABABAB] px-16"
        >
          <div class="md:w-3/4 w-full md:mt-0 mt-6 order-2 md:order-none">
            <h1
              class="md:text-left text-center text-4xl md:text-6xl font-semibold tracking-tighter text-[#fff]"
            >
              Demos
            </h1>
            <p class="text-lg md:text-xl mt-6 text-center md:text-left">
              I create Proof of Concepts (POCs) for various purposes, with the
              primary intent being to validate an idea or teach a concept I find
              interesting. <br /><br />
              While some I've purchased a domain to host some of them, but
              definitely not all so you may come across broken links along the
              way 😃
            </p>
          </div>
          <div class="w-1/2 md:w-2/4">
            <img
              class="w-[406px]"
              src="../assets/images/demos-hero-image.png"
            />
          </div>
        </div>
      </TheWrapper>
    </section>

    <section class="mt-12 mb-40">
      <TheWrapper>
        <!-- <div>
          <div
            v-for="demo in demos"
            :key="demo.title"
            class="border-b py-10 border-[#434343]"
          >
            <div class="flex items-center gap-7">
              <h2
                class="hover:text-white text-[#898989] text-6xl tracking-[-4.16px]"
              >
                {{ demo.title }}
              </h2>
            </div>
          </div>
        </div> -->
        <div>
          <div
            v-for="demo in demos"
            :key="demo.title"
            class="border-b cursor-pointer group py-10 border-[#434343] relative"
          >
            <div class="flex items-center gap-7">
              <h2
                class="group-hover:text-white transition duration-300 ease-in-out text-[#898989] text-6xl tracking-[-4.16px] w-5/6"
              >
                {{ demo.title }}
              </h2>
            </div>
            <div class="transition-opacity duration-300">
              <p class="mt-8 w-3/4 text-[#898989]">
                {{ demo.description || 'Something' }}
              </p>

              <div class="flex items-center gap-7 text-[#898989] mt-8">
                <h2>{{ formatDate(demo.date) }}</h2>
                <a :href="demo?.github">GitHub</a>
                <a v-if="demo.hasSite" :href="demo?.site">Preview</a>
              </div>
            </div>
          </div>
        </div>
        <TheButton class="mx-auto">Show All</TheButton>
      </TheWrapper>
    </section>
  </main>
</template>
