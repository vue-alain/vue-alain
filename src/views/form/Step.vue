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
    
    <a-card :bordered="false">
      <a-steps :current="item.step" class="steps">
        <a-step :title="'填写转账信息'"></a-step>
        <a-step title="确认转账信息"></a-step>
        <a-step title="完成"></a-step>
      </a-steps>
      <step-form1 :value="item" v-if="item.step==0"/>
      <step-form2 class="stepForm" :value="item" v-if="item.step==1"/>
      <step-form3 class="stepForm" :value="item" v-if="item.step==2"/>
      <!---->
      
    </a-card>
  </div>
</template>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';
import { TransferService } from './services/TransferService';

import StepForm1 from './components/StepForm1.vue';
import StepForm2 from './components/StepForm2.vue';
import StepForm3 from './components/StepForm3.vue';

@Component({
    components: {
      StepForm1,
      StepForm2,
      StepForm3,
    },
})
export default class StepForm extends Vue {

  public item: TransferService = new TransferService();

  constructor() {
      super();
  }

}
</script>

<style lang="less">

.stepForm {
  margin: 40px auto 0;
  max-width: 500px;
}


.stepFormText {
  margin-bottom: 24px;
  :global {
    .ant-form-item-label,
    .ant-form-item-control {
      line-height: 22px;
    }
  }
}

</style>

<style lang="less" scoped>

@import '~ant-design-vue/dist/antd.less';

.steps {
      margin: 16px auto;
    max-width: 750px;
}



.result {
  margin: 0 auto;
  max-width: 560px;
  padding: 24px 0 8px;
}

.desc {
  padding: 0 56px;
  color: @text-color-secondary;
  h3 {
    font-size: 16px;
    margin: 0 0 12px 0;
    color: @text-color-secondary;
    line-height: 32px;
  }
  h4 {
    margin: 0 0 4px 0;
    color: @text-color-secondary;
    font-size: 14px;
    line-height: 22px;
  }
  p {
    margin-top: 0;
    margin-bottom: 12px;
    line-height: 22px;
  }
}

@media screen and (max-width: @screen-md) {
  .desc {
    padding: 0;
  }
}

.information {
  line-height: 22px;
  :global {
    .ant-row:not(:last-child) {
      margin-bottom: 24px;
    }
  }
  .label {
    color: @heading-color;
    text-align: right;
    padding-right: 8px;
    @media screen and (max-width: @screen-sm) {
      text-align: left;
    }
  }
}

.money {
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 14px;
}

.uppercase {
  font-size: 12px;
}

</style>
