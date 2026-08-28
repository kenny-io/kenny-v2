<script setup lang="ts">
import { useVideos } from '~/composables/useVideos';
import { useHashnode } from '~/composables/useHashnode';
import BookShowcase from '~/components/BookShowcase.vue';

const { fetchVideos, featuredVideos } = useVideos();
const { fetchHashnodeArticles, hashnodeArticles } = useHashnode();

const featuredProjects = [
  {
    title: 'Thally',
    description: 'A product knowledge layer that turns software changes into accurate, reviewable updates across documentation and other customer-facing knowledge surfaces.',
    link: 'https://thally.io',
    github: 'https://github.com/thallylabs',
    eyebrow: 'Founder · AI infrastructure',
    accent: 'from-violet-500 to-cyan-400',
  },
  {
    title: 'Peekup',
    description: 'An on-demand commerce and delivery marketplace built for Enugu, connecting customers with local restaurants, supermarkets, pharmacies, and riders.',
    link: 'https://apps.apple.com/ng/app/peekup/id6760617895',
    eyebrow: 'Founder & CEO · Marketplace',
    accent: 'from-emerald-500 to-lime-300',
  },
  {
    title: 'Lived',
    description: 'A Dubai rental transparency platform where verified tenants share practical reviews of buildings, amenities, maintenance, noise, and everyday living.',
    link: 'https://lived.ae',
    eyebrow: 'Founder · PropTech',
    accent: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Paystack Developer Toolkit',
    description: 'A Node SDK generator and webhook conformance checker created to make Paystack integrations easier to build, validate, and debug.',
    link: 'https://paystack-conformance.netlify.app',
    eyebrow: 'Developer experience · Tooling',
    accent: 'from-sky-500 to-blue-700',
  },
  {
    title: 'DX Mentorship',
    description: 'A mentorship program and community helping aspiring and early-career developer advocates build practical skills and grow in Developer Relations.',
    link: 'https://www.dxmentorship.com',
    github: 'https://github.com/Dxmentorship/dxmentorship',
    eyebrow: 'Founder · Community',
    accent: 'from-fuchsia-500 to-rose-500',
  },
  {
    title: 'AuditDocs',
    description: 'A documentation audit tool that evaluates whether developer documentation is structured and complete enough for AI agents to use reliably.',
    link: 'https://auditdocs.fun',
    eyebrow: 'Builder · AI developer tooling',
    accent: 'from-slate-500 to-slate-800',
  },
];

const experiences = [
  {
    company: 'Thally',
    role: 'Founder',
    period: '2026 — Present',
    description: 'Building an AI-native product knowledge platform for software teams, spanning change detection, evidence-bound authoring, publishing workflows, and knowledge infrastructure.',
    link: 'https://thally.io',
  },
  {
    company: 'LI.FI',
    role: 'Head of Developer Relations',
    period: '2025 — 2026',
    description: 'Led developer adoption for cross-chain infrastructure across documentation, developer tooling, technical content, integrations, product feedback, and go-to-market programs.',
    link: 'https://li.fi',
  },
  {
    company: 'Shardeum',
    role: 'Developer Advocate',
    period: '2024 — 2025',
    description: 'Built developer tools, technical education, documentation, demos, and community programs for a Layer 1 blockchain ecosystem.',
    link: 'https://shardeum.org',
  },
  {
    company: 'Netlify',
    role: 'Senior Developer Experience Engineer',
    period: 'Previously',
    description: 'Improved the experience of developers building and deploying modern web applications through product feedback, education, content, and community.',
    link: 'https://www.netlify.com',
  },
];

onMounted(() => {
  fetchVideos();
  fetchHashnodeArticles();
});

useSeoMeta({
  title: 'Ekene Eze — Developer Experience Leader & Founder',
  description: 'Ekene Eze is a Developer Experience and Developer Relations leader building AI-native developer tools and technology products including Thally, Peekup, and Lived.',
  ogTitle: 'Ekene Eze — Developer Experience Leader & Founder',
  ogDescription: 'Developer Experience leader, software engineer, speaker, and founder building AI-native developer tools and technology products.',
  ogImage: 'https://res.cloudinary.com/kennyy/image/upload/v1696867303/index-og_kwzcrr.png',
  ogUrl: 'https://kenny.engineer',
  twitterTitle: 'Ekene Eze — Developer Experience Leader & Founder',
  twitterDescription: 'Developer Experience leader and founder building AI-native developer tools and technology products.',
  twitterImage: 'https://res.cloudinary.com/kennyy/image/upload/v1696867303/index-og_kwzcrr.png',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div class="home-page bg-black">
    <TheHero />
    <RecentProjects :projects="featuredProjects" />
    <ExperienceSection :experiences="experiences" />
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
    <section class="w-full bg-black py-20 flex items-center justify-center px-4">
      <div class="w-full max-w-5xl mx-auto rounded-3xl border border-white/30 p-10 md:p-16 flex flex-col items-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white text-center mb-6">Follow what I’m building</h2>
        <p class="text-xl text-gray-300 text-center mb-10 max-w-3xl">
          Occasional notes on developer experience, AI-native products, engineering, and the lessons behind the products I’m building.
        </p>
        <NewsletterForm />
      </div>
    </section>
  </div>
</template>
