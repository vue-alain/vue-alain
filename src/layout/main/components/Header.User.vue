<template>
<a-dropdown>
    <div class="item">

        <div class="d-flex align-items-center px-sm">
            <!---->
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" nzSize="small" class="mr-sm"></a-avatar>
            Admin
        </div>
    </div>
    <!--
        <div>
            <img src="@/assets/tmp/img/avatar.jpg"/>
            </div>
            Admin
        </div>
        -->

    <a-menu slot="overlay">
        <a-menu-item>

            <i class="fa fa-user-o"></i>
            个人中心</a-menu-item>
        <a-menu-item>

            <i class="fa fa-cog"></i>

            个人设置</a-menu-item>
        <a-menu-divider />
        <a-menu-item divided name="logout">

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
    private handleCommand(command: string) {
        switch (command) {
            case 'logout':
                this.logout();
                break;
            default:
                return;
        }
    }

    private logout() {
        // this.$router.push('/passport/login');
    }
}
</script>
