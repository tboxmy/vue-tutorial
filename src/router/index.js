import { createWebHistory, createRouter } from "vue-router";
import Products from "@/components/Products.vue";
import Login from "@/views/auth/Login.vue";
import Profile from "@/components/Profile.vue";

const routes = [
  {
    path: "/",
    alias: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/profile",
    name: "Profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
