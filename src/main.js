import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "./assets/tailwind.css";
import administration from "./administration"


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
      if (!administration.getters.loggedIn) {
        next({ name: 'AdminLogin' })
      } else {
        next()
      }
    } else {
      next()
    }
  })

createApp(App).use(router).use(administration).mount("#app");
