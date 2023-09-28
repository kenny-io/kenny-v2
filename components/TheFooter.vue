<script setup>
const socialLinks = [
  {
    name: 'Github',
    url: 'https://github.com/kenny-io',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/ekeneeze/',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/kenny_io',
  },
  {
    name: 'Polywork',
    url: 'https://polywork.com/kenny_io',
  },
];

const dubaiTime = displayDubaiTime();

function displayDubaiTime() {
  // Create a new Date object with the current time in Dubai
  const dubaiTime = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Dubai',
  });

  // Format the Dubai time in a 12-hour format
  const formattedDubaiTime = new Date(dubaiTime).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  // Return the formatted Dubai time
  return formattedDubaiTime;
}
</script>
<template>
  <footer>
    <TheWrapper>
      <div
        class="border text-white flex flex-col items-center px-4 pt-3 pb-24 rounded-3xl"
      >
        <h3
          class="text-4xl tracking-tighter inline-flex px-[20px] py-[18px] -mt-14 bg-black"
        >
          Subscribe to my Newsletter
        </h3>
        <p
          class="text-base tracking-tight w-2/3 text-center text-[#B0B0B0] mt-12"
        >
          I spend most of my time making contents like blog posts, video
          tutorials, and courses, speaking at conferences or delivering
          workshops. If you're interested in web development and Jamstack
          technologies, I'll be happy to send you the contents I make if you
          give me your email address below.
        </p>
        <form class="flex mt-14">
          <div class="w-64 h-fit bg-[#252525] rounded-md relative mr-1">
            <input
              class="bg-transparent rounded-xl w-full h-[45px] pl-4 py-3 placeholder:text-[#878787] focus:outline-none"
              placeholder="Joshua"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div class="w-64 h-fit bg-[#252525] rounded-md relative mr-2">
            <input
              class="bg-transparent rounded-xl w-full h-[45px] pl-4 py-3 placeholder:text-[#878787] focus:outline-none"
              placeholder="joshua@gmail.com"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <button
            type="submit"
            class="w-[233px] h-[45px] px-5 py-6 bg-[#7cfb55] rounded-md text-[#090909] text-xl tracking-tight font-semibold flex items-center justify-center"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div class="py-6 flex justify-between items-center">
        <div class="inline-flex gap-4">
          <h4 class="text-[#6F6F6F] text-base font-semibold tracking-tighter">
            DUBAI, AE
          </h4>
          <span class="text-[#6F6F6F] text-base font-semibold tracking-tighter">
            {{ dubaiTime }}
          </span>
        </div>
        <div class="flex flex-row items-center gap-4">
          <div>
            <ul class="flex flex-row text-[#6F6F6F] gap-2 uppercase">
              <li v-for="link in socialLinks" :key="link.name">
                <a :href="link.url" target="_blank" rel="noopener noreferrer">
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>
          <div class="border text-[#6F6F6F] rounded-full">
            <p
              class="py-1 px-4 text-[#6F6F6F] text-sm uppercase tracking-tight font-semibold"
            >
              Light
            </p>
          </div>
        </div>
      </div>
    </TheWrapper>
  </footer>
</template>
