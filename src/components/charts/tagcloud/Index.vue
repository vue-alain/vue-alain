<template>
<ve-wordcloud :data="chartData" :settings="chartSettings"></ve-wordcloud>
</template>

<style  lang="less">

</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({
  components: {
  },
})
export default class TagCloud extends Vue {

  @Prop({ type: Array, default() {
      return [];
    },
  })
  private data!: any[];

  @Prop({ type: Number, default: 10  })
  private sizeMin!: number;

  @Prop({ type: Number, default: 20 })
  private sizeMax!: number;

  get chartSettings() {
    return {
        sizeMin: this.sizeMin,
        sizeMax: this.sizeMax,
      };
  }

  get chartData(): any {
    const {data} = this;
    const result: any = {
          columns: ['name', 'value'],
          rows: data,
        };
    return result;
  }
}
</script>
