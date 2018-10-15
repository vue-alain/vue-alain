<template>
  <div class="mini-chart">
    <div class="chart-content" :style="{height: 46}">
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
    width: 100%
  }
  .mini-chart .chart-content{
    position: absolute;
    bottom: -28px;
    width: 100%;
  }

</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {format} from 'date-fns';

const data: any[] = [];

const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];

for (let i = 0; i < fakeY.length; i += 1) {
  data.push({
    x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const tooltip = [
  'x*y',
  (x: any, y: any) => ({
    name: x,
    value: y,
  }),
];

const scale = [{
  dataKey: 'x',
  min: 2,
}, {
  dataKey: 'y',
  title: '时间',
  min: 1,
  max: 22,
}];

@Component({
  components: {
  },
})
export default class MiniArea extends Vue {

    @Prop({ type: Number, default: 64})
    private height!: number;

    @Prop({ type: String, default: 'rgba(151, 95, 228,0.75)'})
    private color!: string;

    @Prop({ type: Boolean, default: false})
    private line!: boolean;

    @Prop({type: Array, default: () => []})
    private data!: any[];

    get chartHeight(){
      return `${this.height}px`;
    }

    private chartSettings = {
        height:46,
        area: true,
        scale:[true,true],
      };

  get extendSettings(){
    const hasLine = this.line;
    const chartColor = this.color;
    return {
      xAxis:{
      show:false
    },
    yAxis:{
      show:false
    },
    series (v:any) {
          v.forEach((i: any ) => {
            i.symbol = false;
            i.showSymbol = false;
            i.showAllSymbol = false;
            i.lineStyle={
              opacity: hasLine===true?0.75:0
            };
            i.itemStyle={
              color:chartColor
            };
            i.areaStyle={
              opacity:0.75
            };
          });
          return v;
        }
    };
  }

  get chartData() {
    return {
      columns: ['x', 'y'],
      rows: data,
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
