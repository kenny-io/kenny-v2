<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// Fetch Articles from Nuxt Content
const nuxtContentCategories = ref(['netlify', 'webdev', 'productivity']);

const searchQuery = ref('');
const selectedCategory = ref('');
const externalPostsFromNuxtContent = await queryContent('externals')
  .sort({ title: 1 })
  .find();

// Fetch Articles from Hashnode v2 API
const hashnodeArticles = ref([]);

// Function to fetch articles from Hashnode v2 API
const fetchHashnodeArticles = async () => {
  try {
    const response = await fetch('https://gql.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'xxxxxxxxxxxxxxxxx',
      },
      body: JSON.stringify({
        query: `
          query Publication {
            publication(host: "kenny-io.hashnode.dev") {
              isTeam
              title
              posts(first: 10) {
                edges {
                  node {
                    title
                    brief
                    url
                    coverImage{
                      url
                    }
                    tags {
                      name
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    });

    const data = await response.json();
    console.log(data);

    hashnodeArticles.value = data.data.publication.posts.edges.map(
      (edge: any) => edge.node
    );
  } catch (error) {
    console.error('Error fetching Hashnode articles:', error);
  }
};

const articles = computed(() => {
  // Combine articles from both sources
  const combinedArticles = [
    ...externalPostsFromNuxtContent,
    ...hashnodeArticles.value,
  ];

  // Filter articles based on search query and selected category
  const filtered = combinedArticles.filter((article) => {
    const matchesSearchQuery =
      !searchQuery.value.trim() ||
      article.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      article.content
        ?.toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      article.brief?.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchesSelectedCategory =
      !selectedCategory.value.toLowerCase().trim() ||
      article.tags?.includes(selectedCategory.value) ||
      article.tags?.some((tag: any) => tag.name === selectedCategory.value);

    return matchesSearchQuery && matchesSelectedCategory;
  });

  // Sort articles by date in descending order (newest first)
  return filtered.sort((a, b) => {
    const dateA = new Date(a.date || a.publishedAt);
    const dateB = new Date(b.date || b.publishedAt);
    return dateB - dateA;
  });
});

const clearSelectedCategory = () => {
  selectedCategory.value = '';
};

// Fetch articles from Hashnode when the component is mounted
onMounted(() => {
  fetchHashnodeArticles();
});
</script>

<template>
  <main>
    <section class="pt-20">
      <TheWrapper>
        <div
          class="flex flex-col items-center md:flex-row md:justify-center text-[#ABABAB] px-16"
        >
          <div class="md:w-3/4 md:mt-0 mt-6 order-2 md:order-none">
            <h1
              class="md:text-left text-center text-4xl md:text-6xl font-semibold tracking-tighter text-[#fff]"
            >
              Articles
            </h1>
            <p
              class="text-base w-[350px] sm:w-full md:text-xl mt-6 text-center md:text-left"
            >
              Writing is a huge part of my content delivery approach. It's the
              fastest way I know to quickly share the things I've learnt in the
              course of my work and other activities.
            </p>
            <p
              class="text-base w-[350px] sm:w-full md:text-xl text-center md:text-left mt-4"
            >
              I have mostly written content that are published on other
              platforms, but I've also decided to write specifically for my blog
              here.
            </p>
          </div>
          <div class="w-1/2 md:w-2/4">
            <img
              class="w-[406px]"
              src="../assets/images/articles-hero-image.png"
            />
          </div>
        </div>
      </TheWrapper>
    </section>
    <section
      class="z-20 mb-24 sticky top-0 pt-20 md:pt-6 bg-black/80 backdrop-blur-lg"
    >
      <TheWrapper>
        <div>
          <div
            class="w-full px-4 py-2 md:py-4 border border-[#383838] rounded-md relative flex items-center"
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
              class="bg-transparent rounded-xl w-full h-[45px] pl-4 py-3 text-[#999] text-xl md:text-2xl font-semibold tracking-[-0.84px] focus:border-none active:border-none focus-visible:border-none focus:outline-none placeholder:text-[#878787]"
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
          <p class="text-base tracking-[-0.56px] mr-6 whitespace-nowrap">
            Filter by:
          </p>
          <div class="flex overflow-x-scroll scrollbar-hide snap-x">
            <TheChip
              class="snap-start scroll-ml-4"
              v-for="articleCategory in nuxtContentCategories"
              :key="articleCategory"
              @click="selectedCategory = articleCategory"
            >
              {{ articleCategory }}
            </TheChip>
            <button
              v-if="selectedCategory"
              @click="clearSelectedCategory"
              class="ml-4 px-3 py-1 rounded-md bg-gray-200 text-gray-800"
            >
              Clear
            </button>
          </div>
        </div>
      </TheWrapper>
    </section>
    <section class="mb-64 z-10">
      <TheWrapper>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-10 md:gap-y-24">
          <TheCard
            v-for="article in articles"
            :key="article._path"
            :article="article"
            :button-text="'Read More'"
          />
        </div>
        <!-- <TheButton class="mx-auto mt-24">Show More</TheButton> -->
      </TheWrapper>
    </section>
  </main>
</template>
