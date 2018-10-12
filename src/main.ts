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

import './_mock/index';

import Charts from '@/components/charts/Index';
import Components from '@/components/Index';

import Startup from '@/core/Startup';
import AxiosInterceptor from '@/core/AxiosInterceptor';


Vue.use(Antd);
Vue.use(Viser);
Vue.use(Charts);
Vue.use(Components);
// Vue.use(createElement);


Vue.config.productionTip = false;



const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});

Startup.bootstrap().then(
  (res: any) => {
    app.$mount('#app');
    ( window as any ).appBootstrap();

    store.commit('app/setApp', res.data.app);

  },
);

