import Home from "./components/home/Home.vue";
import Application from "./components/home/Application.vue";

export const routes = [
    {path: "", component: Home, title: "Home"},
    {path: "/application/:id", component: Application, title: "Application"},
]