export const routes = [
  { path: '/login', component: () => import('@/views/basic/Login.vue') },
  { path: '/', component: () => import('@/views/basic/Welcome.vue') },
  { path: '*', component: () => import('@/views/basic/NoMatch.vue') },
];
export default routes;
