import { createStore } from "vuex";

import createPersistedState from "vuex-persistedstate";
import axios from "@/axios";

// Vue.use(Vuex)
const administration = createStore({
  plugins: [createPersistedState()],
  state: {
    accessToken: null,
    refreshToken: null,
    isLoading: false,
    APIData: "",
    cart: {
      items: [],
    },
  },
  mutations: {
    setIsLoading(state, status) {
      state.isLoading = status;
    },

    updateStorage(state, { access, refresh }) {
      state.accessToken = access;
      state.refreshToken = refresh;
    },
    destroyToken(state) {
      state.accessToken = null;
      state.refreshToken = null;
    },
    updateCartState(state, item) {
      state.cart.items.push(item);
    },
    removeFromCartState(state, id) {
      state.cart.items.splice(
        state.cart.items.findIndex((i) => i.id === id),

        1
      );
      // a.splice(a.findIndex(e => e.name === "tc_001"),1);
      // console.log(id)
      // console.log(state.cart.items.findIndex(i => i.id === id),1)
    },
  },
  getters: {
    loggedIn(state) {
      return state.refreshToken;
    },
    cartLength(state) {
      return state.cart.items.length;
    },
    getCart(state) {
      return JSON.stringify(state.cart);
    },
    getCartg(state) {
      return state.cart;
    },
    getCartTotal(state) {
      let total = 0;
      state.cart.items.forEach((item) => {
        total += item.price * item.amount;
      });
      return total;
    },
  },
  actions: {
    checkIfLoggedIn(context) {
      if (context.getters.loggedIn != null) {
        return context
          .dispatch("refreshToken")
          .then(() => {
            return true;
          })
          .catch(() => {
            return false;
          });
      } else {
        return false;
      }
    },
    emptyCart(context) {
      context.state.cart.items = [];
    },
    userLogout(context) {
      if (context.getters.loggedIn) {
        context.commit("destroyToken");
      }
    },
    userLogin(context, usercredentials) {
      // CHECK LATER
      return new Promise((resolve, reject) => {
        axios
          .post("/api-token/", {
            username: usercredentials.username,
            password: usercredentials.password,
          })
          .then((response) => {
            context.commit("updateStorage", {
              access: response.data.access,
              refresh: response.data.refresh,
            });
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    refreshToken(context) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api-token-refresh/", {
            // username: usercredentials.username,
            refresh: context.state.refreshToken,
            // password: usercredentials.password,
          })
          .then((response) => {
            context.commit("updateStorage", {
              access: response.data.access,
              refresh: response.data.refresh,
            });

            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    addToCart(context, item) {
      const exists = context.getters.getCartg.items.filter(
        (i) => i.id == item.id
      );
      // console.log(context.getters.getCartg.items.id)
      if (exists.length === 0) {
        axios.get(`/decks/${item.id}/`).then((response) => {
          let data = response.data;
          data["amount"] = item.amount;
          context.commit("updateCartState", data);
          // state.cart.items.push(data)
          return true;
        });
      } else {
        return false;
      }
    },
    removeFromCart(context, data) {
      // console.log(id.id)
      context.commit("removeFromCartState", data.id);
    },
    updateAmount(context, data) {
      context.getters.getCartg.items
        .filter((i) => i.id === data.id)
        .map((item) => (item.amount = data.amount));
    },
    updateCart(context, cart) {
      // let config = {
      //   headers: {
      //     Authorization: "Bearer " + context.state.accessToken,
      //   },
      // };
      // console.log(cart);
      axios.get("/decks/" + cart.key + "/").then((response) => {
        let data = response.data;

        context.commit("updateCartState", {
          key: cart.key,
          value: [data, cart.value],
        });

        // console.log(response.data)
      });
      // console.log(data.data)
    },
    deleteProduct(context, id) {
      context.dispatch("refreshToken");
      let config = {
        headers: {
          Authorization: `Bearer ${context.state.accessToken}`,
        },
      };

      axios.delete(`/decks/${id.id}/`, config);
    },

    async editProduct(context, data) {
      await context.dispatch("refreshToken");
      let config = {
        headers: {
          Authorization: `Bearer ${context.state.accessToken}`,
        },
      };

      axios.patch(`/decks/${data.id}/`, data.form, config);
    },

    async addProduct(context, data) {
      await context.dispatch("refreshToken");
      let config = {
        headers: {
          Authorization: `Bearer ${context.state.accessToken}`,
        },
      };

      axios.post(`/decks/`, data.form, config).then((response) => {
        return response.data;
      });
    },
    async addImages(context, data) {
      await context.dispatch("refreshToken");
      let config = {
        headers: {
          Authorization: `Bearer ${context.state.accessToken}`,
        },
      };

      axios.post(`/images/`, data.form, config);
    },
    async deleteImage(context, id) {
      await context.dispatch("refreshToken");
      let config = {
        headers: {
          Authorization: `Bearer ${context.state.accessToken}`,
        },
      };

      axios.delete(`/images/${id.id}/`, config);
    },
  },
});

export default administration;
