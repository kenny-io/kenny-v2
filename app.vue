<script setup>
const scrollState = inject('scrollState');
const lenisRef = ref(null);
const lenisOptions = ref({
  duration: .35,
  direction: 'Horizontal',
  touchMultiplier: 20,
  infinite: false
})

watch(scrollState, async (val) => {
  // console.log('scrollState', val)
})

const scrollEmitter = (val) => {
  // console.log('scrollEmitter', val)
}

onMounted(() => {
  // console.log('ref', lenisRef.value)
});
</script>
<template>
  <lenis id="test" ref="lenisRef" :options="lenisOptions" @scroll="scrollEmitter">
    <div class="glowball"></div>
    <SeoKit />
    <div class="py-5 bg-black">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </lenis>
</template>

<style>
.glowball {
  position: absolute;
  left: -20%;
  top: -50%;
  width: 860px;
  height: 860px;
  opacity: 0.5;
  transition: all 2s ease-in-out;
  pointer-events: none;
  z-index: -0.25;
  border-radius: 9999px;
  background-image: linear-gradient(45deg, #00dc82, #36e4da, #a7fd60);
  filter: blur(70px);
  animation: spin 5s infinite;
}

@keyframes spin {
  to {
    rotate: 360deg;
  }
}

@media screen and (max-width: 950px) {
  .glowball {
  left: -50%;
  top: -50%;
  width: 300px;
  height: 300px;
}}

@media screen and (max-width: 1040px) {
  .glowball {
  left: -40%;
  top: -10%;
  width: 400px;
  height: 400px;
}}


</style>
