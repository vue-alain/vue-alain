<template>
<div class="global-footer">
    <div v-if="links.length > 0" class="global-footer__links">
        <a v-for="(i,index) of links" :key="index" class="global-footer__links-item" @click="to(i)">{{i.title}}</a>
        <!--
        <a v-for="(i,index) of items" :key="index" class="global-footer__links-item" @click="to(i)">
            -->
        <!--
    <ng-container *ngTemplateOutlet="i.host"></ng-container>
    
        </a>
        -->
    </div>
    <div class="global-footer__copyright">
        <slot></slot>
        <!--
        <ng-content></ng-content>
        -->
    </div>
</div>
</template>

<script lang="tsx">
import {
    Component,
    Prop,
    Vue,
    Emit,
} from 'vue-property-decorator';
import * as _ from 'lodash';

@Component({})
export default class GlobalFooter extends Vue {

    @Prop({
        type: Array,
        default: () => {
            return [];
        },
    })
    private links!: any[];

    private to(item: any) {
        if (!item.href) {
            return;
        }
        if (item.blankTarget) {
            //this.win.open(item.href);
            ( window as any ).open(item.href);
            return;
        }
        if (/^https?:\/\//.test(item.href)) {
            ( window as any ).location.href = item.href;
            //this.win.location.href = item.href;
        } else {
            this.$router.push(item.href);
            //this.router.navigateByUrl(item.href);
        }
    }
}
</script>

<style lang="less">
@import '../../assets/theme/styles/index.less';

@global-footer-prefix: ~'.global-footer';

@{global-footer-prefix} {
    display: block;
    padding: 0 16px;
    margin: 48px 0 24px;
    text-align: center;

    &__links {
        margin-bottom: 8px;

        &-item {
            display: inline-block;
            color: @text-color-secondary;
            transition: all 0.3s;

            &:not(:last-child) {
                margin-right: 40px;
            }

            &:hover {
                color: @text-color;
            }
        }
    }

    &__copyright {
        color: @text-color-secondary;
        font-size: @font-size-base;
    }
}
</style>
