import Vue from 'vue';
import App from './App.vue';
import router from '@/route/router';
import store from '@/store/store';
import './registerServiceWorker';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import 'font-awesome/css/font-awesome.min.css';

import Viser from 'viser-vue';

import '@/assets/theme/styles/index.less';

import {preloaderFinished} from './util/preloader';
preloaderFinished();

import Charts from '@/components/charts/Index';
import Components from '@/components/Index';

Vue.use(Antd);
Vue.use(Viser);
Vue.use(Charts);
Vue.use(Components);


Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});

/**
 * 1s 后正常启动程序，可将定时器修改为请求网络资源
 */
setTimeout(() => {
  app.$mount('#app');
  ( window as any ).appBootstrap();
}, 1000);
