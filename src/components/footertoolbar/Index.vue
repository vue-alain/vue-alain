<template>
    <div class="toolbar" :style="toolbarStyle">
        <div class="left">
            <slot name="extra"></slot>
        </div>
        <div class="right">
            <slot name ="children"></slot>
        </div>
    </div>
</template>

<style lang="less" scoped>
.toolbar {
  position: fixed;
  width: 100%;
  bottom: 0;
  right: 0;
  height: 56px;
  line-height: 56px;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.03);
  background: #fff;
  border-top: 1px solid #e8e8e8;
  padding: 0 24px;
  z-index: 9;

  &:after {
    content: "";
    display: block;
    clear: both;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  button + button {
    margin-left: 8px;
  }
}
</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class FooterToolbar extends Vue {
  @Prop({ type: Object, default: ()  => { return {}; } })
  private toolbarStyle!: any;
}
</script>
