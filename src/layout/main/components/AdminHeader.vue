<template>
  <a-layout-header class="header">
    <div class="logo">
      <a>
        <img class="expanded" src="@/assets/logo-full.svg" style="max-height:40px;" />
        <img class="collapsed" src="@/assets/logo.svg"  style="max-height:30px;" />
      </a>
    </div>
    <div class="top-nav-wrap">
      <ul class="top-nav">
        <li>
          <div class="item"
               @click="handlerCollapsedSidebar()" >
            <i :class="{
                'fa fa-outdent':!isCollapse,
                'fa fa-indent':isCollapse
                }">
            </i>
          </div>
        </li>
        <!-- Github Page  -->
        <li>
          <a class="item" href="//github.com/vue-alain/vue-alain" target="_blank">
            <i class="fa fa-github"></i>
          </a>
        </li>
        <!-- Lock Page -->
        <li class="hidden-xs">
          <div class="item" >
            <i class="fa fa-lock"></i>
          </div>
        </li>
      </ul>
      <ul class="top-nav">
    <li class="hidden-xs">
            <header-search></header-search>
          </li>
    <li class="hidden-xs">
            <header-notify></header-notify>
          </li>
        <!-- Settings -->
          <li class="hidden-xs">      
            <!--  -->
            <a-dropdown>
              <div class="item">
                <i class="fa fa-cog"></i>
              </div>
              <a-menu slot="overlay">
                <a-menu-item>全屏</a-menu-item>
                <a-menu-item>切换语言</a-menu-item>
              </a-menu>
            </a-dropdown>
          
          </li>
          <li class="hidden-xs">
            <header-user></header-user>
          </li>
      </ul>
    </div>
  </a-layout-header>

</template>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { State, Mutation, namespace } from 'vuex-class';

const appModule = namespace('app');

import HeaderUser from './Header.User.vue';
import HeaderNotify from './Header.Notify.vue';
import HeaderSearch from './Header.Search.vue';

@Component({
  components: {
    HeaderUser,
    HeaderNotify,
    HeaderSearch,
  },
})
export default class AdminHeader extends Vue {

  @appModule.State('isCollapse')
  private isCollapse!: boolean;

  @appModule.Mutation('collapse')
  private collapse!: () => void;

  private handlerCollapsedSidebar( ): void {
    this.collapse();
  }
}
</script>