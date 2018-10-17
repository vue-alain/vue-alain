<template>
  <div class="alain-default__header">
    <div class="alain-default__header-logo">
      <a>
        <img class="alain-default__header-logo-expanded" src="@/assets/logo-full.svg" style="max-height:40px;" />
        <img class="alain-default__header-logo-collapsed" src="@/assets/logo.svg"  style="max-height:30px;" />
      </a>
    </div>
    <div class="alain-default__nav-wrap">
      <ul class="alain-default__nav">
        <li>
          <div class="alain-default__nav-item"
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
          <a class="alain-default__nav-item" href="//github.com/vue-alain/vue-alain" target="_blank">
            <i class="fa fa-github"></i>
          </a>
        </li>
        <!-- Lock Page -->
        <li class="hidden-xs">
          <div class="alain-default__nav-item" >
            <i class="fa fa-lock"></i>
          </div>
        </li>
      </ul>
      <ul class="alain-default__nav">
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
                <a-menu-item>
                  <a-dropdown>
                    <a class="ant-dropdown-link" href="#">
                      语言 <a-icon type="down" />
                    </a>
                    <a-menu slot="overlay" @click="localeChange">
                      <a-menu-item v-for="(locale) in localeList()" :key="locale.key">
                        <a href="javascript:;">{{locale.title}}</a>
                      </a-menu-item>
                    </a-menu>
                  </a-dropdown>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          
          </li>
          <li class="hidden-xs">
            <header-user></header-user>
          </li>
      </ul>
    </div>
  </div>

</template>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { State, Mutation, namespace } from 'vuex-class';

import * as _ from 'lodash';

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

  private localeList() {
    return _.map(this.$i18n.messages, (item: any) => {
      return {title: item.title, key: item.key};
    });
  }

  private localeChange(e: any) {
    this.$i18n.locale = e.key;
  }

  private mounted() {
  }
}
</script>