import Vue from 'vue';
import Vuex from 'vuex';

import appState from './modules/app';
import userState from './modules/user';
import reuseTabState from './modules/routerTabs';
import aclState from './modules/acl';

Vue.use(Vuex);

// tslint:disable-next-line
export interface RootState {
}

export default new Vuex.Store<RootState>({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    app: appState,
    reuseTab: reuseTabState,
    user: userState,
    acl: aclState,
  },
});
