<template>
  <div>
    <av-page-header title="高级表单">
      <div slot="breadcrumb">
        <a-breadcrumb>
          <a-breadcrumb-item>
            <a >首页</a>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <a >表单页</a>
          </a-breadcrumb-item>
          <a-breadcrumb-item>高级表单</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div slot="content">
        高级表单常见于一次性输入和提交大批量数据的场景。
      </div>
    </av-page-header>
    <a-form layout="vertical" hideRequiredMark :autoFormCreate="handlerFormCreate">
      <a-card title="仓库管理" class="card" :bordered="false">
          
            <a-row :gutter="16">
              <a-col :lg="6" :md="12" :sm="24">
                <a-form-item label="仓库名"
                  fieldDecoratorId="name"
                  :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入仓库名称' }]}"
                >
                  <a-input placeholder="请输入仓库名称" />
                </a-form-item>
              </a-col>
              <a-col :xl="{ span: 6, offset: 2 }" :lg="{ span: 8 }" :md="{ span: 12 }" :sm="24">
                <a-form-item label="仓库域名"
                  fieldDecoratorId="url"
                  :fieldDecoratorOptions="{rules: [{ required: true, message: '请选择' }]}"
                >
                  <a-input
                      :style="{ width: '100%' }"
                      addonBefore="http://"
                      addonAfter=".com"
                      placeholder="请输入"
                    />
                </a-form-item>
              </a-col>
              <a-col :xl="{ span: 8, offset: 2 }" :lg="{ span: 10 }" :md="{ span: 24 }" :sm="24">
                <a-form-item label="仓库管理员"
                  fieldDecoratorId="owner"
                  :fieldDecoratorOptions="{rules: [{ required: true, message: '请选择管理员' }]}"
                >
                  <a-select placeholder="请选择管理员">
                      <a-select-option value="xiao">付晓晓</a-select-option>
                      <a-select-option value="mao">周毛毛</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :lg="6" :md="12" :sm="24">
                <a-form-item label='审批人'
                  fieldDecoratorId="approver"
                  :fieldDecoratorOptions="{rules: [{ required: true, message: '请选择审批员' }]}"
                >
                  <a-select placeholder="请选择审批员">
                      <a-select-option value="xiao">付晓晓</a-select-option>
                      <a-select-option value="mao">周毛毛</a-select-option>
                    </a-select>
                </a-form-item>
              </a-col>
              <a-col :xl="{ span: 6, offset: 2 }" :lg="{ span: 8 }" :md="{ span: 12 }" :sm="24">
                <a-form-item label="生效日期"
                  fieldDecoratorId="dateRange"
                  :fieldDecoratorOptions="{rules: [{ required: true, message: '请选择生效日期' }]}"
                >
                  <a-range-picker :placeholder="['开始日期', '结束日期']" :style="{ width: '100%' }" />
                  
                </a-form-item>
              </a-col>
              <a-col :xl="{ span: 8, offset: 2 }" :lg="{ span: 10 }" :md="{ span: 24 }" :sm="24">
                <a-form-item label='仓库类型'
                  fieldDecoratorId="type"
                  :fieldDecoratorOptions="{rules: [{ required: true, message: '请选择仓库类型' }]}"
                >
                  <a-select placeholder="请选择仓库类型">
                      <a-select-option value="private">私密</a-select-option>
                      <a-select-option value="public">公开</a-select-option>
                    </a-select>
                </a-form-item>
              </a-col>
            </a-row>
         
        </a-card>

  
    <a-card title="任务管理" class="card" :bordered="false">
      <a-row :gutter="16">
          <a-col :lg="6" :md="12" :sm="24">
            <a-form-item label="任务名"
              fieldDecoratorId="name2"
              :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}"
            >
              <a-input placeholder="请输入" />
            </a-form-item>
          </a-col>
          <a-col :xl="{ span: 6, offset: 2 }" :lg="{ span: 8 }" :md="{ span: 12 }" :sm="24">
            <a-form-item label="任务描述"
              fieldDecoratorId="url2"
              :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}"
            >
              <a-input placeholder="请输入" />
            </a-form-item>
          </a-col>
          <a-col :xl="{ span: 8, offset: 2 }" :lg="{ span: 10 }" :md="{ span: 24 }" :sm="24">
            <a-form-item label="管理员"
              fieldDecoratorId="owner2"
              :fieldDecoratorOptions="{rules: [{ required: true, message: '请选择管理员' }]}"
            >
              <a-select placeholder="请选择管理员">
                  <a-select-option value="xiao">付晓晓</a-select-option>
                  <a-select-option value="mao">周毛毛</a-select-option>
                </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :lg="6" :md="12" :sm="24">
            <a-form-item label="审批员"
              fieldDecoratorId="approver2"
              :fieldDecoratorOptions="{rules: [{ required: true, message: '请选择审批员' }]}"
            >
              <a-select placeholder="请选择审批员">
                  <a-select-option value="xiao">付晓晓</a-select-option>
                  <a-select-option value="mao">周毛毛</a-select-option>
                </a-select>
            </a-form-item>
          </a-col>
          <a-col :xl="{ span: 6, offset: 2 }" :lg="{ span: 8 }" :md="{ span: 12 }" :sm="24">
            <a-form-item label="提醒时间"
              fieldDecoratorId="dateRange2"
              :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入' }]}"
            >
              <a-time-picker
                  placeholder="提醒时间"
                  :style="{ width: '100%' }"
                  :getPopupContainer="trigger => trigger.parentNode"
                />
            </a-form-item>
          </a-col>
          <a-col :xl="{ span: 8, offset: 2 }" :lg="{ span: 10 }" :md="{ span: 24 }" :sm="24">
            <a-form-item label="仓库类型"
              fieldDecoratorId="type2"
              :fieldDecoratorOptions="{rules: [{ required: true, message: '请选择仓库类型' }]}"
            >
              <a-select placeholder="请选择仓库类型">
                  <a-select-option value="private">私密</a-select-option>
                  <a-select-option value="public">公开</a-select-option>
                </a-select>
            </a-form-item>
          </a-col>
        </a-row>
    </a-card>

    <a-card title="成员管理" :bordered="false">
      <table-form :value="tableData"></table-form>
    </a-card>
    <av-footer-toolbar>
      <div slot="children">

      <span class="errorIcon" v-if="errorCount>0">
        <a-popover title="表单校验信息"
          overlayClassName="errorPopover"
          trigger="click"
        >
          <template slot="content">
            <li v-for="(item,index) in errors" :key="index" class="errorListItem" @click="scrollToField(item.key)">
              <a-icon type="cross-circle-o" class="errorIcon" />
              
              <div class="errorMessage">{{item.msg}}</div>
              <div class="errorField">{{item.label}}</div>
            </li>
          </template>

          <a-icon type="exclamation-circle" />
          {{errorCount}}
        </a-popover>
      </span>
       
         <a-button type="primary" slot="children"
          @click="validate"
          >
          提交
        </a-button>
      </div>
     
    </av-footer-toolbar>
     </a-form>
  </div>
</template>

<style lang="less" scoped>
.card {
  margin-bottom: 24px;
}

.errorIcon {
  cursor: pointer;
  color: #f5222d;
  margin-right: 24px;
  i {
    margin-right: 4px;
  }
}

.errorListItem {
  list-style: none;
  border-bottom: 1px solid #e8e8e8;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: rgba(24, 144, 255, 0.1);
  }
  &:last-child {
    border: 0;
  }
  .errorIcon {
    color: #f5222d;
    float: left;
    margin-top: 4px;
    margin-right: 12px;
    padding-bottom: 22px;
  }
  .errorField {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.45); //@text-color-secondary;
    margin-top: 2px;
  }
}
</style>

<style lang="less">
.errorPopover {
  .ant-popover-inner-content {
    padding: 0;
    max-height: 290px;
    overflow: auto;
    min-width: 256px;
  }
}
</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import * as _ from 'lodash';

import TableForm from './components/TableForm.vue';

const fieldLabels: any = {
  name: '仓库名',
  url: '仓库域名',
  owner: '仓库管理员',
  approver: '审批人',
  dateRange: '生效日期',
  type: '仓库类型',
  name2: '任务名',
  url2: '任务描述',
  owner2: '执行人',
  approver2: '责任人',
  dateRange2: '生效日期',
  type2: '任务类型',
};

@Component({
  components: {
    TableForm,
  },
})
export default class AdvancedForm extends Vue {
  private tableData: any[] = [
    {
      key: '1',
      workId: '00001',
      name: 'John Brown',
      department: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      workId: '00002',
      name: 'Jim Green',
      department: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      workId: '00003',
      name: 'Joe Black',
      department: 'Sidney No. 1 Lake Park',
    },
  ];

  private form: any = null;

  private errorCount: number = 0;
  private errors: any[] = [];

  constructor() {
    super();
  }

  private handlerFormCreate(form: any) {
    this.form = form;
  }

  private validate(e: any) {
    e.preventDefault();

    this.form.validateFieldsAndScroll((err: any, values: any) => {
      if (err) {
        this.formError();
      }
    });
  }

  private formError() {
    if (this.form == null) {
      return;
    }
    const errors = this.form.getFieldsError();
    this.errors = Object.keys(errors)
      .map((key: any) => {
        if (!errors[key]) {
          return;
        }
        const message = errors[key][0];
        const label = fieldLabels[key];
        return {
          [key]: key,
          msg: message,
          [label]: label,
        };
      })
      .filter((item: any) => item != null);

    const errorCount = Object.keys(errors).filter((key: any) => errors[key])
      .length;
    this.errorCount = errorCount;
  }

  private scrollToField(fieldKey: any) {
    const labelNode = document.querySelector(`label[for='${fieldKey}']`);
    if (labelNode) {
      labelNode.scrollIntoView(true);
    }
  }
}
</script>