const app = {
    namespaced: true,
    state: {
      isCollapse: false,
      name: '',
    },
    mutations: {
      collapse(state: any) {
        state.isCollapse = !state.isCollapse;
      },
      setApp(state: any, appinfo: any) {
        state.name = appinfo.name;
      },
    },
    actions: {
    },
  };


export default app;
