import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "@/views/Home"
const routes = [
  {
    name: "HomePage",
    path: "/",
    // component : Home
    component: () => import("@/views/Home")
  },
  {
    name: "AboutPage",
    path: "/hakkimda",
    // component : Home
    component: () => import("@/views/About")
  },
  {
    name: "DetailPage",
    path: "/detay/:userID",
    // component : Home
    component: () => import("@/views/Details")
  }
];

const router = createRouter({
  routes,
  //   mode : "hash|history",
  // history: createWebHistory()
  history: createWebHashHistory()
});

export default router;
