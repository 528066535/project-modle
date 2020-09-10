const component = {
  test: () => import(/* webpackChunkName: "pages/test/vue/test" */'@Pages/test/vue/test'),
  blank: () => import(/* webpackChunkName: "resource/template/blank" */'@/resource/template/blank')
};

export default {
  component: {},

  router: [
    {
      path: 'test',
      name: '测试界面1',
      component: component.blank,
      redirect: '/dashboard/test/home',
      children: [
        {
          meta: {
          },
          name: '用户统计',
          path: 'home',
          component: component.test,
        }
      ]
    }
  ]
}