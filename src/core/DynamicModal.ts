import {
    Vue,
} from 'vue-property-decorator';


class DynamicModalPlugin {
    private installed: boolean = false;
    private event: any = null;

    private rootInstance = null;

    public install(vue: Vue, options = {}) {
        if (this.installed) {
            return;
        }
        this.installed = true;
        this.event = new Vue();

        Vue.prototype.$modal = {
            show(modal: any, paramsOrProps: any, params: any, events = {}) {
                if (typeof modal === 'string') {
                    // Plugin.event.$emit('toggle', modal, true, paramsOrProps)
                    return;
                }

                const root = params && params.root
                    ? params.root
                    : this.rootInstance

                const container = getModalsContainer(Vue, options, root);

                if (container) {
                    container.add(modal, paramsOrProps, params, events);
                    return;
                }
            }
        }

        //Object.defineProperty(vue.prototype, '$lodash', { value: _ });
    }

}


function getModalsContainer(Vue: any, options: any, root: any) {
    if (!root._dynamicContainer && options.injectModalsContainer) {
        const modalsContainer = document.createElement('div');
        document.body.appendChild(modalsContainer);

        new Vue({
            parent: root,
            render: (h: any) => h(null)
        }).$mount(modalsContainer)
    }

    return root._dynamicContainer
}



export default new DynamicModalPlugin();/* {
    installed:false,
    install(vue: Vue) {
        if(this.installed){
            return;
        }
        this.installed = true;
        this.event = new Vue();

      //Object.defineProperty(vue.prototype, '$lodash', { value: _ });
    },
  };
*/
  /*

const Plugin = {
    install (vue: Vue, options = {}) {
    
      if (this.installed) {
        return
      }
  
      this.installed = true
      this.event = new Vue()
      this.rootInstance = null
      this.componentName = options.componentName || defaultComponentName
      
      Vue.prototype.$modal = {
        show (modal, paramsOrProps, params, events = {}) {
          if (typeof modal === 'string') {
            Plugin.event.$emit('toggle', modal, true, paramsOrProps)
            return
          }
  
          const root = params && params.root
            ? params.root
            : Plugin.rootInstance
          
          const container = getModalsContainer(Vue, options, root)
          
          if (container) {
            container.add(modal, paramsOrProps, params, events)
            return
          }
  
          console.warn(unmountedRootErrorMessage)
        },
        hide (name, params) {
          Plugin.event.$emit('toggle', name, false, params)
        },
  
        toggle (name, params) {
          Plugin.event.$emit('toggle', name, undefined, params)
        }
      }
      
      Vue.component(this.componentName, Modal)
     
      if (options.dialog) {
        Vue.component('v-dialog', Dialog)
      }
     
      if (options.dynamic) {
        Vue.component('modals-container', ModalsContainer)
        Vue.mixin({
          beforeMount () {
            if (Plugin.rootInstance === null) {
              Plugin.rootInstance = this.$root
            }
          }
        })
      }
    }
  }
  
  function getModalsContainer (Vue, options, root) {
    if (!root._dynamicContainer && options.injectModalsContainer) {
      const modalsContainer = document.createElement('div')
      document.body.appendChild(modalsContainer)
  
      new Vue({
        parent: root,
        render: h => h(ModalsContainer)
      }).$mount(modalsContainer)
    }
  
    return root._dynamicContainer
  }
  
  export default Plugin
  */