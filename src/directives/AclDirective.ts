import Vue from 'vue';

// todo: acl 指令
// document title 指令
Vue.directive('acl', {
  // inserted: (el, binding) => document.title = binding.value,
  update: (el, binding, vnode) => {
    document.title = binding.value;
  },
});
