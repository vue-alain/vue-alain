<template>
<div class="aside">
    <a-menu mode="inline" :inlineCollapsed="isCollapse"
    v-model="currentRouteName"
    @openChange="handleOpenChange"
    :openKeys="openMenus">
        <template v-for="menuitem in menuData">
            <a-menu-item :key="menuitem.name" v-if="menuitem.children==null||menuitem.children.length===1">
                <router-link :to="menuitem.name">
                    <a-icon :type="menuitem.meta.icon" />
                    <span>{{displayMenuTitle(menuitem)}}</span>
                </router-link>
            </a-menu-item>
            <a-sub-menu :key="menuitem.name" v-else-if="menuitem.children!=null">
                <template slot="title">
                    <a-icon :type="menuitem.meta.icon" />
                    <span>
                        {{displayMenuTitle(menuitem)}}
                    </span>
                </template>
                <a-menu-item :key="child.name" v-for="child in menuitem.children">
                    <router-link :to="child.name">
                        {{displayMenuTitle(child)}}
                    </router-link>
                </a-menu-item>
            </a-sub-menu>
        </template>

    </a-menu>

</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue,
    Watch,
} from 'vue-property-decorator';
import {
    State,
    Mutation,
    namespace,
} from 'vuex-class';

import VueRouter from 'vue-router';

import { appModule, aclModule} from '@/store';

import * as _ from 'lodash';

import aclService from '@/core/AclService';
import { menuPemission } from '@/core';

@Component({
    components: {},
})
export default class AdminSidebar extends Vue {

    @appModule.State('isCollapse')
    private isCollapse!: boolean;

    @aclModule.State('permission')
    private permission!: string[];

    private rootSubmenuKeys: any[] = [];

    private currentRouteName: any[] = [];
    private openMenus: any[] = [];

    constructor() {
        super();
    }

    get menuData() {
        const router: any = this.$router;
        const routeList = _.cloneDeep(router.options.routes);
        const menu = menuPemission(routeList, this.permission);
        return menu;
    }
    private parentMenuName(name: any): string {
        const menuList = this.menuData;
        const childList = _.map(menuList, (item: any) => {
            return _.map(item.children, (citem: any) => {
                citem.parentName = item.name;
                return citem;
            });
        });
        const list = _.flatten(childList);
        const menu = _.find(list, (o: any) => o.name === name);
        return menu.parentName;
    }

    private mounted() {
        this.currentRouteName = [this.$route.name];
        const roots = _.filter(this.menuData, (item: any) => item.children != null );
        this.rootSubmenuKeys = _.map(roots, 'name');
        this.initOpenMenus();
    }

    private handleOpenChange(openKeys: any) {
        const latestOpenKey = openKeys.find((key: any) => this.openMenus.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.openMenus = openKeys;
        } else {
            this.openMenus = latestOpenKey ? [latestOpenKey] : [];
        }
    }

    private initOpenMenus() {
        const name = this.$route.name;
        const openKey = this.parentMenuName(name);
        this.handleOpenChange([openKey]);
    }

    private displayMenuTitle(menu: any) {
        if (menu.meta.i18n) {
            return this.$t(menu.meta.i18n);
        }
        return menu.meta.title;
    }

    @Watch('$route')
    private watchRouteName(newVal: any, oldVal: any) {
        this.currentRouteName = [newVal.name];
    }

    @Watch('isCollapse')
    private watchisCollapse(newVal: any, oldVal: any) {
        console.log('watchisCollapse',newVal,oldVal);
        if (newVal === true) {
            this.openMenus = [];
        } else {
            this.initOpenMenus();
        }
    }
}
</script>

<style lang="less">
.ant-menu-submenu-selected{
    background-color:#fafafa;
    /*
    &:after{
        border-right: 3px solid #1890ff;
        content: "";
        position: relative;
    }*/

    .ant-menu.ant-menu-inline.ant-menu-sub{
        background-color:#fafafa;
        // border-right: 3px solid #1890ff;
    }

    i{
        color: #1890ff;
        ::before{
            color: #1890ff;
        }
        ::after{
            color: #1890ff;
        }
    }

    span{
        color: #1890ff;
    }

}
</style>
