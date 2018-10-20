<template>
<a-modal title="测试窗口" destroyOnClose :visible="visible"
@ok="handleOk" @cancel="handleCancel">
    <span>
        {{visible}}
    </span>
    <a-button @click="handlerClick">自定义返回内容</a-button>
</a-modal>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue,
    Emit,
    Model,
    Watch,
    Mixins,
} from 'vue-property-decorator';
import {
    State,
    Mutation,
    namespace,
} from 'vuex-class';

import ModalMixin, { IModalMixin } from '@/core/modalMixin.ts';

@Component({
    components: {},
})
export default class TestModal extends Mixins<IModalMixin>(ModalMixin) {

    @Prop({
        type: String,
        default: '',
    })
    private user!: string;

    constructor() {
        super();
    }
    private mounted(): void {
    }

    private handlerClick() {
        this.subject$.next('自定义返回结果');
        this.close();
    }
}
</script>
