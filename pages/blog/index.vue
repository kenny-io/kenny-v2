<script setup lang="ts">
import { ref, computed } from 'vue';

const articleCategories = ref([
  'nuxt',
  'netlify',
  'web',
  'devrel',
  'cdn',
  'rendering',
]);

const articles = ref([]);
const searchQuery = ref('');
const selectedCategory = ref('');

const loadArticles = async () => {
  try {
    const fetchedArticles = await queryContent('blog')
      .sort({ title: 1 })
      .find();
    articles.value = fetchedArticles;
  } catch (error) {
    console.error('Error loading articles:', error);
  }
};

loadArticles();

const filteredArticles = computed(() => {
  if (!searchQuery.value.trim() && !selectedCategory.value.trim())
    return articles.value;

  return articles.value.filter((article: any) => {
    const matchesSearchQuery =
      !searchQuery.value.trim() ||
      article.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      article.content?.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchesSelectedCategory =
      !selectedCategory.value.trim() ||
      article.tags?.includes(selectedCategory.value);

    return matchesSearchQuery && matchesSelectedCategory;
  });
});

const clearSelectedCategory = () => {
  selectedCategory.value = '';
};
</script>

<template>
  <main>
    <section class="pt-20">
      <TheWrapper>
        <div class="flex text-[#ABABAB] px-16">
          <div class="w-3/4 mt-20">
            <h1 class="text-6xl font-semibold tracking-tighter text-[#fff]">
              Blog
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
              src="../../assets/images/articles-hero-image.png"
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
              <TheSearchIcon />
            </div>
            <input
              class="bg-transparent rounded-xl w-full h-[45px] pl-4 py-3 text-[#999] text-2xl font-semibold tracking-[-0.84px] focus:border-none active:border-none focus-visible:border-none focus:outline-none placeholder:text-[#878787]"
              placeholder="Search articles"
              type="text"
              id="name"
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
            @click="selectedCategory = articleCategory"
          >
            {{ articleCategory }} </TheChip
          ><button
            v-if="selectedCategory"
            @click="clearSelectedCategory"
            class="ml-4 px-3 py-1 rounded-md bg-gray-200 text-gray-800"
          >
            Clear
          </button>
        </div>
      </TheWrapper>
    </section>
    <section class="mb-64">
      <TheWrapper>
        <div class="grid grid-cols-2 gap-4 gap-y-24">
          <TheCard
            v-for="article in filteredArticles"
            :key="article"
            :article="article"
            :button-text="'Read More'"
          />
        </div>
        <TheButton class="mx-auto mt-24">Show More</TheButton>
      </TheWrapper>
    </section>
  </main>
</template>
