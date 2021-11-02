export const menus = [
  {
    id: 1,
    path: '/dashboard',
    title: 'Dashboard',
    children: [
      { id: 11, path: '/dashboard/overview', title: 'Dashboard Overview' },
      {
        id: 12,
        path: '/dashboard/user-daily-increase-data',
        title: 'User Daily Increase Data',
      },
      {
        id: 13,
        path: '/dashboard/active-user-data',
        title: 'Active User Data',
      },
    ],
  },
  {
    id: 2,
    path: '/system',
    title: 'System Management',
    children: [
      {
        id: 21,
        path: '/system/account',
        title: 'Acount Management',
        children: [
          {
            id: 211,
            path: '/system/account/add',
            title: 'Add Acount',
          },
          {
            id: 212,
            path: '/system/account/list',
            title: 'Acount List',
            children: [
              {
                id: 2121,
                path: '/system/account/list/a',
                title: 'List A',
              },
              {
                id: 2122,
                path: '/system/account/list/b',
                title: 'List B',
              },
            ],
          },
        ],
      },
      {
        id: 22,
        path: '/system/role',
        title: 'Role Management',
        children: [
          {
            id: 221,
            path: '/system/role/add',
            title: 'Add Role',
          },
          {
            id: 222,
            path: '/system/role/list',
            title: 'Role List',
          },
        ],
      },
      {
        id: 23,
        path: '/system/authority',
        title: 'Authority Management',
        children: [
          {
            id: 231,
            path: '/system/authority/add',
            title: 'Add Authority',
          },
          {
            id: 232,
            path: '/system/authority/list',
            title: 'Authority List',
          },
        ],
      },
    ],
  },
];

export default menus;
