<template>
  <div>
<a-row style="margin: 0 -12px">
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <av-g2-chart-card title="总销售额" total="￥ 189,345">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <av-g2-trend style="margin-right: 16px" 
            term="同周比" 
            :percent="12" 
            :is-increase="true" 
            :scale="0" />
            <av-g2-trend 
            term="日环比" 
            :target="100" 
            :value="89" 
            :scale="0" />
          </div>
          <div slot="footer">日均销售额<span> ￥234.56</span></div>
        </av-g2-chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <av-g2-chart-card title="总销售额" total="￥ 189,345">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <av-g2-mini-area color="rgb(151, 95, 228)" />
          </div>
          <div slot="footer">日访问量<span> 123,4</span></div>
        </av-g2-chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <av-g2-chart-card title="总销售额" total="￥ 189,345">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <av-g2-mini-bar />
          </div>
          <div slot="footer">转化率 <span>60%</span></div>
        </av-g2-chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <av-g2-chart-card title="运营活动效果" total="73%">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <av-g2-mini-progress :target="90" :percent="78" color="#13C2C2" height="8px"/>
          </div>
          <div slot="footer">
            <av-g2-trend style="margin-right: 16px" 
            term="同周比" 
            :percent="12" 
            :is-increase="true" 
            :scale="0" />
            <av-g2-trend 
            term="日环比" 
            :target="100" 
            :value="89" 
            :scale="0" />
          </div>
        </av-g2-chart-card>
      </a-col>
    </a-row>
    <a-row>
      <a-col  :sm="24" :md="24" :xl="24" >
        <a-card :bordered="false" :bodyStyle="{ padding: 0 }">
          <a-tabs 
            size="large" 
            :tabBarStyle="{ marginBottom: 24 }">
            <div slot="tabBarExtraContent">
      <div class="salesExtraWrap">
        <div class="salesExtra">
          <a :class="this.isActive('today')" @click="selectDate('today')">
            今日
          </a>
          <a :class="this.isActive('week')" @click="selectDate('week')">
            本周
          </a>
          <a :class="this.isActive('month')" @click="selectDate('month')">
            本月
          </a>
          <a  :class="this.isActive('year')" @click="selectDate('year')">
            全年
          </a>
        </div>
        <a-range-picker :value="rangePickerValue" @change="handleRangePickerChange" :style="{ width: 256 }"/>
      </div>

            </div>
            <a-tab-pane
                tab="销售额"
                key="sales">
                <a-row>
                  <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                    <div class="salesBar">
                      <av-g2-bar
                        :height="295"
                        title="销售趋势"
                        :data="salesData"
                      />
                    </div>
                  </a-col>
                  <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                    <div class="salesRank">
                      <h4 class="rankingTitle">
                        门店销售额排名
                      </h4>
                      <ul class="rankingList">
                            <li :key='item.title' v-for="(item,i) in rankingListData">
                            <span
                              class="rankingItemNumber"
                              :class="i<3?'active':''"
                            >
                              {{i + 1}}
                            </span>
                            <span class="rankingItemTitle" :title="item.title">
                              {{item.title}}
                            </span>
                            <span class="rankingItemValue">
                              {{$numeral(item.total).format('0,0')}}
                            </span>
                          </li>
                        
                      </ul>
                    </div>
                  </a-col>
                </a-row>
            </a-tab-pane>
            <a-tab-pane
                tab="访问量"
                key="views">
                <a-row>
                  <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                    <div  class="salesBar">
                      <av-g2-bar
                        :height="292"
                        title="访问量趋势"
                        :data="salesData"
                      />
                    </div>
                  </a-col>
                  <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                    <div class="salesRank">
                      <h4 class="rankingTitle">
                        门店访问量排名
                      </h4>
                      <ul class="rankingList">

                        <li :key='item.title' v-for="(item,i) in rankingListData">
                            <span
                              class="rankingItemNumber"
                              :class="i<3?'active':''"
                            >
                              {{i + 1}}
                            </span>
                            <span class="rankingItemTitle" :title="item.title">
                              {{item.title}}
                            </span>
                            <span class="rankingItemValue">
                              {{$numeral(item.total).format('0,0')}}
                            </span>
                          </li>
                      </ul>
                    </div>
                  </a-col>
                </a-row>
            </a-tab-pane>
          </a-tabs>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24">
          <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
            <a-card
              :bordered="false"
              title="线上热门搜索"
              :style="{ 'margin-top': '24px' }"
            >
              <div slot="extra">更多操作</div>
              <a-row :gutter="68">
                <a-col :sm="12" :xs="24" :style="{ 'margin-bottom': '24px' }">
                  <av-number-info :gap="8"
                        :total="$numeral(12321).format('0,0')"
                        status="up"
                        :subTotal="17.1">

                    <span slot="subTitle">
                      搜索用户数
                      <a-tooltip
                          title="指标说明"
                        >
                          <a-icon style="margin-left: 8" type="info-circle-o" />  
                        </a-tooltip>
                    </span>
                    
                  </av-number-info>
                  <av-g2-mini-area  line style="height: 45px" :data="visitData2" />
                </a-col>
                <a-col :sm="12" :xs="24" :style="{ 'margin-bottom': '24px' }">
                  <av-number-info 
                        :gap="8"
                        total="2.7"
                        status="down"
                        :subTotal="26.2">
                    <span slot="subTitle">
                      人均搜索次数
                    </span>
                  </av-number-info>
                  <av-g2-mini-area line style="height: 45px" :data="visitData2" />
                </a-col>
              </a-row>
              <!---->
              <a-table
                :rowKey="(record) => record.index"
                size="small"
                :columns="columns"
                :dataSource="searchData"
                :pagination="{
                  style: { marginBottom: 0 },
                  pageSize: 5,
                }"
              >
                <a href="#/" slot="keyword" slot-scope="text">{{text}}</a>
                <av-g2-trend slot="range" slot-scope="record" :flag="record.status === 1 ? 'down' : 'up'">
                  <span style="margin-right: 4px">{{record.text}}%</span>
                </av-g2-trend>
              </a-table>
              
              
            </a-card>
          </a-col>
          <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
            
            <a-card
              class="salesCard"
              :bordered="false"
              title="销售额类别占比"
              :bodyStyle="{ padding: 24 }"
              :style="{ 'margin-top': '24px', 'min-height': '509px' }"
            >
            <div slot="extra">更多操作</div>
            
            <div style="padding-bottom:15px">
                    <a-radio-group v-model="salesType">
                      <a-radio-button value="all">
                        全部渠道
                      </a-radio-button>
                      <a-radio-button value="online">
                        线上
                      </a-radio-button>
                      <a-radio-button value="stores">
                        门店
                      </a-radio-button>
                    </a-radio-group>
                  </div>
              <h4 :style="{ marginTop: 8, marginBottom: 32 }">
                销售额
              </h4>
              
              <av-g2-pie
                hasLegend
                hasLabel
                hasTooltip
                subTitle="销售额"
                :total="this.pieTotal"
                :data="salesPieData"
                style="height:248px"
                :height="400"
                :lineWidth="4"
              />
              <!--
              <av-g2-pie
                      :percent="75"
                      style="height:64px"
                      :inner="0.55"
                      :height="256"
                    />-->
            </a-card>
          
          </a-col>
    </a-row>
  
    <a-card
          class="offlineCard"
          :bordered="false"
          :bodyStyle="{ padding: '0 0 32px 0' }"
          style="margin-top: 32px"
        >
          <a-tabs defaultActiveKey="Stores 0" @change="handleTabChange">
            <a-tab-pane 
              v-for="(shop) in offlineData"
              :key="shop.name">
              <div slot="tab">
                <a-row :gutter="8" style="width: 150px, margin: '8px 0px'">
                  <a-col :span="12">
                    <av-number-info
                      :title="shop.name"
                      subTitle="转化率"
                      :gap="2"
                      :total="`${shop.cvr * 100}%`"
                    />
                  </a-col>
                  <a-col :span="12" style="padding-top: 36px">
                    <av-g2-pie
                      :percent="shop.cvr * 100"
                      :color="activeKey !== shop.name?'#BDE4FF':null"
                      style="height:64px"
                      :inner="0.55"
                      :height="128"
                    />
                  </a-col>
                </a-row>
              </div>
              <av-g2-timeline-chart style="height:400px"></av-g2-timeline-chart>
            </a-tab-pane>
          </a-tabs>
        </a-card>

  </div>
</template>


<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import moment from 'moment';

import { getTimeDistance } from '@/util/util';

const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234,
  });
}

@Component({
  components: {},
})
export default class Analysis extends Vue {
  private rangePickerValue: moment.Moment[] = getTimeDistance('year');

  private rankingListData: Array<{title: string, total: number}>;

  private salesType: string = 'all';

  private activeKey: string = 'Stores 0';

  constructor() {
    super();
    this.rankingListData = [];
    for (let i = 0; i < 7; i += 1) {
      this.rankingListData.push({
        title: `工专路 ${i} 号店`,
        total: 323234,
      });
    }
  }

  private handleTabChange(name: string) {
    this.activeKey = name;
  }

  get offlineData() {
    return [
{name: 'Stores 0', cvr: 0.7}
,
{name: 'Stores 1', cvr: 0.6}
,
{name: 'Stores 2', cvr: 0.4}
,
{name: 'Stores 3', cvr: 0.4}
,
{name: 'Stores 4', cvr: 0.3}
,
{name: 'Stores 5', cvr: 0.8}
,
{name: 'Stores 6', cvr: 0.6}
,
{name: 'Stores 7', cvr: 0.2}
,
{name: 'Stores 8', cvr: 0.4}
,
{name: 'Stores 9', cvr: 0.9},
    ];
  }

  get salesPieData(): any[] {
    if (this.salesType === 'all') {
      return this.salesTypeData;
    } else {
      return this.salesType === 'online' ? this.salesTypeDataOnline : this.salesTypeDataOffline;
    }
  }

  get pieTotal() {
    return this.salesPieData.reduce((pre, now) => now.y + pre, 0);
  }


get salesTypeData(): any[] {
  return [
{item: '家用电器', count: 4544}
,
{item: '食用酒水', count: 3321}
,
{item: '个护健康', count: 3113}
,
{item: '服饰箱包', count: 2341}
,
{item: '母婴产品', count: 1231}
,
{item: '其他', count: 1231},

  ];
}

get salesTypeDataOnline(): any[] {
  return [
{item: '家用电器', count: 244}
,
{item: '食用酒水', count: 321}
,
{item: '个护健康', count: 311}
,
{item: '服饰箱包', count: 41}
,
{item: '母婴产品', count: 121}
,
{item: '其他', count: 111},
  ];
}

get salesTypeDataOffline(): any[] {
  return [
{item: '家用电器', count: 99}
,
{item: '食用酒水', count: 188}
,
{item: '个护健康', count: 344}
,
{item: '服饰箱包', count: 255}
,
{item: '其他', count: 65},
  ];
}

  get salesData() {
   return [
{x: '1月', y: 1153},
{x: '2月', y: 518},
{x: '3月', y: 1040},
{x: '4月', y: 720},
{x: '5月', y: 337},
{x: '6月', y: 216},
{x: '7月', y: 427},
{x: '8月', y: 769},
{x: '9月', y: 711},
{x: '10月', y: 1032},
{x: '11月', y: 1096},
{x: '12月', y: 434},
];
  }

  get visitData2() {
    return [
{x: '2018-09-14', y: 1},
{x: '2018-09-15', y: 6},
{x: '2018-09-16', y: 4},
{x: '2018-09-17', y: 8},
{x: '2018-09-18', y: 3},
{x: '2018-09-19', y: 7},
{x: '2018-09-20', y: 2},
    ];
  }

  get searchData() {
    return [
{index: 1, keyword: '搜索关键词-0', count: 677, range: 82, status: 1}
,
{index: 2, keyword: '搜索关键词-1', count: 280, range: 15, status: 1}
,
{index: 3, keyword: '搜索关键词-2', count: 559, range: 74, status: 0}
,
{index: 4, keyword: '搜索关键词-3', count: 118, range: 61, status: 1}
,
{index: 5, keyword: '搜索关键词-4', count: 189, range: 51, status: 0}
,
{index: 6, keyword: '搜索关键词-5', count: 515, range: 13, status: 1}
,
{index: 7, keyword: '搜索关键词-6', count: 330, range: 42, status: 1}
,
{index: 8, keyword: '搜索关键词-7', count: 943, range: 49, status: 0}
,
{index: 9, keyword: '搜索关键词-8', count: 484, range: 47, status: 0}
,
{index: 10, keyword: '搜索关键词-9', count: 120, range: 32, status: 1}
,
{index: 11, keyword: '搜索关键词-10', count: 699, range: 39, status: 1}
,
{index: 12, keyword: '搜索关键词-11', count: 617, range: 14, status: 1}
,
{index: 13, keyword: '搜索关键词-12', count: 998, range: 97, status: 1}
,
{index: 14, keyword: '搜索关键词-13', count: 266, range: 6, status: 0}
,
{index: 15, keyword: '搜索关键词-14', count: 28, range: 60, status: 0}
,
{index: 16, keyword: '搜索关键词-15', count: 542, range: 78, status: 0}
,
{index: 17, keyword: '搜索关键词-16', count: 37, range: 40, status: 0}
,
{index: 18, keyword: '搜索关键词-17', count: 750, range: 73, status: 1}
,
{index: 19, keyword: '搜索关键词-18', count: 502, range: 75, status: 0}
,
{index: 20, keyword: '搜索关键词-19', count: 593, range: 96, status: 1}
,
{index: 21, keyword: '搜索关键词-20', count: 574, range: 44, status: 0}
,
{index: 22, keyword: '搜索关键词-21', count: 942, range: 17, status: 0}
,
{index: 23, keyword: '搜索关键词-22', count: 728, range: 89, status: 1}
,
{index: 24, keyword: '搜索关键词-23', count: 57, range: 60, status: 0}
,
{index: 25, keyword: '搜索关键词-24', count: 572, range: 40, status: 1}
,
{index: 26, keyword: '搜索关键词-25', count: 660, range: 39, status: 0}
,
{index: 27, keyword: '搜索关键词-26', count: 678, range: 14, status: 1}
,
{index: 28, keyword: '搜索关键词-27', count: 412, range: 82, status: 1}
,
{index: 29, keyword: '搜索关键词-28', count: 920, range: 34, status: 0}
,
{index: 30, keyword: '搜索关键词-29', count: 323, range: 91, status: 0}
,
{index: 31, keyword: '搜索关键词-30', count: 641, range: 27, status: 0}
,
{index: 32, keyword: '搜索关键词-31', count: 10, range: 84, status: 1}
,
{index: 33, keyword: '搜索关键词-32', count: 52, range: 73, status: 1}
,
{index: 34, keyword: '搜索关键词-33', count: 471, range: 19, status: 1}
,
{index: 35, keyword: '搜索关键词-34', count: 305, range: 0, status: 1}
,
{index: 36, keyword: '搜索关键词-35', count: 719, range: 19, status: 1}
,
{index: 37, keyword: '搜索关键词-36', count: 968, range: 52, status: 0}
,
{index: 38, keyword: '搜索关键词-37', count: 298, range: 63, status: 1}
,
{index: 39, keyword: '搜索关键词-38', count: 517, range: 11, status: 1}
,
{index: 40, keyword: '搜索关键词-39', count: 555, range: 43, status: 0}
,
{index: 41, keyword: '搜索关键词-40', count: 961, range: 25, status: 0}
,
{index: 42, keyword: '搜索关键词-41', count: 949, range: 40, status: 1}
,
{index: 43, keyword: '搜索关键词-42', count: 15, range: 3, status: 1}
,
{index: 44, keyword: '搜索关键词-43', count: 441, range: 30, status: 1}
,
{index: 45, keyword: '搜索关键词-44', count: 748, range: 20, status: 1}
,
{index: 46, keyword: '搜索关键词-45', count: 790, range: 30, status: 1}
,
{index: 47, keyword: '搜索关键词-46', count: 389, range: 32, status: 1}
,
{index: 48, keyword: '搜索关键词-47', count: 887, range: 20, status: 1}
,
{index: 49, keyword: '搜索关键词-48', count: 700, range: 82, status: 0}
,
{index: 50, keyword: '搜索关键词-49', count: 835, range: 5, status: 1},
    ];
  }

   get columns() {
     return [
      {
        title: '排名',
        dataIndex: 'index',
        key: 'index',
      },
      {
        title: '搜索关键词',
        dataIndex: 'keyword',
        key: 'keyword',
        scopedSlots: {
          customRender: 'keyword',
        },
      },
      {
        title: '用户数',
        dataIndex: 'count',
        key: 'count',
        sorter: (a: any, b: any) => a.count - b.count,
        class: 'alignRight',
      },
      {
        title: '周涨幅',
        dataIndex: 'range',
        key: 'range',
        sorter: (a: any, b: any) => a.range - b.range,
        scopedSlots: {
          customRender: 'range',
        },
        align: 'right',
      },
    ];
   }

  private isActive(type: string) {
    const value = getTimeDistance(type);
    if (!this.rangePickerValue[0] || !this.rangePickerValue[1]) {
      return '';
    }
    if (
      this.rangePickerValue[0].isSame(value[0], 'day') &&
      this.rangePickerValue[1].isSame(value[1], 'day')
    ) {
      return 'currentDate';
    }
    return '';
  }

  private selectDate(type: string) {
    this.rangePickerValue = getTimeDistance(type);
  }

  private handleRangePickerChange(value: any) {
    this.rangePickerValue = value;
  }
}
</script>


<style lang="less" scoped>
@import "./Analysis.less";
</style>

<style lang="less">
    .ant-tabs-bar{
      padding-left:16px;
    }

.ant-tabs-extra-content{
    line-height:55px;
    padding-right: 24px;
}

.salesBar{
  padding: 0 0 32px 32px;
}

.salesRank{
  padding: 0 32px 32px 72px;
}

.salesCardExtra{
  .salesTypeRadio {
    position: absolute;
    left: 24px;
    bottom: 15px;
  }
}

</style>