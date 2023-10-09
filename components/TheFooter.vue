<script setup>
const {newsletter_subscriber_FNAME} = useTempStore();
const state = reactive({
  showNewLetterSubscriptionSuccessModal: true,
  subscriptionIsLoading: false,
  subscriberName: '',
  subscriberEmail: '',
  subscriptionMessage: '',
  showMessage: false,
});

const clearMessage = () => {
  return setTimeout(() => {
    if (state.showMessage) state.showMessage = false;
  }, 4800);
};

const handleOnNewsletterSubscribe = async () => {
  try {
    state.subscriptionIsLoading = true;
    newsletter_subscriber_FNAME.value = state.subscriberName;

    // Validate Email
    if (!state.subscriberEmail || !state.subscriberName) {
      state.subscriptionMessage =
        '👀: I sense in my spirit that one or both fields are empty. Complete both fields and Try again';
      state.showMessage = true;
    }

    // Subsribe
    const subscriptionResponse = await useMailchimp(
      state.subscriberEmail,
      state.subscriberName
    );

    if (subscriptionResponse && subscriptionResponse.status == '200') {
      await navigateTo({path: '/newsletter'})
    }

    if (subscriptionResponse && subscriptionResponse.statusCode == '400' && subscriptionResponse.statusMessage == 'Member Exists') {
      state.subscriptionMessage =
        'You are already a part of the Kennyverse!';
      state.showMessage = true;
    }

    if (subscriptionResponse && subscriptionResponse.status == '500') {
      state.subscriptionMessage =
        '😱: Yikes! Something went wrong. Check the Email and try again.';
      state.showMessage = true;
    }
  } catch (error) {
    throw error;
  } finally {
    state.subscriptionIsLoading = false;
    clearMessage();
  }
};

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
        class="border text-white flex flex-col items-start md:items-center px-4 pt-3 pb-10 md:pb-24 rounded-3xl"
      >
        <h3
          class="text-2xl md:text-4xl tracking-tighter inline-flex px-[20px] py-[18px] -mt-14 bg-black"
        >
          Subscribe to my Newsletter
        </h3>
        <p
          class="text-base tracking-tight w-full md:w-2/3 text-left md:text-center text-[#B0B0B0] mt-12"
        >
          I spend most of my time making content like blog posts, video
          tutorials, courses, speaking at conferences or delivering workshops.
          If you're interested in web development and Jamstack technologies, or
          you just want to be up to date with my activities, subscribe here.
        </p>
        <form
          class="flex flex-col md:flex-row md:justify-center mt-10 md:mt-14 w-full"
        >
          <div
            class="w-full md:w-64 h-fit md:mt-0 bg-[#252525] rounded-md relative mr-1"
          >
            <input
              v-model="state.subscriberName"
              class="focus:outline-none bg-transparent rounded-xl w-full h-[45px] pl-4 py-3 focus:border-none outline-1 outline-[#B7CD14] active:border-none focus-visible:border-none placeholder:text-[#878787]"
              placeholder="John Doe"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div
            class="w-full md:w-64 h-fit mt-1 md:mt-0 bg-[#252525] rounded-md relative mr-2"
          >
            <input
              v-model="state.subscriberEmail"
              class="focus:outline-none bg-transparent rounded-xl w-full h-[45px] pl-4 py-3 focus:border-none outline-1 outline-[#B7CD14] active:border-none focus-visible:border-none placeholder:text-[#878787]"
              placeholder="johndoe@gmail.com"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <button
            @click="handleOnNewsletterSubscribe"
            type="button"
            class="w-full md:w-[233px] h-[45px] px-5 py-6 mt-4 md:mt-0 bg-[#1ed760] rounded-md text-[#090909] text-xl tracking-tight font-semibold flex items-center relative"
          >
            <span class="block mx-auto"> Subscribe </span>
            <span class="absolute right-5 top-1/2 -translate-y-1/2">
              <Icon
                :class="{ 'opacity-0': !state.subscriptionIsLoading }"
                name="svg-spinners:180-ring-with-bg"
                size="16px"
              />
            </span>
          </button>
        </form>
        <span v-if="state.showMessage" class="mt-2 text-xs text-[#878787]">{{
          state.subscriptionMessage
        }}</span>
      </div>
      <div
        class="pt-12 md:py-6 flex flex-col md:flex-row justify-between items-center"
      >
        <div class="inline-flex gap-4">
          <h4 class="text-[#6F6F6F] text-base font-normal tracking-tighter">
            DUBAI, AE
          </h4>
          <span class="text-[#6F6F6F] text-base font-normal tracking-tighter">
            {{ dubaiTime }}
          </span>
        </div>
        <div class="flex flex-row items-center gap-4">
          <div>
            <ul class="flex flex-rows text-[#6F6F6F] gap-2">
              <li v-for="link in socialLinks" :key="link.name">
                <a
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="uppercase"
                >
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>
          <!-- <div class="border text-[#6F6F6F] rounded-full">
            <p
              class="py-1 px-4 text-[#6F6F6F] text-sm uppercase tracking-tight font-semibold"
            >
              Light
            </p>
          </div> -->
        </div>
      </div>
    </TheWrapper>
  </footer>
</template>
