import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AppLogin from "../components/AppLogin";
import AppRegister from "../components/AppRegister";
import AddGallery from "../components/AddGallery";
import { globalAuthGuard } from "../guards/authGuard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { authRequired: true },
  },
  {
    path: "/create",
    component: AddGallery,
    meta: { authRequired: true },
  },
  {
    path: "/login",
    component: AppLogin,
    meta: { guestRequired: true },
  },
  {
    path: "/register",
    component: AppRegister,
    meta: { guestRequired: true },
  },
  {
    path: "/about",
    name: "About",
    meta: { authRequired: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(globalAuthGuard);

export default router;
