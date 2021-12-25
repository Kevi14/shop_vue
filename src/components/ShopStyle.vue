<template>
  <div>
    <!--
      Mobile filter dialog

      Off-canvas filters for mobile, show/hide based on off-canvas filters state.
    -->
    <div class="flex z-40 lg:hidden" role="dialog" aria-modal="true">
      <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div
        class="fixed inset-0 bg-black bg-opacity-25"
        aria-hidden="true"
        v-if="show_sort"
      ></div>

      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
      <div
        class="
          ml-auto
          max-w-xs
          bg-white
          shadow-xl
          py-4
          pb-12
          flex flex-col
          overflow-y-auto
        "
        v-if="show_sort"
      >
        <div class="px-4 flex items-center justify-between">
          <h2 class="text-lg font-medium text-gray-900">Filters</h2>
          <button
            type="button"
            class="
              -mr-2
              w-10
              h-10
              bg-white
              p-2
              rounded-md
              flex
              items-center
              justify-center
              text-gray-400
            "
          >
            <span class="sr-only">Close menu</span>
            <!-- Heroicon name: outline/x -->
            <svg
              class="h-6 w-6"
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

        <!-- Filters -->
        <form class="mt-4 border-t border-gray-200">
          <h3 class="sr-only">Categories</h3>
          <ul role="list" class="font-medium text-gray-900 px-2 py-3">
            <li>
              <a href="#" class="block px-2 py-3"> Totes </a>
            </li>

            <li>
              <a href="#" class="block px-2 py-3"> Backpacks </a>
            </li>

            <li>
              <a href="#" class="block px-2 py-3"> Travel Bags </a>
            </li>

            <li>
              <a href="#" class="block px-2 py-3"> Hip Bags </a>
            </li>

            <li>
              <a href="#" class="block px-2 py-3"> Laptop Sleeves </a>
            </li>
          </ul>

          <div class="border-t border-gray-200 px-4 py-6">
            <h3 class="-mx-2 -my-3 flow-root">
              <!-- Expand/collapse section button -->
              <button
                type="button"
                class="
                  px-2
                  py-3
                  bg-white
                  flex
                  items-center
                  justify-between
                  text-gray-400
                  hover:text-gray-500
                "
                aria-controls="filter-section-mobile-0"
                aria-expanded="false"
              >
                <span class="font-medium text-gray-900"> Color </span>
                <span class="ml-6 flex items-center">
                  <!--
                    Expand icon, show/hide based on section open state.

                    Heroicon name: solid/plus-sm
                  -->
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <!--
                    Collapse icon, show/hide based on section open state.

                    Heroicon name: solid/minus-sm
                  -->
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <!-- Filter section, show/hide based on section state. -->
            <div class="pt-6" id="filter-section-mobile-0">
              <div class="space-y-6">
                <div class="flex items-center">
                  <input
                    id="filter-mobile-color-0"
                    name="color[]"
                    value="white"
                    type="checkbox"
                    class="
                      h-4
                      w-4
                      border-gray-300
                      rounded
                      text-indigo-600
                      focus:ring-indigo-500
                    "
                  />
                  <label
                    for="filter-mobile-color-0"
                    class="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    White
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="filter-mobile-color-1"
                    name="color[]"
                    value="beige"
                    type="checkbox"
                    class="
                      h-4
                      w-4
                      border-gray-300
                      rounded
                      text-indigo-600
                      focus:ring-indigo-500
                    "
                  />
                  <label
                    for="filter-mobile-color-1"
                    class="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Beige
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="filter-mobile-color-2"
                    name="color[]"
                    value="blue"
                    type="checkbox"
                    checked
                    class="
                      h-4
                      w-4
                      border-gray-300
                      rounded
                      text-indigo-600
                      focus:ring-indigo-500
                    "
                  />
                  <label
                    for="filter-mobile-color-2"
                    class="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Blue
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="filter-mobile-color-3"
                    name="color[]"
                    value="brown"
                    type="checkbox"
                    class="
                      h-4
                      w-4
                      border-gray-300
                      rounded
                      text-indigo-600
                      focus:ring-indigo-500
                    "
                  />
                  <label
                    for="filter-mobile-color-3"
                    class="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Brown
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="filter-mobile-color-4"
                    name="color[]"
                    value="green"
                    type="checkbox"
                    class="
                      h-4
                      w-4
                      border-gray-300
                      rounded
                      text-indigo-600
                      focus:ring-indigo-500
                    "
                  />
                  <label
                    for="filter-mobile-color-4"
                    class="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Green
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="filter-mobile-color-5"
                    name="color[]"
                    value="purple"
                    type="checkbox"
                    class="
                      h-4
                      w-4
                      border-gray-300
                      rounded
                      text-indigo-600
                      focus:ring-indigo-500
                    "
                  />
                  <label
                    for="filter-mobile-color-5"
                    class="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Purple
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-200 px-4 py-6">
            <h3 class="-mx-2 -my-3 flow-root">
              <!-- Expand/collapse section button -->
              <button
                type="button"
                class="
                  px-2
                  py-3
                  bg-white
                  w-full
                  flex
                  items-center
                  justify-between
                  text-gray-400
                  hover:text-gray-500
                "
                aria-controls="filter-section-mobile-1"
                aria-expanded="false"
              >
                <span class="font-medium text-gray-900"> Category </span>
                <span class="ml-6 flex items-center">
                  <!--
                    Expand icon, show/hide based on section open state.

                    Heroicon name: solid/plus-sm
                  -->
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <!--
                    Collapse icon, show/hide based on section open state.

                    Heroicon name: solid/minus-sm
                  -->
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <!-- Filter section, show/hide based on section state. -->
            <div class="pt-6" id="filter-section-mobile-1">
              <div class="space-y-6">
                <div class="flex items-center">
                  <input
                    id="filter-mobile-category-0"
                    name="category[]"
                    value="new-arrivals"
                    type="checkbox"
                    class="
                      h-4
                      w-4
                      border-gray-300
                      rounded
                      text-indigo-600
                      focus:ring-indigo-500
                    "
                  />
                  <label
                    for="filter-mobile-category-0"
                    class="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Products
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="filter-mobile-category-1"
                    name="category[]"
                    value="sale"
                    type="checkbox"
                    class="
                      h-4
                      w-4
                      border-gray-300
                      rounded
                      text-indigo-600
                      focus:ring-indigo-500
                    "
                  />
                  <label
                    for="filter-mobile-category-1"
                    class="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Sale
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="filter-mobile-category-2"
                    name="category[]"
                    value="travel"
                    type="checkbox"
                    checked
                    class="
                      h-4
                      w-4
                      border-gray-300
                      rounded
                      text-indigo-600
                      focus:ring-indigo-500
                    "
                  />
                  <label
                    for="filter-mobile-category-2"
                    class="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Travel
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="filter-mobile-category-3"
                    name="category[]"
                    value="organization"
                    type="checkbox"
                    class="
                      h-4
                      w-4
                      border-gray-300
                      rounded
                      text-indigo-600
                      focus:ring-indigo-500
                    "
                  />
                  <label
                    for="filter-mobile-category-3"
                    class="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Organization
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="filter-mobile-category-4"
                    name="category[]"
                    value="accessories"
                    type="checkbox"
                    class="
                      h-4
                      w-4
                      border-gray-300
                      rounded
                      text-indigo-600
                      focus:ring-indigo-500
                    "
                  />
                  <label
                    for="filter-mobile-category-4"
                    class="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Accessories
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-200 px-4 py-6">
            <h3 class="-mx-2 -my-3 flow-root">
              <!-- Expand/collapse section button -->
              <button
                type="button"
                class="
                  px-2
                  py-3
                  bg-white
                  w-full
                  flex
                  items-center
                  justify-between
                  text-gray-400
                  hover:text-gray-500
                "
                aria-controls="filter-section-mobile-2"
                aria-expanded="false"
              >
                <span class="font-medium text-gray-900"> Size </span>
                <span class="ml-6 flex items-center">
                  <!--
                    Expand icon, show/hide based on section open state.

                    Heroicon name: solid/plus-sm
                  -->
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <!--
                    Collapse icon, show/hide based on section open state.

                    Heroicon name: solid/minus-sm
                  -->
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <!-- Filter section, show/hide based on section state. -->
            <div class="pt-6" id="filter-section-mobile-2">
              <div class="space-y-6">
                <div class="flex items-center">
                  <input
                    id="filter-mobile-size-0"
                    name="size[]"
                    value="2l"
                    type="checkbox"
                    class="
                      h-4
                      w-4
                      border-gray-300
                      rounded
                      text-indigo-600
                      focus:ring-indigo-500
                    "
                  />
                  <label
                    for="filter-mobile-size-0"
                    class="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    2L
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="filter-mobile-size-1"
                    name="size[]"
                    value="6l"
                    type="checkbox"
                    class="
                      h-4
                      w-4
                      border-gray-300
                      rounded
                      text-indigo-600
                      focus:ring-indigo-500
                    "
                  />
                  <label
                    for="filter-mobile-size-1"
                    class="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    6L
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="filter-mobile-size-2"
                    name="size[]"
                    value="12l"
                    type="checkbox"
                    class="
                      h-4
                      w-4
                      border-gray-300
                      rounded
                      text-indigo-600
                      focus:ring-indigo-500
                    "
                  />
                  <label
                    for="filter-mobile-size-2"
                    class="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    12L
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="filter-mobile-size-3"
                    name="size[]"
                    value="18l"
                    type="checkbox"
                    class="
                      h-4
                      w-4
                      border-gray-300
                      rounded
                      text-indigo-600
                      focus:ring-indigo-500
                    "
                  />
                  <label
                    for="filter-mobile-size-3"
                    class="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    18L
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="filter-mobile-size-4"
                    name="size[]"
                    value="20l"
                    type="checkbox"
                    class="
                      h-4
                      w-4
                      border-gray-300
                      rounded
                      text-indigo-600
                      focus:ring-indigo-500
                    "
                  />
                  <label
                    for="filter-mobile-size-4"
                    class="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    20L
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="filter-mobile-size-5"
                    name="size[]"
                    value="40l"
                    type="checkbox"
                    checked
                    class="
                      h-4
                      w-4
                      border-gray-300
                      rounded
                      text-indigo-600
                      focus:ring-indigo-500
                    "
                  />
                  <label
                    for="filter-mobile-size-5"
                    class="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    40L
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="
          relative
          z-10
          flex
          items-baseline
          justify-between
          pt-24
          pb-6
          border-b border-gray-200
        "
      >
        <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
          Products
        </h1>

        <div class="flex">
          <div class="inline-block text-left">
            <div>
              <button
                type="button"
                class="text-sm font-medium text-gray-700 hover:text-gray-900"
                id="menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                @click="toggle_sort"
              >
                Sort
                <!-- Heroicon name: solid/chevron-down -->
                <svg
                  class="
                    flex-shrink-0
                    -mr-1
                    ml-1
                    h-5
                    w-5
                    text-gray-400
                    group-hover:text-gray-500
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
            <div
              class="
                origin-top-right
                absolute
                right-0
                mt-2
                w-40
                rounded-md
                shadow-2xl
                bg-white
                ring-1 ring-black ring-opacity-5
                focus:outline-none
              "
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
              v-if="show_sort"
            >
              <div class="py-1" role="none">
                <!--
                  Active: "bg-gray-100", Not Active: ""

                  Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
                -->
                <a
                  href="#"
                  class="font-medium text-gray-900 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Most Popular
                </a>

                <a
                  href="#"
                  class="text-gray-500 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Best Rating
                </a>

                <a
                  href="#"
                  class="text-gray-500 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                >
                  Newest
                </a>

                <a
                  href="#"
                  class="text-gray-500 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                >
                  Price: Low to High
                </a>

                <a
                  href="#"
                  class="text-gray-500 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-4"
                >
                  Price: High to Low
                </a>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">View grid</span>
            <!-- Heroicon name: solid/view-grid -->
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </button>
          <button
            type="button"
            class="
              p-2
              -m-2
              ml-4
              sm:ml-6
              text-gray-400
              hover:text-gray-500
              lg:hidden
            "
            @click="toggle_sort"
          >
            <span class="sr-only">Filters</span>
            <!-- Heroicon name: solid/filter -->
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import axios from "@/axios";
// import Toast from "vue-toastification";
// import "vue-toastification/dist/index.css";
export default {
  name: "ShopStyle",
  data: function () {
    return {
      decks: [],
      cart: null,
      show_sort: false,
      //       seen: false,
      //       menu:false
    };
  },
  methods: {
    toggle_sort() {
      this.show_sort = !this.show_sort;
    },
    async products() {
      await axios.get("/decks/").then((response) => {
        // let data = JSON.parse(response.data);
        this.decks = response.data;
      });
    },
    addToCart(id) {
      this.$store
        .dispatch("addToCart", {
          id: id,
          amount: 1,
        })
        .then((response) => {
          if (response == false) {
            this.$toast.show(`Product already in cart`, {
              type: "success",
              position: "top",
              duration: 2000,
              useDefaultCss: false,
              class:
                "bg-red-500 border-red-700 py-2 px-3 shadow-md text-white text-2xl rounded-lg mt-10",
              queue: true,
            });
          } else {
            this.$toast.show(`Product added to cart`, {
              type: "success",
              position: "top",
              duration: 2000,
              useDefaultCss: false,
              class:
                "bg-green-500 border-green-700 py-2 px-3 shadow-md text-white text-2xl rounded-lg mt-10",
              queue: true,
            });
          }
        });
      this.cart = this.$store.getters.cartLength;
    },
    goToProduct(id) {
      this.$router.push({ path: `/product/${id}/` });
    },
  },
  mounted() {
    this.products();
    console.log(this.decks);
  },
};
</script>
