import Vue from 'vue';

import {i18n} from './app/index';

import App from './App.vue';
import router from '@/route/router';
import store from '@/store/store';
import './registerServiceWorker';

// 初始化加载器
import {preloaderFinished} from './util/preloader';
preloaderFinished();

import Startup from '@/core/Startup';

Vue.config.productionTip = false;

import './directives/index';

// 创建vue实例
const app = new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
});

// 程序启动过程
Startup.bootstrap().then(
  (res: any) => {
    // 将vue实例挂在 #app上
    app.$mount('#app');

    // app启动
    ( window as any ).appBootstrap();

    // 设置app名称
    store.commit('app/appName', res.data.app);

    // 从storage中初始化token，以便登录后刷新token丢失
    const initToken = app.$ss.get('token');
    if ( initToken != null) {
      store.commit('user/loginSuccess', {token: initToken});
    }
  },
);

