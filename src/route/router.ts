import Vue from 'vue';
import Router from 'vue-router';
import dashboardrouter from './dashboard.router';

import listrouter from './list.router';
import formrouter from './form.router';
import detailrouter from './detail.router';
import store from '@/store/store';

import widgetsrouter from './widgets.router';
import passportrouter from './passport.router';


Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    dashboardrouter,
    listrouter,
    formrouter,
    detailrouter,
    widgetsrouter,
    passportrouter,
  ],
});

router.beforeEach( ( to, from, next ) => {
  // store.dispatch('routerLoad', { loading: true });
  next();
});

router.afterEach( ( to: any, from: any) => {
  // store.dispatch('routerLoad', { loading: false });

  const tabInfo = {
    name: to.name,
    closable: true,
    path: to.name,
    title: to.meta.title,
    activeName: from.name,
  };

  store.dispatch('reuseTab/add', tabInfo);
  if (to.meta.title) {
    document.title = `vue-alain:${to.meta.title}`;
  }
});


export default router;
