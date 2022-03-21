import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "map",
    component: () => import("@/views/MapView.vue"),
  },
  {
    path: "/applications",
    name: "applications",
    component: () => import("@/views/ApplicationsView.vue"),
  },
  {
    path: "/price",
    name: "price",
    component: () => import("@/views/PriceView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
