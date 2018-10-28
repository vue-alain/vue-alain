<template>

<a-form-item v-bind="itemAttrs" :label="this.label">
    <slot></slot>
</a-form-item>

</template>

<style lang="less">

</style>

<script  lang="ts">
import { Component, Prop, Vue, Mixins } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import DyInput from './DyInput.vue';
import { DFSchema } from './schema/DfSchema';

import DyFormMixin, { IDyFormMixin } from '@/components/dynamicform/dyformitemMixin';

@Component({
    components: {
    },
})
export default class DyFormitemWapper extends  Mixins<IDyFormMixin>(DyFormMixin) {

}
</script>