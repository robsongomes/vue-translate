import Vue from "vue";
import Router from "vue-router";
import Words from "@/views/Words";
import Show from "@/views/Show";
import New from "@/views/New";
import Edit from "@/views/Edit";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/words"
    },
    {
      path: "/words",
      name: "words",
      component: Words
    },
    {
      path: "/words/new",
      name: "new",
      component: New
    },
    {
      path: "/words/:id",
      name: "show",
      props: true,
      component: Show
    },
    {
      path: "/words/:id/edit",
      name: "edit",
      props: true,
      component: Edit
    }
  ]
});
