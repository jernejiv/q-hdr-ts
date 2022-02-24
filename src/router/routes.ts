import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/settings',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Settings.vue') }],
  },

  {
    path: '/table',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Table.vue') }],
  },
  {
    path: '/debug',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Debug.vue') }],
  },
  {
    path: '/debug-class',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/debug-class.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
