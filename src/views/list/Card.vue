<template>
<div class="cardList">
    <av-page-header title="卡片列表">
        <div slot="breadcrumb">
            <a-breadcrumb>
                <a-breadcrumb-item>
                    <a >首页</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    <a >列表页</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item>卡片列表</a-breadcrumb-item>
            </a-breadcrumb>
        </div>
        <template slot="content">
            <div class="pageHeaderContent">
                <p>
                    段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，
                    提供跨越设计与开发的体验解决方案。
                </p>
                <div class="contentLink">
                    <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg" />{{' '}}
            快速开始
          </a>
                    <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" />{{' '}}
            产品简介
          </a>
                    <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" />{{' '}}
            产品文档
          </a>
                </div>
            </div>
        </template>
        <div slot="extra" class="extraImg">
            <img
            alt="这是一个标题"
            src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
          />
      </div>
    </av-page-header>
    <a-list rowKey="id" :loading="loading" :grid="{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }" :dataSource="['', ...list]">
        <!--
            renderItem={item =>
              item ? (
                <List.Item key={item.id}>
                  <Card hoverable className={styles.card} actions={[<a>操作一</a>, <a>操作二</a>]}>
                    <Card.Meta
                      avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} />}
                      title={<a>{item.title}</a>}
                      description={
                        <Ellipsis className={styles.item} lines={3}>
                          {item.description}
                        </Ellipsis>
                      }
                    />
                  </Card>
                </List.Item>
              ) : (
                <List.Item>
                  <Button type="dashed" className={styles.newButton}>
                    <Icon type="plus" /> 新增产品
                  </Button>
                </List.Item>
              )
            }-->
        <template slot="renderItem" slot-scope="item, index">
            <a-list-item v-if="item==''">
                <a-button type="dashed" class="newButton">
                    <a-icon type="plus" /> 新增产品
                </a-button>
            </a-list-item>
            <a-list-item v-if="item!=''" :key="item.id">
                  <a-card hoverable class="card">
                    <template slot="actions">
                      <a>操作一</a> <a>操作二</a>
                    </template>
                    <a-card-meta>
                      <!--
                        
                      avatar={}
                      title={}
                      description={
                        <Ellipsis className={styles.item} lines={3}>
                          {item.description}
                        </Ellipsis>
                      }
                      -->
                      <img slot="avatar" alt="" class="cardAvatar" :src="item.avatar" />
                      <a slot="title">{{item.title}}</a>
                      <template  slot="description">
                        {{item.description}}
                      </template>
                    </a-card-meta>
                  </a-card>
            </a-list-item>
        </template>

    </a-list>
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

import moment from 'moment';
import axios from 'axios';

@Component({
    components: {},
})
export default class CardList extends Vue {

    private loading: boolean = false;

    private list: any[] = [];

    private mounted() {
        axios.get('/api/fake_list', {
            params: {
                count: 8,
            },
        }).then((res: any) => {
            this.list = res.data;
            // console.log(this.list);
        });
    }

}
</script>

<style lang="less">
@import '../../assets/theme/styles/index.less';

.cardList {
    margin-bottom: -24px;

    .card {
        :global {
            .ant-card-meta-title {
                margin-bottom: 12px;

                &>a {
                    color: @heading-color;
                    display: inline-block;
                    max-width: 100%;
                }
            }

            .ant-card-actions {
                background: #f7f9fa;
            }

            .ant-card-body:hover {
                .ant-card-meta-title>a {
                    color: @primary-color;
                }
            }
        }
    }

    .item {
        height: 64px;
    }

    :global {
        .ant-list .ant-list-item-content-single {
            max-width: 100%;
        }
    }
}

.extraImg {
    margin-top: -60px;
    text-align: center;
    width: 195px;

    img {
        width: 100%;
    }
}

.newButton {
    background-color: #fff;
    border-color: @border-color-base;
    border-radius: @border-radius-sm;
    color: @text-color-secondary;
    width: 100%;
    height: 188px;
}

.cardAvatar {
    width: 48px;
    height: 48px;
    border-radius: 48px;
}

/*
.cardDescription {
    .textOverflowMulti();
}
*/

.pageHeaderContent {
    position: relative;
}

.contentLink {
    margin-top: 16px;

    a {
        margin-right: 32px;

        img {
            width: 24px;
        }
    }

    img {
        vertical-align: middle;
        margin-right: 8px;
    }
}

@media screen and (max-width: @screen-lg) {
    .contentLink {
        a {
            margin-right: 16px;
        }
    }
}

@media screen and (max-width: @screen-md) {
    .extraImg {
        display: none;
    }
}

@media screen and (max-width: @screen-sm) {
    .pageHeaderContent {
        padding-bottom: 30px;
    }

    .contentLink {
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 1000px;

        a {
            margin-right: 16px;
        }

        img {
            margin-right: 4px;
        }
    }
}
</style>
