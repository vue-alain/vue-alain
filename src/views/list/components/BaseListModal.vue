<template>
<a-modal title='动态弹出框' className="standardListForm" :width="640" :bodyStyle="{ padding: '72px 0' }" :visible="visible"
@ok="handleOk"
@cancel="handleCancel"
>
    弹出框
</a-modal>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue,
} from 'vue-property-decorator';
import {
    State,
    Mutation,
    namespace,
} from 'vuex-class';

@Component({})
export default class BaseListModal extends Vue {

    private visible: boolean = true;

    private handleOk() {
        this.visible = false;
    }

    private handleCancel(){
        this.visible = false;
    }

}
</script>
