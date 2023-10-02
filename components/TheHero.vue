<script setup>
const showText = (id) => {
  const textElement = document.getElementById(`${id}Text`);
  if (textElement) {
    textElement.style.width = 'auto';
    textElement.style.opacity = '1';
    textElement.style.display = 'inline';
  }
};
const hideText = (id) => {
  const textElement = document.getElementById(`${id}Text`);
  if (textElement) {
    textElement.style.width = '0';
    textElement.style.opacity = '0';
    textElement.style.display = 'none';
  }
};
</script>

<template>
  <section class="relative pb-20 py-24 md:py-[100px]">
    <TheWrapper class="flex flex-col md:flex-row gap-6">
      <div>
        <div>
          <h1
            class="text-4xl md:text-8xl text-[#D4D4D4] tracking-[-1.50px] md:tracking-[-3.84px]"
          >
            <span class="block text-inherit">Hey there! 👋</span>
            <span class="block text-inherit">I'm Ekene Eze</span>
          </h1>
        </div>
        <div class="w-11/12 md:w-[600px] py-4">
          <p
            class="text-lg md:text-2xl text-[#999] leading-[150%] tracking-[-1.2px]"
          >
            Kenny for short. I'm a software engineer and developer advocate
            currently based in Dubai. I love bringing insights, tips, and
            aha-moments! to developers through the resources I create as I work
            with different companies to improve the experiences of their
            developers.
            <br /><br />
            BTS, I angel invest, play video games, and fly drones ✈️
          </p>
        </div>

        <div class="flex items-center mt-1 md:mt-2">
          <p class="text-[#999] text-xs md:text-base mr-2">Previously at</p>
          <div class="flex items-center space-x-1">
            <div
              class="flex items-start"
              @mouseout="hideText('plasmic')"
              @mouseover="showText('plasmic')"
            >
              <img
                src="../assets/images/plasmic.svg"
                class="aspect-square w-5 h-5 md:w-[24px] md:h-[24px]"
              />
              <span class="text-[#999] w-0 opacity-0 hidden" id="plasmicText"
                >Plasmic</span
              >
            </div>
            <div
              class="flex items-start"
              @mouseout="hideText('netlify')"
              @mouseover="showText('netlify')"
            >
              <img
                src="../assets/images/netlify.svg"
                class="aspect-square w-5 h-5 md:w-[24px] md:h-[24px]"
              />
              <span class="text-[#999] w-0 opacity-0 hidden" id="netlifyText"
                >Netlify</span
              >
            </div>
            <div
              class="flex items-start"
              @mouseout="hideText('flutterwave')"
              @mouseover="showText('flutterwave')"
            >
              <img
                src="../assets/images/flutterwave.svg"
                class="aspect-square w-5 h-5 md:w-[24px] md:h-[24px]"
              />
              <span
                class="w-0 text-[#999] opacity-0 hidden"
                id="flutterwaveText"
                >Flutterwave</span
              >
            </div>
          </div>
        </div>
        <div class="hidden md:flex self-end my-8 items-center animate-bounce">
          <p class="text-[#969696] mr-4">Scroll down</p>
          <div>
            <img src="../assets/images/icon-arrow-down.svg" class="w-4 h-4" />
          </div>
        </div>
      </div>
      <div class="z-10 mt-5 md:mt-0">
        <div class="transform md:rotate-2 relative">
          <img src="../assets/images/kenny-with-hands.png" width="600" />
          <!-- <div
                  class="absolute top-2 right-5 w-[100px] h-[100px] rounded-full bg-[#A4EF28] hidden md:flex justify-center items-center">
                  <span class="text-xl tracking-tighter text-[#373737]">Play me</span>
                </div> -->
        </div>
      </div>
    </TheWrapper>
  </section>
</template>
