<template>
<a-col v-bind="colResponsive">
    <div v-if="term" class="term">{{term}}</div>
    <div class="detail">
        <slot></slot>
    </div>
</a-col>
</template>

<style lang="less">

</style>

<script lang="ts">
import {
    Component,
    Prop,
    Vue,
} from 'vue-property-decorator';
import responsive from './responsive';

@Component({})
export default class Description extends Vue {
    @Prop({
        type: String,
        default: '',
    })
    private term!: string;

    @Prop({
        type: Number,
        default: 3,
    })
    private column!: number;

    private responsive: any = responsive;

    get colResponsive() {
        return this.responsive[this.column];
    }

    /****
     * {...restProps}
     */
}
</script>
