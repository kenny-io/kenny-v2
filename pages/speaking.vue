<script setup lang="ts">
const talkCategories = ref<string[]>(["web3", "External Articles", "Javascript", "DevRel", "Jokes", "AI"]);
const talks = await queryContent('talks').sort({ title: 1 }).find();
const showStripe = ref<boolean>(true);

interface Talk {
    title: string,
    isUpcoming: boolean
}

// const talkCategoriesFromPosts = Array.from(
//   new Set(
//     talks.flatMap((talk) =>
//       talk.category.map((cat: { name: string }) => cat.name)
//     )
//   )
// );

const talkList = ref<Talk[]>(
    [
        {
            title: 'Leveraging community for product growth',
            isUpcoming: false
        },
        {
            title: 'Token Gating on the web',
            isUpcoming: true
        },
        {
            title: 'Writing Documentations That Don’t Suck!',
            isUpcoming: false
        }
    ]
);
</script>

<template>
    <main>
        <section class="pt-20">
            <TheWrapper>
                <div class="flex flex-col items-center md:flex-row text-[#ABABAB] px-16">
                    <div class="md:w-3/4 md:mt-0 mt-6 order-2 md:order-none">
                        <h1
                            class="md:text-left text-center text-4xl md:text-6xl font-semibold tracking-tighter text-[#fff]">
                            Speaking</h1>
                        <p class="text-base w-[350px] sm:w-full md:text-xl mt-6 text-center md:text-left">
                            I have spoken at a couple of conferences, global and home. If you'd like to have me come speak
                            at your conference or do a private workshop at your work. Come say hi
                        </p>
                        <TheButton class="mx-auto md:mx-0">Invite Me to your Awesome Event</TheButton>
                    </div>
                    <div class="w-1/2 md:w-2/4">
                        <img class="w-[406px]" src="../assets/images/speaking-hero-image.png" />
                    </div>
                </div>
            </TheWrapper>
        </section>
        <!-- <section class="mb-24 sticky top-0 pt-20 md:pt-6 bg-black/80 backdrop-blur-lg">
            <TheWrapper>
                <div>
                    <div class="w-full px-4 py-2 md:py-4 border border-[#383838] rounded-md relative flex items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28" fill="none">
                                <path
                                    d="M12.6653 23.3306C18.5555 23.3306 23.3306 18.5555 23.3306 12.6653C23.3306 6.77501 18.5555 2 12.6653 2C6.77501 2 2 6.77501 2 12.6653C2 18.5555 6.77501 23.3306 12.6653 23.3306Z"
                                    stroke="#626262" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M25.9985 25.9971L20.1992 20.1979" stroke="#626262" stroke-width="4"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <input
                            class="bg-transparent rounded-xl w-full h-[45px] pl-4 py-3 text-[#999] text-xl md:text-2xl font-semibold tracking-[-0.84px] focus:border-none active:border-none focus-visible:border-none focus:outline-none placeholder:text-[#878787]"
                            placeholder="Search articles" type="text" id="name" name="name" required>
                    </div>
                </div>
                <div class="text-[#999] flex items-center py-4">
                    <p class="text-base tracking-[-0.56px] mr-6 whitespace-nowrap">Filter by:</p>
                    <div class="flex overflow-x-scroll scrollbar-hide snap-x">
                        <TheChip class="snap-start scroll-ml-4" v-for="talkCategory in talkCategories" :key="talkCategory">
                            {{ talkCategory }}
                        </TheChip>
                    </div>
                </div>
            </TheWrapper>
        </section> -->
        <!-- <section v-if="showStripe" class="md:mt-12 mb-40">
            <TheWrapper>
                <div>
                    <div v-for="talk in talkList" :key="talk.title" class="border-b cursor-pointer group py-10 border-[#434343]">
                        <div class="flex items-center gap-7">
                            <h2
                                class="group-hover:text-white transition duration-300 ease-in-out text-[#898989] text-4xl md:text-6xl tracking-tighter md:tracking-[-4.16px]">
                                {{ talk.title }}</h2>
                            <TheChip v-if="talk.isUpcoming" class="text-green-400 border-green-300">Upcoming</TheChip>
                        </div>
                    </div>
                </div>
                <TheButton class="mx-auto">Show All</TheButton>
            </TheWrapper>
        </section> -->
        <section class="mb-24 sticky top-0 pt-6 bg-black/80 backdrop-blur-lg">
            <TheWrapper>
                <TheTalksSearch :content="talks" :categories="talkCategories" :button-text="'View Talk'" />
            </TheWrapper>
        </section>
    </main>
</template>