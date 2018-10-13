<template>
<div class="passport">
<div class="container">
<div class="wrap">
    <div class="top">
        <div class="head">
            <img class="logo" :src="'/assets/logo-color.svg'">
            <span class="title">vue-alain</span>
        </div>
        <div class="desc">武林中最有影响力的《葵花宝典》；欲练神功，挥刀自宫</div>
    </div>
    <router-view></router-view>
    
    <global-footer :links="links">
        Copyright
        <i class="anticon anticon-copyright"></i> 2018
        <a href="//www.jianshu.com/p/89f995c6fab2" target="_blank">vue-alain</a>出品
    </global-footer>
<!---->
</div>
</div>
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

import GlobalFooter from '@/components/globalfooter/Index.vue';

@Component({
    components: {
        GlobalFooter,
    },
})
export default class PassportLayout extends Vue {

    private links: any[] = [{
            title: '帮助',
            href: '//www.jianshu.com/u/f6ef3106bada',
            blankTarget: true,
        },
        {
            title: '隐私',
            href: '//www.jianshu.com/u/f6ef3106bada',
            blankTarget: true,
        },
        {
            title: '条款',
            href: '//www.jianshu.com/u/f6ef3106bada',
            blankTarget: true,
        },
    ];
    constructor() {
        super();
    }

}
</script>


<style lang="less">
@import '../../assets/theme/styles/index.less';

.passport {
    .container {
            display: flex;
            flex-direction: column;
            min-height: 100%;
            background: #f0f2f5;
            height: 100vh;
        }

        .wrap {
            padding: 32px 0;
            flex: 1;
        }

        .ant-form-item {
            margin-bottom: 24px;
        }

        @media (min-width: @screen-md-min) {
            .container {
                background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');
                background-repeat: no-repeat;
                background-position: center 110px;
                background-size: 100%;
                height: 100vh;
            }

            .wrap {
                padding: 112px 0 24px;
            }
        }

        .top {
            text-align: center;
        }

        .header {
            height: 44px;
            line-height: 44px;

            a {
                text-decoration: none;
            }
        }

        .logo {
            height: 44px;
            margin-right: 16px;
        }

        .title {
            font-size: 33px;
            color: @heading-color;
            font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
            font-weight: 600;
            position: relative;
            vertical-align: middle;
        }

        .desc {
            font-size: @font-size-base;
            color: @text-color-secondary;
            margin-top: 12px;
            margin-bottom: 40px;
        }
}
</style>
