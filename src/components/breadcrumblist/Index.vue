<template>
<a-breadcrumb >
    <span slot="separator" style="color: #fff">></span>
    <a-breadcrumb-item>
        <router-link to="/" style="color:#fff">
            <a-icon type="home" />
            <span >{{$t(`menu.home`)}}</span>
        </router-link>
    </a-breadcrumb-item>

    <a-breadcrumb-item v-for="(item,index) in source" :key="index">
        <router-link :to="item.name" style="color:#fff">
            <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
            <span>{{$t(item.meta.i18n)}}</span>
        </router-link>
    </a-breadcrumb-item>
</a-breadcrumb>
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
export default class BreadcrumbList extends Vue {

    get source() {
        return this.$route.matched;
    }

    private mounted() {
    }

}
</script>

<style lang="less">

</style>
