import Vue from 'vue';
import App from './App.vue';
import router from '@/route/router';
import store from '@/store/store';
import './registerServiceWorker';


import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import 'font-awesome/css/font-awesome.min.css';

import Viser from 'viser-vue';
import VCharts from 'v-charts';

import Vuei18n from 'vue-i18n';

import Storage from 'vue-ls';

import '@/assets/theme/styles/index.less';

import {preloaderFinished} from './util/preloader';
preloaderFinished();



import './_mock/index';

import Charts from '@/components/charts/Index';
import Components from '@/components/Index';

import Startup from '@/core/Startup';
import AxiosInterceptor from '@/core/AxiosInterceptor';

import zh_CN from '@/locales/zh_cn';
import en_US from '@/locales/en_us';


Vue.use(Antd);
Vue.use(Viser);
Vue.use(Charts);
Vue.use(Components);
Vue.use(VCharts);

Vue.use(Vuei18n);

Vue.use(Storage, {
  namespace: 'vuealain_',
  name: 'ls',
  storage: 'local',
});

const messages = {
  zh_CN: { title: '中文', key: 'zh_CN', values: zh_CN },
  en_US: { title: 'English', key: 'en_US', values: en_US },
};

const i18n = new Vuei18n({
  locale: 'zh_CN',  // 语言标识
  messages,
});
// Vue.use(createElement);


Vue.config.productionTip = false;



const app = new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
});

Startup.bootstrap().then(
  (res: any) => {
    app.$mount('#app');
    ( window as any ).appBootstrap();

    store.commit('app/setApp', res.data.app);

    const initToken = app.$ls.get('token');
    console.log(initToken);
    if( initToken!=null) {
      store.commit('user/loginSuccess', {token: initToken});
      // console.log(initToken);
    }
    
    // store.commit('user/loginSuccess', {token: 'admin'});

  },
);

