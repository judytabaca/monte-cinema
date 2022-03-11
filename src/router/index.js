import VueRouter from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AllMovies from "@/pages/AllMoviesPage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import MovieDetailsPage from "@/pages/MovieDetailsPage.vue";
import ScreeningsPage from "@/pages/ScreeningsPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import NoPage from "@/pages/NoPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/movies",
    name: "AllMovies",
    component: AllMovies,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/screenings",
    name: "ScreeningsPage",
    component: ScreeningsPage,
  },
  {
    path: "/movie/:movieId",
    name: "MovieDetailsPage",
    component: MovieDetailsPage,
    props: true,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
    props: true,
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
