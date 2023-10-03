<script setup lang="ts">
import { ref, computed, toRefs } from 'vue';

const props = defineProps({
  content: Object,
  categories: Array,
  buttonText: String,
});

const { content, categories } = toRefs(props);

const localSearchQuery = ref('');
const selectedCategory = ref('') as any;
// Use provided categories or default to empty array
const articleCategories = categories || (ref([]) as any);

const filteredContent = computed(() => {
  // Use provided content or default to empty array
  let results = content?.value || [];

  if (localSearchQuery.value.trim()) {
    results = results.filter(
      (item: any) =>
        item.title
          ?.toLowerCase()
          .includes(localSearchQuery.value.toLowerCase()) ||
        item.description
          ?.toLowerCase()
          .includes(localSearchQuery.value.toLowerCase())
    );
  }

  if (selectedCategory.value) {
    results = results.filter((item: any) =>
      item.category.some(
        (cat: { name: string }) => cat.name === selectedCategory.value
      )
    );
  }

  return results;
});

const clearSelectedCategory = () => {
  selectedCategory.value = '';
};
</script>
<template>
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
        v-model="localSearchQuery"
        class="bg-transparent rounded-xl w-full h-[45px] pl-4 py-3 text-[#999] text-2xl font-semibold tracking-[-0.84px] focus:border-none active:border-none focus-visible:border-none focus:outline-none placeholder:text-[#878787]"
        placeholder="Search"
        type="text"
        required
      />
    </div>

    <div class="text-[#999] flex items-center py-4">
      <p class="text-base tracking-[-0.56px] mr-6">Filter by:</p>
      <TheChip
        v-for="articleCategory in articleCategories"
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

    <div class="grid grid-cols-2 gap-4 gap-y-24">
      <TheCard
        :buttonText="buttonText!"
        v-for="article in filteredContent"
        :key="article._path"
        :article="article"
      />
    </div>

    <TheButton class="mx-auto mt-24">Show More</TheButton>
  </div>
</template>
