/**
 * 导入 vue-ls模块
 */
import Vue from 'vue';
import Storage from 'vue-ls';

import * as _ from 'lodash';

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
