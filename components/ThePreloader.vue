<script setup>
const { $gsap } = useNuxtApp();
const {isInitialRender} = useTempStore();

const bar = ref();
const title = ref();
const wrapper = ref();

onMounted(() => {
    $gsap.set(bar.value, { width: 0 })
    $gsap.timeline({onComplete: hidePreloader})
        .to(bar.value, { width:'96vw', duration:10, ease:'slow(0.7, 0.7, false)' })
        .to(bar.value, {y: 100, duration: 1, ease:'expo.out'})
        .to(title.value, {y: -100, duration: 1, ease:'expo.out'}, '<')
        .to(wrapper.value, {opacity: 0, duration: 5, ease:'expo.out'})
})

const hidePreloader = () => {
    isInitialRender.value = false
    console.log(isInitialRender.value)
}
</script>

<template>
    <section ref="wrapper" class="fixed p-4 flex flex-col justify-between bg-black top-0 bottom-0 h-screen w-screen">
        <div>
            <h1 ref="title" class="text-[#B2B2B2] font-bold uppercase">Ekene Eze</h1>
        </div>
        <div>
            <div ref="bar" class="h-16 bg-[#353535]"></div>
        </div>
    </section>
</template>