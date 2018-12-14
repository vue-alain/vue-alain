import Vue from 'vue';
import Vuex from 'vuex';

import appState from './modules/app';
import userState from './modules/user';
import reuseTabState from './modules/routerTabs';

Vue.use(Vuex);

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
  },
});
