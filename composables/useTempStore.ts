const isInitialRender = ref(true);
export const useTempStore = () => {
  return {
    isInitialRender,
  };
};
