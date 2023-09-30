<script setup lang="ts">
import { ref, computed, toRefs } from 'vue';

const props = defineProps({
  content: Object,
  categories: Array,
  buttonText: String,
});

const { content, categories } = toRefs(props);

const localSearchQuery = ref('');
// infer the type of the categories prop

const selectedCategory = ref('') as any;

const talkCategories = categories || (ref([]) as any); // Use provided categories or default to empty array

const filteredContent = computed(() => {
  // Use provided content or default to empty array

  // sort by date
  let results = content?.value || [];
  results.sort((a: any, b: any) => {
    // assuming date is in YYYY-MM-DD format, you can use new Date(dateString) to convert it into a Date object
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

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
        <TheSearchIcon />
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
        v-for="talk in talkCategories"
        :key="talk"
        @click="selectedCategory = talk"
      >
        {{ talk }}
      </TheChip>
      <button
        v-if="selectedCategory"
        @click="clearSelectedCategory"
        class="ml-4 px-3 py-1 rounded-md bg-gray-200 text-gray-800"
      >
        Clear
      </button>
    </div>

    <div>
      <div
        v-for="talk in filteredContent"
        class="border-b cursor-pointer group py-10 border-[#434343]"
      >
        <div class="flex items-center gap-7">
          <h2
            class="group-hover:text-white transition duration-300 ease-in-out text-[#898989] text-6xl tracking-[-4.16px]"
          >
            {{ talk.title }}
          </h2>
          <TheChip
            v-if="talk.status === 'upcoming'"
            class="text-green-400 border-green-300"
            >Upcoming</TheChip
          >
        </div>
      </div>
    </div>
    <TheButton class="mx-auto mt-24">Show More</TheButton>
  </div>
</template>
