<script setup lang="ts">
// Import composables
import { useVideos } from '~/composables/useVideos';
import { useHashnode } from '~/composables/useHashnode';
import BookShowcase from '~/components/BookShowcase.vue';

// Define types
interface Article {
  url: string;
  coverImage: string;
  title: string;
  brief: string;
  dateAdded: string;
}

interface Course {
  title: string;
  description: string;
  image: string;
  url: string;
  dateAdded: string;
}

// Fetch data from composables
const { fetchVideos, featuredVideos } = useVideos();
const { fetchHashnodeArticles, featuredArticles, hashnodeArticles } = useHashnode();

// Refs for animation
const featuredSectionRef = ref(null);
const articlesSectionRef = ref(null);
const mentorshipSectionRef = ref(null);
const podcastSectionRef = ref(null);

// Featured projects for 2025
const featuredProjects = ref([
  {
    title: 'Thally',
    description: 'The product knowledge layer for software teams. Thally turns product changes into accurate, reviewable updates across documentation and other customer-facing knowledge surfaces.',
    image: 'https://thally.io/brand/thally-og-2026-07-30.png',
    link: 'https://thally.io',
    github: 'https://github.com/thallylabs',
  },
  {
    title: 'Peekup',
    description: 'An on-demand commerce and delivery marketplace connecting customers in Enugu with local restaurants, supermarkets, pharmacies, and riders.',
    image: 'https://play-lh.googleusercontent.com/K3_go7NjViPXgphFSeLNoCfNu4pI6o6PBsAY8xmRzmc9mytn35nv5mK92wAJ13qLNEtJLcVLYYa7ENYDs-FfNw=s0-br30',
    link: 'https://apps.apple.com/ng/app/peekup/id6760617895',
  },
  {
    title: 'Lived',
    description: 'A Dubai rental transparency platform where verified tenants share honest reviews of buildings, amenities, maintenance, noise, and everyday living.',
    image: 'https://www.lived.ae/lived-social-preview.png',
    link: 'https://www.lived.ae',
  }
]);

// Lifecycle hooks
onMounted(() => {
  fetchVideos();
  fetchHashnodeArticles();
});

// SEO metadata
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico',
    },
  ],
});

useSeoMeta({
  title: 'Ekene Eze - Developer Advocate, Software Engineer, Content Creator',
  description: "Hi, I'm Ekene Eze, a Developer Advocate, Software Engineer, Content Creator and Keynote Speaker. I help developers build better products and companies build better developer communities.",
  ogTitle: 'Ekene Eze - Portfolio 2025',
  ogDescription: "Hi, I'm Ekene Eze, a Developer Advocate, Software Engineer, Content Creator and Keynote Speaker. I help developers build better products and companies build better developer communities.",
  ogImage: 'https://res.cloudinary.com/kennyy/image/upload/v1696867303/index-og_kwzcrr.png',
  ogUrl: 'https://kenny.engineer',
  twitterTitle: 'Ekene Eze - Portfolio 2025',
  twitterDescription: 'Get a glimpse into my activities as a Developer Advocate, Software Engineer, Content Creator and Keynote Speaker.',
  twitterImage: 'https://res.cloudinary.com/kennyy/image/upload/v1696867303/index-og_kwzcrr.png',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div class="home-page bg-black">
    <TheHero />
    <RecentProjects :projects="featuredProjects" />
    <BookShowcase />
    <RecentArticles :articles="hashnodeArticles.slice(0, 3).map(article => ({
      ...article,
      coverImage: article.coverImage?.url || 'https://res.cloudinary.com/kennyy/image/upload/v1695921469/AI_Generated_Image_13_d1aaw0.jpg',
      dateAdded: String(article.publishedAt)
    }))" />
    <RecentCourses :courses="featuredVideos.slice(0, 3).map(video => ({
      title: video.snippet.title,
      description: video.snippet.description,
      image: video.snippet.thumbnails?.high?.url || 'https://www.youtube.com/placeholder.jpg',
      url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
      dateAdded: String(video.snippet.publishedAt)
    }))" />
    <section class="w-full bg-black py-20 flex items-center justify-center">
      <div class="w-full max-w-5xl mx-auto rounded-3xl border border-white/30 p-10 md:p-16 flex flex-col items-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white text-center mb-6">Subscribe to my Newsletter</h2>
        <p class="text-xl text-gray-300 text-center mb-10 max-w-3xl">
          I spend most of my time making content like blog posts, video tutorials, courses, speaking at conferences or delivering workshops. If you're interested in web development and Jamstack technologies, or you just want to be up to date with my activities, subscribe here.
        </p>
        <NewsletterForm />
      </div>
    </section>
  </div>
</template>
