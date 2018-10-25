<template>
<a-form @submit="handleSubmit"
    hideRequiredMark
    style="margin-top: 8px"
    :autoFormCreate="(form)=>{this.form = form}">

    <dy-item :formitems="[]"></dy-item>

<!--
    <a-form-item v-bind="formItemLayout" label="标题">
        <a-input placeholder="给目标起个名字" />
    </a-form-item>

            <component v-bind:is="formItems"></component>
            <a-form-item style="margin-top: 32px">
                <a-button type="primary" htmlType="submit" >
                    提交
                </a-button>
                <a-button style="margin-left: 8px">保存</a-button>
            </a-form-item>
            -->
</a-form>
</template>

<style lang="less">

</style>

<script lang="tsx">
import {
    Component,
    Prop,
    Vue
} from 'vue-property-decorator';
import {
    State,
    Mutation,
    namespace
} from 'vuex-class';

import DyFormitem from './DyFormitem.vue';

@Component({
    components: {
        'dy-item':DyFormitem
    }
})
export default class DyForm extends Vue {

    @Prop({
        type: Array,
        default () {
            return [];
        }
    })
    private formitems!: any[];

    private form:any = null;

    private handleSubmit(){
    }

}
</script>
