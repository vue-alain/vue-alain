<template>
<div>
    <av-page-header title="查询表格">
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
                    <a-row :gutter="{ md: 8, lg: 24, xl: 48 }" v-if="expandForm">
                        <a-col :md="8" :sm="24">
                            <a-form-item label="更新日期" fieldDecoratorId="date" v-bind="searchFormLayout">
                                <a-date-picker :style="{ width: '100%' }" placeholder="请输入更新日期" />
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
                
                <span v-if="selectedRows.length > 0">
                  <a-button>批量操作</a-button>
                  <a-dropdown>
                    <template slot="overlay">
                    <a-menu @click="handleMenuClick">
                      <a-menu-item key="remove">删除</a-menu-item>
                      <a-menu-item key="approval">批量审批</a-menu-item>
                    </a-menu>
                    </template>
                    <a-button>
                      更多操作 <a-icon type="down" />
                    </a-button>
                  </a-dropdown>
                </span>
            </div>
            <av-standard-table :dataSource="dataSource" :selectedRows="selectedRows" :columns="columns" :loading="tableLoading" @tableChange="handlerTableChange" @selectChange="handlerSelectChange">
            </av-standard-table>
        </div>
    </a-card>

    <a-modal title="新建规则" destroyOnClose :visible="visibleCreateModal" @ok="handleCreateModalOk" @cancel="handleCreateModalCancel">
        <!---->
        <a-form style="margin-top: 8px" :autoFormCreate="(form)=>{this.createForm = form}">
            <a-form-item :labelCol="{ span: 5 }" :wrapperCol="{ span: 15 }" label="描述" fieldDecoratorId="description" :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入至少五个字符的规则描述！', min: 5 }]}">
                <a-input placeholder="请输入" />
            </a-form-item>
        </a-form>
    </a-modal>

    <update-task-form :visible.sync="updateTaskFormVisible" :record="updateRecord" @ok="handleUpdateOk"></update-task-form>

</div>
</template>

<script lang="tsx">
import {
    Component,
    Prop,
    Vue
} from 'vue-property-decorator';
import {
    State,
    Mutation,
    namespace
} from 'vuex-class';

import moment from 'moment';
import axios from 'axios';

import UpdateTaskForm from './components/UpdateTaskForm.vue';

const statusMap = ['default', 'processing', 'success', 'error'];
const status = ['关闭', '运行中', '已上线', '异常'];

@Component({
    components: {
        UpdateTaskForm,
    },
})
export default class QueryList extends Vue {
    private searchForm: any;

    private searchFormLayout: any = {
        labelCol: {
            span: 5
        },
        wrapperCol: {
            span: 18,
            offset: 1
        },
    };

    private expandForm: boolean = false;

    private selectedRowKeys: any[] = [];

    private selectedRows: any[] = [];

    private tableLoading: boolean = false;

    private moment: any = moment;

    private dataSource: any[] = [];

    private visibleCreateModal: boolean = false;

    private updateTaskFormVisible: boolean = false;

    private createForm: any = null;

    private updateRecord: any = {};

    private columns: any[] = [{
            title: '规则名称',
            dataIndex: 'title',
        },
        {
            title: '描述',
            dataIndex: 'description',
        },
        {
            title: '服务调用次数',
            dataIndex: 'callNo',
            sorter: true,
            align: 'right',
            customRender: this.rightRender,
            needTotal: true,
        },
        {
            title: '状态',
            dataIndex: 'status',
            filters: [{
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
            ],
            customRender: this.statusRender,
        },
        {
            title: '上次调度时间',
            dataIndex: 'updatedAt',
            sorter: true,
            customRender: this.updatedAtRender,
        },
        {
            title: '操作',
            customRender: this.opRender,
        },
    ];

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
        return [{
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

    private handleModalVisible(isVisible: boolean): void {
        this.visibleCreateModal = isVisible;
    }

    private toggleForm(): void {
        this.expandForm = !this.expandForm;
    }

    private handleFormReset(): void {}

    private handleSearch(): void {}

    private handlerTableChange(pagination: any, filter: any, sorter: any): void {

    }

    private handleUpdateModalVisible(visible: boolean, record: any): void {
        this.updateTaskFormVisible = true;
        this.updateRecord = record;
    }

    private handleCreateModalOk() {
        this.createForm.validateFields((err: any, fieldsValue: any) => {
            if (err) {
                return;
            }
            const description = this.createForm.getFieldValue('description');
            axios.post('/saveRule', {
                desc: description
            }).then((res: any) => {
                this.createForm.resetFields();
                this.visibleCreateModal = false;
                this.loadRuleData();
            });
        });
    }

    private handleUpdateOk() {
        this.loadRuleData();
    }

    private handleCreateModalCancel(): any {
        this.visibleCreateModal = false;
    }

    private handlerSelectChange(arr1: any, arr2: any) {
      this.selectedRows = arr2;
    }

    private handleMenuClick(e: any) {
        console.log(e.key);
    }

    private mounted() {
        this.loadRuleData();

    }

    private loadRuleData() {
        this.tableLoading = true;
        axios.get('/rule').then((res) => {
                this.dataSource = res.data;
            })
            .finally(() => {
                this.tableLoading = false;
            });
    }

    private rightRender(text: string) {
        return `${text} 万`;
    }

    private statusRender(text: any, record: any, index: number) {
        return <a-badge status = {
          statusMap[text]
        }
        text = {
            status[text]
        }
        />;
    }

    private updatedAtRender(text: string) {
        return <span> {
            moment(text).format('YYYY-MM-DD HH:mm:ss')
        } </span>;
    }

    private opRender(text: string, record: any, index: number) {
        return <div>
            <a onClick = {
                () => this.handleUpdateModalVisible(true, record)
            } > 配置 </a>
            <a-divider type = "vertical" />
            <a href = "" > 订阅警报 </a>
            </div>;
    }

}
</script>

<style lang="less">
.tableList {
    .tableListOperator {
        margin-bottom: 16px;

        button {
            margin-right: 8px;
        }
    }
}
</style>
