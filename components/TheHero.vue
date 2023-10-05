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
          <p class="text-lg md:text-2xl text-[#999] tracking-[-1.2px]">
            Kenny for short. I'm a software engineer and developer advocate
            currently based in Dubai. I love bringing insights, tips, and
            aha-moments! to developers through the resources I create as I work
            with different companies to improve the experiences of their
            developers.
            <br /><br />
            On the side, I consult on DevRel for companies, I angel invest, and
            play video games + fly drones for fun!
          </p>
        </div>

        <div class="flex items-center mt-1 md:mt-2">
          <p class="text-[#999] text-xs md:text-base mr-2">Previously at</p>
          <div class="flex items-center">
            <!-- <div class="cursor-pointer flex items-start group/ex">
              <div
                class="py-1 px-2 flex items-center transition duration-500 ease-in-out group-hover/ex:border-gray-300 border border-transparent rounded-full border-gray-300"
              >
                <img
                  src="../assets/images/plasmic.svg"
                  class="aspect-square w-5 h-5 md:w-[24px] md:h-[24px]"
                />
                <span
                  class="transition duration-500 ease-in-out text-[#B2B2B2] w-0 opacity-0 hidden group-hover/ex:block group-hover/ex:opacity-100 group-hover/ex:w-full"
                  >Plasmic</span
                >
              </div>
            </div> -->

            <div class="cursor-pointer flex items-start group/ex">
              <div
                class="py-1 px-2 flex items-center transition duration-500 ease-in-out group-hover/ex:border-gray-300 border border-transparent rounded-full border-gray-300"
              >
                <img
                  src="../assets/images/flutterwave.svg"
                  class="aspect-square w-5 h-5 md:w-[24px] md:h-[24px]"
                />
                <span
                  class="transition duration-500 ease-in-out text-[#B2B2B2] w-0 opacity-0 hidden group-hover/ex:block group-hover/ex:opacity-100 group-hover/ex:w-full"
                  >Flutterwave</span
                >
              </div>
            </div>
            <div class="cursor-pointer flex items-start group/ex">
              <div
                class="py-1 px-2 flex items-center transition duration-500 ease-in-out group-hover/ex:border-gray-300 border border-transparent rounded-full border-gray-300"
              >
                <img
                  src="../assets/images/netlify.svg"
                  class="aspect-square w-5 h-5 md:w-[24px] md:h-[24px]"
                />
                <span
                  class="transition duration-500 ease-in-out text-[#B2B2B2] w-0 opacity-0 hidden group-hover/ex:block group-hover/ex:opacity-100 group-hover/ex:w-full"
                  >Netlify</span
                >
              </div>
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
      <div class="mt-5 md:mt-0">
        <div class="relative">
          <img
            src="../assets/images/kenny-with-hands.png"
            class="contain scale-[98%] hover:scale-100 tranition duration-1000 ease-in-out transform md:hover:rotate-2"
          />
          <!-- <div
                  class="absolute top-2 right-5 w-[100px] h-[100px] rounded-full bg-[#A4EF28] hidden md:flex justify-center items-center">
                  <span class="text-xl tracking-tighter text-[#373737]">Play me</span>
                </div> -->
        </div>
      </div>
    </TheWrapper>
  </section>
</template>
