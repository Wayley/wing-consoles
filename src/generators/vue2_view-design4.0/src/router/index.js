import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import ViewUI from 'view-design';

Vue.use(VueRouter);
export const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  next();
});
router.afterEach(() => {
  ViewUI.LoadingBar.finish();
  window.scrollTo(0, 0);
});
export default router;
