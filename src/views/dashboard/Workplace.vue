<template>
  <div>
    <av-page-header>
      <div slot="breadcrumb">
        <a-breadcrumb>
          <a-breadcrumb-item>
            <a >首页</a>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <a >Dashboard</a>
          </a-breadcrumb-item>
          <a-breadcrumb-item>工作台</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div slot="title">工作台</div>
      <div  slot="content" class="page-content">
        <div class="avatar">
          <a-avatar src="https://gw.alipayobjects.com/zos/rmsportal/lctvVCLfRpYCkYxAsiVQ.png"></a-avatar>
        </div>
        <div class="desc">
          <div class="desc-title">早安，山治，我要吃肉！</div>
          <div>假砖家 | 地球－伟大航道－黄金梅丽号－厨房－小强部门</div>
        </div>
      </div>
      <div slot="extra" class="page-extra">
        <div>
          <p>项目数</p>
          <p>56</p>
        </div>
        <div>
          <p>团队内排名</p>
          <p>8
            <span> / 24</span>
          </p>
        </div>
        <div>
          <p>项目访问</p>
          <p>2,223</p>
        </div>

      </div>
    </av-page-header>
   
   <a-row :gutter="24">
          <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
            <a-card
              class="project-list mb-lg"
              style="margin-bottom: 24"
              title="进行中的项目"
              :bordered="false"
              extra="全部项目"
              :bodyStyle="{ padding: 0 }"
            >
            <a-card-grid v-for="(item) in notice" class="project-grid" :key="item.id">
                  <a-card :bodyStyle="{ padding: 0 }" :bordered="false">
                    <a-card-meta
                      :description="item.description"
                    >
                      <div slot="title" class="card-title">
                          <a-avatar size="small" :src="item.logo" />
                          <a :href="item.href">{{item.title}}</a>
                      </div>
                    </a-card-meta>
                    <div class="project-item">
                      <a :href="item.memberLink">{{item.member || ''}}</a>
                      <!--
                      <span className={styles.datetime} title={item.updatedAt}>
                          {moment(item.updatedAt).fromNow()}
                        </span>
                      {item.updatedAt && (
                        
                      )}
                      -->
                    </div>
                  </a-card>
                </a-card-grid>
            </a-card>
            <a-card
              :bodyStyle="{ padding: 0 }"
              :bordered="false"
              class="active-card mb-lg"
              title="动态"
            >
            
              <a-list size="large">
                <div class="activities">
                    {this.renderActivities()}
                </div>
              </a-list>
              
            </a-card>
          </a-col>
          <a-col :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
            <a-card
              style="margin-bottom: 24px"
              title="快速开始 / 便捷导航"
              :bordered="false"
              :bodyStyle="{ padding: 0 }"
            >
            <!--
              <EditableLinkGroup onAdd={() => {}} links={links} linkElement={Link} />
                  -->
            </a-card>
            <a-card
              style="margin-bottom: 24px"
              :bordered="false"
              title="XX 指数"
            >
              <div class="chart">
                  <!--
                <Radar hasLegend height={343} data={radarData} />
                -->
              </div>
            </a-card>
            <a-card
              :bodyStyle="{ paddingTop: 12, paddingBottom: 12 }"
              :bordered="false"
              title="团队"
            >
              <div class="members">
                <a-row :gutter="48">
                  <a-col v-for="(item) in notice" :span="12" :key="`members-item-${item.id}`">
                      <a :href="item.href">
                        <a-avatar :src="item.logo" size="small" />
                        <span class="member">{{item.member}}</span>
                      </a>
                    </a-col>
                </a-row>
              </div>
            </a-card>
          </a-col>
        </a-row>

  </div>
</template>


<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';
const appModule = namespace('app');

@Component({
    components: {
    },
})
export default class Workplace extends Vue {

    constructor() {
        super();
    }

    get notice() {
        return [
            {
                description: '那是一种内在的东西，他们到达不了，也无法触及的',
                href: '',
                id: 'xxx1',
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                member: '科学搬砖组',
                memberLink: '',
                title: 'Alipay',
                updatedAt: '2018-09-16T13: 03: 20.729Z',
            },
            {
                description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
                href: '',
                id: 'xxx2',
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
                member: '全组都是吴彦祖',
                memberLink: '',
                title: 'Angualr',
                updatedAt: '2018-09-16T13: 03: 20.729Z',
            },
            {
                description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
                href: '',
                id: 'xxx3',
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
                member: '中二少女团',
                memberLink: '',
                title: 'Antd',
                updatedAt: '2018-09-16T13: 03: 20.729Z',
            },
            {
                description: '那时候我只会想自己想要什么，从不想自己拥有什么',
                href: '',
                id: 'xxx4',
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
                member: '程序员日常',
                memberLink: '',
                title: 'Antd Pro',
                updatedAt: '2018-09-16T13: 03: 20.729Z',
            },
            {
                description: '凛冬将至',
                href: '',
                id: 'xxx5',
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
                member: '高逼格设计天团',
                memberLink: '',
                title: 'BootStrapper',
                updatedAt: '2018-09-16T13: 03: 20.729Z',
            },
            {
                description: '生命就像一盒巧克力，结果往往出人意料',
                href: '',
                id: 'xxx6',
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
                member: '骗你来学计算机',
                memberLink: '',
                title: 'React',
                updatedAt: '2018-09-16T13:03:20.729Z',
            },
        ];
    }
}
</script>


<style lang="less">
.pageHeaderContent {
  display:flex;
}


.extraContent{
    margin-left: 88px;
    min-width: 242px;
}

@text-color-secondary:rgba(0,0,0,.45);
@font-size-base:14px;
@border-color-split:#e8e8e8;
@heading-color:rgba(0,0,0,.85);
@primary-color:#1890ff;
@disabled-color:rgba(0,0,0,.25);
@screen-xl: 1200px;
@screen-lg: 992px;

.page-content {
    display: flex;
    .avatar {
      flex: 0 1 72px;
      margin-bottom: 8px;
      .ant-avatar {
        border-radius: 72px;
        display: block;
        width: 72px;
        height: 72px;
      }
    }
    .desc {
      position: relative;
      top: 4px;
      margin-left: 24px;
      flex: 1 1 auto;
      color: @text-color-secondary;
      line-height: 22px;
      .desc-title {
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        color: @heading-color;
        margin-bottom: 12px;
      }
    }
  }

.page-extra {
    //.clearfix();
    float: right;
    white-space: nowrap;
    & > div {
      padding: 0 32px;
      position: relative;
      display: inline-block;
      & > p:first-child {
        color: @text-color-secondary;
        font-size: @font-size-base;
        line-height: 22px;
        margin-bottom: 4px;
      }
      & > p {
        color: @heading-color;
        font-size: 30px;
        line-height: 38px;
        margin: 0;
        & > span {
          color: @text-color-secondary;
          font-size: 20px;
        }
      }
      &:after {
        background-color: @border-color-split;
        position: absolute;
        top: 8px;
        right: 0;
        width: 1px;
        height: 40px;
        content: '';
      }
    }
    & > div:last-child {
      padding-right: 0;
      &:after {
        display: none;
      }
    }
  }




  .project-list {
    .ant-card-meta-description {
      color: @text-color-secondary;
      height: 44px;
      line-height: 22px;
      overflow: hidden;
    }
    .card-title {
      font-size: 0;
      a {
        color: @heading-color;
        margin-left: 12px;
        line-height: 24px;
        height: 24px;
        display: inline-block;
        vertical-align: top;
        font-size: @font-size-base;
        &:hover {
          color: @primary-color;
        }
      }
    }
    .project-grid {
      width: 33.33%;
    }
    .project-item {
      display: flex;
      margin-top: 8px;
      overflow: hidden;
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      //.textOverflow();
      a {
        color: @text-color-secondary;
        display: inline-block;
        flex: 1 1 0;
        //.textOverflow();
        &:hover {
          color: @primary-color;
        }
      }
      .datetime {
        color: @disabled-color;
        flex: 0 0 auto;
        float: right;
      }
    }
  }

.mb-lg {
    margin-bottom: 24px!important;
}

@media screen and (max-width: @screen-xl) and (min-width: @screen-lg) {
    .active-card {
      margin-bottom: 24px;
    }
    .members {
      margin-bottom: 0;
    }
    .page-extra {
      margin-left: -44px;
      & > div {
        padding: 0 16px;
      }
    }
  }

  @media screen and (max-width: @screen-lg) {
    .active-card {
      margin-bottom: 24px;
    }
    .members {
      margin-bottom: 0;
    }
    .page-extra {
      float: none;
      margin-right: 0;
      & > div {
        padding: 0 16px;
        text-align: left;
        &:after {
          display: none;
        }
      }
    }
  }

</style>