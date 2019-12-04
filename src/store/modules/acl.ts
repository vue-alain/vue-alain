import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';
import { RootState } from './../store';

export interface IAclState {
  role?: string[] ;
  permission?: string[]|number[];
}


const mutations: MutationTree<IAclState> = {
};


const actions: ActionTree<IAclState, RootState> = {

};

const getters: GetterTree<IAclState, RootState> = {

};

const aclState: IAclState = {
  role: undefined,
  permission: undefined,
};

const acl: Module<IAclState, RootState> = {
  namespaced: true,
  state: aclState,
  getters,
  actions,
  mutations,
};

export default acl;
