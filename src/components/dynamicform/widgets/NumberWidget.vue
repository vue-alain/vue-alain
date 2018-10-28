<template>
<df-item :formitem="formitem">
  <a-input-number v-bind="widgetAttrs"/>
</df-item>
</template>

<style lang="less">

</style>

<script  lang="ts">
import { Component, Prop, Vue, Mixins } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import DyFormitemWapper from './../DyFormitemWapper.vue';
import NumberInfo from '@/components/numberinfo/Index.vue';

import DyFormMixin, { IDyFormMixin } from '@/components/dynamicform/dyformitemMixin';

@Component({
    components: {
      'df-item': DyFormitemWapper,
    },
})
export default class NumberWidget extends  Mixins<IDyFormMixin>(DyFormMixin) {

}
</script>