<template>
  <div class="mini-chart">
    <div class="chart-content">
      <ve-histogram 
        :height="chartHeight"
        :data="chartData" 
        :legend-visible="false" 
        :colors="[color]" 
        :extend="extendSettings"></ve-histogram>
    </div>
  </div>
</template>

<style lang="less">
@import "./../index.less";
</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {format} from 'date-fns';


@Component({
  components: {
  },
})
export default class MiniBar extends Vue {

    @Prop({ type: Number, default: 64})
    private height!: number;

    @Prop({type: Array, default: () => []})
    private data!: any[];

    @Prop({type: String, default: '#1890FF'})
    private color!: string;

    get chartHeight() {
      return `${this.height}px`;
    }

    get extendSettings() {
      return {
        xAxis: {
          show: false,
          boundaryGap: false, // ['0%', '0%'],
        },
        yAxis: {
          show: false,
        }};
    }

    get chartData() {
      return {
          columns: ['x', 'y'],
          rows: this.data
        };
    }

}
</script>
