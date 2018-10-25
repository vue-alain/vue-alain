import { Component, Prop, Vue } from 'vue-property-decorator';

class WidgetRegistry{

    private widgets: { [type: string]: any } = {};

    private defaultWidget: any;

    setDefault(widget: any) {
        this.defaultWidget = widget; 
    }

    register(type: string, widget: any) {
        this.widgets[type] = widget;
    }

    has(type: string) {
        return this.widgets.hasOwnProperty(type);
    }
    
    getType(type: string): any {
    if (this.has(type)) {
        return this.widgets[type];
    }
    return this.defaultWidget;
    }

}

const widgetRegistry=new WidgetRegistry();
export default widgetRegistry;
