<template>
  <main>
    <section class="pt-20">
      <TheWrapper>
        <div class="flex text-[#ABABAB] px-16">
          <div class="w-3/4 mt-20">
            <h1 class="text-6xl font-semibold tracking-tighter text-[#fff]">
              Level up as a devrel
            </h1>
            <p class="text-xl mt-6">
              I am a developer based in Lagos, Nigeria focused on creating
              interactive digital experiences on the web, working with brands
              and industry leaders such as DISNEY, PAYSTACK, JELLY, and NULL
              amongst others to achieve this.
            </p>
          </div>
          <div class="w-2/4">
            <img
              class="w-[406px]"
              src="../assets/images/course-hero-image.png"
            />
          </div>
        </div>
      </TheWrapper>
    </section>
    <section class="-mt-7">
      <div
        class="space-x-4 whitespace-nowrap py-8 bg-[#7856FF] transform -rotate-3"
      >
        <div v-for="x in 20" key="x" class="space-x-4 inline-block">
          <span class="inline-block text-base tracking-[-0.25px] text-[#fff]"
            >Javascript</span
          >
          <span class="inline-block"
            ><img src="../assets/images/flak.svg" alt=""
          /></span>
        </div>
      </div>
    </section>
    <section>
      <TheWrapper>
        <div class="text-center w-4/6 py-56 px-28 mx-auto">
          <h2 class="text-4xl text-[#F5F5F5] tracking-[-1.26px]">
            Over 1,300 course lessons and 200+ hours included:
          </h2>
        </div>
      </TheWrapper>
    </section>
    <section class="mb-64">
      <TheWrapper>
        <div class="grid grid-cols-2 gap-4 gap-y-24">
          <ContentList path="/externals" v-slot="{ list }">
            <TheCard
              v-for="article in list"
              :key="article._path"
              :article="article"
            />
          </ContentList>
        </div>
      </TheWrapper>
    </section>
  </main>
</template>
