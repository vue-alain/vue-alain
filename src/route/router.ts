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

/**
 * 设置全局路由守卫
 */
router.beforeResolve((to: Route, from: Route, next: any) => {

  const state: any = store.state;
  const user: any = state.user;

  // 路由信息设置了需要守卫，跳转路由时需要先登录
  if (to.meta && to.meta.routerGuard) {
    // 需要路由守护
    if (user.token == undefined) {
      next({name: '/passport/login', query: {
        redirect: to.path,
      }});
      return;
    }
  }
  next();
});

router.beforeEach( ( to, from, next ) => {
  next();
});

router.afterEach( ( to: any, from: any) => {
  const tabInfo: any = {
    name: to.name,
    closable: true,
    path: to.name,
    title: to.meta.title,
    activeName: from.name,
    i18n: to.meta.i18n || null,
  };

  // 设置复用tab
  store.dispatch('reuseTab/add', tabInfo);
  // 设置标题
  store.commit('app/changeTitle', {
      title: tabInfo.title,
      i18n: tabInfo.i18n,
    },
  );
});


export default router;
