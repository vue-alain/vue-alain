/**
 * 导入多语言信息
 */
import Vue from 'vue';


import Vuei18n from 'vue-i18n';
import '@/shims-vue-ls-type';

// 引入多语言
import zh_CN from '@/locales/zh_CN';
import localeService from '@/core/localeService';

Vue.use(Vuei18n);

const messages: any = {
  zh_CN, // { title: '中文', key: 'zh_CN', values: zh_CN },
  en_US: {}, // { title: 'English', key: 'en_US', values: en_US },
};
// 配置多语言信息
export const i18n = new Vuei18n({
  locale: 'zh_CN',  // 语言标识
  messages,
});


// Vue.use(createElement);
localeService.init(i18n, 'zh_CN');
