<template>
<a-input placeholder="hoc测试"/>
</template>

<style lang="less">

</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

@Component({
    components:{
    }
})
export default class TextWidget extends Vue {

  @Prop({type: Object, default: () => {}})
  private formitem!: any;

}
</script>