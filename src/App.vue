<template>
  <a-locale-provider :locale="locale">
    <div id="app" :class="{'aside-collapsed':isCollapse}">
      <router-view/>
    </div>
  </a-locale-provider>
</template>

<style lang="less">

</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';

import { State, Mutation, namespace } from 'vuex-class';
const appModule = namespace('app');

@Component({
  components: {
  },
})
export default class App extends Vue {

  private locale: any = zhCN;

  @appModule.State('isCollapse')
  private isCollapse!: boolean;
}
</script>
