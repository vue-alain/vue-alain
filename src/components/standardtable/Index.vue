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
                      {{item.customRender ? item.customRender(item.total) : item.total}}
                    </span>
                    </span>
                    <a @click="cleanSelectedKeys" style="margin-left: 24px">
                  清空
                </a>

                </template>
            </a-alert>
        </div>
        <a-table :loading="loading" :dataSource="dataSource" :rowSelection="rowSelection" @change="handleTableChange" :columns="columns">
            <!--
            <slot name="columns"></slot>
            -->
        </a-table>
    </div>
</div>
</template>

<style lang="less">
.standardTable {
    :global {
        .ant-table-pagination {
            margin-top: 24px;
        }
    }

    .tableAlert {
        margin-bottom: 16px;
    }
}
</style>

<script lang="tsx">
import {
    Component,
    Prop,
    Vue,
    Emit,
} from 'vue-property-decorator';
import * as _ from 'lodash';

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

        this.needTotalList = this.needTotalList.map((item: any) => ({
            ...item,
            total: _.sumBy(selectedRows, item.dataIndex),
        }));
        this.onSelectChange(selectedRowKeys, selectedRows);

    }

    private mounted() {
        this.needTotalList = this.initTotalList(this.columns);
    }
    private initTotalList(columns: any[]) {
        const totalList: any[] = [];
        columns.forEach((column: any) => {
            if (column.needTotal) {
                totalList.push({ ...column,
                    total: 0
                });
            }
        });
        return totalList;
    }
    @Emit('selectChange')
    private onSelectChange(selectedRowKeys: any, selectedRows: any) {

    }

    @Emit('tableChange')
    private onTableChange(pagination: any, filters: any, sorter: any) {

    }

}
</script>
