import { defineConfig } from '@umijs/max';

// @ts-ignore
export default defineConfig({
  antd: {
    dark: true,
  },
  access: {},
  dva: {},
  model: {},
  initialState: {},
  request: {
    dataField: 'results',
  },
  layout: {
    title: 'SOFIHUB',
  },
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },

    {
      name: 'Login',
      path: '/login',
      component: './Login',
      layout: false,
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: './Dashboard',
      layout: false,
    },
  ],
  npmClient: 'yarn',
  // base: '/fusion/',
  // publicPath: '/fusion/',
});
