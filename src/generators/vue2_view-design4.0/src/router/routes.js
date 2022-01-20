const RouterView = () => import('../components/RouterView.vue');

const BASIC = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/basic/Login.vue'),
    meta: {
      publicPage: true,
      title_locale: 'basic.login', // 登录页
    },
  },
];
const SYSTEM = [
  {
    path: '/system',
    name: 'system',
    component: RouterView,
    meta: {
      title_locale: 'system', // 系统管理
    },
    children: [
      {
        path: '/system/account',
        name: 'system.account',
        component: RouterView,
        meta: {
          title_locale: 'system.account', // 系统账号管理
        },
        children: [
          {
            path: '/system/account/list',
            name: 'system.account.list',
            component: () => import('@/views/system/account/List.vue'),
            meta: {
              title_locale: 'system.account.list', // 系统账号列表
            },
          },
          {
            path: '/system/account/add',
            name: 'system.account.add',
            component: () => import('@/views/system/account/Add.vue'),
            meta: {
              title_locale: 'system.account.add', // 新增系统账号
            },
          },
          {
            path: '/system/account/:id',
            name: 'system.account.edit',
            component: () => import('@/views/system/account/Edit.vue'),
            meta: {
              title_locale: 'system.account.edit', // 编辑系统账号
            },
          },
        ],
      },
      {
        path: '/system/role',
        name: 'system.role',
        component: RouterView,
        meta: {
          title_locale: 'system.role', // 系统角色管理
        },
        children: [
          {
            path: '/system/role/list',
            name: 'system.role.list',
            component: () => import('@/views/system/role/List.vue'),
            meta: {
              title_locale: 'system.role.list', // 系统角色列表
            },
          },
          {
            path: '/system/role/add',
            name: 'system.role.add',
            component: () => import('@/views/system/role/Add.vue'),
            meta: {
              title_locale: 'system.role.add', // 新增系统角色
            },
          },
          {
            path: '/system/role/:id',
            name: 'system.role.edit',
            component: () => import('@/views/system/role/Edit.vue'),
            meta: {
              title_locale: 'system.role.edit', // 编辑系统角色
            },
          },
        ],
      },
      {
        path: '/system/authority',
        name: 'system.authority',
        component: RouterView,
        meta: {
          title_locale: 'system.authority', // 系统权限管理
        },
        children: [
          {
            path: '/system/authority/list',
            name: 'system.authority.list',
            component: () => import('@/views/system/authority/List.vue'),
            meta: {
              title_locale: 'system.authority.list', // 系统权限列表
            },
          },
          {
            path: '/system/authority/add',
            name: 'system.authority.add',
            component: () => import('@/views/system/authority/Add.vue'),
            meta: {
              title_locale: 'system.authority.add', // 新增系统权限
            },
          },
          {
            path: '/system/authority/:id',
            name: 'system.authority.edit',
            component: () => import('@/views/system/authority/Edit.vue'),
            meta: {
              title_locale: 'system.authority.edit', // 编辑系统权限
            },
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
    meta: {
      publicPage: false, // 是否需要路由权限校验
      title_locale: 'example', // example locale title
    },
  },
];
export const routes = [
  ...BASIC,
  {
    path: '/',
    name: 'index',
    component: () => import('@/layout/MainLayout.vue'),
    meta: {
      publicPage: false,
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/basic/Welcome.vue'),
        meta: {
          title_locale: 'basic.home',
        },
      },
      ...SYSTEM,
      ...EXAMPLE,
    ],
  },
  {
    path: '*',
    component: () => import('@/views/basic/NoMatch.vue'),
    meta: {
      publicPage: true,
      title_locale: 'basic.nomatch',
    },
  },
];
export default routes;
