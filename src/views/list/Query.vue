<template>
  <div>
    <av-page-header title="基础表单">
      <div slot="breadcrumb">
        <a-breadcrumb>
          <a-breadcrumb-item>
            <a >首页</a>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <a >列表页</a>
          </a-breadcrumb-item>
          <a-breadcrumb-item>查询表格</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div slot="content">
        查询表格
      </div>
    </av-page-header>

    <a-card :bordered="false">
          <div class="tableList">
            <div class="tableListForm">
              <a-form @submit="handleSearch" layout="horizontal" :autoFormCreate="(form)=>{this.searchForm = form}">
        <a-row :gutter="{ md: 8, lg: 24, xl: 48 }">
          <a-col :md="8" :sm="24">
            <a-form-item label="规则名称" fieldDecoratorId="name" v-bind="searchFormLayout">
              <a-input placeholder="请输入" />
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="使用状态" fieldDecoratorId="status" v-bind="searchFormLayout">
              <a-select placeholder="请选择" style="width: '100%'">
                  <a-select-option value="0">关闭</a-select-option>
                  <a-select-option value="1">运行中</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24" v-if="expandForm">
            <a-form-item label="调用次数" fieldDecoratorId="number" v-bind="searchFormLayout">
              <a-input-number :style="{ width: '100%' }" />
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24" v-if="!expandForm">
            <span class="submitButtons">
              <a-button type="primary" htmlType="submit">
                查询
              </a-button>
              <a-button style="margin-left: 8px" @click="this.handleFormReset">
                重置
              </a-button>
              <a style="margin-left: 8px" @click="this.toggleForm">
                展开 <a-icon type="down" />
              </a>
            </span>
            <!--
            <a-form-item label="调用次数" fieldDecoratorId="number" v-bind="searchFormLayout">
              <a-input-number :style="{ width: '100%' }" />
            </a-form-item>
            -->
          </a-col>
          
        </a-row>
        <a-row :gutter="{ md: 8, lg: 24, xl: 48 }"  v-if="expandForm">
          <a-col :md="8" :sm="24">
            <a-form-item label="更新日期" fieldDecoratorId="date" v-bind="searchFormLayout">
              <a-date-picker :style="{ width: '100%' }"  placeholder="请输入更新日期" />
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="使用状态" fieldDecoratorId="status3" v-bind="searchFormLayout">
              <a-select placeholder="请选择" :style="{ width: '100%' }">
                  <a-select-option value="0">关闭</a-select-option>
                  <a-select-option value="1">运行中</a-select-option>
                </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="使用状态" fieldDecoratorId="status4" v-bind="searchFormLayout">
              <a-select placeholder="请选择" :style="{ width: '100%' }">
                  <a-select-option value="0">关闭</a-select-option>
                  <a-select-option value="1">运行中</a-select-option>
                </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <div :style="{ overflow: 'hidden' }" v-if="expandForm">
          <div :style="{ float: 'right', marginBottom: 24 }">
            <a-button type="primary" htmlType="submit">
              查询
            </a-button>
            <a-button :style="{ 'margin-left': '8px' }" @click="this.handleFormReset">
              重置
            </a-button>
            <a :style="{ 'margin-left': '8px' }" @click="this.toggleForm">
              收起 <a-icon type="up" />
            </a>
          </div>
        </div>
      </a-form>
            </div>
            <div class="tableListOperator">
              <a-button icon="plus" type="primary" @click="() => this.handleModalVisible(true)">
                新建
              </a-button>
              <!--
              {selectedRows.length > 0 && (
                <span>
                  <Button>批量操作</Button>
                  <Dropdown overlay={menu}>
                    <Button>
                      更多操作 <Icon type="down" />
                    </Button>
                  </Dropdown>
                </span>
              )}
              -->
            </div>
            <av-standard-table
              :columns="columns"
              :dataSource="dataSource"
              :selectedRows="selectedRows"
              @change="onchange"
            >
              <!--
              <template slot="columns">
                <a-table-column
                  dataIndex="name"
                  key="name"
                  title="规则名称"
                >
                </a-table-column>
                <a-table-column
                  dataIndex="desc"
                  key="desc"
                  title="描述"
                >
                </a-table-column>
                <a-table-column
                  dataIndex="callNo"
                  key="callNo"
                  title="服务调用次数"
                  align= "right"
                  :sorter="true"
                  :needTotal="true"
                >
                  <template slot-scope="text">
                    <span>{{text}}万
                    </span>
                  </template>
                </a-table-column>
                <a-table-column
                  dataIndex="status"
                  key="status"
                  title="状态"
                  :filters="statuFilters"
                >
                  <template slot-scope="val">
                    <a-badge :status="statusMap[val]" :text="status[val]" />
                  </template>
                </a-table-column>

                <a-table-column
                  dataIndex="updatedAt"
                  key="updatedAt"
                  title="上次调度时间"
                  :sorter="true"
                >
                  <template slot-scope="text">
                    <span>{{moment(text).format('YYYY-MM-DD HH:mm:ss')}}</span>
                  </template>
                </a-table-column>
                <a-table-column
                  key="opt"
                  title="操作"
                >
                  <template slot-scope="text,record">
                    <a @click="handleUpdateModalVisible(true, record)">配置</a>
                    <a-divider type="vertical" />
                    <a href="">订阅警报</a>
                  </template>
                </a-table-column>
              </template>
              -->
            </av-standard-table>
          </div>
    </a-card>

  </div>
</template>


<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';
import moment from 'moment';

const statusMap = ['default', 'processing', 'success', 'error'];
const status = ['关闭', '运行中', '已上线', '异常'];

@Component({
  components: {},
})
export default class QueryList extends Vue {
  private searchForm: any;

  private searchFormLayout: any = {
    labelCol: {span: 5},
    wrapperCol: {span: 18, offset: 1 },
  };

  private expandForm: boolean = false;

  private columns: any[] = [
    {
      title: '规则名称',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '服务调用次数',
      dataIndex: 'callNo',
      sorter: true,
      align: 'right',
      needTotal: true,
      customRender: (text: any) => `<span>{{text}} 万</span>`,
      /*
      scopedSlots: {
        customRender: 'callNo' ,
      },*/
    },
  ];

  private selectedRowKeys: any[] = [];
  private selectedRows: any[] = [];

  constructor() {
    super();
  }

  get status() {
    return status;
  }

  get statusMap() {
    return statusMap;
  }

  get statuFilters() {
    return [
        {
          text: status[0],
          value: 0,
        },
        {
          text: status[1],
          value: 1,
        },
        {
          text: status[2],
          value: 2,
        },
        {
          text: status[3],
          value: 3,
        },
      ];
  }

  private moment: any = moment;

  get dataSource() {
    const dataSource: any[] = [];
    for (let i = 0; i < 100; i++) {
      dataSource.push({
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      callNo: Math.floor(Math.random() * 1000),
      createdAt: '2017-07-19T00:00:00.000Z',
      desc: '这是一段描述',
      disabled: i  <= 3,
      href: 'https://ant.design',
      key: i,
      name: `TradeCode ${i}`,
      owner: `曲丽丽${i}`,
      progress: 83,
      status: Math.floor(Math.random() * 4),
      title: `一个任务名称 ${i}`,
      updatedAt: '2017-07-19T00:00:00.000Z',
      });
    }
    return dataSource;
  }

  private handleModalVisible(isVisible: boolean): void {}

  private toggleForm(): void {
    this.expandForm = !this.expandForm;
  }

  private handleFormReset(): void {}

  private handleSearch(): void {}

  private onchange(): void{}

  private handleUpdateModalVisible(visible: boolean, record: any): void{
      console.log('handleUpdateModalVisible');
      console.log(visible);
      console.log(record);

  }
}
</script>
