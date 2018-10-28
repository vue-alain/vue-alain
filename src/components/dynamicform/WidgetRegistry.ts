import { Component, Prop, Vue } from 'vue-property-decorator';

class WidgetRegistry {

    private widgets: { [type: string]: any } = {};

    private defaultWidget: any;

    public setDefault(widget: any) {
        this.defaultWidget = widget;
    }

    public register(type: string, widget: any) {
        this.widgets[type] = widget;
    }

    public has(type: string) {
        return this.widgets.hasOwnProperty(type);
    }

    public getType(type: string): any {
        if (this.has(type)) {
            return this.widgets[type];
        }
        return this.defaultWidget;
    }

}

const widgetRegistry = new WidgetRegistry();
export default widgetRegistry;
