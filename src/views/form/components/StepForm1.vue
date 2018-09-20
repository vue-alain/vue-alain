<template>
  <div>
    <a-form layout="horizontal" class="stepForm" hideRequiredMark :autoFormCreate="(form)=>{this.form = form}">
          <a-form-item v-bind="formItemLayout" label="付款账户"
            fieldDecoratorId="payAccount"
              :fieldDecoratorOptions=" {
              initialValue: data.payAccount,
              rules: [{ required: true, message: '请选择付款账户' }],
            }"
          >
            <a-select placeholder="test@example.com">
                <a-select-option value="ant-design@alipay.com">ant-design@alipay.com</a-select-option>
              </a-select>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="收款账户"
              fieldDecoratorId="receiverAccount"
              :fieldDecoratorOptions=" {
              initialValue: data.receiverAccount,
              rules: [
                  { required: true, message: '请输入收款人账户' },
                  { type: 'email', message: '账户名应为邮箱格式' },
              ],
            }"
          >
            <a-input-group compact>
              <a-select defaultValue="alipay" :style="{ width: 100 }">
                <a-select-option value="alipay">支付宝</a-select-option>
                <a-select-option value="bank">银行账户</a-select-option>
              </a-select>
              <a-input :style="{ width: 'calc(100% - 100px)' }" :value="data.receiverAccount" placeholder="test@example.com" />
            </a-input-group>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="收款人姓名"
            fieldDecoratorId="receiverName"
              :fieldDecoratorOptions=" {
              initialValue: data.receiverName,
              rules: [{ required: true, message: '请输入收款人姓名' }],
            }"
          >
            <a-input placeholder="请输入收款人姓名" />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="转账金额"
              fieldDecoratorId="amount"
              :fieldDecoratorOptions=" {
              initialValue: data.amount,
              rules: [
                { required: true, message: '请输入转账金额' },
                {
                  pattern: /^(\d+)((?:\.\d+)?)$/,
                  message: '请输入合法金额数字',
                },
              ],
            }"
          >
            <a-input prefix="￥" placeholder="请输入金额" />
          </a-form-item>
          <a-form-item
            :wrapperCol="{
              xs: { span: 24, offset: 0 },
              sm: {
                span: formItemLayout.wrapperCol.span,
                offset: formItemLayout.labelCol.span,
              },
            }"
            label=""
          >
            <a-button type="primary" @click="onValidateForm">
              下一步
            </a-button>
          </a-form-item>
        </a-form>
        <a-divider :style="{ margin: '40px 0 24px' }" />
        <div class="desc">
          <h3>说明</h3>
          <h4>转账到支付宝账户</h4>
          <p>
            如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
          </p>
          <h4>转账到银行卡</h4>
          <p>
            如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
          </p>
        </div>
  </div>
</template>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

@Component({})
export default class StepForm1 extends Vue {
  @Prop({ type: Object, default: (): any => {} })
  private value!: any;

  private formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};

private form: any = null;

private data: any = {};

  constructor() {
    super();
  }

  private onValidateForm() {
      this.form.validateFields((err: any, values: any) => {
        if (!err) {
          this.value.step = 1;
        }
      });
    }

  private mounted(): void {
    this.data = this.value;
  }

}
</script>
