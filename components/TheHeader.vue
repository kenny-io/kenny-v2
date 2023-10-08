<script setup lang="ts">
const route = useRoute();

const state = reactive({
  isMobileNavOpen: false,
});

const handleToggleMobileNav = () => {
  state.isMobileNavOpen = !state.isMobileNavOpen;
};

watch(
  route,
  (old) => {
    state.isMobileNavOpen = false;
  },
  { flush: 'pre', deep: true, immediate: true }
);

const navLinks = ref([
  {
    slug: 'Articles',
    path: '/articles',
  },
  {
    slug: 'Courses',
    path: '/courses',
  },

  {
    slug: 'Speaking',
    path: '/speaking',
  },
  {
    slug: 'Demos',
    path: '/demos',
  },
  {
    slug: 'Uses',
    path: '/uses',
  },
]);
</script>

<template>
  <header class="w-full mt-5 mb-10">
    <TheWrapper class="flex items-center justify-between relative">
      <div class="w-full">
        <NuxtLink to="/">
          <span class="font-suisseIntl text-lg md:text-2xl text-[#b5b5b5]">
            Ekene Eze
          </span>
        </NuxtLink>
      </div>
      <nav class="flex justify-between items-center mx-auto">
        <div
          class="top-[-100%] md:z-20 duration-500 md:static absolute md:min-h-fit pb-4 left-0 md:w-auto w-full flex items-start pt-5 md:pt-0 px-5 bg-black"
          :class="{
            'top-[9%] z-40': state.isMobileNavOpen,
            '-z-10': !state.isMobileNavOpen,
          }"
        >
          <ul
            class="flex items-start justify-start md:flex-row flex-col md:items-center md:gap-4 gap-8"
          >
            <li
              v-for="link in navLinks"
              :key="link.slug"
              class="text-[#b5b5b5] text-base"
            >
              <NuxtLink
                :to="link.path"
                @click.native="state.isMobileNavOpen = false"
                >{{ link.slug }}</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="flex justify-center items-center">
          <span class="md:hidden z-50">
            <Icon
              v-if="!state.isMobileNavOpen"
              @click="handleToggleMobileNav"
              name="ic:outline-menu"
              size="32px"
              class="text-[#b5b5b5] cursor-pointer"
            />
            <Icon
              v-else
              @click="handleToggleMobileNav"
              name="ic:outline-close"
              size="32px"
              class="text-[#b5b5b5] cursor-pointer"
            />
          </span>
        </div>
      </nav>
    </TheWrapper>
  </header>
</template>

<style>
.router-link-active,
.router-link-exact-active {
  font-weight: 500;
}
</style>
