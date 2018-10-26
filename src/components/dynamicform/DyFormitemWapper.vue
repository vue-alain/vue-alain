<template>

<a-form-item v-bind="attrs" :label="this.formitem.title">   
    <slot></slot>
</a-form-item>

</template>

<style lang="less">

</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import DyInput from './DyInput.vue';
import { DFSchema } from './schema/DfSchema';

@Component({
    components:{
    }
})
export default class DyFormitemWapper extends Vue {

  @Prop({type: Object, default() {
    return {};
  }})
  private formitem!: DFSchema;

  get attrs(){
    const ui: any = this.formitem.ui;
    if(ui==null){
      return {};
    }
    return ui.itemattrs;
  }

}
</script>