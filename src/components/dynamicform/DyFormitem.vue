<template>
<div>
    <component v-for="(formitem,index) in properties"
    :key="index"
    :is="createWidgets(formitem)"
    :formitem="formitem"></component>
</div>
</template>

<style lang="less">

</style>

<script  lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import registry from './WidgetRegistry';

@Component({
    components: {},
})
export default class DyFormitem extends Vue {

    @Prop({type: Array, default() {
        return [];
    }})
    private properties!: any[];

    /**
     * 从 组件工厂中获取组件并显示
     */
    private createWidgets(foritem: any): any {
        const key = `df-${foritem.type}`;
        const comp = registry.getType(key);
        return comp;
    }

}
</script>