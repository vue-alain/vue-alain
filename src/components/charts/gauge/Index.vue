<template>
<ve-gauge :data="chartData" :settings="chartSettings"></ve-gauge>
</template>

<style  lang="less">

</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({
  components: {
  },
})
export default class Gauge extends Vue {

  @Prop({ type: Number, default: 0 })
  private percent!: number;

  @Prop({ type: String, default: '' })
  private title!: string;

  get chartSettings(): any {
    const {title} = this;
    return {
        dataName: {
          item: title,
        },
        dataType: {
          item: 'percent',
        },
        seriesMap: {
          item: {
            min: 0,
            max: 1,
            axisLabel: {
              formatter(v: number) {
                return '';
              },
            },
          },
        },
      };
  }

  get chartData(): any {
    return {
          columns: ['type', 'value'],
          rows: [
            { type: 'item', value: this.percent / 100 },
          ],
        };
  }
}
</script>
