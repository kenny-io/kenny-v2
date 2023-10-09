<script setup>
const usesHardwareList = [
  {
    title: 'Primary Laptop',
    image: 'laptop-uses.png',
    description: 'MacBook Pro (16-inch, 2022) 1TB SSD Storage¹ Apple M1 Max',
    link: 'https://www.apple.com/ae/shop/buy-mac/macbook-pro/16-inch-space-gray-10-core-cpu-32-core-gpu-1tb',
  },
  {
    title: 'Secondary Laptop',
    image: 'laptop2.png',
    description: 'MacBook Pro (14-inch, 2021) 1TB SSD Storage¹ Apple M1 Pro',
    link: 'https://www.apple.com/ae/shop/buy-mac/macbook-pro/14-inch-space-gray-apple-m2-max-with-12-core-cpu-and-30-core-gpu-1tb',
  },
  {
    title: 'Monitor x2',
    image: 'monitor-uses.png',
    description:
      'LG-27UL850-W 27 inch IPS LED UHD Monitor With 60Hz, AMD FreeSync and DisplayPort HDMI VGA Black/Silver (x2)',
    link: 'https://www.noon.com/uae-en/lg-27ul850-w-27-inch-ips-led-uhd-monitor-with-60hz-amd-freesync-and-displayport-hdmi-vga-black-silver/N37410693A/p?o=d0d813e1b5f7dd3f',
  },
  {
    title: 'Microphone',
    image: 'mic-uses.png',
    description: 'Shure SM7B Cardioid Dynamic Microphone',
    link: 'https://www.amazon.ae/gp/product/B0002E4Z8M/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&th=1',
  },
  {
    title: 'Microphone Stand',
    image: 'mic-stand-uses.png',
    description:
      'Gator Frameworks Deluxe Desk-Mounted Broadcast Microphone Boom Stand',
    link: 'https://www.amazon.ae/gp/product/B082YHPC3Z/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&th=1',
  },
  {
    title: 'Audio Interface',
    image: 'sound-card-uses.png',
    description: 'Presonos AudioBox 2',
    link: 'https://www.amazon.ae/PreSonus-AudioBox-Interface-Bundle-Headphone/dp/B08NF9RLRW/ref=sr_1_34?dchild=1&keywords=presonus+audiobox+2&qid=1634744230&sr=8-34',
  },
  {
    title: 'CloudLifter',
    image: 'cloudlifter-uses.png',
    description: 'Cloudlifter CL-1 Mic Activator',
    link: 'https://www.noon.com/uae-en/cloudlifter-mic-activator-cl-1-blue/N39032409A/p?o=bc5d8fbf7fed277d',
  },
  {
    title: 'Headphones',
    image: 'headphones-uses.png',
    description: 'Apple Airpod Max',
    link: 'https://www.noon.com/uae-en/cloudlifter-mic-activator-cl-1-blue/N39032409A/p?o=bc5d8fbf7fed277d',
  },
  {
    title: 'Video',
    image: 'logitech-streamcam-uses.png',
    description: 'Logitech StreamCam for Creators',
    link: 'https://amzn.eu/d/4XLk8Ww',
  },
  {
    title: 'Video',
    image: 'logitech-c922-uses.png',
    description: 'Logitech C922 Pro Stream Webcam.',
    link: 'https://www.amazon.ae/Logitech-Hyperfast-Streaming-correction-Autofocus/dp/B01L6L52K4/ref=sr_1_1?dchild=1&keywords=logitech+c922+pro+stream+webcam&qid=1634744008&sr=8-1',
  },
  {
    title: 'Primary Keyboard',
    image: 'air75.png',
    description: 'Nuphy Air75',
    link: 'https://nuphy.com/products/air75-v2',
  },
  {
    title: 'Secondary Keyboard',
    image: 'keychron-uses.png',
    description: 'Keychron k8 Wireless Mechanical keyboard',
    link: 'https://www.amazon.ae/Keychron-Wireless-Mechanical-Gaming-Keyboard/dp/B08V1B8NMN/ref=sr_1_1_sspa?dchild=1&keywords=Keychron%2Bk8%2BWireless%2BMechanical%2Bkeyboard&qid=1634744180&sr=8-1-spons&smid=A1C4DXB5RJOLLI&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEySUhBWks0QU1EVFNZJmVuY3J5cHRlZElkPUEwNzc0NTQxQUExMlQ1V1E4R1M3JmVuY3J5cHRlZEFkSWQ9QTAzODg5ODUyT1FISFlRQUQ1OERKJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1',
  },
  {
    title: 'Mobile Keyboard',
    image: 'apple-magic-keyboard-uses.png',
    description: 'Logitech C922 Pro Stream Webcam.',
    link: 'https://amzn.eu/d/gUykjXw',
  },
  {
    title: 'Lighting',
    image: 'keylight-uses.png',
    description: 'LED Streaming Key Light Desktop',
    link: 'https://amzn.eu/d/5PniGMz',
  },
  {
    title: 'Mouse',
    image: 'mouse-uses.png',
    description: 'Logitech MX Master 3',
    link: 'https://www.amazon.ae/Logitech-Ultrafast-Scrolling-Ergonomic-Customization/dp/B07W6JMMNC/ref=sr_1_1?dchild=1&keywords=Logitech+MX+Master+3&qid=1634744057&sr=8-1',
  },
  {
    title: 'Mouse Pad',
    image: 'mouse-pad-uses.png',
    description:
      'RGB Gaming Mouse Pad, Extra Large Soft Led Extended Mouse pad, anti-slip Rubber Base Computer Keyboard Mat',
    link: 'https://amzn.eu/d/5PniGMz',
  },
  {
    title: 'Desk',
    image: 'desk-uses.png',
    description: 'Rover Smart Desk',
    link: 'https://www.homecentre.com/ae/en/Furniture/Office/Office-Desks/HOME-CENTRE-Rover-Smart-Desk/p/162998879?gclid=CjwKCAjw_L6LBhBbEiwA4c46ut9WNmSY3lTsSJNjdG_s27ZYuOtK2l5zB_TyC3LjhDVnXt8ypa9cCxoCU6QQAvD_BwE',
  },
];
const usesSoftwareList = [
  {
    title: 'Editor',
    image: 'vscode-uses.png',
    description:
      "Visual Studio Code is my code editor of choice. Paired with the wonderful night-owl theme by Sarah Drasner, I couldn't ask for more.",
    link: 'https://code.visualstudio.com',
  },
  {
    title: 'Terminal',
    image: 'iterm2-uses.png',
    description:
      "I have both iTerm2 and Hyper and honestly, I love them both. Which one I use really depends on which comes to mind first when I need a terminal. That said, I've been using Fig mostly in the last couple of weeks, I just like the auto-complete capabilities.",
    link: 'https://iterm2.com',
  },
  {
    title: 'Terminal',
    image: 'hyper-uses.webp',
    description: 'Hyper',
    link: 'https://hyper.is',
  },
  {
    title: 'Postman',
    image: 'postman.png',
    description:
      'Postman is an API platform for building and using APIs. I use it to test my APIs or simply to make API calls and evaluate the structure of the responses.',
    link: 'https://hyper.is',
  },
  {
    title: 'Password Manager',
    image: '1password-uses.png',
    description:
      "1Password is my password manager of choice. I got introduced to password managers in 2021, I started off with 1Password and I don't think I'll ever go back to managing my passwords on my own again.",
    link: 'https://1password.com',
  },
  {
    title: 'Calender',
    image: 'google-calender-uses.png',
    description:
      'Google Calendar for scheduling work meetings and managing timezones across board.',
    link: 'https://calender.google.com',
  },
  {
    title: 'Cal.com',
    image: 'cal.png',
    description:
      'Open Source Scheduling platform like Google Calendar. Mostly use Cal for personal meetings to separate all my work meetings from my personal meetings.',
    link: 'https://www.cal.com',
  },
  {
    title: 'Collaboration',
    image: 'slack-uses.png',
    description:
      'Slack is a platform that connects people, tools and information for work. I use this exclusively for work.',
    link: 'https://slack.com',
  },
  {
    title: 'Collaboration',
    image: 'discord-uses.webp',
    description:
      'Discord is a platform where you can join or create communities for various interests, such as gaming, art, or school. You can chat, voice call, and video call with your friends or group members easily and securely. I use this mostly for personal stuff.',
    link: 'https://discord.com',
  },
  {
    title: 'Writing',
    image: 'macdown-uses.png',
    description:
      'MacDown is an open source Markdown editor for macOS, released under the MIT License. It is heavily influenced by Chen Luo’s Mou',
    link: 'https://macdown.uranusjr.com',
  },
  {
    title: 'Obsidian',
    image: 'obsidian-icon.png',
    description:
      'Obsidian stores notes on your device, so you can access them quickly, even offline. Obsidian is a Markdown editor for macOS and acts as a second brain',
    link: 'https://obsidian.md',
  },
  {
    title: 'Screenflow',
    image: 'screenflow.png',
    description:
      'This is my favorite video edition tool. It is feature rich so the UI is a bit overwhelming for beginners. I use it to edit all my YouTube videos and courses.',
    link: 'https://apps.apple.com/no/app/screenflow-10/id1568414480?mt=12',
  },
  {
    title: 'CleanShotX',
    image: 'cleanshot.png',
    description:
      'The best screenshot and screen recording app for Mac with a built-in annotation tool, Cloud uploading, scrolling capture, and a lot more. It is not free however.',
    link: 'https://cleanshot.com/',
  },
];

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})

useSeoMeta({
  title: 'Ekene Eze | Tools and Tech',
  description:
    "I've been evolving my tools for half a decade now and here is the current state.",
  ogTitle: 'Ekene Eze | Tools and Tech',
  ogDescription:
    "I've been evolving my tools for half a decade now and here is the current state.",
  ogImage:
    '/og/uses-og.png',
  ogUrl: 'https://kenny.engineer',
  twitterTitle: 'Ekene Eze - Tools and Tech',
  twitterDescription:
    "I've been evolving my tools for half a decade now and here is the current state.",
  twitterImage:
    '/og/uses-og.png',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <main>
    <section class="pt-20">
      <TheWrapper>
        <div
          class="flex flex-col items-center md:flex-row text-[#ABABAB] px-16"
        >
          <div class="w-full md:w-3/4 md:mt-0 mt-6 order-2 md:order-none">
            <h1
              class="md:text-left text-center text-4xl md:text-6xl font-semibold tracking-tighter text-[#fff]"
            >
              Gears and Gizmos
            </h1>
            <p
              class="text-base w-full sm:w-full md:text-xl mt-6 text-center md:text-left"
            >
              I've been evolving my tools for half a decade. Definitely have a
              long way to go but here is the current state. PS: Some of these
              things are a bit of an overkill so don't feel pressured to get
              them.
            </p>
          </div>
          <div class="w-full md:w-1/2">
            <img
              class="w-full md:w-[406px]"
              src="../assets/images/uses-hero-image.png"
            />
          </div>
        </div>
      </TheWrapper>
    </section>
    <section>
      <!-- content commented out -->
    </section>
    <section class="mt-16">
      <TheSlider
        slide-to="right"
        styles="text-7xl tracking-tighter md:text-[140px]"
      >
        Developer Relations - Software Engineer - Mentor - Drone Pilot - Keynote
        Speaker - Content Creator - Author -
      </TheSlider>
    </section>
    <section class="my-48 text-gray-200">
      <TheWrapper>
        <!-- Hardware section -->
        <div class="hardwareWrapper flex flex-col md:flex-row">
          <div
            class="left w-full md:w-1/3 md:h-screen sticky top-0 flex items-center"
          >
            <div class="inner-wrapper">
              <div class="sectionHeader">
                <h2
                  class="text-4xl md:text-7xl text-[#565656] tracking-tighter"
                >
                  Hardware
                </h2>
              </div>
            </div>
          </div>
          <div class="right w-full relative pt-24 px-8">
            <div class="inner-wrapper">
              <div
                v-for="item in usesHardwareList"
                :key="item.image"
                class="sectionItem flex flex-col md:flex-row items-center gap-5 md:gap-32 mt-40"
              >
                <div class="itemPhoto w-full max-w-[200px]">
                  <img :src="'/uses/' + item.image" alt="mac" />
                </div>
                <div class="itemContent group w-full">
                  <h4
                    class="text-[#85827A] text-4xl md:text-5xl tracking-tighter"
                  >
                    {{ item.title }}
                  </h4>
                  <p
                    class="w-full md:w-[420px] text-[#FFFAEA] tracking-tighter lg:text-3xl text-base mt-4"
                  >
                    {{ item.description }}
                  </p>
                  <a :href="item.link" ref="kenny.engineer" target="_blank">
                    <span
                      class="mt-6 h-6 w-6 rounded-full flex items-center justify-center border text-[#FFFAEA]"
                    >
                      <Icon
                        class="w-4 h-4 group-hover:-rotate-45 duration-500 ease-in-out"
                        name="material-symbols:arrow-right-alt-rounded"
                      />
                    </span>
                  </a>
                </div>
              </div>
              <div class="h-[30vh]"></div>
            </div>
          </div>
        </div>

        <!-- Software section -->
        <div class="softwareWrapper flex flex-col md:flex-row">
          <div
            class="left w-full md:w-1/3 md:h-screen sticky top-0 flex items-center"
          >
            <div class="inner-wrapper">
              <div class="sectionHeader">
                <h2
                  class="text-4xl md:text-7xl text-[#565656] tracking-tighter"
                >
                  Software
                </h2>
              </div>
            </div>
          </div>
          <div class="right w-full relative pt-24 md:pt-96 px-8">
            <div class="inner-wrapper">
              <div
                v-for="item in usesSoftwareList"
                :key="item.image"
                class="sectionItem flex flex-col md:flex-row items-center gap-5 md:gap-32 mt-40"
              >
                <div class="itemPhoto w-full max-w-[200px]">
                  <img :src="'/uses/' + item.image" alt="software item" />
                </div>
                <div class="itemContent group cursor-pointer w-full">
                  <h4
                    class="text-[#85827A] text-4xl md:text-5xl tracking-tighter"
                  >
                    {{ item.title }}
                  </h4>
                  <p
                    class="w-full md:w-[420px] text-[#FFFAEA] tracking-tighter lg:text-3xl text-base mt-4"
                  >
                    {{ item.description }}
                  </p>
                  <a :href="item.link" ref="kenny.engineer" target="_blank">
                    <span
                      class="mt-6 h-6 w-6 rounded-full flex items-center justify-center border text-[#FFFAEA]"
                    >
                      <Icon
                        class="w-4 h-4 group-hover:-rotate-45 duration-500 ease-in-out"
                        name="material-symbols:arrow-right-alt-rounded"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TheWrapper>
    </section>
  </main>
</template>
