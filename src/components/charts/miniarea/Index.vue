<template>
  <div class="mini-chart">
    <div class="chart-content">
      <ve-line 
      :height="chartHeight"
      :data="chartData" 
      :settings="chartSettings" 
      :extend="extendSettings" 
      :legend-visible="false"></ve-line>
      <!--
      <v-chart :force-fit="true" :height="height"
        :data="data" :padding="[36, 5, 18, 5]">
        <v-tooltip />
        <v-smooth-line v-if="line" position="x*y" :size="2" />
        <v-smooth-area position="x*y" :color="color" />
      </v-chart>
      -->
    </div>
  </div>
</template>

<style scoped lang="less">

.mini-chart {
    position: relative;
    width: 100%;
    .chart-content{
      position: absolute;
      bottom: -28px;
      width: 100%;
    }
}

</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {format} from 'date-fns';

@Component({
  components: {
  },
})
export default class MiniArea extends Vue {

    @Prop({ type: Number, default: 64})
    private height!: number;

    @Prop({ type: String, default: '#cceafe'})
    private color!: string;

    @Prop({ type: String, default: '#1089ff'})
    private borderColor!: string;

    @Prop({ type: Boolean, default: false})
    private line!: boolean;

    @Prop({type: Array, default: () => []})
    private data!: any[];

    get chartHeight() {
      return `${this.height}px`;
    }

    private chartSettings = {
      height: this.height,
      area: true,
      scale: [true, true],
    };

  get extendSettings() {
    const hasLine = this.line;
    const chartColor = this.color;
    const borderColor = this.borderColor;
    return {
      xAxis: {
      show: false,
    },
    yAxis: {
      show: false,
    },
    series(v: any) {
          v.forEach((i: any ) => {
            i.symbol = false;
            i.showSymbol = false;
            i.showAllSymbol = false;

            i.lineStyle = {
              opacity: hasLine ? 1 : 0,
              color: borderColor,
            };

            i.itemStyle = {
              color: chartColor,
            };

            i.areaStyle = {
              opacity: 1,
            };
          });
          return v;
        },
    };
  }

  get chartData() {
    return {
      columns: ['x', 'y'],
      rows: this.data,
    };
  }
  /*
  private chartData= {
          columns: ['x', 'y'],
          rows: data
        };
        */
}
</script>
