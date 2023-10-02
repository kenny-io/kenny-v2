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
      <p class="text-base tracking-[-0.56px] mr-6 whitespace-nowrap">
        Filter by:
      </p>
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

    <!-- THIS IMPLEMENTATION IS NOT PERFECT. THE ELEMENTS EXIST IN THE DOM SO THEY
    TAKE UP SPACE ON SCREEN WHEN THE HOVER STATE IS NOT ACTIVE. -->

    <!-- <div>
      <div
        v-for="talk in filteredContent"
        :key="talk.title"
        class="border-b cursor-pointer group py-10 border-[#434343] relative"
      >
        <div class="flex items-center gap-7">
          <h2
            class="group-hover:text-white transition duration-300 ease-in-out text-[#898989] text-6xl tracking-[-4.16px] w-5/6"
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
          class="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <p class="text-white mt-8 w-3/4">
            {{ talk.description || 'Something' }}
          </p>

          <div class="flex items-center gap-7 text-white mt-8">
            <h2>{{ talk.date }}</h2>
            <a :href="talk?.site">Link</a>
          </div>
        </div>
        <div
          class="absolute top-0 right-0 mt-8 mr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <img
            :src="talk.image"
            :alt="talk.title"
            width="200"
            height="200"
            class="rotate-12 border border-[#383838] rounded-md"
          />
        </div>
      </div>
    </div> -->

    <div>
      <div
        v-for="talk in filteredContent"
        :key="talk.title"
        class="border-b cursor-pointer group py-10 border-[#434343] relative"
        @click="toggleDetails(talk.title)"
      >
        <div class="flex items-center gap-7">
          <h2
            class="text-[#898989] text-6xl tracking-[-4.16px] w-5/6 group-hover:text-white transition duration-300 ease-in-out"
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
          <!-- This div is visible when showDetails is true -->
          <p class="mt-8 w-3/4 text-[#898989]">
            {{ talk.description || 'Something' }}
          </p>

          <div class="flex items-center gap-7 text-[#898989] mt-8">
            <h2>{{ formatDate(talk.date) }}</h2>
            <a :href="talk?.site">Conference</a>
          </div>

          <div class="absolute top-0 right-0 mt-8 mr-8">
            <!-- Position the image at the far right -->
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

    <TheButton class="mx-auto mt-24">Show More</TheButton>
  </div>
</template>
