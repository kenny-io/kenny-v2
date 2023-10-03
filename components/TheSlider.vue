<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp();

interface Props {
    slideTo?: 'left' | 'right'
    styles?: String
}

const props = withDefaults(defineProps<Props>(), {
    slideTo: 'left'
})


const firstText = ref();
const secondText = ref();
const slider = ref();
const main = ref();

let ctx: any;
let tl: any;

const state = reactive({
    xPercent: 0,
    direction: 1,
})

onMounted(() => {
    state.direction = props.slideTo === 'right' ? 1 : -1;

    $gsap.registerPlugin($ScrollTrigger);

    ctx = $gsap.context((self) => {
        tl = $gsap.to(slider.value, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: 0.55,
                onUpdate: e => {
                    if (props.slideTo === 'left') state.direction = e.direction * -1
                    if (props.slideTo === 'right') state.direction = e.direction
                },
            },
            x: "+=100"
        });

        requestAnimationFrame(animation);
    }, main.value);

});

const handleMouseEnter = () => {
    tl.pause();
}

const handleMouseLeave = () => {
    tl.play();
}

onUnmounted(() => {
    ctx.kill();
});

const animation = (): void => {
    if (state.xPercent <= -100) {
        state.xPercent = 0;
    };

    if (state.xPercent > 0) {
        state.xPercent = -100;
    }

    $gsap.set(firstText.value, { xPercent: state.xPercent });
    $gsap.set(secondText.value, { xPercent: state.xPercent });
    state.xPercent += 0.025 * state.direction;
    requestAnimationFrame(animation);
}
</script>

<template>
    <div ref="main" class="overflow-hidden">
        <div ref="slider" :onmouseenter="handleMouseEnter" :onmouseleave="handleMouseLeave"
            class="relative flex text-[#d4d4d4] select-none whitespace-nowrap tracking-[-7.7px]  font-suisseIntl">
            <p :class="styles" class="m-0" ref="firstText">
                <slot />
            </p> 
            <p :class="styles" class="m-0 left-full" ref="secondText">
                <slot />
            </p>
        </div>
    </div>
</template>