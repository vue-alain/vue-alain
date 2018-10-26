<template>
  <div>
    <av-page-header title="基础表单">
      <div slot="breadcrumb">
        <a-breadcrumb>
          <a-breadcrumb-item>
            <a >首页</a>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <a >表单页</a>
          </a-breadcrumb-item>
          <a-breadcrumb-item>基础表单</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div slot="content">
        表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。
      </div>
    </av-page-header>

    <a-card :bordered="false">
      
          <a-form @submit="handleSubmit"  style="margin-top: 8px" :autoFormCreate="(form)=>{this.form = form}">
            <a-form-item 
              v-bind="formItemLayout" 
              label="标题"
              fieldDecoratorId="title"
              :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入标题' }]}">
              <a-input placeholder="给目标起个名字" />
            </a-form-item>

            <a-form-item 
              v-bind="formItemLayout"  
              label="起止日期"
              fieldDecoratorId="date"
              :fieldDecoratorOptions="{rules: [{ required: true, message: '请选择起止日期' }]}">
              <a-range-picker style="width: '100%'" :placeholder="['开始日期', '结束日期']" />
            </a-form-item>

            <a-form-item v-bind="formItemLayout" 
              label="目标描述"
              fieldDecoratorId="goal"
              :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入目标描述' }]}">
              <a-textarea
                  style="min-height: 32px"
                  placeholder="请输入你的阶段性工作目标"
                  :rows="4"
                />
            </a-form-item>

            <a-form-item  v-bind="formItemLayout"  
              label="衡量标准"
              fieldDecoratorId="standard"
              :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入衡量标准' }]}">
              <a-textarea style="min-height: 32px" placeholder="请输入衡量标准" :rows="4" />
            </a-form-item>
            
            <a-form-item
              v-bind="formItemLayout"
              fieldDecoratorId="client"
            >
              <span 
               slot="label">
                  客户
                  <em class="ptional">
                    （选填）
                    <a-tooltip title="目标的服务对象">
                      <a-icon type="info-circle-o" :style="{ marginRight: 4 }" />
                    </a-tooltip>
                  </em>
                </span>
              <a-input placeholder="请描述你服务的客户，内部客户直接 @姓名／工号" />
            </a-form-item>

            <a-form-item
              v-bind="formItemLayout"
              fieldDecoratorId="invites"
            >
              <span slot="label">
                  邀评人
                  <em class="optional">（选填）</em>
                </span>
              <a-input placeholder="请直接 @姓名／工号，最多可邀请 5 人" />
            </a-form-item>
            
            <a-form-item
              v-bind="formItemLayout"
              fieldDecoratorId="weight"
            >
            <span slot="label">
                  权重
                  <em class="optional">（选填）</em>
                </span>
              <a-input-number placeholder="请输入" :min="0" :max="100" />
              <span class="ant-form-text">%</span>
            </a-form-item>
           
            
            <a-form-item v-bind="formItemLayout"
              fieldDecoratorId="public" label="目标公开" help="客户、邀评人默认被分享">
              <div>
                <a-radio-group defaultValue="1">
                    <a-radio value="1">公开</a-radio>
                    <a-radio value="2">部分公开</a-radio>
                    <a-radio value="3">不公开</a-radio>
                  </a-radio-group>
                  
               <a-form-item :style="{ marginBottom: 0 }"  fieldDecoratorId="publicUsers">
                  <a-select
                      mode="multiple"
                      placeholder="公开给"
                      :style="{margin: '8px 0',
                        display: form && form.getFieldValue('public') === '2' ? 'block' : 'none'
                      }"
                    >
                      <a-select-option value="1">同事甲</a-select-option>
                      <a-select-option value="2">同事乙</a-select-option>
                      <a-select-option value="3">同事丙</a-select-option>
                    </a-select>
                </a-form-item> 
               
              </div>
            </a-form-item> 
<!---->
             
             
            
            <a-form-item v-bind="submitFormLayout" style="margin-top: 32px">
              <a-button type="primary" htmlType="submit" :loading="submitting">
                提交
              </a-button>
              <a-button style="margin-left: 8px">保存</a-button>
            </a-form-item>
            
          </a-form>
         
        </a-card>

  </div>
</template>

<style lang="less">
.optional {
  color: rgba(0, 0, 0, 0.45);
  font-style: normal;
}
</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

@Component({})
export default class BasicForm extends Vue {
  private formItemLayout: any = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 10 },
    },
  };

  private submitFormLayout: any = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 10, offset: 7 },
    },
  };

  private form: any = null;

  private submitting: boolean = false;

  constructor() {
    super();
  }

  get isPublic2() {
    if (this.form == null) {
      return false;
    }
    const value = this.form.getFieldValue('public');

    return value === '2';
  }

  private handleSubmit(e: any): void {
    e.preventDefault();

    this.form.validateFieldsAndScroll((err: any, values: any) => {
    });
  }
}
</script>