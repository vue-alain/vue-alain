<template>
<div class="timelineChart" :style="{height: height + 30}">
        <h4 v-if="title">{{title}}</h4>
          <v-chart :height="height" :padding="padding" :data="chartDataSet" :scale="cols" :force-fit="true">
            <v-axis name="x" />
            <v-tooltip />
            <v-legend name="key" position="top" />
            <!--
            <Geom type="line" position="x*value" size={borderWidth} color="key" />
            -->
            <v-line position="x*value" :size="borderWidth" color="key" />
            <!--
            <v-line position="x*value" :size="borderWidth" color="key"  />
            -->
          </v-chart>
          <div>
            <v-plugin>
      <v-slider 
        width="auto" 
        :height="26"
        :start="start" 
        :end="end"
        :data="originDv" 
        xAxis="x" 
        yAxis="y1" 
        :scales="{
          x:timeScale
        }"
        :background-chart="{type: 'line'}"
        :on-change="handleSliderChange"/>
    </v-plugin>
 <!--
            <v-slider :padding="[0, padding[1] + 20, 0, padding[3]]"
            width="auto"
            :height="26"
            :data="dv"
            xAxis="x"
            yAxis="y1"
        :scales="timeScale"
        :start="ds.state.start"
        :end="ds.state.end"
        :backgroundChart="{type: 'line'}"
        @change="handleSliderChange"
            ></v-slider>
           
            
            <SliderGen />
padding={[0, padding[1] + 20, 0, padding[3]]}
        width="auto"
        height={26}
        xAxis="x"
        yAxis="y1"
        scales={{ x: timeScale }}
        data={data}
        start={ds.state.start}
        end={ds.state.end}
        backgroundChart={{ type: 'line' }}
        onChange={({ startValue, endValue }) => {
          ds.setState('start', startValue);
          ds.setState('end', endValue);
        }}

            -->
          </div>
      </div>
<!--
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip />
      <v-axis />
      <v-legend />
      <v-line position="x*temperature" color="city" />
      <v-point position="x*temperature" color="city" :size="4" :v-style="style" :shape="'circle'" />
    </v-chart>
  </div>
  -->
</template>

<style lang="less">
.timelineChart {
  background: #fff;
}
</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

const DataSet = require('@antv/data-set');

const sourceData = [
  /*
  { x: 'Jan', y1: 7.0, y2: 3.9 },
  { x: 'Feb', y1: 6.9, y2: 4.2 },
  { x: 'Mar', y1: 9.5, y2: 5.7 },
  { x: 'Apr', y1: 14.5, y2: 8.5 },
  { x: 'May', y1: 18.4, y2: 11.9 },
  { x: 'Jun', y1: 21.5, y2: 15.2 },
  { x: 'Jul', y1: 25.2, y2: 17.0 },
  { x: 'Aug', y1: 26.5, y2: 16.6 },
  { x: 'Sep', y1: 23.3, y2: 14.2 },
  { x: 'Oct', y1: 18.3, y2: 10.3 },
  { x: 'Nov', y1: 13.9, y2: 6.6 },
  { x: 'Dec', y1: 9.6, y2: 4.8 },
   */
  { x: 1536920320634, y1: 57, y2: 71 },
  { x: 1536922120634, y1: 106, y2: 17 },
  { x: 1536923920634, y1: 69, y2: 27 },
  { x: 1536925720634, y1: 28, y2: 87 },
  { x: 1536927520634, y1: 93, y2: 104 },
  { x: 1536929320634, y1: 35, y2: 13 },
  { x: 1536931120634, y1: 101, y2: 33 },
  { x: 1536932920634, y1: 39, y2: 90 },
  { x: 1536934720634, y1: 35, y2: 11 },
  { x: 1536936520634, y1: 53, y2: 98 },
  { x: 1536938320634, y1: 12, y2: 53 },
  { x: 1536940120634, y1: 77, y2: 15 },
  { x: 1536941920634, y1: 49, y2: 82 },
  { x: 1536943720634, y1: 101, y2: 41 },
  { x: 1536945520634, y1: 27, y2: 58 },
  { x: 1536947320634, y1: 27, y2: 106 },
  { x: 1536949120634, y1: 103, y2: 19 },
  { x: 1536950920634, y1: 23, y2: 95 },
  { x: 1536952720634, y1: 97, y2: 28 },
  { x: 1536954520634, y1: 36, y2: 102 },
];

/*
const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['y1', 'y2'],
  key: 'city',
  value: 'value',
});
const data = dv.rows;
*/

const scale = [
  {
    dataKey: 'x',
    min: 0,
    max: 1,
  },
];

@Component({})
export default class TimelineChart extends Vue {
  @Prop({ type: String, default: null })
  private title!: string;

  @Prop({
    type: Object,
    default() {
      return {
        y1: 'y1',
        y2: 'y2',
      };
    },
  })
  private titleMap!: any;

  get originDv(): any[] {
    return sourceData;
  }

  get timeScale() {
    return {
      dataKey: 'x',
      type: 'time',
      tickInterval: 60 * 60 * 1000,
      mask: 'HH:mm',
      range: [0, 1],
    };
  }

  get cols() {
    const self = this;
    const max = self.max;
    return [self.timeScale];
  }

  get max() {
    const data = sourceData;
    let max;
    if (data[0] && data[0].y1 && data[0].y2) {
      max = Math.max(
        [...data].sort((a, b) => b.y1 - a.y1)[0].y1,
        [...data].sort((a, b) => b.y2 - a.y2)[0].y2,
      );
    }
    return max;
  }

  private start: any = 0;
  private end: any = 0;
  private scale = scale;
  private height = 400;
  private borderWidth = 2;
  private style = { stroke: '#fff', lineWidth: 1 };

  private padding: any[] = [60, 20, 40, 40];

  private chartDataSet: any = {
  };

  private handleSliderChange(opts: any) {
    const { startValue, endValue, startText, endText } = opts;
    this.start = startValue;
    this.end = endValue;
    this.bindChart();
  }

  private buildData() {

    const ds = this.buildDataSet();
    const dv = this.dv(ds);
    return {
      ds,
      dv,
    };
  }

  private bindChart() {
    const source = this.buildData();
    this.chartDataSet = source.dv;
  }

  private buildDataSet() {
    const start = this.start;
    const end = this.end;
    return new DataSet({
        state: {
          [start]: start,
          [end]: end,
        },
      });
  }

  private  dv(ds: any) {
    const data = sourceData;
    const self = this;
    const dv = ds.createView();
    dv.source(data)
      .transform({
        type: 'filter',
        callback: (obj: any) => {
          const date = obj.x;
          return date <= ds.state.end && date >= ds.state.start;
        },
      })
      .transform({
        type: 'map',
        callback(row: any) {
          const newRow = { ...row };
          newRow[self.titleMap.y1] = row.y1;
          newRow[self.titleMap.y2] = row.y2;
          return newRow;
        },
      })
      .transform({
        type: 'fold',
        fields: [self.titleMap.y1, self.titleMap.y2], // 展开字段集
        key: 'key', // key字段
        value: 'value', // value字段
      });

    return dv;
  }


  private mounted() {
    this.start = sourceData[0].x;
    this.end = sourceData[sourceData.length - 1].x;
    this.bindChart();
  }


}
</script>
