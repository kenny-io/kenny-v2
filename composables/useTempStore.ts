const isInitialRender = ref(true);
const newsletter_subscriber_FNAME = ref('');
export const useTempStore = () => {
  return {
    isInitialRender,
    newsletter_subscriber_FNAME
  };
};
