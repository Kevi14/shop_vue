import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "./assets/tailwind.css";
import administration from "./administration";
import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_AXIOS_BASE_URL;

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresLogin)) {
    if (!administration.getters.loggedIn) {
      next({ name: "AdminLogin" });
    } else {
      next();
    }
  } else {
    next();
  }
});

createApp(App).use(router).use(administration).mount("#app");
