import Home from "./components/home/Home.vue";
import Application from "./components/home/Application.vue";
import ApplicationNew from "./components/home/ApplicationNew.vue";

export const routes = [
    {path: "", component: Home, title: "Home"},
    {path: "/application-new", component: ApplicationNew, title: "Application"},
    {path: "/application/:id", component: Application, title: "Application"},
]