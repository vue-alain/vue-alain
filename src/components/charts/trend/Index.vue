<template>
 <div class="chart-trend">
    {{term}}
    <span>{{rate}}%</span>
    <span :class="['chart-trend-icon', trend]" style="">
      <a-icon :type="'caret-' + trend" /></span>
  </div>
</template>

<style scoped lang="less">

.chart-trend{
    display: inline-block;
    font-size: 14px;
    line-height: 22px;
    .chart-trend-icon{
      font-size: 12px;
      &.up{
        color: #f5222d;
      }
      &.down{
        color: #52c41a;
      }
    }
  }

</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({
  components: {
  },
})
export default class Trend extends Vue {

  @Prop({ type: String, default: '' })
  private term!: string;

  @Prop({ type: Number, default: 0 })
  private target!: number;

  @Prop({ type: Number, default: 0})
  private value!: number;

  @Prop({ type: Boolean, default: null})
  private isIncrease!: boolean;

  @Prop({ type: Number, default: null})
  private percent!: number;

  @Prop({ type: Number, default: 2})
  private scale!: number;

  private trend: string = '';
  private rate: number | string = '';

  constructor() {
    super();
    this.trend = this.isIncrease ? 'up' : 'down';
    this.rate = this.percent;
  }

  private created() {
    this.trend = this.caulateTrend();
    this.rate = this.caulateRate();
  }

  private caulateRate() {
    const v1: number = ( this.percent === null ? Math.abs(this.value - this.target) * 100 / this.target : this.percent);
    return v1.toFixed(this.scale);
  }

  private caulateTrend() {
      const isIncrease = this.isIncrease === null ? this.value >= this.target : this.isIncrease;
      return isIncrease ? 'up' : 'down';
  }

}
</script>
