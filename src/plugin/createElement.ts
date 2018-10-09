export default {
    install(vue: any) {
        const extend = vue.extend({
            beforeCreate() {
                console.log('beforeCreate');
                console.log(this);
                const originalCreateElement = this.$createElement;
                this.$createElement = (tag: any, data: any, ...children: any[]) => originalCreateElement(tag, data, children);
            },
        });

        vue.mixin(extend);
        // Object.defineProperty(Vue.prototype, "$lodash", { value: _ });
    },
};
