const app = {
    namespaced: true,
    state: {
      isCollapse: false,
    },
    mutations: {
      collapse(state: any) {
        state.isCollapse = !state.isCollapse;
      },
    },
    actions: {
    },
  };


export default app;
