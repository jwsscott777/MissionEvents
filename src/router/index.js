import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import Create from "../views/Create.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import NameList from "../views/NameList.vue";
import NameDetails from "../views/NameDetails.vue";
import Weather from "../views/Weather.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts/:id",
    name: "Details",
    component: Details,
    props: true,
  },
  {
    path: "/names/:id",
    name: "NameDetails",
    component: NameDetails,
    props: true,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    props: true,
  },
  {
    path: "/nameList",
    name: "NameList",
    component: NameList,
    props: true,
  },
  {
    path: "/weather",
    name: "Weather",
    component: Weather,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
