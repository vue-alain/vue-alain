<template>
<!--labelCol={formitem.layout.labelCol}
              wrapperCol={formitem.layout.wrapperCol}
              label={formitem.label}-->
<div>
  <a-form-item v-bind="formitem.ui" v-for="(formitem,index) in formitems" :key="index">   
    <!--
    <component :is="children(formitem)"></component>
    -->
  </a-form-item>
</div>
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

/*
  @Prop({type: Object, default() {
    return {};
  }})
  private formitem!: any;
*/

  @Prop({type: Array, default() {
    return [];
  }})
  private formitems!:any [];

  private children(formitem: any): any{
    return () => import('./DyInput.vue');
  }
  

}
</script>