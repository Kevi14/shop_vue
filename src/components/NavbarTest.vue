<template>
  <div>
    <div class="bg-black pt-10 pb-10">
      <!-- <img id="image_to" /> -->

      <div class="flex justify-center items-center">
        <div
          class="imaget"
          style="width: auto; height: 140px; max-height: 100%; max-width: 100%"
        ></div>
        <div></div>
      </div>
      <div
        class="
          mt-10
          grid grid-flow-row
          auto-rows-max
          flex
          items-center
          justify-center
        "
      >
        <ul class="inline">
          <li class="inline">
            <router-link href="#" class="link text-white link--metis" to="/"
              >✦ Home ✦</router-link
            >
          </li>
          <li class="inline ml-10">
            <router-link
              href="#"
              class="link text-white link--metis"
              to="/order"
              >✦ Order ✦</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
#mobile-menu a.router-link-exact-active {
  --tw-bg-opacity: 1;
  background-color: rgba(17, 24, 39, var(--tw-bg-opacity));
}
#mobile-menu a:hover.router-link-exact-active {
  --tw-bg-opacity: 1;
  background-color: rgba(17, 24, 39, var(--tw-bg-opacity));

  /* color: #42b983; */
}
#mobile-menu a:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(55, 65, 81, var(--tw-bg-opacity));

  /* color: #42b983; */
}

#bar a.router-link-exact-active {
  --tw-bg-opacity: 1;
  background-color: rgba(17, 24, 39, var(--tw-bg-opacity));
}

#bar a:hover.router-link-exact-active {
  --tw-bg-opacity: 1;
  background-color: rgba(17, 24, 39, var(--tw-bg-opacity));

  /* color: #42b983; */
}
#nvbr {
  display: inline;
}
</style>

<script type="application/javascript">
// import TailwindDropdownVue from 'tailwind-dropdown-vue'
import { computed } from "vue";
// import { mapState } from "vuex";
export default {
  // computed: mapState(["cart"]),
  name: "Navbar",
  data: function () {
    return {
      seen: false,
      menu: false,
      cartlen: computed(() => this.$store.getters.cartLength),
      cartdata: computed(() => JSON.parse(this.$store.getters.getCart)),
      cartTotal: computed(() => this.$store.getters.getCartTotal),
    };
  },

  methods: {
    hide_show() {
      this.$refs.dropdown;
    },
    goHome() {
      this.$router.push({ path: "/" });
    },
    removeFromCartf(id) {
      this.$store.dispatch("removeFromCart", { id: id });
    },
    goToCheckout() {
      if (this.cartlen != 0) {
        this.$router.push({ name: "checkout" });
      }
    },
  },
  mounted() {
    this.cartdata = JSON.parse(this.$store.getters.getCart);
  },
};
</script>
<style scoped>
.imaget {
  content: url("../assets/1_wirf_01(1).jpg");
}

@keyframes loaderAnim {
  to {
    opacity: 1;
    transform: scale3d(0.5, 0.5, 1);
  }
}

.frame {
  padding: 3rem 5vw;
  text-align: center;
  position: relative;
  z-index: 1000;
}

.frame__title {
  font-size: 1.525rem;
  margin: 0 0 1rem;
  font-weight: normal;
  cursor: default;
}

.frame__tagline {
  color: #999;
  max-width: 300px;
  margin: 1rem auto;
}

.frame__links a:not(:last-child) {
  margin-right: 2rem;
}

.link {
  cursor: pointer;
  font-size: 18px;
  color: #ffefcf;
  position: relative;
  white-space: nowrap;
}

.link::before,
.link::after {
  position: absolute;
  width: 100%;
  height: 1px;
  /* ktyu */
  background: currentColor;
  top: 100%;
  left: 0;
  pointer-events: none;
}

.link::before {
  content: "";
  /* show by default */
}

.link--metis {
  font-family: bely-display, Catamaran, serif;
  /* text-transform: lowercase; */
}

.link--metis::before {
  transform-origin: 100% 50%;
  transform: scale3d(0, 1, 1);
  transition: transform 0.3s;
}

.link--metis:hover::before {
  transform-origin: 0% 50%;
  transform: scale3d(1, 1, 1);
}
</style>
