import { Module, MutationTree, ActionTree, GetterTree, ActionContext } from 'vuex';
import { RootState } from './../store';

export interface IAclState {
  role?: string[] ;
  permission?: string[]|number[];
}


const mutations: MutationTree<IAclState> = {
  init(state: IAclState, param: any) {
    state.role = param.role;
    state.permission = param.permission;
  },
};


const actions: ActionTree<IAclState, RootState> = {
  login(context: ActionContext<IAclState, RootState>, param: any) {
    if ( param.username === 'admin') {
      context.commit('init', { role: 'admin', permission: ['dashboard.workplace'] });
    } else {
      context.commit('init', { role: 'user', permission: [] });
    }
  },
};

const getters: GetterTree<IAclState, RootState> = {

};

const aclState: IAclState = {
  role: undefined,
  permission: [],
};

const acl: Module<IAclState, RootState> = {
  namespaced: true,
  state: aclState,
  getters,
  actions,
  mutations,
};

export default acl;
