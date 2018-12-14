import Vue from 'vue';

// document title 指令
Vue.directive('title', {
  inserted: (el, binding) => document.title = binding.value,
  update: (el, binding) => document.title = binding.value,
});
