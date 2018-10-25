<template>
<df-item :formitem="formitem">
  <a-input-number v-bind="attrs"/>
</df-item>
</template>

<style lang="less">

</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import DyFormitemWapper from './../DyFormitemWapper.vue';
import NumberInfo from '@/components/numberinfo/Index.vue';

@Component({
    components:{
      'df-item':DyFormitemWapper
    }
})
export default class NumberWidget extends Vue {

  @Prop({type: Object, default: () => {}})
  private formitem!: any;

  get attrs(){
    const ui= this.formitem.ui;
    return ui!=null?ui.childrenattrs:{};
  }

}
</script>