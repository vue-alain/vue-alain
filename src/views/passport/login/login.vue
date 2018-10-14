<template>
<div class="login">
    <a-form @submit="handleLoginSubmit" :autoFormCreate="(form)=>{this.loginForm = form}">
        <a-tabs defaultActiveKey="1">
            <a-tab-pane tab="账户密码登录" key="1">
                <a-alert v-if="error" :type="'error'" :message="error" showIcon class="mb-lg"></a-alert>
                <a-form-item fieldDecoratorId="userName" 
                :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入账户名且至少五个字符！' }]}">
                    <a-input size="large" placeholder='admin' v-model="loginModel.username">
                        <a-icon slot="prefix" type='user' style="color:rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item fieldDecoratorId="password"
                :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入密码！' }]}">
                    <a-input size="large" type="password" placeholder="888888" v-model="loginModel.password">
                        <a-icon slot="prefix" type='lock' style="color:rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
            </a-tab-pane>
            <a-tab-pane tab="手机号登录" key="2">
                <a-form-item fieldDecoratorId="mobile">
                    <a-input size="large" placeholder="手机号">
                        <a-icon slot="prefix" type='user' style="color:rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item fieldDecoratorId="captcha">
                    <a-input-group size="large">
                        <a-col :span="16">
                            <a-input placeholder="验证码">
                                <a-icon slot="prefix" type='mail' style="color:rgba(0,0,0,.25)" />
                            </a-input>
                        </a-col>
                        <a-col :span="8">
                            <a-button size="large" block>获取验证码</a-button>
                        </a-col>
                    </a-input-group>
                </a-form-item>
            </a-tab-pane>
        </a-tabs>
        <a-form-item fieldDecoratorId="remember">
            <a-col :span="12">
                <a-checkbox>自动登录</a-checkbox>
                <!--
                <label nz-checkbox formControlName="remember">自动登录</label>
                -->
            </a-col>
            <a-col :span="12" class="text-right">
                <a class="forgot" @click="$message.error('请找欧阳锋')">忘记密码？</a>
            </a-col>
        </a-form-item>
        <a-form-item>
            <a-button type='primary' htmlType='submit' size="large" :loading="loading" class="ant-btn__block">登录</a-button>
        </a-form-item>
    </a-form>
    <div class="other">
        其他登录方式
        <i title="in fact Auth0 via window" @click="open('auth0', 'window')" class="anticon anticon-alipay-circle icon"></i>
        <i title="in fact Github via redirect" @click="open('taobao')" class="anticon anticon-taobao-circle icon"></i>
        <i title="真的是微博" @click="open('weibo', 'window')" class="anticon anticon-weibo-circle icon"></i>
        <a class="register" routerLink="/passport/register">注册账户</a>
    </div>

</div>
</template>

<style lang="less">
@import '../../../assets/theme/styles/index.less';

.login {
    display: block;
    width: 368px;
    margin: 0 auto;

    .ant-tabs .ant-tabs-bar {
        border-bottom: 0;
        margin-bottom: 24px;
        text-align: center;
    }

    .ant-tabs-tab {
        font-size: 16px;
        line-height: 24px;
    }

    .ant-input-affix-wrapper .ant-input:not(:first-child) {
        padding-left: 34px;
    }

    .icon {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.2);
        margin-left: 16px;
        vertical-align: middle;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
            color: @primary-color;
        }
    }

    .other {
        text-align: left;
        margin-top: 24px;
        line-height: 22px;

        nz-tooltip {
            vertical-align: middle;
        }

        .register {
            float: right;
        }
    }
}
</style>

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

import axios from 'axios';

@Component({
    components: {},
})
export default class PassportLayout extends Vue {

    private loginForm: any = null;

    private loading: boolean = false;

    private error: string = '';

    private loginModel: any = {
        username: null,
        password: null,
    };

    constructor() {
        super();
    }

    private handleLoginSubmit(e: any) {
        e.preventDefault();
        this.loginForm.validateFields((err: any, values: any) => {
            if (!err) {
                this.loading = true;
                axios.post('/login', this.loginModel).then( (res: any) => {
                    const resData = res.data;
                    if ( resData.error) {
                        this.error = resData.error;
                        return;
                    }
                    this.$router.push('/');
                })
                .finally(() =>  {
                    this.loading = false;
                });
            }
        });
    }

}
</script>
