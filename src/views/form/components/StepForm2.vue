<template>
  <div>
    <a-form layout="horizontal" class="stepForm" :autoFormCreate="(form)=>{this.form = form}">
        <a-alert
          closable
          showIcon
          message="确认转账后，资金将直接打入对方账户，无法退回。"
          :style="{ marginBottom: 24 }"
        />
        <a-form-item v-bind="formItemLayout" class="stepFormText" label="付款账户">
          {{data.payAccount}}
        </a-form-item>
        <a-form-item v-bind="formItemLayout" class="stepFormText" label="收款账户">
          {{data.receiverAccount}}
        </a-form-item>
        <a-form-item v-bind="formItemLayout" class="stepFormText" label="收款人姓名">
          {{data.receiverName}}
        </a-form-item>
        <a-form-item v-bind="formItemLayout" class="stepFormText" label="转账金额">
          <span class="money">{{data.amount}}</span>
          <span class="uppercase">（{{data.amount}}）</span>
        </a-form-item>
        <a-divider :style="{ margin: '24px 0' }" />
        <a-form-item v-bind="formItemLayout" label="支付密码" :required="false"
          fieldDecoratorId="password"
              :fieldDecoratorOptions=" {
              initialValue: '123456',
              rules: [{ required: true, message: '需要支付密码才能进行支付' }],
            }"
        >
          <a-input type="password" autoComplete="off" :style="{ width: '80%' }" />
        </a-form-item>
        <a-form-item
          :style="{ marginBottom: 8 }"
          :wrapperCol="{
            xs: { span: 24, offset: 0 },
            sm: {
              span: formItemLayout.wrapperCol.span,
              offset: formItemLayout.labelCol.span,
            },
          }"
          label=""
        >
          <a-button type="primary" @click="onValidateForm" :loading="submitting">
            提交
          </a-button>
          <a-button @click="onPrev" :style="{ marginLeft: 8 }">
            上一步
          </a-button>
        </a-form-item>
      </a-form>
  </div>
</template>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';
import { setTimeout } from 'timers';

@Component({})
export default class StepForm2 extends Vue {

  @Prop({ type: Object, default: () => {} })
  private value!: any;

  private form: any = null;

  private data: any = {};

  private formItemLayout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 19,
    },
  };

  private submitting: boolean = false;


  constructor() {
    super();
  }

  private onValidateForm(e: any) {
      e.preventDefault();
      this.form.validateFields((err: any, values: any) => {
        if (!err) {
          this.submitting = true;
          setTimeout(() => {
            this.value.step = 2;
            this.submitting = false;
          }, 1000);
        }
      });
    }

    private onPrev() {
      this.value.step = 0;
    }

    private mounted(): void {
    this.data = this.value;
  }

}
</script>
