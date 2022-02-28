import VueRouter from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import NoPage from "@/pages/NoPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/404",
    name: "NotFound",
    component: NoPage,
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
