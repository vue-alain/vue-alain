<template>
  <div class="grid-content-main">
    <a-row :gutter="24">
          <a-col :xl="18" :lg="24" :md="24" :sm="24" :xs="24" style="margin-bottom: 24px">
            <a-card title="活动实时交易情况" :bordered="false">
              <a-row>
                <a-col :md="6" :sm="12" :xs="24">
                  <av-number-info
                    subTitle="今日交易总额"
                    suffix="元"
                    :total="$numeral(124543233).format('0,0')"
                  />
                </a-col>
                <a-col :md="6" :sm="12" :xs="24">
                  <av-number-info subTitle="销售目标完成率" total="92%" />
                </a-col>
                <a-col :md="6" :sm="12" :xs="24">
                  <av-number-info subTitle="活动剩余时间" total="00:56:32" />
                </a-col>
                <a-col :md="6" :sm="12" :xs="24">
                  <av-number-info
                    subTitle="每秒交易总额"
                    suffix="元"
                    :total="$numeral(234).format('0,0')"
                  />
                </a-col>
              </a-row>
              <div class="mapChart">
                <a-tooltip title="等待后期实现">
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/HBWnDEUXCnGnGrRfrpKa.png"
                    alt="map"
                  />
                </a-tooltip>
              </div>
            </a-card>
          </a-col>
          <a-col :xl="6" :lg="24" :md="24" :sm="24" :xs="24">
            <a-card title="活动情况预测" style="margin-bottom: 24px" :bordered="false">
              <!--
              <ActiveChart />
              -->
            </a-card>
            <a-card
              title="券核效率"
              style="margin-bottom: 24px"
              :bodyStyle="{ textAlign: 'center' }"
              :bordered="false"
            >
            <!--
              <Gauge title="跳出率" height={180} percent={87} />
              -->
            </a-card>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :xl="12" :lg="24" :sm="24" :xs="24">
            <a-card title="各品类占比" :bordered="false" class="pieCard">
              <a-row style="padding: '16px 0'">
                <a-col :span="8">
                  <av-g2-pie
                    :percent="28"
                    subTitle="中式快餐"
                    total="28%"
                    :height="256"
                    :lineWidth="2"
                    style="height:128px"
                  />
                </a-col>
                <a-col :span="8">
                  <av-g2-pie
                    color="#5DDECF"
                    :percent="22"
                    subTitle="西餐"
                    total="22%"
                    :height="256"
                    :lineWidth="2"
                    style="height:128px"
                  />
                </a-col>
                <a-col :span="8">
                  <av-g2-pie
                    color="#2FC25B"
                    :percent="32"
                    subTitle="火锅"
                    total="32%"
                    :height="256"
                    :lineWidth="2"
                    style="height:128px"
                  />
                </a-col>
              </a-row>
            </a-card>
          </a-col>
          <a-col :xl="6" :lg="12" :sm="24" :xs="24">
            <a-card
              title="热门搜索"
              :bordered="false"
              :bodyStyle="{ overflow: 'hidden' }"
            >
            <!--
              <TagCloud data={tags} height={161} />
              -->
            </a-card>
          </a-col>
          <a-col :xl="6" :lg="12" :sm="24" :xs="24">
            <a-card
              title="资源剩余"
              :bodyStyle="{ textAlign: 'center', fontSize: 0 }"
              :bordered="false"
            >
            <!--
              <WaterWave height={161} title="补贴资金剩余" percent={34} />
              -->
            </a-card>
          </a-col>
        </a-row>
  </div>
</template>


<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Monitor extends Vue {
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