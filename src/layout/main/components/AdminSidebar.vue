<template>
<div class="aside">
    <!--:openKeys.sync="openMenus"-->
    
    <a-menu mode="inline" :inlineCollapsed="isCollapse" 
    v-model="currentRouteName" 
    @openChange="handleOpenChange"
    :openKeys="openMenus">
        <!--
        <template v-for="menuitem in menuList">
            <a-menu-item :key="menuitem.text" v-if="menuitem.children==null">
                <router-link :to="menuitem.link">
                    <a-icon :type="menuitem.icon" />
                    <span>{{menuitem.text}}</span>
                </router-link>
            </a-menu-item>
            <a-sub-menu :key="menuitem.text" v-if="menuitem.children!=null">
                <span slot="title">
                    <a-icon :type="menuitem.icon" />
                    <span>{{menuitem.text}}</span>
                </span>
                <a-menu-item :key="child.text" v-for="child in menuitem.children">
                    <router-link :to="child.link">
                        {{child.text}}
                    </router-link>
                </a-menu-item>
            </a-sub-menu>
        </template>
        
        <template v-for="menuitem in menuList">
            <a-menu-item :key="menuitem.text" v-if="menuitem.children==null">
                <router-link :to="menuitem.link">
                    <a-icon :type="menuitem.icon" />
                    {{menuitem.text}}
                </router-link>
            </a-menu-item>
            <a-sub-menu :key="menuitem.text" v-if="menuitem.children!=null">
                <template slot="title">
                    <a-icon :type="menuitem.icon" />
                    <span>{{menuitem.text}}</span>
                </template>
                <a-menu-item :key="child.text" v-for="child in menuitem.children">
                    <router-link :to="child.link">
                        {{child.text}}
                    </router-link>
                </a-menu-item>
            </a-sub-menu>
        </template>
        -->
        <template v-for="menuitem in menuData">
            <a-menu-item :key="menuitem.name" v-if="menuitem.children==null">
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
const appModule = namespace('app');

import * as _ from 'lodash';

/**
 * 菜单
 * 缺少功能:
 * 2. 选中子菜单，父菜单高亮
 */
@Component({
    components: {},
})
export default class AdminSidebar extends Vue {

    @appModule.State('isCollapse')
    private isCollapse!: boolean;

    private rootSubmenuKeys: any[] = [];

    private currentRouteName: any[] = [];
    private openMenus: any[] = [];
// openKeys
    constructor() {
        super();
    }

    get menuData() {
        const router: any = this.$router;
        return router.options.routes;
    }

    private parentMenuName(name: any) {
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
