<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="pieData" :scale="scale">
      <v-tooltip :showTitle="false" dataKey="item*percent" />
      <v-axis />
      <v-legend dataKey="item" />
      <v-pie position="percent" color="item" :vStyle="pieStyle" :label="labelConfig" />
      <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
    </v-chart>
  </div>
</template>

<style lang="less" scoped>
@import "./../index.less";
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
  { item: '事例五', count: 9 }
];



const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
});
const data = dv.rows;

@Component({
  components: {
  },
})
export default class Pie extends Vue {

    //@Prop({type: Number, default: 400})
    private height: number = 400;

    @Prop({type: Array, default: ()=> data})
    private data!: any[];

    //@Prop({type: Array, default: ()=>scale})
    private scale: any[] = scale;

    get pieData():any[]{
      const dv = new DataSet.View().source(this.data);
      dv.transform({
        type: 'percent',
        field: 'count',
        dimension: 'item',
        as: 'percent'
      });
      return dv.rows;
    }

    private pieStyle: any = {
        stroke: "#fff",
        lineWidth: 1,
      }

    private labelConfig: any[] = ['percent', {
        formatter: (val: any, item: any) => {
          return item.point.item + ': ' + val;
        },
      }];
}
</script>
