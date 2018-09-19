<template>
  <div>
    <a-table
          :rowKey="(record) => record.key"
          :loading="loading"
          :columns="columns"
          :dataSource="data"
          :pagination="false"
          :rowClassName="record => record.editable ? 'editable' : ''"
        >

        <template slot="name" slot-scope="text,record">
          <a-input v-if="record.editable"
                    :value="text"
                    autoFocus
                    @change="e => handleFieldChange(e, 'name', record.key)"
                    @pressEnter="e => handleKeyPress(e, record.key)"
                    placeholder="成员姓名"
                />
                <span v-else >{{text}}</span>
        </template>

        <template slot="workId" slot-scope="text,record">
          <a-input v-if="record.editable"
                    :value="text"
                    autoFocus
                    @change="e => handleFieldChange(e, 'workId', record.key)"
                    @pressEnter="e => handleKeyPress(e, record.key)"
                    placeholder="工号"
                />
                <span v-else >{{text}}</span>
        </template>

        <template slot="department" slot-scope="text,record">
          <a-input v-if="record.editable"
                    :value="text"
                    autoFocus
                    @change="e => handleFieldChange(e, 'department', record.key)"
                    @pressEnter="e => handleKeyPress(e, record.key)"
                    placeholder="所属部门"
                />
                <span v-else >{{text}}</span>
        </template>
        <template slot="action" slot-scope="text,record">
            <span v-if="!record.editable">
              <a @click="e=>toggleEditable(e, record.key)">编辑</a>
              <a-divider type="vertical" />
              <a-popconfirm title="是否要删除此行？" @confirm="remove(record.key)">
                <a>删除</a>
              </a-popconfirm>
            </span>

            <template v-else>
              <span v-if="record.isNew">
                  <a @click="e => saveRow(e, record.key)">添加</a>
                  <a-divider type="vertical" />
                  <a-popconfirm title="是否要删除此行？" @confirm="() => remove(record.key)">
                    <a>删除</a>
                  </a-popconfirm>
              </span>
              <span v-else>
                <a @click="e => saveRow(e, record.key)">保存</a>
                <a-divider type="vertical" />
                <a @click="e => cancel(e, record.key)">取消</a>
              </span>
            </template>

        </template>
    </a-table>
        <a-button
          :style="{ width: '100%', marginTop: 16, marginBottom: 8 }"
          type="dashed"
          @click="newMember"
          icon="plus"
        >
          新增成员
        </a-button>
  </div>
</template>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

@Component({})
export default class TableForm extends Vue {
  @Prop({ type: Array, default: () => [] })
  private value!: any[];

  private loading: boolean = false;

  private data: any[] = this.value;

  private index: number = 0;

  private clickedCancel: boolean = false;

  private cacheOriginData: any = {};

  private columns: any[] = [
    {
      title: '成员姓名',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      scopedSlots: {
        customRender: 'name',
      },
    },
    {
      title: '工号',
      dataIndex: 'workId',
      key: 'workId',
      width: '20%',
      scopedSlots: {
        customRender: 'workId',
      },
    },
    {
      title: '所属部门',
      dataIndex: 'department',
      key: 'department',
      width: '40%',
      scopedSlots: {
        customRender: 'department',
      },
    },
    {
      title: '操作',
      key: 'action',
      scopedSlots: {
        customRender: 'action',
      },
    },
  ];

  constructor() {
    super();
  }

  private handleFieldChange(e: any, fieldName: string, key: any) {
    const newData = this.data.map((item: any) => ({ ...item }));

    const target = this.getRowByKey(key, newData);

    if (target) {
      target[fieldName] = e.target.value;
      this.data = newData;
    }
  }

  private handleKeyPress(e: any, key: any) {
    if (e.key === 'Enter') {
      this.saveRow(e, key);
    }
  }

  private newMember(e: any) {
    const newData = this.data.map((item: any) => ({ ...item }));
    newData.push({
      key: `NEW_TEMP_ID_${this.index}`,
      workId: '',
      name: '',
      department: '',
      editable: true,
      isNew: true,
    });
    this.index += 1;
    this.data = newData;
  }

  private saveRow(e: any, key: any) {
    e.preventDefault();
    this.loading = true;
    setTimeout(() => {
      if (this.clickedCancel) {
        this.clickedCancel = false;
        return;
      }
      const target = this.getRowByKey(key, null) || {};
      if (!target.workId || !target.name || !target.department) {
        // message.error('请填写完整成员信息。');
        e.target.focus();
        this.loading = false;
        return;
      }

      delete target.isNew;
      this.toggleEditable(e, key);
      this.loading = false;
    }, 500);
  }

  private toggleEditable(e: any, key: any) {
    e.preventDefault();
    const newData = this.data.map((item: any) => ({ ...item }));
    const target = this.getRowByKey(key, newData);
    if (target) {
      if (!target.editable) {
        this.cacheOriginData[key] = { ...target };
      }
      target.editable = !target.editable;
      this.data = newData;
    }
  }

  private cancel(e: any, key: any) {
    this.clickedCancel = true;
    e.preventDefault();
    const newData = this.data.map((item: any) => ({ ...item }));
    const target = this.getRowByKey(key, newData);
    if (this.cacheOriginData[key]) {
      Object.assign(target, this.cacheOriginData[key]);
      delete this.cacheOriginData[key];
    }
    target.editable = false;
    this.data = newData;
    this.clickedCancel = false;
  }

  private remove(key: any) {
    const newData = this.data.filter((item: any) => item.key !== key);
    this.data = newData;
  }

  private getRowByKey(key: any, newData: any) {
    return (newData || this.data).filter((item: any) => item.key === key)[0];
  }
}
</script>