<script setup>
const scrollState = inject('scrollState');
const lenisRef = ref(null);
const lenisOptions = ref({
  duration: .35,
  direction: 'Horizontal',
  touchMultiplier: 20,
  infinite: false
})

watch(scrollState, async (val) => {})

const scrollEmitter = (val) => {}

</script>
<template>
  <lenis id="test" ref="lenisRef" :options="lenisOptions" @scroll="scrollEmitter">
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
  top: 40%;
  translate: -20% 0;
  width: 350px;
  height: 350px;
  opacity: 0.5;
  transition: all 4s linear;
  pointer-events: none;
  border-radius: 9999px;
  background-image: linear-gradient(45deg, #065E24, #065E24, #63bd19);
  filter: blur(60px);
  animation: spin 5s infinite;
}

@keyframes spin {
  to {
    rotate: 360deg;
  }
}

@media screen and (max-width: 1150px) {
  .glowball {
  left: -20%;
  top: 50%;
  width: 50px;
  height: 50px;
}}

@media screen and (max-width: 1040px) {
  .glowball {
  left: -40%;
  top: -10%;
  width: 50px;
  height: 50px;
}}
</style>
