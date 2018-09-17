<template>
   <div class="mini-progress">
    <a-tooltip :title="'目标值：' + target + '%'">
      <div class="target" :style="{left: target + '%'}">
        <span :style="{backgroundColor: color}" />
        <span :style="{backgroundColor: color}" />
      </div>
    </a-tooltip>
    <div class="wrap">
      <div class="progress" :style="{backgroundColor: color, width: percent + '%', height: height}" />
    </div>
  </div>
</template>

<style scoped lang="less">
.mini-progress {
    padding: 5px 0;
    position: relative;
    width: 100%;
    .wrap {
      background-color: #f5f5f5;
      position: relative;
      padding: 0px;
    }
    .progress {
      transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
      border-radius: 1px 0 0 1px;
      background-color: #13C2C2;
      width: 0;
      height: 100%;
    }
    .target {
      position: absolute;
      top: 0;
      bottom: 0;
      span {
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        height: 4px;
        width: 2px;
      }
      span:last-child {
        top: auto;
        bottom: 0;
      }
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
export default class MiniProgress extends Vue {

  @Prop({ type: Number, default: 100})
  private target!: number;

  @Prop({ type: String, default: '#13C2C2'})
  private color!: string;

  @Prop({ type: Number, default: 78})
  private percent: number = 78;

  @Prop({ type: String, default: '8px'})
  private height: string = '8px';
}
</script>
