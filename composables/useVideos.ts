import { ref, type Ref } from 'vue';

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    publishedAt: string | number;
    thumbnails: {
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}

export function useVideos() {
  const videos: Ref<Video[]> = ref([]);
  const featuredVideos: Ref<Video[]> = ref([]);

  async function fetchVideos() {
    const cacheKey = 'cached_videos';
    const timestampKey = 'videos_timestamp';

    const currentTimestamp = new Date().getTime();
    const cachedTimestamp = Number(localStorage.getItem(timestampKey));
    const twoDaysInMilliseconds = 48 * 60 * 60 * 1000;

    if (currentTimestamp - cachedTimestamp < twoDaysInMilliseconds) {
      const cachedVideos = localStorage.getItem(cacheKey);
      if (cachedVideos) {
        videos.value = JSON.parse(cachedVideos);
        updateFeaturedVideos(); // Update the featured videos from the cached ones
        return;
      }
    }

    try {
      const response = await fetch('/api/youtube');
      const data = await response.json();
      videos.value = data.data.items;

      // Sort videos by publishedAt date in descending order (newest first)
      videos.value.sort(
        (a, b) =>
          new Date(b.snippet.publishedAt).getTime() -
          new Date(a.snippet.publishedAt).getTime() // Added snippet before publishedAt
      );

      updateFeaturedVideos(); // Update the featured videos after sorting

      localStorage.setItem(cacheKey, JSON.stringify(videos.value));
      localStorage.setItem(timestampKey, currentTimestamp.toString());
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }

  function updateFeaturedVideos() {
    // Get the top two videos
    featuredVideos.value = videos.value.slice(0, 2);
  }

  return {
    videos,
    fetchVideos,
    featuredVideos,
  };
}
