<template>
<div class="standardList">
    <av-page-header title="标准列表">
        <div slot="breadcrumb">
            <a-breadcrumb>
                <a-breadcrumb-item>
                    <a >首页</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    <a >列表页</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item>标准列表</a-breadcrumb-item>
            </a-breadcrumb>
        </div>
    </av-page-header>

    <a-card :bordered="false">
        <a-row>
            <a-col :sm="8" :xs="24">
                <info title="我的待办" value="8个任务" bordered />
            </a-col>
            <a-col :sm="8" :xs="24">
                <info title="本周任务平均处理时间" value="32分钟" bordered />
            </a-col>
            <a-col :sm="8" :xs="24">
                <info title="本周完成任务数" value="24个任务" />
            </a-col>
        </a-row>
    </a-card>

    <a-card class="listCard" :bordered="false" title="标准列表" style="margin-top: 24px" :bodyStyle="{ padding: '0 32px 40px 32px' }">
        <template slot="extra">
          <div class="extraContent">
            <a-radio-group defaultValue="all">
              <a-radio-button value="all">全部</a-radio-button>
              <a-radio-button value="progress">进行中</a-radio-button>
              <a-radio-button value="waiting">等待中</a-radio-button>
            </a-radio-group>
            <a-input-search class="extraContentSearch" placeholder="请输入" @search="handleSearch" />
          </div>
        </template>
        <a-button type="dashed" style="width:100%;margin-bottom:8px" icon="plus" @click="newModal">
            添加
        </a-button>
        <a-list size="large" rowKey="id" :loading="loading" :pagination="paginationProps" :dataSource="list">
            <a-list-item slot="renderItem" slot-scope="item, index">
                <template slot="actions">
                  <a @click="(e)=>handleEditClick(e,item)">
                      编辑
                  </a>
                  <a-dropdown>
                    <template slot="overlay">
                      <a-menu @click="({key})=>handleEditAndDelete(key,item)">
                        <a-menu-item key="edit">编辑</a-menu-item>
                        <a-menu-item key="delete">删除</a-menu-item>
                      </a-menu>
                    </template>
                    <a>
                      更多 <a-icon type="down" />
                    </a>
                  </a-dropdown>
                </template>
                <a-list-item-meta :description="item.subDescription">
                    <a slot="title" :href="item.href">{{item.title}}</a>
                    <a-avatar slot="avatar" :src="item.logo" shape="square" size="large" />
                </a-list-item-meta>
                <div class="listContent">
                  <div class="listContentItem">
                    <span>Owner</span>
                    <p>{{item.owner}}</p>
                  </div>
                  <div class="listContentItem">
                    <span>开始时间</span>
                    <p>{{moment(item.createdAt).format('YYYY-MM-DD HH:mm')}}</p>
                  </div>
                  <div class="listContentItem">
                    <a-progress :percent="item.percent" :status="item.status" :strokeWidth="6" style="width: 180px" />
                  </div>
                </div>
            </a-list-item>
        </a-list>
    </a-card>
  <base-list-modal
      :visible.sync="baselistmodal"
      :record="newRecoard"
      @close="handleListModalClose"
    ></base-list-modal>
</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue,
} from 'vue-property-decorator';
import {
    State,
    Mutation,
    namespace,
} from 'vuex-class';

import Info from './components/Info.vue';
import BaseListModal from './components/BaseListModal.vue';

import moment from 'moment';
import axios from 'axios';

@Component({
    components: {
        Info,
        BaseListModal,
    },
})
export default class PrimaryList extends Vue {

    private loading: boolean = false;

    private moment: any = moment;

    private baselistmodal: boolean = false;

    private newRecoard: any = {};

    private paginationProps: any = {
        showSizeChanger: true,
        showQuickJumper: true,
        pageSize: 5,
        total: 50,
    };

    private list: any[] = [];

    private showModal() {
      this.baselistmodal = true;
    }

    private mounted() {
        axios.get('/api/fake_list', {
            params: {
                count: 5,
            },
        }).then((res: any) => {
            this.list = res.data;
            // console.log(this.list);
        });
    }

    private handleEditClick(e: any, item: any): void {
      e.preventDefault();
      // console.log(item);
      this.showEditModal(item);
    }

    private handleEditAndDelete(key: any, item: any): void {
      // console.log(key);
      // console.log(item);
      this.showEditModal(item);
    }

    private newModal(): void {
      this.baselistmodal = true;
      this.newRecoard = {};
    }

    private showEditModal(item: any): void {
      this.baselistmodal = true;
      this.newRecoard = item;
      // console.log(item);
    }

    private handleSearch(value: any) {
      // console.log(value);
    }

    private handleListModalClose(isok: any) {
      // console.log('handleListModalClose');
      // console.log('isok', isok);
    }
}
</script>

<style lang="less">

@import '../../assets/theme/styles/index.less';

.standardList {
  :global {
    .ant-card-head {
      border-bottom: none;
    }
    .ant-card-head-title {
      line-height: 32px;
      padding: 24px 0;
    }
    .ant-card-extra {
      padding: 24px 0;
    }
    .ant-list-pagination {
      text-align: right;
      margin-top: 24px;
    }
    .ant-avatar-lg {
      width: 48px;
      height: 48px;
      line-height: 48px;
    }
  }

  .headerInfo {
    position: relative;
    text-align: center;
    & > span {
      color: @text-color-secondary;
      display: inline-block;
      font-size: @font-size-base;
      line-height: 22px;
      margin-bottom: 4px;
    }
    & > p {
      color: @heading-color;
      font-size: 24px;
      line-height: 32px;
      margin: 0;
    }
    & > em {
      background-color: @border-color-split;
      position: absolute;
      height: 56px;
      width: 1px;
      top: 0;
      right: 0;
    }
  }

  .listContent {
    font-size: 0;
    .listContentItem {
      color: @text-color-secondary;
      display: inline-block;
      vertical-align: middle;
      font-size: @font-size-base;
      margin-left: 40px;
      > span {
        line-height: 20px;
      }
      > p {
        margin-top: 4px;
        margin-bottom: 0;
        line-height: 22px;
      }
    }
  }
  .extraContentSearch {
    margin-left: 16px;
    width: 272px;
  }
}

@media screen and (max-width: @screen-xs) {
  .standardList {
    :global {
      .ant-list-item-content {
        display: block;
        flex: none;
        width: 100%;
      }
      .ant-list-item-action {
        margin-left: 0;
      }
    }
    .listContent {
      margin-left: 0;
      & > div {
        margin-left: 0;
      }
    }
    .listCard {
      :global {
        .ant-card-head-title {
          overflow: visible;
        }
      }
    }
  }
}

@media screen and (max-width: @screen-sm) {
  .standardList {
    .extraContentSearch {
      margin-left: 0;
      width: 100%;
    }
    .headerInfo {
      margin-bottom: 16px;
      & > em {
        display: none;
      }
    }
  }
}

@media screen and (max-width: @screen-md) {
  .standardList {
    .listContent {
      & > div {
        display: block;
      }
      & > div:last-child {
        top: 0;
        width: 100%;
      }
    }
  }
  .listCard {
    :global {
      .ant-radio-group {
        display: block;
        margin-bottom: 8px;
      }
    }
  }
}

@media screen and (max-width: @screen-lg) and (min-width: @screen-md) {
  .standardList {
    .listContent {
      & > div {
        display: block;
      }
      & > div:last-child {
        top: 0;
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: @screen-xl) {
  .standardList {
    .listContent {
      & > div {
        margin-left: 24px;
      }
      & > div:last-child {
        top: 0;
      }
    }
  }
}

@media screen and (max-width: 1400px) {
  .standardList {
    .listContent {
      text-align: right;
      & > div:last-child {
        top: 0;
      }
    }
  }
}

.standardListForm {
  :global {
    .ant-form-item {
      margin-bottom: 12px;
      &:last-child {
        padding-top: 4px;
        margin-bottom: 32px;
      }
    }
  }
}

.formResult {
  width: 100%;
  [class^='title'] {
    margin-bottom: 8px;
  }
}

</style>
