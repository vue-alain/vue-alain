<template>

<a-layout class="wrapper">
    <admin-header></admin-header>
  <a-layout>
    <admin-sidebar></admin-sidebar>
    <a-layout>
      <a-layout-content class="content">
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';
const appModule = namespace('app');

import AdminHeader from './components/AdminHeader.vue';
import AdminSidebar from './components/AdminSidebar.vue';
import AdminFooter from './components/AdminFooter.vue';

@Component({
  components: {
    AdminHeader,
    AdminSidebar,
    AdminFooter,
  },
})
export default class MainLayout extends Vue {

  @appModule.State('isCollapse')
  private isCollapse!: boolean;

  private copyright: string = '2018 vue alain';

  private linkList: any = [
      {link: 'https://pro.ant.design', name: 'Antd Pro首页'},
      {link: 'https://github.com/vue-alain/vue-alain', icon: 'github'},
      {link: 'https://ant.design', name: 'Ant Design'},
      {link: 'https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/', name: 'Vue Ant Design'},
    ];

  constructor() {
    super();
  }


}
</script>