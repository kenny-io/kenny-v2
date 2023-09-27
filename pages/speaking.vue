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
              placeholder="Search talks"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
        </div>
        <div class="text-[#999] flex items-center py-4">
          <p class="text-base tracking-[-0.56px] mr-6">Filter by:</p>
          <TheChip v-for="talkCategory in talkCategories" :key="talkCategory">
            {{ talkCategory }}
          </TheChip>
        </div>
      </TheWrapper>
    </section>
    <section>
      <TheWrapper>
        <!-- Use ContentList to render talks -->
        <ContentList path="/talks">
          <template #default="{ list }">
            <!-- Sort the list of talks by date in descending order (newer talks first) -->
            <div
              v-for="talk in list.sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any))"
              :key="talk._id"
              class="border-b cursor-pointer group py-10 border-[#434343]"
            >
              <div class="flex items-center gap-7">
                <h2
                  class="group-hover:text-white transition duration-300 ease-in-out text-[#898989] text-6xl tracking-[-4.16px]"
                >
                  {{ talk.title }}
                </h2>
                <!-- Add logic to check if the talk is upcoming and display the chip -->
                <TheChip
                  v-if="talk.status === 'upcoming'"
                  class="text-green-400 border-green-300"
                  >Upcoming</TheChip
                >
              </div>
            </div>
          </template>
        </ContentList>

        <TheButton class="mx-auto">Show All</TheButton>
      </TheWrapper>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const talkCategories = ref<string[]>([
  'web3',
  'External Articles',
  'Javascript',
  'DevRel',
  'Jokes',
  'AI',
]);
</script>
