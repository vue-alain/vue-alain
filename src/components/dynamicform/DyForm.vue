<template>
<a-form @submit="handleSubmit"
    hideRequiredMark
    style="margin-top: 8px"
    :autoFormCreate="(form)=>{this.form = form}">

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

    private form:any = null;

    private rootProperties: DFSchema[] = [];

    private mounted(){
        this.rootProperties = this.createRootProperties();
    }

    private createRootProperties(){
        const properties: any = this.formSchema.properties;
        const rootProperties = Object.keys(properties)
            .map((key: any)=>{
                return properties[key];
            });
        return rootProperties;
    }
    
    private handleSubmit(){
    }

}
</script>
