<script setup lang="ts">
// Import composables
import { useVideos } from '~/composables/useVideos';
import { useHashnode } from '~/composables/useHashnode';
import BookShowcase from '~/components/BookShowcase.vue';

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
    title: 'Transaction Indexer',
    description: 'A high-performance blockchain indexer for the Shardeum network. Processes and stores transaction data in real-time, providing optimized APIs for querying historical metrics and transaction data. Features include caching, batch processing, and support for both forward and backward indexing.',
    image: '/images/projects/indexer.png',
    link: 'https://github.com/kenny-io/shardeum-indexer',
  },
  {
    title: 'Vission',
    description: 'A modern web dashboard for real-time analytics and visualizations for the Shardeum blockchain. Track transactions, network health, and blockchain metrics through an intuitive interface built with React, TypeScript, and Tailwind CSS.',
    image: '/images/projects/dataviz.png',
    link: 'http://34.55.111.27:3000/',
    github: 'https://github.com/kenny-io/vission',
  },
  {
    title: 'Network Monitor',
    description: 'A network status monitoring system for Shardeum blockchain services. Tracks uptime, response times, and availability of network components using Prometheus metrics, provides real-time status updates through a Next.js frontend, and sends Slack notifications for incidents.',
    image: '/images/projects/network-monitor-light.png',
    link: 'http://34.56.12.217:3000/',
    github: 'https://github.com/shardeum/network-status',
  },
  {
    title: 'Changelog',
    description: "A Next.js application template to showcase changes in network versions, including new features, improvements, and updates. Easily track what's new in the Shardeum ecosystem.",
    image: '/images/projects/changelog.png',
    link: 'https://shardeum-changelog.vercel.app/',
    github: 'https://github.com/kenny-io/changelog',
  },
  {
    title: 'DX Mentorship Program',
    description: 'A mentorship program for aspiring Developer Advocates, providing guidance, resources, and a supportive community to help individuals grow their careers in Developer Relations.',
    image: '/images/projects/mentorship.jpeg',
    link: 'https://www.dxmentorship.com',
    github: 'https://github.com/Dxmentorship/dxmentorship',
  },
  {
    title: 'Shardeum Documentation',
    description: 'Comprehensive documentation for the Shardeum blockchain, covering network architecture, developer guides, API references, and tutorials to help users and developers build on Shardeum.',
    image: '/images/projects/docs.png',
    link: 'https://docs.shardeum.org',
    github: 'https://github.com/shardeum/shardeum-docs',
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
      dateAdded: article.publishedAt
    }))" />
    <RecentCourses :courses="featuredVideos.slice(0, 3).map(video => ({
      title: video.snippet.title,
      description: video.snippet.description,
      image: video.snippet.thumbnails?.high?.url || 'https://www.youtube.com/placeholder.jpg',
      url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
      dateAdded: video.snippet.publishedAt
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
