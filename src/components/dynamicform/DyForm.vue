<template>
<a-form @submit="handleSubmit"
    style="margin-top: 8px"
    :autoFormCreate="(form)=>{this.form = form}"
    v-bind="formOption">

    <dy-item :properties="rootProperties"></dy-item>

    <a-form-item style="margin-top: 32px">
        <a-button type="primary" htmlType="submit" :loading="submiting">
            提交
        </a-button>
        <a-button style="margin-left: 8px">保存</a-button>
    </a-form-item>

</a-form>
</template>

<style lang="less">

</style>

<script lang="tsx">
import {
    Component,
    Prop,
    Vue,
    Emit,
} from 'vue-property-decorator';
import {
    State,
    Mutation,
    namespace,
} from 'vuex-class';

import DyFormitem from './DyFormitem.vue';
import { DFSchema } from './schema/DfSchema';
import { DFUISchema } from './schema/UiSchema';
import FormProperty from './domain/FormProperty';

@Component({
    components: {
        'dy-item': DyFormitem,
    },
})
export default class DyForm extends Vue {

    /**
     * json schema 描述的表单结构
     */
    @Prop({
        type: Object,
        default() {
            return {};
        },
    })
    private formSchema!: DFSchema;

    /**
     * UI schema 描述表单渲染
     */
    @Prop({
        type: Object,
        default() {
            return {};
        },
    })
    private uiSchema!: DFUISchema;

    /**
     * 表单选项，未使用
     */
    @Prop({
        type: Object,
        default() {
            return {};
        },
    })
    private formOption!: any;

    /**
     * 表单是否提交中
     */
    @Prop({
        type: Boolean,
        default: false,
    })
    private submiting!: boolean;

    private form: any = null;

    private rootProperties: FormProperty[] = [];

    private mounted() {
        this.rootProperties = this.createRootProperties();
    }

    /**
     * 创建属性
     */
    private createRootProperties() {
        const properties: any = this.formSchema.properties;
        const rootProperties = Object.keys(properties)
            .map((key: any) => {
                const item = properties[key];
                const uiItem = this.uiSchema[key];
                return new FormProperty(key, item, uiItem, this.formSchema.required);
            });
        return rootProperties;
    }

    /**
     * 表单提交
     */
    private handleSubmit(e: any) {
        e.preventDefault();

        this.form.validateFieldsAndScroll((err: any, values: any) => {
            if (err) {
                return;
            }
            this.success(values);
        });

    }

    @Emit('onSuccess')
    private success(values: any) {

    }

}
</script>
