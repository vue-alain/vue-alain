<template>
<ve-liquidfill :data="waterChartData"></ve-liquidfill>
</template>

<style  lang="less">

</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({
  components: {
  },
})
export default class WaterWave extends Vue {

  @Prop({ type: Number, default: 0 })
  private percent!: number;

  @Prop({ type: String, default: '' })
  private title!: string;

  get waterChartData(): any {
    return {
          columns: ['city', 'percent'],
          rows: [{
            city: this.title,
            percent: this.percent,
          }],
        };
  }
}
</script>
