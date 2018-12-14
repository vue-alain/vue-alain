
import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';
import { RootState } from './../store';

export interface ILoginInfoState {
  token?: string ;
}

const mutations: MutationTree<ILoginInfoState> = {
  loginSuccess(state: ILoginInfoState, payload: any) {
    state.token = payload.token;
  },
};

const actions: ActionTree<ILoginInfoState, RootState> = {

};

const getters: GetterTree<ILoginInfoState, RootState> = {

};

const loginInfoState: ILoginInfoState = {
  token: undefined,
};

const user: Module<ILoginInfoState, RootState> = {
  namespaced: true,
  state: loginInfoState,
  getters,
  actions,
  mutations,
};

/*
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
*/

export default user;
