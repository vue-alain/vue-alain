<template>
    <div class="numberInfo">
    
    <slot name="title">
        <div v-if="title!=null"
            class="numberInfoTitle" >
            {{title}}
        </div>
    </slot>
    <div class="numberInfoSubTitle">
        <slot name="subTitle">
            <div v-if="subTitle!=null">
                {{subTitle}}
            </div>
        </slot>
    </div>
    
    
    <div class="numberInfoValue" 
    :style="{'margin-top': gap }">
      <span>
        {{total}}
        <em v-if="suffix!=null" class="suffix">{{suffix}}</em>
      </span>
    <span v-if="status || subTotal" 
        class="subTotal">
          {{subTotal}}
          <a-icon v-if="status" :type="`caret-${status}`" />
        </span>
    </div>
  </div>
</template>

<style lang="less">
 @import './Index.less';
</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({})
export default class NumberInfo extends Vue {

    @Prop({type: String, default: null})
    private title!: string;

    @Prop({type: String, default: null})
    private subTitle!: string;

    @Prop({type: String, default: ''})
    private total!: string;

    @Prop({type: Number, default: 0})
    private subTotal!: number;

    @Prop({type: String, default: null})
    private status!: string;

    @Prop({type: String, default: null})
    private suffix!: string;

    @Prop({type: Number, default: null})
    private gap!: number;
}
</script>
