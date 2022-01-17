export const routes = [
  { path: '/login', component: () => import('@/views/basic/Login.vue') },
  { path: '/', component: () => import('@/views/basic/Welcome.vue') },
];
export default routes;
