<template>
  <div class="clsString" v-bind="restProps">
      <div class="icon">
        <a-icon v-if="type==='error'" class="error" type="close-circle" theme="filled" />
        <a-icon v-if="type==='success'"  class="success" type="check-circle" theme="filled" />
      </div>
      <div class="title">{{title}}</div>
      <div class="description">
        <slot name="description">
        </slot>
      </div>
      <div class="extra">
        <slot name="extra">
        </slot>
      </div>
    <div class="actions">
      <slot name="actions">
      </slot>
    </div>
  </div>
</template>

<style lang="less" scoped>

@import '~ant-design-vue/dist/antd.less';

.result {
  text-align: center;
  width: 72%;
  margin: 0 auto;
  @media screen and (max-width: @screen-xs) {
    width: 100%;
  }

  .icon {
    font-size: 72px;
    line-height: 72px;
    margin-bottom: 24px;

    & > .success {
      color: @success-color;
    }

    & > .error {
      color: @error-color;
    }
  }

  .title {
    font-size: 24px;
    color: @heading-color;
    font-weight: 500;
    line-height: 32px;
    margin-bottom: 16px;
  }

  .description {
    font-size: 14px;
    line-height: 22px;
    color: @text-color-secondary;
    margin-bottom: 24px;
  }

  .extra {
    background: #fafafa;
    padding: 24px 40px;
    border-radius: @border-radius-sm;
    text-align: left;

    @media screen and (max-width: @screen-xs) {
      padding: 18px 20px;
    }
  }

  .actions {
    margin-top: 32px;

    button:not(:last-child) {
      margin-right: 8px;
    }
  }
}

</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Result extends Vue {

  @Prop({type: Object, default: null})
  private restProps!: any;

  @Prop({type: String, default: null})
  private title!: string;

  @Prop({type: String, default: 'error'})
  private type!: 'error'|'success';
}
</script>
