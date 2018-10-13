<template>
<div class="aside">
    <a-menu mode="inline" :inlineCollapsed="isCollapse">
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
} from 'vue-property-decorator';
import {
    State,
    Mutation,
    namespace,
} from 'vuex-class';
const appModule = namespace('app');

@Component({
    components: {},
})
export default class AdminSidebar extends Vue {

    @appModule.State('isCollapse')
    private isCollapse!: boolean;

    constructor() {
        super();
    }

    get menuData() {
        const router: any = this.$router;
        return router.options.routes;
    }
}
</script>
