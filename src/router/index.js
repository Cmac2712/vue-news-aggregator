import { createRouter, createWebHistory } from "vue-router";
import NewsList from "@/views/NewsList.vue";
import NewsArticle from "@/views/NewsArticle.vue";

const routes = [
  {
    path: "/",
    name: "NewsList",
    component: NewsList
  },
  {
    path: "/news/:id",
    name: "NewsArticle",
    props: true,
    component: NewsArticle
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

