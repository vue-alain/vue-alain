import { Component, Prop, Vue } from 'vue-property-decorator';

/**
 * 动态表单组件注册类
 * 提供注册和获取方法
 */
class WidgetRegistry {

    private widgets: Map<string, any> = new Map<string, any>();

    private defaultWidget: any;

    /**
     * 设置默认组件，以便找不到type对应的逐渐时候显示
     * @param widget
     */
    public setDefault(widget: any) {
        this.defaultWidget = widget;
    }

    /**
     * 注册动态表单组件
     * @param type
     * @param widget
     */
    public register(type: string, widget: any) {
        this.widgets.set(type, widget);
    }

    /**
     * 判断指定的组件名称是否存在
     * @param type
     */
    public has(type: string) {
        return this.widgets.has(type);
    }

    /**
     * 根据指定类型获取动态组件
     * @param type
     */
    public getType(type: string): any {
        if (this.has(type)) {
            return this.widgets.get(type);
        }
        return this.defaultWidget;
    }

}

const widgetRegistry = new WidgetRegistry();
export default widgetRegistry;
