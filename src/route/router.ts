import Vue from 'vue';
import Router, {Route} from 'vue-router';
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

router.beforeResolve((to: Route, from: Route, next: any) => {

  /*
  if (to.meta && to.meta.routerGuard) {
    // 需要路由守护
    if (store.state.user.token == undefined) {
      let loginurl='?redirect=${from.path}';
      next({name:'/passport/login',query:{
        redirect:to.path
      }});
      return;
    }
  }
  */
  next();
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
