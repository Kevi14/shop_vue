import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "./assets/tailwind.css";
import administration from "./administration";
import axios from "axios";
import Toaster from "@meforma/vue-toaster";
import vueCountryRegionSelect from "vue3-country-region-select";
axios.defaults.baseURL = process.env.VUE_APP_AXIOS_BASE_URL;

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresLogin)) {
    administration
      .dispatch("checkIfLoggedIn")
      .then(function (result) {
        if (result == true) {
          next();
        } else {
          next({ name: "AdminLogin" });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  } else {
    next();
  }
});

createApp(App)
  .use(router)
  .use(administration)
  .use(Toaster)
  .use(vueCountryRegionSelect)
  .mount("#app");
