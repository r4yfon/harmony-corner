import { createRouter, createWebHistory } from "vue-router";
// import App from "../App.vue";
import AllModules from "../views/AllModules.vue";
import ChallengeView from "../views/Challenge.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: AllModules,
      meta: {
        showNavBar: true,
      },
    },
    {
      path: "/challenge/:class/:id",
      name: "challenge",
      component: ChallengeView,
      meta: {
        showNavBar: false,
      },
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
