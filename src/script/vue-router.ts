import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
//- [ page ]

import { VuePage } from '@/script/vue-page';
//- [ vc ]
import ViewHome from '@/script/view/view-home.vue';
import ViewModal1 from '@/script/view/view-modal-1.vue';
import ViewModal2 from '@/script/view/view-modal-2.vue';
import ViewModal3 from '@/script/view/view-modal-3.vue';

//---------------------------------------------------------------------------------
const route = (page: any, component: any, children: any = undefined) => {
  const ret = {
    path: page.path,
    name: page.name,
    component: component,
    meta: page.meta,
    children: children,
  };
  return ret;
};
const routes: Array<RouteRecordRaw> = [
  route(VuePage.home, ViewHome),
  route(VuePage.modal1, ViewModal1),
  route(VuePage.modal2, ViewModal2),
  route(VuePage.modal3, ViewModal3),
  {
    path: '/',
    redirect: { name: VuePage.home.name },
  },
  {
    path: '/:any',
    redirect: { name: VuePage.home.name },
  },
];
export const VueRouter = createRouter({
  history: createWebHistory(),
  routes,
});
