<template>
<df-item :formitem="formitem">
  <a-radio-group v-bind="widgetAttrs">
    <a-radio v-for="(item,index) in formitem.listSource"
      :key="index" :value="item.value"
      v-if="!formitem.ui.button"
      >
      {{ item.label }}
    </a-radio>
    <a-radio-button v-for="(item,index) in formitem.listSource"
      :key="index" :value="item.value"
      v-if="formitem.ui.button">
      {{ item.label }}
    </a-radio-button>
  </a-radio-group>
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
export default class RadioWidget extends  Mixins<IDyFormMixin>(DyFormMixin) {

}
</script>