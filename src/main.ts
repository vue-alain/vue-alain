import Vue from 'vue';

import App from './App.vue';
import router from '@/route/router';
import store from '@/store/store';
import './registerServiceWorker';

// import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './shims-ant-design-vue-type';

import 'font-awesome/css/font-awesome.min.css';

import VCharts from 'v-charts';

import Vuei18n from 'vue-i18n';
import './shims-vue-ls-type';

import Storage from 'vue-ls';

import '@/assets/theme/styles/index.less';

// 初始化加载器
import {preloaderFinished} from './util/preloader';
preloaderFinished();



import './_mock/index';

import Charts from '@/components/charts/Index';
import Components from '@/components/Index';

import Startup from '@/core/Startup';
import AxiosInterceptor from '@/core/AxiosInterceptor';

// 引入多语言
import zh_CN from '@/locales/zh_CN';
// import en_US from '@/locales/en_US';

import * as _ from 'lodash';

import localeService from '@/core/localeService';

import 'rxjs/Rx';

import Antd from 'ant-design-vue';
Vue.use(Antd);
Vue.use(Charts);
Vue.use(Components);
Vue.use(VCharts);

Vue.use(Vuei18n);

import DynamicForm from '@/components/dynamicform/index';
Vue.use(DynamicForm);

// local storage 配置
Vue.use(_.clone(Storage), {
  namespace: 'vuealain_', // sorage 前缀
  name: 'ls', // 注入vue中的别名，this.$ls
  storage: 'local',
});

Vue.use(_.clone(Storage), {
  namespace: 'vuealain_ss_', // sorage 前缀
  name: 'ss', // 注入vue中的别名，this.$ss
  storage: 'session',
});



const messages: any = {
  zh_CN, // { title: '中文', key: 'zh_CN', values: zh_CN },
  en_US: {}, // { title: 'English', key: 'en_US', values: en_US },
};
// 配置多语言信息
const i18n = new Vuei18n({
  locale: 'zh_CN',  // 语言标识
  messages,
});
// Vue.use(createElement);
localeService.init(i18n, 'zh_CN');

Vue.config.productionTip = false;

// document title 指令
Vue.directive('title', {
  inserted: (el, binding) => document.title = binding.value,
  update: (el, binding) => document.title = binding.value,
});

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
    store.commit('app/setApp', res.data.app);

    // 从storage中初始化token，以便登录后刷新token丢失
    const initToken = app.$ss.get('token');
    console.log('initToken',initToken);
    if ( initToken != null) {
      store.commit('user/loginSuccess', {token: initToken});
    }
  },
);

