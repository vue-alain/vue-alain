import { Component, Prop, Vue } from 'vue-property-decorator';

import DateRangeWidget from './widgets/DateRangeWidget.vue';
import NumberWidget from './widgets/NumberWidget.vue';
import StringWidget from './widgets/StringWidget.vue';
import TextWidget from './widgets/TextWidget.vue';
import TextareaWidget from './widgets/TextareaWidget.vue';
import SwitchWidget from './widgets/SwitchWidget.vue';
import SliderWidget from './widgets/SliderWidget.vue';
import RateWidget from './widgets/RateWidget.vue';
import SelectWidget from './widgets/SelectWidget.vue';
import RadioWidget from './widgets/RadioWidget.vue';
import UploadWidget from './widgets/UploadWidget.vue';
import UploadDraggerWidget from './widgets/UploadDraggerWidget.vue';

import registry from './WidgetRegistry';

export default {
    install() {
        // 日期范围
        registry.register('df-daterange', DateRangeWidget);

        // 数字输入框
        registry.register('df-number', NumberWidget);

        // 文本框
        registry.register('df-string', StringWidget);
        registry.register('df-text', TextWidget);

        // 区域文本框
        registry.register('df-textarea', TextareaWidget);

        // 开关
        registry.register('df-boolean', SwitchWidget);

        // 拖动条
        registry.register('df-slider', SliderWidget);

        // 星打分
        registry.register('df-rate', RateWidget);

        // 下拉框
        registry.register('df-select', SelectWidget);

        // 单选框
        registry.register('df-radio', RadioWidget);

        // 上传文件
        registry.register('df-upload', UploadWidget);
        registry.register('df-uploaddragger', UploadDraggerWidget);
    },
};
