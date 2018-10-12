<template>
<div class="advanced-detail">
    <av-page-header title="高级详情页" :logo="true">
        <div slot="breadcrumb">
            <a-breadcrumb>
                <a-breadcrumb-item>
                    <a >首页</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    <a >详情页</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item>高级详情页</a-breadcrumb-item>
            </a-breadcrumb>
        </div>
        <div slot="logo"><img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png" /></div>
            <div slot="title">单号：234231029431</div>
            <div slot="action">
                <a-button-group>
                    <a-button>操作</a-button>
                    <a-button>操作</a-button>
                    <a-dropdown placement="bottomRight">
                        <a-button>
                            <a-icon type="ellipsis" />
                        </a-button>
                        <a-menu slot="overlay">
                            <a-menu-item>
                                <a href="javascript:;">选项一</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">选项二</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">选项三</a>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </a-button-group>
                <a-button type="primary">主操作</a-button>
            </div>
            <div slot="content">
                <description-list class="headerList" size="small" col="2">
                    <description term="创建人" :column="2">曲丽丽</description>
                    <description term="订购产品" :column="2">XX 服务</description>
                    <description term="创建时间" :column="2">2017-07-07</description>
                    <description term="关联单据" :column="2">
                        <a href="">12421</a>
                    </description>
                    <description term="生效日期" :column="2">2017-07-07 ~ 2017-08-08</description>
                    <description term="备注" :column="2">请于两个工作日内确认</description>
                </description-list>
            </div>

            <div slot="extra">
                <a-row>
                    <a-col :xs="24" :sm="12">
                        <div class="textSecondary">状态</div>
                        <div class="heading">待审批</div>
                    </a-col>
                    <a-col :xs="24" :sm="12">
                        <div class="textSecondary">订单金额</div>
                        <div class="heading">¥ 568.08</div>
                    </a-col>
                </a-row>
            </div>
            <div slot="tab">
                <a-tabs defaultActiveKey="detail">
                    <a-tab-pane tab="详情" key="detail"></a-tab-pane>
                    <a-tab-pane tab="规则" key="rule"></a-tab-pane>
                </a-tabs>
            </div>
    </av-page-header>

    <a-card title="流程进度" style="margin-bottom: 24px" :bordered="false">
        <a-steps direction="horizontal" :current="1">
            <template slot="progressDot" slot-scope="{index, status, prefixCls}">
                <a-popover v-if="status === 'process'" placement="topLeft" arrowPointAtCenter>
                    <template slot="content">
                        <div style="width: 160px">
                            吴加号
                            <span class="textSecondary" style="float: right">
                              <a-badge status="default" text="未响应">
                              </a-badge>
                            </span>
                            <div class="textSecondary" style="margin-top: 4px">
                                耗时：2小时25分钟
                            </div>
                        </div>
                    </template>
                    <span :class="`${prefixCls}-icon-dot`"></span>
                </a-popover>
                <span v-else :class="`${prefixCls}-icon-dot`"></span>
            </template>
            <a-step title="创建项目">
                <template slot="description">
                    <div class="textSecondary stepDescription">
                        曲丽丽
                        <a-icon type="dingding-o" style="margin-left: 8px " />
                        <div>2016-12-12 12:32</div>
                    </div>
                </template>
            </a-step>
            <a-step title="部门初审">
                <template slot="description">
                    <div class="stepDescription">
                        周毛毛
                        <a-icon type="dingding-o" style="color: #00A0E9,margin-left: 8px " />
                        <div>
                            <a href="">催一下</a>
                        </div>
                    </div>
                </template>
            </a-step>
            <a-step title="财务复核" />
            <a-step title="完成" />
        </a-steps>
    </a-card>

    <a-card title="用户信息" style="margin-bottom: 24px" :bordered="false">
        <description-list style="margin-bottom: 24px">
            <Description term="用户姓名">付小小</description>
            <description term="会员卡号">32943898021309809423</description>
            <description term="身份证">3321944288191034921</description>
            <description term="联系方式">18112345678</description>
            <description term="联系地址">
                曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口
            </description>
        </description-list>
        <description-list style="margin-bottom: 24px" title="信息组">
            <description term="某某数据">725</description>
            <description term="该数据更新时间">2017-08-08</description>
            <description>&nbsp;</description>

            <description>
                <template slot="term">
                    <span>
                  某某数据
                  <a-tooltip title="数据说明">
                    <a-icon
                      style="color: rgba(0, 0, 0, 0.43), margin-left: 4px"
                      type="info-circle-o"
                    />
                  </a-tooltip>
                </span>
                </template>
                725
            </description>
            <!-- -->
            <description term="该数据更新时间">2017-08-08</description>
        </description-list>
        <h4 style="margin-bottom: 16px">信息组</h4>
        <a-card type="inner" title="多层级信息组">
            <description-list size="small" style="margin-bottom: 16px" title="组名称">
                <description term="负责人">林东东</description>
                <description term="角色码">1234567</description>
                <description term="所属部门">XX公司 - YY部</description>
                <description term="过期时间">2017-08-08</description>
                <description term="描述">
                    这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...
                </description>
            </description-list>
            <a-divider style="margin: 16px 0" />
            <description-list size="small" style="margin-bottom: 16px" title="组名称" col="1">
                <description :column="1" term="学名">
                    Citrullus lanatus (Thunb.) Matsum. et
                    Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..
                </description>
            </description-list>
            <a-divider style="margin: 16px 0" />
            <description-list size="small" title="组名称">
                <description term="负责人">付小小</description>
                <description term="角色码">1234568</description>
            </description-list>
        </a-card>
    </a-card>
    <a-card title="用户近半年来电记录" style="margin-bottom: 24px" :bordered="false">
        <div class="noData">
            <a-icon type="frown-o" />
            暂无数据
        </div>
    </a-card>
    <a-card class="tabsCard" :bordered="false" :tabList="operationTabList" @tabChange="handleOperationTabChange">
        <a-table v-if="operationkey === 'tab1'" :pagination="false" :loading="false" :dataSource="advancedOperation1" :columns="columns">
        </a-table>
        <a-table v-if="operationkey === 'tab2'" :pagination="false" :loading="false" :dataSource="advancedOperation2" :columns="columns">
        </a-table>
        <a-table v-if="operationkey === 'tab3'" :pagination="false" :loading="false" :dataSource="advancedOperation3" :columns="columns">
        </a-table>
    </a-card>

</div>
</template>

<script lang="tsx">
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

import DescriptionList from '@/components/descriptionlist/DescriptionList.vue';
import Description from '@/components/descriptionlist/Description.vue';

import moment from 'moment';
import axios from 'axios';

/**
 * 高级详情页
 */
@Component({
    components: {
        DescriptionList,
        Description,
    },
})
export default class AdvancedDetail extends Vue {

    private operationkey: string = 'tab1';

    private advancedOperation1: any[] = [];
    private advancedOperation2: any[] = [];
    private advancedOperation3: any[] = [];

    private operationTabList: any[] = [{
            key: 'tab1',
            tab: '操作日志一',
        },
        {
            key: 'tab2',
            tab: '操作日志二',
        },
        {
            key: 'tab3',
            tab: '操作日志三',
        },
    ];

    private columns = [{
            title: '操作类型',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '操作人',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '执行结果',
            dataIndex: 'status',
            key: 'status',
            customRender: this.statusRender,
        },
        {
            title: '操作时间',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
        },
        {
            title: '备注',
            dataIndex: 'memo',
            key: 'memo',
        },
    ];

    private mounted(): void {
        axios.get('/api/profile/advanced').then((res: any) => {
            const data = res.data;
            this.advancedOperation1 = data.advancedOperation1;
            this.advancedOperation2 = data.advancedOperation2;
            this.advancedOperation3 = data.advancedOperation3;
        });
    }

    private handleOperationTabChange(key: string) {
        this.operationkey = key;
    }

    private statusRender(text: string) {
        if (text ===  'agree') {
            // tslint:disable-next-line:no-angle-bracket-type-assertion
            return <a-badge status = 'success' text = '成功' />;
        }
        // tslint:disable-next-line:no-angle-bracket-type-assertion
        return <a-badge status = 'error' text = '驳回' />;
    }


}
</script>

<style lang="less">
@import '../../assets/theme/styles/index.less';

.advanced-detail {

    .headerList {
        margin-bottom: 4px;
    }

    .tabsCard {
        :global {
            .ant-card-head {
                padding: 0 16px;
            }
        }
    }

    .noData {
        color: @disabled-color;
        text-align: center;
        line-height: 64px;
        font-size: 16px;

        i {
            font-size: 24px;
            margin-right: 16px;
            position: relative;
            top: 3px;
        }
    }

    .heading {
        color: @heading-color;
        font-size: 20px;
    }

    .stepDescription {
        font-size: 14px;
        position: relative;
        left: 38px;
        padding-top: 8px;
        text-align: left;

        >div {
            margin-top: 8px;
            margin-bottom: 4px;
        }
    }

    .textSecondary {
        color: @text-color-secondary;
    }

    @media screen and (max-width: @screen-sm) {
        .stepDescription {
            left: 8px;
        }
    }
}
</style>
