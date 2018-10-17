const app = {
    namespaced: true,
    state: {
      isCollapse: false,
      name: '',
      doctitle: {
        title: '',
        i18n: null,
      },
    },
    mutations: {
      collapse(state: any) {
        state.isCollapse = !state.isCollapse;
      },
      setApp(state: any, appinfo: any) {
        state.name = appinfo.name;
      },
      changeTitle(state: any, titleInfo: any) {
        state.doctitle = {
          ...titleInfo,
        };
      },
    },
    actions: {
    },
  };


export default app;
