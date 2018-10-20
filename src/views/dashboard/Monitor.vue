<template>
  <div class="grid-content-main">
    <a-row :gutter="24">
          <a-col :xl="18" :lg="24" :md="24" :sm="24" :xs="24" style="margin-bottom: 24px">
            <a-card :title="$t(`app.monitor.trading-activity`)" :bordered="false">
              <a-row>
                <a-col :md="6" :sm="12" :xs="24">
                  <av-number-info
                    :subTitle="$t(`app.monitor.total-transactions`)"
                    suffix="元"
                    :total="$numeral(124543233).format('0,0')"
                  />
                </a-col>
                <a-col :md="6" :sm="12" :xs="24">
                  <av-number-info :subTitle="$t(`app.monitor.sales-target`)" total="92%" />
                </a-col>
                <a-col :md="6" :sm="12" :xs="24">
                  <av-number-info :subTitle="$t(`app.monitor.remaining-time`)" total="00:56:32" />
                </a-col>
                <a-col :md="6" :sm="12" :xs="24">
                  <av-number-info
                    :subTitle="$t(`app.monitor.total-transactions-per-second`)"
                    suffix="元"
                    :total="$numeral(234).format('0,0')"
                  />
                </a-col>
              </a-row>
              <div class="mapChart">
                <a-tooltip :title="``">
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/HBWnDEUXCnGnGrRfrpKa.png"
                    alt="map"
                  />
                </a-tooltip>
              </div>
            </a-card>
          </a-col>
          <a-col :xl="6" :lg="24" :md="24" :sm="24" :xs="24">
            <a-card :title="$t(`app.monitor.activity-forecast`)" style="margin-bottom: 24px" :bordered="false">
              <!--
              <ActiveChart />
              -->
            </a-card>
            <a-card
              :title="$t(`app.monitor.efficiency`)"
              style="margin-bottom: 24px"
              :bodyStyle="{ textAlign: 'center' }"
              :bordered="false"
            >
            <av-gauge :percent="87" title="跳出率"></av-gauge>
            </a-card>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :xl="12" :lg="24" :sm="24" :xs="24">
            <a-card :title="$t(`app.monitor.proportion-per-category`)" :bordered="false" class="pieCard">
              <a-row style="padding: '16px 0'">
                <a-col :span="8">
                  <av-pie
                    :percent="28"
                    :height="128"
                    showTitle
                    title="中式快餐"
                    subtitle="28%"
                    :radius="[40,50]"
                  />
                </a-col>
                <a-col :span="8">
                  <av-pie
                    color="#5DDECF"
                    :percent="22"
                    :height="128"
                    showTitle
                    title="西餐"
                    subtitle="22%"
                    :radius="[40,50]"
                  />
                </a-col>
                <a-col :span="8">
                  <av-pie
                    color="#2FC25B"
                    :percent="32"
                    :height="128"
                    showTitle
                    title="火锅"
                    subtitle="32%"
                    :radius="[40,50]"
                  />
                </a-col>
              </a-row>
            </a-card>
          </a-col>
          <a-col :xl="6" :lg="12" :sm="24" :xs="24">
            <a-card
              :title="$t(`app.monitor.popular-searches`)"
              :bordered="false"
              :bodyStyle="{ overflow: 'hidden' }"
            >
              <av-tag-cloud :data="chartList"></av-tag-cloud>
            </a-card>
          </a-col>
          <a-col :xl="6" :lg="12" :sm="24" :xs="24">
            <a-card
              :title="$t(`app.monitor.resource-surplus`)"
              :bodyStyle="{ textAlign: 'center', fontSize: 0 }"
              :bordered="false"
            >
            <av-water-wave :percent="0.64" title="上海"></av-water-wave>
            </a-card>
          </a-col>
        </a-row>
  </div>
</template>


<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
@Component({})
export default class Monitor extends Vue {

  private chartList: any[] = [];
  private mounted() {
    axios.get('/api/tag').then((res: any) => {
      this.chartList = res.data.list;
    });
  }
}
</script>


<style lang="less">
.mapChart {
  padding-top: 24px;
  height: 457px;
  text-align: center;
  img {
    display: inline-block;
    max-width: 100%;
    max-height: 437px;
  }
}

.pieCard :global(.pie-stat) {
  font-size: 24px !important;
}

.grid-content-main{
    margin-top: 24px;
}

</style>