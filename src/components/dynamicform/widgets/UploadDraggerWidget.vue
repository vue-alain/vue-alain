<template>
<df-item :formitem="formitem">
  <a-upload-dragger :name='formitem.key' action='/upload.do'>
    <p class='ant-upload-drag-icon'>
      <a-icon type='inbox' />
    </p>
    <p class='ant-upload-text'>Click or drag file to this area to upload</p>
    <p class='ant-upload-hint'>Support for a single or bulk upload.</p>
  </a-upload-dragger>
</df-item>
</template>

<style lang="less">

</style>

<script  lang="ts">
import { Component, Prop, Vue, Mixins } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import { DFSchema } from './../schema/DfSchema';

import DyFormitemWapper from './../DyFormitemWapper.vue';

import DyFormMixin, { IDyFormMixin } from '@/components/dynamicform/dyformitemMixin';

@Component({
    components: {
      'df-item': DyFormitemWapper,
    },
})
export default class UploadDraggerWidget extends  Mixins<IDyFormMixin>(DyFormMixin) {

}
</script>