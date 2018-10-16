const user = {
    namespaced: true,
    state: {
      token: null,
    },
    mutations: {
      loginSuccess(state: any, param: any) {
        state.token = param.token;
      },
    },
    actions: {
    },
  };


export default user;
