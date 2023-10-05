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
})
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
