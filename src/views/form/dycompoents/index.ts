import { Component, Prop, Vue } from 'vue-property-decorator';

import DateRangeWidget from './widgets/DateRangeWidget.vue';
import NumberWidget from './widgets/NumberWidget.vue';
import StringWidget from './widgets/StringWidget.vue';
import TextWidget from './widgets/TextWidget.vue';
import TextareaWidget from './widgets/TextareaWidget.vue';

import registry from  './WidgetRegistry';

export default {
    install() {
        registry.register('df-daterange',DateRangeWidget);
        registry.register('df-daterange',DateRangeWidget);
        registry.register('df-number',NumberWidget);
        registry.register('df-string',StringWidget);
        registry.register('df-text',TextWidget);
        registry.register('df-textarea',TextareaWidget);
    }
}