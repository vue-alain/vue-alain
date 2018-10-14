<template>
<div class="aside">
    <!--:openKeys.sync="openMenus"-->
    <a-menu mode="inline" :inlineCollapsed="isCollapse" v-model="currentRouteName" >
        <template v-for="menuitem in menuData">
            <a-menu-item :key="menuitem.name" v-if="menuitem.children==null">
                <router-link :to="menuitem.name">
                    <a-icon :type="menuitem.meta.icon" />
                    {{menuitem.meta.title}}
                </router-link>
            </a-menu-item>
            <a-sub-menu :key="menuitem.name" v-else-if="menuitem.children!=null">
                <template slot="title">
                    <a-icon :type="menuitem.meta.icon" />
                    <span>{{menuitem.meta.title}}</span>
                </template>
                <a-menu-item :key="child.name" v-for="child in menuitem.children">
                    <router-link :to="child.name">
                        {{child.meta.title}}
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
 * 1. 一次只能展开一个
 * 2. 选中子菜单，父菜单高亮
 */
@Component({
    components: {},
})
export default class AdminSidebar extends Vue {

    @appModule.State('isCollapse')
    private isCollapse!: boolean;

    private currentRouteName: any[] = [];
    private openMenus: any[] = [];

    constructor() {
        super();
    }

    get menuData() {
        const router: any = this.$router;
        return router.options.routes;
    }


/*
    get currentRouteName(): any[] {
        return  [this.$route.name];
    }
    */

    private mounted() {
        this.currentRouteName = [this.$route.name];
        // 查找需要展开的open menu
        const opens = _.filter(this.menuData, (item: any) => {
            const hasChildren = item.children != null && item.children.length > 0;
            let isInChildren = false;
            if (hasChildren) {
                isInChildren = _.some(item.children, (citem) => {
                    return citem.name === this.$route.name;
                });
            }
            return hasChildren && isInChildren;
        });
        this.openMenus = _.map(opens, 'name');
    }

    @Watch('$route')
    private watchRouteName(newVal: any, oldVal: any){
        this.currentRouteName = [newVal.name];
        /*
        this.currentRouteName = [this.$route.name];
        console.log(newVal);
        console.log(oldVal);
        */
    }
}
</script>
