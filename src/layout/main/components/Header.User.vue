<template>
<a-dropdown>
    <div class="item">

        <div class="d-flex align-items-center px-sm">
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" nzSize="small" class="mr-sm"></a-avatar>
            Admin
        </div>
    </div>
    <a-menu slot="overlay" @click="handleCommand">
        <a-menu-item>

            <i class="fa fa-user-o"></i>
            个人中心</a-menu-item>
        <a-menu-item>

            <i class="fa fa-cog"></i>

            个人设置</a-menu-item>
        <a-menu-divider />
        <a-menu-item divided key="logout">

            <i class="fa fa-sign-out"></i>

            退出登录</a-menu-item>
    </a-menu>
</a-dropdown>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue,
} from 'vue-property-decorator';

@Component({})
export default class HeaderUser extends Vue {

    private menuCommand: any = {
        logout:  this.logout,
    };

    private handleCommand(e: any) {
        this.menuCommand[e.key]();
    }

    /**
     * 退出登录，需要做其他事情
     */
    private logout() {
        this.$router.push('/passport/login');
    }
}
</script>
