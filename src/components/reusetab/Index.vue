<template>
<div class="reuse-tab ad-rt fixed">
    <a-tabs :activeKey="pos" :animated="false" type="line">
        <a-tab-pane v-for="(i) of list" :key="i.path">
            <template slot="tab">
                <!--[reuse-tab-context-menu]="i" -->
                <span @click="to($event, i)" class="name">{{i.title}}</span>
                <i v-if="i.closable" class="anticon anticon-close op" @click="close($event, i, false)"></i>
            </template>
            <!--
            <ng-template #titleTemplate>
                <span [reuse-tab-context-menu]="i" (click)="to($event, index)" class="name">{{i.title}}</span>
                <i *ngIf="i.closable" class="anticon anticon-close op" (click)="_close($event, index, false)"></i>
            </ng-template>
            -->
        </a-tab-pane>
    </a-tabs>
    <!--
    <reuse-tab-context [i18n]="i18n" (change)="cmChange($event)"></reuse-tab-context>
    -->
</div>
</template>

<script lang="tsx">
import {
    Component,
    Prop,
    Vue,
    Emit,
Watch,
} from 'vue-property-decorator';
import * as _ from 'lodash';

@Component({})
export default class ReuseTab extends Vue {

    @Prop({
        type: Array,
        default () {
            return [];
        },
    })
    private list!: any[];

    @Prop({
        type: String,
        default: '',
    })
    private pos!: string;

    @Emit('changePath')
    private to(event: any, index: any) {

    }

    private close(event: any, index: any, close: boolean) {
        if  (this.list.length === 1 ) {
            // console.log('只有一个路由标签，不能删除');
            return;
        }
        this.onCloseTab(event,index,close);
    }

    @Emit('closeTab')
    private onCloseTab(event: any, index: any, close: boolean){

    }

}
</script>

<style lang="less">
@import '../../assets/theme/styles/index.less';

@reuse-tab-prefix: ~'.reuse-tab';
@reuse-tab-height: 52px;
@reuse-tab-bg: #fff;
@reuse-tab-padding: 8px;
@reuse-tab-border-color: #d9d9d9;

@{reuse-tab-prefix} {
    display: block;
    background-color: @reuse-tab-bg;
    padding: @reuse-tab-padding;
    border-bottom: 1px solid @reuse-tab-border-color;
    outline: none;
    user-select: none;

    .ant-tabs-bar {
        margin-bottom: 0;
        border-bottom: none;
    }

    .ant-tabs-nav .ant-tabs-tab {
        padding: 0;

        .name {
            display: inline-block;
            padding: 8px 20px;
        }

        .op {
            display: none;
            position: absolute;
            top: 14px;
            right: 2px;
            margin: 0;
            font-size: 12px;
        }

        &:hover {
            .op {
                display: block;
            }
        }
    }
}

@{reuse-tab-prefix}__cm {
    .ant-menu {
        border: 1px solid #e9e9e9;
    }
}

.ad-rt {
    display: block;
    background-color: #fff;
    padding: 8px;
    margin: 0 -24px 0 -24px;
    border-bottom: 1px solid #d9d9d9;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

}

.ad-rt.fixed {
    position: fixed;
    top: 64px;
    left: 200px;
    right: 0;
    margin: 0;
    z-index: 10
}

.aside-collapsed {
    .ad-rt.fixed {
        position: fixed;
        top: 64px;
        left: 64px;
        right: 0;
        margin: 0;
        z-index: 10
    }
}
</style>
