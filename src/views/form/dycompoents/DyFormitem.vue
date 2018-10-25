<template>
<div>
    <component v-for="(formitem,index) in formitems" 
    :key="index" 
    :is="createWidgets(formitem)"
    :formitem="formitem"></component>
</div>
</template>

<style lang="less">

</style>

<script  lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import StringWidget from './widgets/StringWidget.vue';
import NumberWidget from './widgets/NumberWidget.vue';
import DateRangeWidget from './widgets/DateRangeWidget.vue';
import TextareaWidget from './widgets/TextareaWidget.vue';

@Component({
    components:{
        'df-string':StringWidget,
        'df-number':NumberWidget,
        'df-daterange':DateRangeWidget,
        'df-textarea':TextareaWidget,
    }
})
export default class DyFormitem extends Vue {

    @Prop({type: Array, default() {
        return [];
    }})
    private formitems!: any[];

    private createWidgets(foritem: any): any{
        if(foritem.type==='string'){
            return 'df-string';
        }
        if(foritem.type==='number'){
            return 'df-number';
        }
        if(foritem.type==='daterange'){
            return 'df-daterange';
        }
        if(foritem.type==='textarea'){
            return 'df-textarea';
        }
        return {};
    }

}
</script>