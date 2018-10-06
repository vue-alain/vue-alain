<template>
<a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
<a-modal :title="'任务编辑'" class="standardListForm" :width="640" :bodyStyle="{ padding: '28px 0 0' }" :visible="visible" @ok="handleOk" @cancel="handleCancel">
    
        <a-form-item label="任务名称" v-bind="formLayout" 
                fieldDecoratorId="title" 
                :fieldDecoratorOptions="{
                    rules: [{ required: true, message: '请输入任务名称' }],
                    initialValue: record.title,
                }">
            <a-input placeholder="请输入" />
        </a-form-item>
        <a-form-item label="开始时间" v-bind="formLayout" fieldDecoratorId="createdAt" :fieldDecoratorOptions="{
                    rules: [{ required: true, message: '请选择开始时间' }],
                    initialValue: record.createdAt ? moment(record.createdAt) : null,
                }">
            <a-date-picker showTime placeholder="请选择" format="YYYY-MM-DD HH:mm:ss" style="width: 100%" />
        </a-form-item>
        <a-form-item label="任务负责人" v-bind="formLayout" fieldDecoratorId="owner" :fieldDecoratorOptions="{
                    rules: [{ required: true, message: '请选择任务负责人' }],
                    initialValue: record.owner,
                }">
            <a-select placeholder="请选择" style="width: 100%">
                <a-select-option value="付晓晓">付晓晓</a-select-option>
                <a-select-option value="周毛毛">周毛毛</a-select-option>
            </a-select>
        </a-form-item>
        <a-form-item v-bind="formLayout" label="产品描述" fieldDecoratorId="subDescription" :fieldDecoratorOptions="{
                    rules: [{ message: '请输入至少五个字符的产品描述！', min: 5 }],
                    initialValue: record.subDescription,
                }">
            <a-textarea :rows="4" placeholder="请输入至少五个字符" />
        </a-form-item>
    
</a-modal>
</a-form>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue,
    Emit,
    Watch,
} from 'vue-property-decorator';
import {
    State,
    Mutation,
    namespace,
} from 'vuex-class';

import moment from 'moment';
import axios from 'axios';

@Component({})
export default class BaseListModal extends Vue {

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

    private moment: any = moment;

    private formLayout = {
        labelCol: {
            span: 7,
        },
        wrapperCol: {
            span: 13,
        },
    };

    private handleOk(e: any) {

        e.preventDefault();
        this.form.validateFields((err: any, fieldsValue: any) => {
            if (err) {
                return;
            }

            const id = this.record.id;

            axios.post('/api/save_fake_list', {id, ...fieldsValue})
                .then((res: any) => {
                    this.updateVisible(false);
                    this.onClose(true);
                });
            });
    }

    private handleCancel() {
        this.updateVisible(false);
        this.onClose(false);
    }

    @Emit('update:visible')
    private updateVisible(visible: boolean): void {}

    @Emit('close')
    private onClose(isOk: boolean) {

    }

    private handleSubmit() {

    }
}
</script>
