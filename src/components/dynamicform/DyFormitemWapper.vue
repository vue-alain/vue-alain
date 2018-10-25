<template>

<a-form-item v-bind="attrs">   
    <slot></slot>
</a-form-item>

</template>

<style lang="less">

</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import DyInput from './DyInput.vue';

@Component({
    components:{
    }
})
export default class DyFormitemWapper extends Vue {

  @Prop({type: Object, default() {
    return {};
  }})
  private formitem!: any;

  get attrs(){
    const ui= this.formitem.ui;
    return ui!=null?ui.itemattrs:{};
  }

}
</script>