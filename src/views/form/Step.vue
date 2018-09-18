<template>
  <div>
    <av-page-header title="分布表单">
      <div slot="breadcrumb">
        <a-breadcrumb>
          <a-breadcrumb-item>
            <a >首页</a>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <a >表单页</a>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <a >分布表单</a>
          </a-breadcrumb-item>
          <a-breadcrumb-item>分步表单（填写转账信息）</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div slot="content">
        将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。
      </div>
    </av-page-header>
    <div v-bind="divAttrs"></div>
  </div>
</template>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

@Component({
    components: {
    },
})
export default class StepForm extends Vue {

    constructor() {
        super();
    }

    get divAttrs() {
      return { 
        width:'200px',
        height:'200px',
        //height:100px, 
        //width:200px, 
      };
    }

}
</script>