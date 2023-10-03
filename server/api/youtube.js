// import { useRuntimeConfig } from '@nuxtjs/composition-api'; // If you're using the composition API module

export default async function (req, res) {
  const runtimeConfig = useRuntimeConfig();

  let result;

  const API_KEY = runtimeConfig.YOUTUBE_API_KEY;
  const CHANNEL_ID = runtimeConfig.YOUTUBE_CHANNEL_ID;

  // Validate the presence of API key and Channel ID
  if (!API_KEY || !CHANNEL_ID) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'The YouTube API key or channel ID is missing.',
      }),
    };
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`
    );

    // Handle non-OK responses
    if (!response.ok) {
      throw new Error(`YouTube API responded with status: ${response.status}`);
    }

    const data = await response.json();

    result = data;
    return {
      statusCode: 200,
      data: result,
    };
  } catch (error) {
    console.error('Error fetching videos:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
}
