<template>
<a-layout class="wrapper">
  <admin-header></admin-header>
  <a-layout>
    <admin-sidebar></admin-sidebar>
    <a-layout>
      <a-layout-content class="content">
        <reuse-tab :list="tabList"
            :pos="$route.name"
            @changePath="handleChangePath"
            @closeTab="handleCloseTab">
        </reuse-tab>
      <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="padding:0px">
        <admin-footer :link-list="linkList" :copyright="copyright" />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</a-layout>
</template>

<script  lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';
// app 模块
const appModule = namespace('app');
// 复用tab模块
const reuseTabModule = namespace('reuseTab');

import ReuseTab from '@/components/reusetab/Index.vue';

import AdminHeader from './components/AdminHeader.vue';
import AdminSidebar from './components/AdminSidebar.vue';
import AdminFooter from './components/AdminFooter.vue';

import * as _ from 'lodash';

@Component({
  components: {
    ReuseTab,
    AdminHeader,
    AdminSidebar,
    AdminFooter,
  },
})
export default class MainLayout extends Vue {

  // 是否折叠
  @appModule.State('isCollapse')
  private isCollapse!: boolean;

  // 复用tab数据源
  @reuseTabModule.State('source')
  private reuseTabSource!: any[];

  // 复用tab跳转
  @reuseTabModule.State('to')
  private reuseTabTo!: string;

  private copyright: string = '2018 vue alain';

  private linkList: any = [
      {link: 'https://pro.ant.design', name: 'Antd Pro首页'},
      {link: 'https://github.com/vue-alain/vue-alain', icon: 'github'},
      {link: 'https://ant.design', name: 'Ant Design'},
      {link: 'https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/', name: 'Vue Ant Design'},
    ];

  // 复用tab列表
  get tabList() {
    _.forEach(this.reuseTabSource, (item: any) => {
      if ( item.i18n ) {
        item.title = this.$t(item.i18n);
      }
      return item;
    });
    return this.reuseTabSource;
  }

  constructor() {
    super();
  }

  private mounted() {
  }

  /**
   * 点击复用tab标签跳转路由
   */
  private handleChangePath(e: any, route: any) {
    this.$router.push(route.path);
  }

  /**
   * 处理关闭路由tab
   */
  private handleCloseTab(e: any, route: any, close: boolean) {
    const activeName = this.$route.name;
    this.reuseTabClose({
      ...route,
      activeName,
    });
  }

  /**
   * 关于路由tab
   */
  @reuseTabModule.Action('remove')
  private reuseTabClose(param: any) {

  }

  /**
   * 监控 路由tab to属性，以便正确调整路由
   */
  @Watch('reuseTabTo')
  private watchReuseTabTo(newVal: string, oldVal: string) {
    if (newVal !== undefined || newVal !== '') {
      this.$router.push(newVal);
    }
  }

}
</script>

<style lang="less">
.has-ad-rt .content {
    margin-top: 116px;
}
</style>
