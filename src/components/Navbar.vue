<template>
  <nav class="bg-gray-800 fixed w-full" style="z-index: 3">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            v-on:click="menu = !menu"
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        >
          <div
            @click="goHome"
            class="flex-shrink-0 flex items-center cursor-pointer"
          >
            <img
              class="block lg:hidden h-12 w-auto"
              src="../assets/school.svg"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-12 w-auto"
              src="../assets/school.svg"
              alt="Workflow"
            />
            <p class="h-6 w-auto text-white">School of Magic</p>
          </div>

          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4" id="bar">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <!-- <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a> -->
              <router-link
                class="
                  text-gray-300
                  hover:bg-gray-700 hover:text-white
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                "
                to="/"
                >Home</router-link
              >
              <router-link
                class="
                  text-gray-300
                  hover:bg-gray-700 hover:text-white
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                "
                to="/about"
                >About</router-link
              >
            </div>
          </div>
        </div>

        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
          "
        >
          <div style="display: inline"></div>
          <button
            v-on:click="seen = !seen"
            type="button"
            class="
              bg-gray-800
              p-1
              rounded-full
              text-gray-400
              hover:text-white
              focus:outline-none focus:ring-offset-gray-800 focus:ring-white
            "
          ></button>

          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <div>
              <button
                v-on:click="seen = !seen"
                type="button"
                class="
                  bg-gray-800
                  p-1
                  rounded-full
                  text-gray-400
                  hover:text-white
                  focus:outline-none focus:ring-offset-gray-800 focus:ring-white
                "
              >
                <span class="sr-only">View notifications</span>
                <!-- Heroicon name: outline/bell -->
                <div
                  class="flex flex-row cursor-pointer truncate p-2 px-4 rounded"
                >
                  <div></div>
                  <div class="flex flex-row-reverse ml-2 w-full">
                    <div class="relative">
                      <div
                        class="
                          absolute
                          text-xs
                          rounded-full
                          -mt-1
                          -mr-2
                          px-1
                          font-bold
                          top-0
                          right-0
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
                  </div>
                </div>
              </button>
            </div>

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
                    <img v-bind:src=" 'https://res.cloudinary.com/hayehilhw/' + data.image" alt="img product" />
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
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="menu" class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <!-- <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a> -->
        <router-link
          class="
            text-gray-300
            hover:bg-gray-700 hover:text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
          "
          aria-current="page"
          to="/"
          >Home</router-link
        >
        <!-- <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a> -->
        <router-link
          class="
            text-gray-300
            hover:text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
          "
          aria-current="page"
          to="/about"
          >About</router-link
        >

        <!-- <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a> -->
      </div>
    </div>
  </nav>
  <router-view />
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

<script>
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
