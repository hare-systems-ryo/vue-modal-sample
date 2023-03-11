import './scss/style.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueRouter } from './script/vue-router';
import App from './script/root-view.vue';
const vueApp = createApp(App);
const pinia = createPinia();
vueApp.use(VueRouter);
vueApp.use(pinia);
vueApp.mount('#app');

//エラー確認用
vueApp.config.errorHandler = (err, vm, info) => {
  console.log(`Captured in Vue.config.errorHandler: ${info}`, err);
};
window.addEventListener('error', (event: any) => {
  if ('message' in event && event.message === 'ResizeObserver loop limit exceeded') {
    return;
  }
  console.log('Captured in error EventListener', event, event.error);
});
window.addEventListener('unhandledrejection', (event) => {
  console.log('Captured in unhandledrejection EventListener', event.reason);
});
