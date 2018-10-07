<template>
<div class="descriptionList" :class="size" v-bind="restProps">
    <div v-if="title" class="title">{{title}}</div>

    <a-row :gutter="32">
        <slot></slot>
    </a-row>
</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue,
} from 'vue-property-decorator';
import responsive from './responsive';

@Component({})
export default class DescriptionList extends Vue {
    @Prop({
        type: String,
        default: '',
    })
    private title!: string;

    @Prop({
        type: String,
        default: 'small',
    })
    private size!: string;

    @Prop({
        type: Object,
        default() {
            return {};
        },
    })
    private gutter!: any;

    @Prop({
        type: Object,
        default() {
            return {};
        },
    })
    private restProps!: any;

}
</script>


<style lang="less">
@import '../../assets/theme/styles/index.less';

.descriptionList {

    // offset the padding-bottom of last row
    :global {
        .ant-row {
            margin-bottom: -16px;
            overflow: hidden;
        }
    }

    .title {
        font-size: 14px;
        color: @heading-color;
        font-weight: 500;
        margin-bottom: 16px;
    }

    .term {
        // Line-height is 22px IE dom height will calculate error
        line-height: 20px;
        padding-bottom: 16px;
        margin-right: 8px;
        color: @heading-color;
        white-space: nowrap;
        display: table-cell;

        &:after {
            content: ':';
            margin: 0 8px 0 2px;
            position: relative;
            top: -0.5px;
        }
    }

    .detail {
        line-height: 20px;
        width: 100%;
        padding-bottom: 16px;
        color: @text-color;
        display: table-cell;
    }

    &.small {

        // offset the padding-bottom of last row
        :global {
            .ant-row {
                margin-bottom: -8px;
            }
        }

        .title {
            margin-bottom: 12px;
            color: @text-color;
        }

        .term,
        .detail {
            padding-bottom: 8px;
        }
    }

    &.large {
        .title {
            font-size: 16px;
        }
    }

    &.vertical {
        .term {
            padding-bottom: 8px;
            display: block;
        }

        .detail {
            display: block;
        }
    }
}
</style>
