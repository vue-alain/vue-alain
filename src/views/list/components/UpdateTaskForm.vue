<template>
<a-form style="margin-top: 8px" :autoFormCreate="(form)=>{this.form = form}">
    <a-modal title="规则配置" destroyOnClose :visible="visible">
        <a-steps style="margin-bottom: 28px" size="small" :current="currentStep">
            <a-step title="基本信息" />
            <a-step title="配置规则属性" />
            <a-step title="设定调度周期" />
        </a-steps>
        <div v-if="currentStep==0">
            <a-form-item key="title" v-bind="formLayout" label="规则名称" fieldDecoratorId="title" :fieldDecoratorOptions="{
                    rules: [{ required: true, message: '请输入规则名称！' }],
                    initialValue: formVals.title,
                }">
                <a-input placeholder="请输入" />
            </a-form-item>,
            <a-form-item key="description" v-bind="formLayout" label="规则描述" fieldDecoratorId="description" :fieldDecoratorOptions="{
                    rules: [{ required: true, message: '请输入至少五个字符的规则描述！', min: 5 }],
                    initialValue: formVals.description,
                }">
                <a-textarea :rows="4" placeholder="请输入至少五个字符" />
            </a-form-item>
        </div>
        <div v-if="currentStep==1">
            <a-form-item key="target" v-bind="formLayout" label="监控对象" fieldDecoratorId="target" :fieldDecoratorOptions="{
                    initialValue: formVals.target,
                }">
                <a-select style="width: 100%">
                    <a-select-option value="0">表一</a-select-option>
                    <a-select-option value="1">表二</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item key="template" v-bind="formLayout" label="规则模板" fieldDecoratorId="template" :fieldDecoratorOptions="{
                    initialValue: formVals.template,
                }">
                <a-select style="width: 100%">
                    <a-select-option value="0">规则模板一</a-select-option>
                    <a-select-option value="1">规则模板二</a-select-option>
                </a-select>
            </a-form-item>,
            <a-form-item key="type" v-bind="formLayout" label="规则类型" fieldDecoratorId="type" :fieldDecoratorOptions="{
                    initialValue: formVals.type,
                }">
                <a-radio-group>
                    <a-radio value="0">强</a-radio>
                    <a-radio value="1">弱</a-radio>
                </a-radio-group>
            </a-form-item>
        </div>
        <div v-if="currentStep==2">
            <a-form-item key="time" v-bind="formLayout" label="开始时间" fieldDecoratorId="time" :fieldDecoratorOptions="{
                    rules: [{ required: true, message: '请选择开始时间！' }]
                }">
                <a-date-picker style="width: 100%" showTime format="YYYY-MM-DD HH:mm:ss" placeholder="选择开始时间" />
            </a-form-item>
            <a-form-item key="frequency" v-bind="formLayout" label="调度周期" fieldDecoratorId="frequency" :fieldDecoratorOptions="{
                    initialValue: formVals.frequency,
                }">
                <a-select style="width: 100%">
                    <a-select-option value="month">月</a-select-option>
                    <a-select-option value="week">周</a-select-option>
                </a-select>
            </a-form-item>
        </div>
        <template slot="footer" v-if="currentStep==0">
            <a-button key="cancel" @click="handleCancel">
                取消
            </a-button>
            <a-button key="forward" type="primary" @click="handleNext">
                下一步
            </a-button>
        </template>
        <template slot="footer" v-else-if="currentStep==1">
            <a-button key="back" :style="{ float: 'left' }" @click="handleBackward">
                上一步
            </a-button>
            <a-button key="cancel" @click="handleCancel">
                取消
            </a-button>
            <a-button key="forward" type="primary" @click="handleNext">
                下一步
            </a-button>
        </template>
        <template slot="footer" v-else-if="currentStep==2">
            <a-button key="back" :style="{ float: 'left' }" @click="handleBackward">
                上一步
            </a-button>
            <a-button key="cancel" @click="handleCancel">
                取消
            </a-button>
            <a-button key="forward" type="primary" @click="handleOk">
                完成
            </a-button>
        </template>
    </a-modal>
</a-form>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue,
    Emit,
    Model,
    Watch,
} from 'vue-property-decorator';
import {
    State,
    Mutation,
    namespace,
} from 'vuex-class';

import axios from 'axios';

@Component({
    components: {},
})
export default class UpdateTaskForm extends Vue {

    @Prop({
        type: Boolean,
        default: false,
    })
    private visible!: boolean;

    @Prop({
        type: Object,
        default() {
            return {};
        },
    })
    private record!: any;

    private form: any = null;

    private formVals: any = {
        target: '0',
        template: '0',
        type: '1',
        time: '',
        frequency: 'month',
    };

    private currentStep: number = 0;

    private formLayout = {
        labelCol: {
            span: 7,
        },
        wrapperCol: {
            span: 13,
        },
    };

    private handleBackward(): void {
        this.currentStep--;
    }

    private handleNext(): void {
        this.form.validateFields((err: any, fieldsValue: any) => {
            if (err) {
                return;
            }
            this.formVals = { ...this.formVals, ...fieldsValue };
            this.currentStep++;
        });
    }

    private handleCancel(): void {
        this.updateVisible(false);
    }

    private handleOk(): void {

        this.form.validateFields((err: any, fieldsValue: any) => {
            if (err) {
                return;
            }
            this.formVals = { ...this.formVals, ...fieldsValue };

            axios.post('/updateRule', {...this.formVals})
                .then(() => {
                    this.updateVisible(false);
                    this.onOk();
                });
            });

    }

    @Emit('ok')
    private onOk() {

    }

    private updateVisible(visible: boolean): void {
        this.$emit('update:visible', visible);
    }

    private mounted(): void {
        this.currentStep = 0;
    }

    @Watch('record', {
        immediate: true,
        deep: true,
    })
    private recordChange(value: any, oldValue: any): void {
        this.formVals = {
            ...value,
            ...this.formVals,
        };
        this.currentStep = 0;
    }

}
</script>
