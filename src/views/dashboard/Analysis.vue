<template>
  <div>
<a-row style="margin: 0 -12px">
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <av-g2-chart-card :title="$t('app.analysis.total-sales')" total="￥ 189,345">
          <a-tooltip :title="$t('app.analysis.introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <av-g2-trend style="margin-right: 16px" 
            :term="$t(`app.analysis.week`)" 
            :percent="12" 
            :is-increase="true" 
            :scale="0" />
            <av-g2-trend 
            :term="$t(`app.analysis.day`)" 
            :target="100" 
            :value="89" 
            :scale="0" />
          </div>
          <div slot="footer">{{$t('app.analysis.day-sales')}}<span> ￥234.56</span></div>
        </av-g2-chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <av-g2-chart-card :title="$t('app.analysis.visits')" total="￥ 189,345">
          <a-tooltip :title="$t('app.analysis.introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <av-g2-mini-area color="#975FE4" :data="chartData" />
          </div>
          <div slot="footer">{{$t(`app.analysis.day-visits`)}}<span> 123,4</span></div>
        </av-g2-chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <av-g2-chart-card :title="$t(`app.analysis.payments`)" total="￥ 189,345">
          <a-tooltip :title="$t('app.analysis.introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <av-g2-mini-bar :height="46"/>
          <div slot="footer">{{$t(`app.analysis.conversion-rate`)}} <span>60%</span></div>
        </av-g2-chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <av-g2-chart-card :title="$t(`app.analysis.operational-effect`)" total="73%">
          <a-tooltip :title="$t('app.analysis.introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <av-g2-mini-progress :target="90" :percent="78" color="#13C2C2" height="8px"/>
          </div>
          <div slot="footer">
            <av-g2-trend style="margin-right: 16px" 
            :term="$t(`app.analysis.week`)" 
            :percent="12" 
            :is-increase="true" 
            :scale="0" />
            <av-g2-trend 
            :term="$t(`app.analysis.day`)" 
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
            {{$t(`app.analysis.all-day`)}}
          </a>
          <a :class="this.isActive('week')" @click="selectDate('week')">
            {{$t(`app.analysis.all-week`)}}
          </a>
          <a :class="this.isActive('month')" @click="selectDate('month')">
            {{$t(`app.analysis.all-month`)}}
          </a>
          <a  :class="this.isActive('year')" @click="selectDate('year')">
            {{$t(`app.analysis.all-year`)}}
          </a>
        </div>
        <a-range-picker :value="rangePickerValue" @change="handleRangePickerChange" :style="{ width: 256 }"/>
      </div>

            </div>
            <a-tab-pane
                :tab="$t(`app.analysis.sales`)"
                key="sales">
                <a-row>
                  <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                    <div class="salesBar">
                      <av-g2-bar
                        :height="295"
                        :title="$t(`app.analysis.sales-trend`)"
                        :data="salesData"
                      />
                    </div>
                  </a-col>
                  <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                    <div class="salesRank">
                      <h4 class="rankingTitle">
                        {{$t(`app.analysis.sales-ranking`)}}
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
                :tab="$t(`app.analysis.visits`)"
                key="views">
                <a-row>
                  <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                    <div  class="salesBar">
                      <av-g2-bar
                        :height="292"
                        :title="$t(`app.analysis.visits-trend`)"
                        :data="salesData"
                      />
                    </div>
                  </a-col>
                  <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                    <div class="salesRank">
                      <h4 class="rankingTitle">
                        {{$t(`app.analysis.visits-ranking`)}}
                      </h4>
                      <ul class="rankingList">
                        <!--
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
                          -->
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
              :title="$t(`app.analysis.online-top-search`)"
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
                      {{$t(`app.analysis.search-users`)}}
                      <a-tooltip
                          :title="$t('app.analysis.introduce')"
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
                      {{$t(`app.analysis.per-capita-search`)}}
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
              :title="$t(`app.analysis.the-proportion-of-sales`)"
              :bodyStyle="{ padding: 24 }"
              :style="{ 'margin-top': '24px', 'min-height': '509px' }"
            >
            <div slot="extra">更多操作</div>
            
            <div style="padding-bottom:15px">
                    <a-radio-group v-model="salesType">
                      <a-radio-button value="all">
                        {{$t(`app.analysis.channel.all`)}}
                      </a-radio-button>
                      <a-radio-button value="online">
                        {{$t(`app.analysis.channel.online`)}}
                      </a-radio-button>
                      <a-radio-button value="stores">
                        {{$t(`app.analysis.channel.stores`)}}
                      </a-radio-button>
                    </a-radio-group>
                  </div>
              <h4 :style="{ marginTop: 8, marginBottom: 32 }">
                {{$t(`app.analysis.sales`)}}
              </h4>
              
              <av-g2-pie
                hasLegend
                hasLabel
                hasTooltip
                :subTitle="$t(`app.analysis.sales`)"
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
                <a-row :gutter="8" class="row">
                  <a-col :span="12">
                    <av-number-info
                      :title="shop.name"
                      :subTitle="$t(`app.analysis.conversion-rate`)"
                      :gap="2"
                      :total="`${shop.cvr * 100}%`"
                    />
                  </a-col>
                  <a-col :span="12" style="padding-top: 36px">
                    <av-g2-pie
                      :percent="shop.cvr * 100"
                      :color="activeKey !== shop.name?'#BDE4FF':null"
                      :inner="0.55"
                      :height="64"
                    />
                  </a-col>
                </a-row>
              </div>
              <av-g2-timeline-chart 
              :titleMap="{
                      y1: $t(`app.analysis.traffic`),
                      y2: $t(`app.analysis.payments`),
                    }"
              ></av-g2-timeline-chart>
            </a-tab-pane>
          </a-tabs>
        </a-card>
  </div>
</template>


<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import moment from 'moment';

import { getTimeDistance } from '@/util/util';
import {format} from 'date-fns';
import axios from 'axios';

/*
const miniChartData: any[] = [];

const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];

for (let i = 0; i < fakeY.length; i += 1) {
  miniChartData.push({
    x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234,
  });
}*/

@Component({
  components: {},
})
export default class Analysis extends Vue {
  private rangePickerValue: moment.Moment[] = getTimeDistance('year');

  // private rankingListData: Array<{title: string, total: number}>;

  private radarData:any[]=[];
  private visitData:any[]=[];
  private offlineChartData:any[]=[];

  private salesType: string = 'all';

  private activeKey: string = 'Stores 0';

  // private chartData: any[] = miniChartData;

  constructor() {
    super();
  }

  private handleTabChange(name: string) {
    this.activeKey = name;
  }

  private offlineData:any[] =[];

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


private salesTypeData: any[] = [];

private salesTypeDataOnline: any[] =[];

private salesTypeDataOffline: any[] =[];

  private salesData: any[]=[];

  private visitData2: any[] =[];

  private searchData:any[]=[];

   get columns() {
     return [
      {
        title: this.$t(`app.analysis.table.rank`),
        dataIndex: 'index',
        key: 'index',
      },
      {
        title: this.$t(`app.analysis.table.search-keyword`),
        dataIndex: 'keyword',
        key: 'keyword',
        scopedSlots: {
          customRender: 'keyword',
        },
      },
      {
        title: this.$t(`app.analysis.table.users`),
        dataIndex: 'count',
        key: 'count',
        sorter: (a: any, b: any) => a.count - b.count,
        class: 'alignRight',
      },
      {
        title: this.$t(`app.analysis.table.weekly-range`),
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

  get pieChartData() {
    return {
        columns: ['item', 'count'],
        rows: [
          {item: '家用电器', count: 4544},
          {item: '食用酒水', count: 3321},
          {item: '个护健康', count: 3113},
          {item: '服饰箱包', count: 2341},
          {item: '母婴产品', count: 1231},
          {item: '其他', count: 1231},
        ],
    };
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

  private mounted() {
    const url ='/api/fake_chart_data';
    axios.get(url).then((res: any) => {
            const data = res.data;
            console.log(data);
            this.visitData=data.visitData;

          this.visitData2=data.visitData2;
  this.salesData=data.salesData;
  this.searchData=data.searchData;
  this.offlineData=data.offlineData;
  this.offlineChartData=data.offlineChartData;
  this.salesTypeData=data.salesTypeData;
  this.salesTypeDataOnline=data.salesTypeDataOnline;
  this.salesTypeDataOffline=data.salesTypeDataOffline;
  this.radarData=data.radarData;
        });
  }

}
</script>


<style lang="less">
@import "./Analysis.less";
</style>
