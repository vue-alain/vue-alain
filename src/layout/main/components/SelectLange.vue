<template>
<a-dropdown>
    <div class="item">
        <a-icon type="global" />
        <span>{{$t(`lang.${this.$i18n.locale}`)}}</span>
    </div>
    <a-menu slot="overlay" @click="localeChange">
        <a-menu-item v-for="(locale) in localeList()" :key="locale.key">
            <a href="javascript:;">{{$t(`lang.${locale.key}`)}}</a>
        </a-menu-item>
    </a-menu>
</a-dropdown>
</template>

<script lang="ts">
/**
 * 多语言选择组件
 */
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import localeService from '@/core/localeService';

import * as _ from 'lodash';

@Component({})
export default class SelectLange extends Vue {

    /**
     * 多语言列表
     */
    private localeList() {
        return _.map(_.keys(this.$i18n.messages), (item: any) => {
            return { key: item };
        });
    }

    /**
     * 切换语言
     */
    private localeChange(e: any) {
        localeService.loadLanguageAsync(e.key)
            .then((res: any) => {
            });
    }
}
</script>
