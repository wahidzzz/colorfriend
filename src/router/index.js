import Vue from "vue";
import Router from "vue-router";
import liked from "@/components/liked";
import hiw from "@/components/hiw";
import home from "@/components/home";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/liked-palettes",
      name: "liked",
      component: liked,
    },
    {
      path: "/how-it-works",
      name: "hiw",
      component: hiw,
    },
  ],
});
