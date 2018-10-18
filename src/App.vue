<template>
  <a-locale-provider :locale="currentLocale">
    <div id="app" :class="{'aside-collapsed':isCollapse}" v-title="title">
      <router-view/>
    </div>
  </a-locale-provider>
</template>

<style lang="less">

</style>

<script  lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import { State, Mutation, namespace } from 'vuex-class';
// app模块
const appModule = namespace('app');

/**
 * app主入口
 */
@Component({
  components: {
  },
})
export default class App extends Vue {

  // 折叠
  @appModule.State('isCollapse')
  private isCollapse!: boolean;

  // 浏览器标题信息
  @appModule.State('doctitle')
  private doctitle!: any;

  // app名称
  @appModule.State('name')
  private appName!: any;

  /**
   * 获取浏览器标题，包含多语言信息
   */
  get title() {
    let title = this.doctitle.title;
    if (this.doctitle.i18n) {
      title = this.$t(this.doctitle.i18n);
    }
    return this.appName ? `${title} - ${this.appName}` : title;
  }

  /**
   * 获取当前多语言信息
   */
  get currentLocale() {
    const messages: any = this.$i18n.messages[this.$i18n.locale];
    return messages;
  }

  /**
   * mounted 周期
   */
  private mounted() {
  }
}
</script>
