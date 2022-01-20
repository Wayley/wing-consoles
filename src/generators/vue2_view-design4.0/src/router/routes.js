const RouterView = () => import('../components/RouterView.vue');

const BASIC = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/basic/Login.vue'),
  },
];
const SYSTEM = [
  {
    path: '/system',
    name: 'system',
    component: RouterView,
    children: [
      {
        path: '/system/account',
        name: 'system.account',
        component: RouterView,
        children: [
          {
            path: '/system/account/list',
            name: 'system.account.list',
            component: () => import('@/views/system/account/List.vue'),
          },
          {
            path: '/system/account/add',
            name: 'system.account.add',
            component: () => import('@/views/system/account/Add.vue'),
          },
          {
            path: '/system/account/:id',
            name: 'system.account.edit',
            component: () => import('@/views/system/account/Edit.vue'),
          },
        ],
      },
      {
        path: '/system/role',
        name: 'system.role',
        component: RouterView,
        children: [
          {
            path: '/system/role/list',
            name: 'system.role.list',
            component: () => import('@/views/system/role/List.vue'),
          },
          {
            path: '/system/role/add',
            name: 'system.role.add',
            component: () => import('@/views/system/role/Add.vue'),
          },
          {
            path: '/system/role/:id',
            name: 'system.role.edit',
            component: () => import('@/views/system/role/Edit.vue'),
          },
        ],
      },
      {
        path: '/system/authority',
        name: 'system.authority',
        component: RouterView,
        children: [
          {
            path: '/system/authority/list',
            name: 'system.authority.list',
            component: () => import('@/views/system/authority/List.vue'),
          },
          {
            path: '/system/authority/add',
            name: 'system.authority.add',
            component: () => import('@/views/system/authority/Add.vue'),
          },
          {
            path: '/system/authority/:id',
            name: 'system.authority.edit',
            component: () => import('@/views/system/authority/Edit.vue'),
          },
        ],
      },
    ],
  },
];
const EXAMPLE = [
  {
    path: '/example',
    name: 'example',
    component: () => import('@/views/example/List.vue'),
  },
];
export const routes = [
  ...BASIC,
  {
    path: '/',
    name: 'index',
    component: () => import('@/layout/MainLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/basic/Welcome.vue'),
      },
      ...SYSTEM,
      ...EXAMPLE,
    ],
  },
  { path: '*', component: () => import('@/views/basic/NoMatch.vue') },
];
export default routes;
