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

  @appModule.State('doctitle')
  private doctitle!: any;

  @appModule.State('name')
  private appName!: any;

  get title() {
    let title = this.doctitle.title;
    if (this.doctitle.i18n) {
      title = this.$t(this.doctitle.i18n);
    }
    return this.appName ? `${title} - ${this.appName}` : title;
  }

  get currentLocale() {
    const messages: any = this.$i18n.messages[this.$i18n.locale];
    return messages;
  }

  private mounted() {
  }
}
</script>
