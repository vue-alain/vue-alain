<template>
<df-item :formitem="formitem">
  <a-rate v-bind="widgetAttrs"/>
</df-item>
</template>

<style lang="less">

</style>

<script  lang="ts">
import { Component, Prop, Vue, Mixins } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import { DFSchema } from './../schema/DfSchema';

import DyFormitemWapper from './../DyFormitemWapper.vue';

import DyFormMixin, { IDyFormMixin } from '@/components/dynamicform/dyformitemMixin';

@Component({
    components: {
      'df-item': DyFormitemWapper,
    },
})
export default class RateWidget extends  Mixins<IDyFormMixin>(DyFormMixin) {

}
</script>