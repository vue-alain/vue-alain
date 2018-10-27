<template>
<df-item :formitem="formitem">
  <a-select v-bind="widgetAttrs">
    <a-select-option v-for="(item,index) in formitem.listSource" 
    :key="index" :value="item.value">{{ item.label }}</a-select-option>
  </a-select>
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
export default class SelectWidget extends  Mixins<IDyFormMixin>(DyFormMixin) {

}
</script>