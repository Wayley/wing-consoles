const menus = {
  '/xxx': [
    {
      path: '/xxx/proxy',
      title: 'Proxy',
    },
  ],
  '/system': [
    {
      path: '/system/account',
      title: 'Account',
      children: [
        {
          path: '/system/account/list',
          title: ' Account List',
        },
      ],
    },
    {
      path: '/system/role',
      title: 'Role',
      children: [
        {
          path: '/system/role/list',
          title: ' Role List',
        },
      ],
    },
  ],
};
export default menus;
