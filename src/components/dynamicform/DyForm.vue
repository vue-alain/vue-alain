<template>
<a-form @submit="handleSubmit"
    style="margin-top: 8px"
    :autoFormCreate="(form)=>{this.form = form}"
    v-bind="formOption">

    <dy-item :properties="rootProperties"></dy-item>

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
import { DFSchema } from './schema/DfSchema';
import { DFUISchema } from './schema/UiSchema';

@Component({
    components: {
        'dy-item':DyFormitem
    }
})
export default class DyForm extends Vue {

    @Prop({
        type: Object,
        default () {
            return {};
        }
    })
    private formSchema!: DFSchema;

    @Prop({
        type: Object,
        default () {
            return {};
        }
    })
    private uiSchema!: DFUISchema;

    @Prop({
        type: Object,
        default () {
            return {};
        }
    })
    private formOption!: any;

    private form:any = null;

    private rootProperties: DFSchema[] = [];

    private mounted(){
        this.rootProperties = this.createRootProperties();
    }

    private createRootProperties(){
        const properties: any = this.formSchema.properties;
        const rootProperties = Object.keys(properties)
            .map((key: any)=>{
                const item = properties[key];
                let uiItem = this.uiSchema[key];
                if(uiItem==null){
                    uiItem={};
                }
                const ui = {
                    ...item.ui,
                    ...uiItem,
                };
                item.ui = ui;
                item.type= uiItem.widget||item.type;
                return item;
            });
        return rootProperties;
    }
    
    private handleSubmit(){
    }

}
</script>
