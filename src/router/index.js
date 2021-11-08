import { createWebHistory, createRouter } from "vue-router";
import Products from "@/components/Products.vue";
import Login from "@/views/auth/Login.vue";

const routes = [
  {
    path: "/",
    alias: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
