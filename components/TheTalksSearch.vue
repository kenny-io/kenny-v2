<script setup lang="ts">
import { ref, computed, toRefs } from 'vue';
import useDateFormatter from '~/composables/useDate';
const props = defineProps({
  content: Object,
  categories: Array,
  buttonText: String,
});
const { content, categories } = toRefs(props);
const showDetails = ref<{ [key: string]: boolean }>({});
const toggleDetails = (title: string) => {
  showDetails.value[title] = !showDetails.value[title];
};
const { formatDate } = useDateFormatter();
const localSearchQuery = ref('');
const selectedCategory = ref('') as any;
const talkCategories = categories || (ref([]) as any);
const filteredContent = computed(() => {
  // sort by date
  let results = content?.value || [];
  results.sort((a: any, b: any) => {
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
  <div
    class="mb-24 pt-6 bg-black/80 backdrop-blur-lg flex flex-col items-center"
  >
    <div
      class="w-full px-4 py-4 border border-[#383838] rounded-md flex items-center justify-center"
    >
      <div>
        <TheSearchIcon />
      </div>
      <input
        v-model="localSearchQuery"
        class="bg-transparent rounded-xl w-full h-[45px] pl-4 py-3 text-[#999] text-2xl font-semibold tracking-[-0.84px] focus:border-none active:border-none focus-visible:border-none focus:outline-none placeholder:text-[#878787] md:text-left"
        placeholder="Search"
        type="text"
        required
      />
    </div>

    <div
      class="text-[#999] flex flex-col md:flex-row items-center justify-center py-4 text-center"
    >
      <p
        class="text-base tracking-[-0.56px] mb-4 md:mb-0 md:mr-6 whitespace-nowrap"
      >
        Filter by:
      </p>
      <div class="flex items-center justify-center gap-2 md:gap-0">
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
    </div>
  </div>
  <div class="mb-20 flex flex-col items-center">
    <div
      v-for="talk in filteredContent"
      :key="talk.title"
      class="border-b cursor-pointer group py-10 border-[#434343] relative w-full max-w-xl text-center md:text-left"
      @click="toggleDetails(talk.title)"
    >
      <div class="flex flex-col md:flex-row items-center justify-center gap-7">
        <h2
          class="text-[#898989] text-6xl tracking-[-4.16px] group-hover:text-white transition duration-300 ease-in-out"
          :class="{ 'text-white': showDetails[talk.title] }"
        >
          {{ talk.title }}
        </h2>
        <TheChip
          v-if="talk.status === 'upcoming'"
          class="text-green-400 border-green-300"
          >Upcoming</TheChip
        >
      </div>
      <div
        v-if="showDetails[talk.title]"
        class="transition-opacity duration-300"
      >
        <p class="mt-8 w-full md:w-3/4 text-[#898989] mx-auto">
          {{ talk.description || 'Something' }}
        </p>

        <div
          class="flex flex-col md:flex-row items-center gap-7 text-[#898989] mt-8 justify-center"
        >
          <h2>{{ formatDate(talk.date) }}</h2>
          <a :href="talk?.site">Conference</a>
        </div>

        <div
          class="mt-8 mx-auto md:absolute md:top-0 md:right-0 md:mt-8 md:mr-8"
        >
          <!-- Position the image at the center on mobile and at the far right on desktop -->
          <img
            :src="talk.image"
            :alt="talk.title"
            width="200"
            height="200"
            class="rotate-12 border border-[#383838] rounded-md"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- <TheButton class="mx-auto mt-24">Show More</TheButton> -->
</template>
