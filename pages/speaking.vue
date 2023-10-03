<script setup lang="ts">
import { ref } from 'vue';
const talks = await queryContent('talks').sort({ title: 1 }).find();

// const talkCategoriesFromPosts = Array.from(
//   new Set(
//     talks.flatMap((talk) =>
//       talk.category.map((cat: { name: string }) => cat.name)
//     )
//   )
// );
const talkCategories = ref<string[]>([
  'web3',
  'fintech',
  'web',
  'devrel',
  'jamstack',
]);

const sendEmail = () => {
  const email = 'hello@kenny.engineer';
  const subject = 'Speak at my conference';
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  window.location.href = mailtoLink;
};
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
              I've had the privilege of sharing insights and experiences at a
              variety of conferences, both on a global stage and within local
              communities. <br />
              <br />
              If you're interested in having me as a speaker at your upcoming
              conference or arranging a specialized workshop for your
              organization, don't hesitate to reach out and start a conversation
              with me. Feel free to get in touch; I'd love to discuss the
              possibilities further.
            </p>
            <TheButton @click="sendEmail"
              >Invite Me to your Awesome Event</TheButton
            >
          </div>
          <div class="w-2/4 hidden sm:block">
            <div
              class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
            >
              <div
                class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
              >
                <div class="relative">
                  <img
                    src="../assets/images/kenny-with-hands.png"
                    alt=""
                    class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div
                    class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                  ></div>
                </div>
              </div>
              <div
                class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
              >
                <div class="relative">
                  <img
                    src="../assets/images/stage2.jpg"
                    alt=""
                    class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div
                    class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                  ></div>
                </div>
                <div class="relative">
                  <img
                    src="../assets/images/stage3.jpg"
                    alt=""
                    class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div
                    class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                  ></div>
                </div>
              </div>
              <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div class="relative">
                  <img
                    src="../assets/images/stage1.jpg"
                    alt=""
                    class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div
                    class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                  ></div>
                </div>
                <div class="relative">
                  <img
                    src="../assets/images/laststage.webp"
                    alt=""
                    class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div
                    class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TheWrapper>
    </section>
    <section class="mb-24 sticky top-0 pt-6 bg-black/80 backdrop-blur-lg">
      <TheWrapper>
        <TheTalksSearch
          :content="talks"
          :categories="talkCategories"
          :button-text="'View Talk'"
        />
      </TheWrapper>
    </section>
  </main>
</template>
