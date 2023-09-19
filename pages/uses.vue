<template>
    <main>
        <section class="pt-20">
            <TheWrapper>
                <div class="flex text-[#ABABAB] px-16">
                    <div class="w-3/4 mt-20">
                        <h1 class="text-6xl font-semibold tracking-tighter text-[#fff]">Gears and Gizmos</h1>
                        <p class="text-xl mt-6">
                            I am a developer based in Lagos, Nigeria focused on creating interactive digital experiences on
                            the
                            web, working with brands and industry leaders such as DISNEY, PAYSTACK, JELLY, and NULL amongst
                            others to achieve this.
                        </p>
                    </div>
                    <div class="w-2/4">
                        <img class="w-[406px]" src="../assets/images/uses-hero-image.png" />
                    </div>
                </div>
            </TheWrapper>
        </section>
        <section>
            <TheWrapper>
                <div class="text-center w-5/6 pt-20 pb-52 px-28 mx-auto">
                    <h2 class="text-4xl text-[#FFFAEA] tracking-[-1.26px]">
                        I have been evolving my tools for a half a decade
                        now and here is the current state.
                    </h2>
                </div>
            </TheWrapper>
        </section>
        <section>
            <TheSlider slide-to="right" class="transform -rotate-6 text-[140px]">
                Director of Developer Relations - Content Creator - Youtuber - Drone Pilot - 
            </TheSlider>
        </section>
        <section class="my-64">
            <TheWrapper>
                <div class="grid grid-cols-2 gap-4 gap-y-24">
                    <TheCard v-for="x in 4" :key="x" />
                </div>
            </TheWrapper>
        </section>
    </main>
</template>