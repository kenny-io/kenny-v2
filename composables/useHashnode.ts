import { ref, type Ref } from 'vue';

interface Article {
  title: string;
  brief: string;
  url: string;
  publishedAt: string | number;
  coverImage: {
    url: string;
  };
  tags: {
    name: string;
  }[];
}

export function useHashnode() {
  const hashnodeArticles: Ref<Article[]> = ref([]);
  const featuredArticles: Ref<Article[]> = ref([]);

  const fetchHashnodeArticles = async () => {
    try {
      const response = await fetch('https://gql.hashnode.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'xxxxxxxxxxxxxxxxx', // Make sure to securely manage this key
        },
        body: JSON.stringify({
          query: `
            query Publication {
              publication(host: "kenny-io.hashnode.dev") {
                isTeam
                title
                posts(first: 10) {
                  edges {
                    node {
                      title
                      brief
                      url
                      publishedAt
                      coverImage{
                        url
                      }
                      tags {
                        name
                      }
                    }
                  }
                }
              }
            }
          `,
        }),
      });

      const data = await response.json();
      hashnodeArticles.value = data.data.publication.posts.edges.map(
        (edge: any) => edge.node
      );

      // Get the top two articles for the featuredArticles
      featuredArticles.value = hashnodeArticles.value.slice(0, 2);
    } catch (error) {
      console.error('Error fetching Hashnode articles:', error);
    }
  };

  return {
    hashnodeArticles,
    fetchHashnodeArticles,
    featuredArticles,
  };
}
