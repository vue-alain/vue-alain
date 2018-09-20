<template>

  <v-chart :forceFit="true" :height="height" :data="pieData" :scale="scale">
        <v-tooltip v-if="hasTooltip" :showTitle="false" dataKey="item*percent" />
        <v-axis />
        <v-legend v-if="hasLegend" dataKey="item" />
        <v-pie position="percent" :color="pieColor" :vStyle="pieStyle" :label="hasLabel?labelConfig:[]" />
        <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
    </v-chart>

</template>

<style lang="less" scoped>

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

const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%',
}];

const sourceData = [
  { item: '事例一', count: 40 },
  { item: '事例二', count: 21 },
  { item: '事例三', count: 17 },
  { item: '事例四', count: 13 },
  { item: '事例五', count: 9 },
];



const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent',
});
const data = dv.rows;

@Component({
  components: {
  },
})
export default class Pie extends Vue {

    @Prop({type: Number, default: 0})
    private height!: number;

    @Prop({type: Array, default: () => data})
    private data!: any[];

    @Prop({type: Boolean, default: false})
    private hasLegend!: boolean;

    @Prop({type: Boolean, default: false})
    private hasLabel!: boolean;

    @Prop({type: Boolean, default: false})
    private hasTooltip!: boolean;

    @Prop({type: Number, default: null})
    private percent!: number;

    @Prop({type: String, default: null})
    private color!: string;

    private scale: any[] = scale;

    get isPercent(): boolean {
      return this.percent != null;
    }

    private labelConfig: any[] = ['percent', {
        formatter: (val: any, item: any) => {
          return item.point.item + ': ' + val;
        },
    }];

    get pieData(): any[] {
      let source: any[] = this.data;
      if (this.isPercent) {
        source = [
          {
            item: '占比',
            count: this.percent,
          },
          {
            item: '反比',
            count: 100 - this.percent,
          },
        ];
      }
      const dv1 = new DataSet.View().source(source);
      dv1.transform({
        type: 'percent',
        field: 'count',
        dimension: 'item',
        as: 'percent',
      });
      return dv1.rows;
    }

    private pieStyle: any = {
        stroke: '#fff',
        lineWidth: 1,
      };

    get pieColor() {
      if ( !this.isPercent ) {
        return ['item'];
      }
      return ['item', (v: any) => {
        return v === '占比' ? this.color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5';
      }];
    }

}
</script>
