<template>
<div>
    <div class="standardTable">
        <div class="tableAlert">
            <a-alert type="info" showIcon>
                <template slot="message">
                    已选择 <a style="font-weight: 600">{{selectedRowKeys.length}}</a> 项
                    <span v-for="(item,index) in needTotalList" style="margin-left: 8px" :key="index">
                    {{item.title}}
                    总计&nbsp;
                    <span style="font-weight: 600">
                      <!--{item.render ? item.render(item.total) : item.total}-->
                      {{item.total}}
                    </span>
                    </span>
                    <a @click="cleanSelectedKeys" style="margin-left: 24px">
                  清空
                </a>

                </template>
            </a-alert>
        </div>
        <a-table :loading="loading" :dataSource="dataSource" :rowSelection="rowSelection" @change="handleTableChange">
            <slot name="columns"></slot>
        </a-table>
    </div>
</div>
</template>

<style lang="less" scoped>
.standardTable {

    .tableAlert {
        margin-bottom: 16px;
    }
}
</style><style lang="less">
.standardTable {
    .ant-table-pagination {
        margin-top: 24px;
    }

}
</style>

<script lang="ts">
import {
    Component,
    Prop,
    Vue,
    Emit,
} from 'vue-property-decorator';
import * as _ from 'lodash';

const statusMap = ['default', 'processing', 'success', 'error'];
const status = ['关闭', '运行中', '已上线', '异常'];

@Component({})
export default class StandardTable extends Vue {

    private needTotalList: any[] = [];

    private selectedRowKeys: any[] = [];

    get rowSelection() {
        return {
            selectedRowKeys: this.selectedRowKeys,
            onChange: this.handleRowSelectChange,
            getCheckboxProps: (record: any) => ({
                props: {
                    disabled: record.disabled,
                },
            }),
        };
    }

    @Prop({
        type: Boolean,
        default: false,
    })
    private loading!: boolean;

    @Prop({
        type: Object,
        default: () => {},
    })
    private pagination!: any;

    @Prop({
        type: Array,
        default: () => [],
    })
    private columns!: any[];

    @Prop({
        type: Array,
        default: () => [],
    })
    private dataSource!: any[];

    @Prop({
        type: Array,
        default: () => [],
    })
    private selectedRows!: any[];

    @Prop({
        type: Array,
        default: () => [],
    })
    private needTotalColumns!: any[];

    get paginationProps(): any {
        return {
            showSizeChanger: true,
            showQuickJumper: true,
            ...this.pagination,
        };
    }

    private cleanSelectedKeys(): void {
        this.handleRowSelectChange([], []);
    }

    private handleTableChange(pagination: any, filters: any, sorter: any): void {
        this.onTableChange(pagination, filters, sorter);
    }

    private handleRowSelectChange(selectedRowKeys: any, selectedRows: any): void {
        this.selectedRowKeys = selectedRowKeys;
        this.needTotalList = this.needTotalColumns.map((item: any) => {
            return {
                item,
                total: _.sumBy(selectedRows, item),
            };
        });
        this.onSelectChange(selectedRowKeys, selectedRows);

    }

    private mounted() {
        this.needTotalList = this.needTotalColumns.map((item: any) => {
            return {
                item,
                total: _.sumBy(this.selectedRows, item),
            };
        });
    }

    @Emit('selectChange')
    private onSelectChange(selectedRowKeys: any, selectedRows: any) {

    }

    @Emit('tableChange')
    private onTableChange(pagination: any, filters: any, sorter: any) {

    }

}
</script>
