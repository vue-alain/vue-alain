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
        registry.register('df-daterange' , DateRangeWidget);
        registry.register('df-daterange', DateRangeWidget);
        registry.register('df-number', NumberWidget);
        registry.register('df-string', StringWidget);
        registry.register('df-text', TextWidget);
        registry.register('df-textarea', TextareaWidget);
        registry.register('df-boolean', SwitchWidget);
        registry.register('df-slider', SliderWidget);
        registry.register('df-rate', RateWidget);
        registry.register('df-select', SelectWidget);
        registry.register('df-radio', RadioWidget);
        registry.register('df-upload', UploadWidget);
        registry.register('df-uploaddragger', UploadDraggerWidget);
    },
};
