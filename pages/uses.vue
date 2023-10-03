<template>
  <main>
    <section class="pt-20">
      <TheWrapper>
        <div
          class="flex flex-col items-center md:flex-row text-[#ABABAB] px-16"
        >
          <div class="md:w-3/4 md:mt-0 mt-6 order-2 md:order-none">
            <h1
              class="md:text-left text-center text-4xl md:text-6xl font-semibold tracking-tighter text-[#fff]"
            >
              Gears and Gizmos
            </h1>
            <p
              class="text-base w-[350px] sm:w-full md:text-xl mt-6 text-center md:text-left"
            >
              I have spoken at a couple of conferences, global and home. If
              you'd like to have me come speak at your conference or do a
              private workshop at your work. Come say hi
            </p>
          </div>
          <div class="w-1/2 md:w-2/4">
            <img class="w-[406px]" src="../assets/images/uses-hero-image.png" />
          </div>
        </div>
      </TheWrapper>
    </section>
    <section>
      <TheWrapper>
        <div class="text-center w-5/6 pt-20 pb-52 px-28 mx-auto">
          <!-- <h2 class="text-2xl md:text-4xl text-[#FFFAEA] tracking-[-1.26px]">
            I have been evolving my tools for a half a decade now and here is
            the current state.
          </h2> -->
          <h2 class="text-2xl md:text-4xl text-[#FFFAEA] tracking-[-1.26px]">
            Coming Soon...
          </h2>
        </div>
      </TheWrapper>
    </section>
    <section>
      <TheSlider
        slide-to="right"
        class="transform -rotate-6 text-7xl tracking-tight md:text-[140px]"
      >
        Developer Relations - Software Engineer - Mentor - Drone Pilot - Keynote
        Speaker - Content Creator - Author -
      </TheSlider>
    </section>
    <section class="my-64">
      <TheWrapper>
        <ContentList path="/demos">
          <!-- <template #default="{ list }">
            Add the Tailwind markup for the Uses page design
          </template> -->
        </ContentList>
      </TheWrapper>
    </section>
  </main>
</template>
