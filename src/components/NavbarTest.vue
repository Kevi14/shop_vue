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
          <li class="inline ml-10">
            <router-link
              href="#"
              class="link text-white link--metis"
              to="/checkout"
              >✦ Cart ✦</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <router-view />
    <div class="float">
      <button
        v-on:click="seen = !seen"
        type="button"
        class="
          p-1
          rounded-full
          hover:text-black
          focus:outline-none focus:ring-offset-gray-800 focus:ring-white
        "
      >
        <div class="relative my-float pr-10" style="">
          <div
            class="
              absolute
              text-xs
              rounded-full
              -mt-4
              ml-2
              px-1
              font-bold
              bg-red-700
              text-white
            "
          >
            {{ cartlen }}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-shopping-cart w-6 h-6 mt-2"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path
              d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
            ></path>
          </svg>
        </div>
      </button>
      <div
        v-if="seen"
        class="
          origin-top-right
          absolute
          right-0
          mt-2
          rounded-md
          shadow-lg
          py-1
          bg-white
          ring-1 ring-black ring-opacity-5
          focus:outline-none
        "
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabindex="-1"
      >
        <div class="shadow-xl w-64">
          <div
            class="
              p-2
              flex
              bg-white
              hover:bg-gray-100
              cursor-pointer
              border-b border-gray-100
            "
            style=""
            v-for="data in cartdata.items"
            :key="data.id"
          >
            <div class="p-2 w-12">
              <img
                v-bind:src="
                  'https://res.cloudinary.com/hayehilhw/' + data.image
                "
                alt="img product"
              />
            </div>
            <div class="flex-auto text-sm w-32">
              <div class="font-bold">{{ data.title }}</div>
              <div class="truncate">{{ data.description }}</div>
              <div class="text-gray-400">Qt: {{ data.amount }}</div>
            </div>
            <div class="flex flex-col w-18 font-medium items-end">
              <div
                class="
                  w-4
                  h-4
                  mb-6
                  hover:bg-red-200
                  rounded-full
                  cursor-pointer
                  text-red-700
                "
              >
                <svg
                  @click="removeFromCartf(data.id)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-trash-2"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path
                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                  ></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </div>
              ${{ data.amount * data.price }}
            </div>
          </div>

          <div class="p-4 justify-center flex">
            <button
              @click="goToCheckout"
              class="
                text-base
                undefined
                hover:scale-110
                focus:outline-none
                flex
                justify-center
                px-4
                py-2
                rounded
                font-bold
                cursor-pointer
                hover:bg-teal-700 hover:text-teal-100
                bg-teal-100
                text-teal-700
                border
                duration-200
                ease-in-out
                border-teal-600
                transition
              "
            >
              Checkout ${{ cartTotal }}
            </button>
          </div>
        </div>
        <!-- Active: "bg-gray-100", Not Active: "" -->

        <!-- <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0"
                >Your Profile</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1"
                >Settings</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2"
                >Sign out</a
              > -->
      </div>
    </div>
  </div>
</template>

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

.float {
  position: fixed;
  width: 60px;
  height: 60px;
  top: 40px;
  right: 40px;
  background-color: #0c9;
  border-radius: 50px;
  box-shadow: 2px 2px 3px #999;
}

.my-float {
  margin-top: 22px;
  margin-left: 12px;
  padding-right: 20px;
}
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
