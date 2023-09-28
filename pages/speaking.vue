<script setup lang="ts">
import { ref } from 'vue';
import TheSearch from '~/components/TheSearch.vue';
const talks = await queryContent('talks').sort({ title: 1 }).find();

const talkCategoriesFromPosts = Array.from(
  new Set(
    talks.flatMap((talk) =>
      talk.category.map((cat: { name: string }) => cat.name)
    )
  )
);
const talkCategories = ref<string[]>([
  'web3',
  'fintech',
  'web',
  'devrel',
  'jamstack',
  'AI',
]);
</script>

<template>
  <main>
    <section class="pt-20">
      <TheWrapper>
        <div class="flex text-[#ABABAB] px-16">
          <div class="w-3/4 mt-20">
            <h1 class="text-8xl font-semibold tracking-tighter text-[#fff]">
              Speaking
            </h1>
            <p class="text-xl mt-6">
              I have spoken at a couple of conferences, global and home. If
              you'd like to have me come speak at your conference or do a
              private workshop at your work. Come say hi
            </p>
            <TheButton>Invite Me to your Awesome Event</TheButton>
          </div>
          <div class="w-2/4">
            <img
              class="w-[406px]"
              src="../assets/images/speaking-hero-image.png"
            />
          </div>
        </div>
      </TheWrapper>
    </section>
    <section class="mb-24 sticky top-0 pt-6 bg-black/80 backdrop-blur-lg">
      <TheWrapper>
        <TheSearch
          :content="talks"
          :categories="talkCategories"
          :button-text="'View Talk'"
        />
      </TheWrapper>
    </section>
  </main>
</template>
