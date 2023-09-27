<script setup lang="ts">
import { ref } from 'vue';
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';
const searchQuery = ref('');

const query: QueryBuilderParams = {
  path: '/blog',
  sort: [{ date: -1 }],
  //   where: [{ title: { $regex: searchQuery, $options: 'i' } }],
};

console.log(JSON.stringify(searchQuery.value));

const articleCategories = ref([
  'web3',
  'External Articles',
  'Javascript',
  'DevRel',
  'Jokes',
  'AI',
]);
</script>

<template>
  <main>
    <section class="pt-20">
      <TheWrapper>
        <div class="flex text-[#ABABAB] px-16">
          <div class="w-3/4 mt-20">
            <h1 class="text-6xl font-semibold tracking-tighter text-[#fff]">
              Articles
            </h1>
            <p class="text-xl mt-6">
              Writing is a huge part of my content delivery approach. It's the
              fastest way I know to quickly share the things I've learnt in the
              course of my work and other activities.
            </p>
            <p class="text-xl mt-4">
              I have mostly written content that are published on other
              platforms, but I've also decided to write specifically for my blog
              here.
            </p>
          </div>
          <div class="w-2/4">
            <img
              class="w-[406px]"
              src="../assets/images/articles-hero-image.png"
            />
          </div>
        </div>
      </TheWrapper>
    </section>
    <section class="mb-24 top-0 pt-6 bg-black/80 backdrop-blur-lg">
      <TheWrapper>
        <div>
          <div
            class="w-full px-4 py-4 border border-[#383838] rounded-md relative flex items-center"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M12.6653 23.3306C18.5555 23.3306 23.3306 18.5555 23.3306 12.6653C23.3306 6.77501 18.5555 2 12.6653 2C6.77501 2 2 6.77501 2 12.6653C2 18.5555 6.77501 23.3306 12.6653 23.3306Z"
                  stroke="#626262"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25.9985 25.9971L20.1992 20.1979"
                  stroke="#626262"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <input
              class="bg-transparent rounded-xl w-full h-[45px] pl-4 py-3 text-[#999] text-2xl font-semibold tracking-[-0.84px] focus:border-none active:border-none focus-visible:border-none focus:outline-none placeholder:text-[#878787]"
              placeholder="Search articles"
              type="text"
              id="name"
              name="name"
              v-model="searchQuery"
              required
            />
          </div>
        </div>
        <div class="text-[#999] flex items-center py-4">
          <p class="text-base tracking-[-0.56px] mr-6">Filter by:</p>
          <TheChip
            v-for="articleCategory in articleCategories"
            :key="articleCategory"
          >
            {{ articleCategory }}
          </TheChip>
        </div>
      </TheWrapper>
    </section>
    <section class="mb-64">
      <TheWrapper>
        <div class="grid grid-cols-2 gap-4 gap-y-24">
          <ContentList :query="query" v-slot="{ list }">
            <TheCard
              v-for="article in list"
              :key="article._path"
              :article="article"
            />
          </ContentList>
        </div>
        <TheButton class="mx-auto mt-24">Show More</TheButton>
      </TheWrapper>
    </section>
  </main>
</template>
