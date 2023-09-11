<script setup lang="ts">
import { useRouter } from 'nuxt/app';

const navLinks = ref([{
  slug: 'Home',
  path: '/'
},
{
  slug: 'Courses',
  path: '/courses'
},
{
  slug: 'Blog',
  path: '/articles'
},
{
  slug: 'Uses',
  path: '/uses'
},
{
  slug: 'Speaking',
  path: '/speaking'
},
{
  slug: 'Demo',
  path: '/demos'
}])

</script>

<template>
  <header class="w-full">
    <TheWrapper class="flex items-center justify-between">
      <div>
        <NuxtLink to="/">
          <span class="font-suisseIntl font-bold text-2xl text-gray-300">
            Ekene Eze
          </span>
        </NuxtLink>
      </div>

      <nav>
        <ul class="flex items-center justify-center space-x-4">
          <li v-for="link in navLinks" :key="link.slug" class="text-[#b5b5b5] text-base">
            <NuxtLink :to="link.path">{{ link.slug }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </TheWrapper>
  </header>
</template>

<style>
.router-link-active, 
.router-link-exact-active{
  font-weight: 500;
}
</style>