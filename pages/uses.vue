<script setup>
const usesHardwareList = [
  {
    image: "mac-uses.png"
  },
  {
    image: "monitor-uses.png"
  },
  {
    image: "desk-uses.png"
  }
]
const usesSoftwareList = [
  {
    image: "1password-uses.png"
  },
  {
    image: "1password-uses.png"
  },
  {
    image: "1password-uses.png"
  }
]
</script>
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
    <section class="my-48 text-gray-200">
      <TheWrapper>
        <div class="hardwareWrapper flex">
          <div class="left h-screen w-1/3 sticky top-0 flex items-center">
            <div class="inner-wrapper -translate-y-40">
              <div class="sectionHeader">
                <h2 class="text-7xl text-[#565656] tracking-tighter">Hardware</h2>
              </div>
            </div>
          </div>
          <div class="right relative -translate-x-4 pt-96">
            <div class="inner-wrapper">
              <div v-for="item in usesHardwareList" :key="item.image" class="sectionItem flex items-center gap-5 md:gap-32 mt-40">
                <div class="itemPhoto min-w-[400px]">
                  <img :src="'/uses/' + item.image" alt="mac">
                </div>
                <div class="itemContent group cursor-pointer">
                  <h4 class="text-[#85827A] text-5xl tracking-tighter">Laptop</h4>
                  <p class="w-[420px] text-[#FFFAEA] tracking-tighter text-4xl mt-4">
                    MacBook Pro (16-inch, 2021) 1TB SSD Storage<span class="">1</span> Apple M1 Max
                  </p>
                  <span class="mt-6 h-6 w-6 rounded-full flex items-center justify-center border text-[#FFFAEA]"><Icon class="w-4 h-4 group-hover:-rotate-45 duration-500 ease-in-out" name="material-symbols:arrow-right-alt-rounded" /></span>
                </div>
              </div>
              <div class="h-[30vh]"></div>
            </div>
          </div>
        </div>
        <div class="softwareWrapper flex">
          <div class="left h-screen w-1/3 sticky top-0 flex items-center">
            <div class="inner-wrapper -translate-y-40">
              <div class="sectionHeader">
                <h2 class="text-7xl text-[#565656] tracking-tighter">Software</h2>
              </div>
            </div>
          </div>
          <div class="right relative -translate-x-4 pt-96">
            <div class="inner-wrapper">
              <div v-for="item in usesSoftwareList" :key="item.image" class="sectionItem flex items-center gap-5 md:gap-32 mt-40">
                <div class="itemPhoto min-w-[90px]">
                  <img :src="'/uses/' + item.image" alt="mac">
                </div>
                <div class="itemContent group cursor-pointer">
                  <h4 class="text-[#85827A] text-5xl tracking-tighter">1Password</h4>
                  <p class="w-[420px] text-[#FFFAEA] tracking-tighter text-3xl mt-4">
                    MacBook Pro (16-inch, 2021) 1TB SSD Storage<span class="">1</span> Apple M1 Max
                  </p>
                  <span class="mt-6 h-6 w-6 rounded-full flex items-center justify-center border text-[#FFFAEA]"><Icon class="w-4 h-4 group-hover:-rotate-45 duration-500 ease-in-out" name="material-symbols:arrow-right-alt-rounded" /></span>
                </div>
              </div>
              <div class="h-[80vh]"></div>
            </div>
          </div>
        </div>
      </TheWrapper>
    </section>
  </main>
</template>
