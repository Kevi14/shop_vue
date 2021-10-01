<template>
  <!-- Create By Joker Banny -->
  <div class="min-h-screen bg-gray-50 flex justify-center items-center py-20">
    <div
      class="
        md:px-4 md:grid md:grid-cols-2
        lg:grid-cols-3
        gap-12
        space-y-4
        md:space-y-0
      "
    >
      <div
        class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg"
        v-for="deck in decks"
        :key="deck.id"
      >
        <h3 class="mb-3 text-xl font-bold text-black">
          {{ deck.title }}
          <!-- {deck.title} -->
        </h3>
        <div>
          <img
            class="w-full h-60 rounded-xl"
            v-bind:src="deck.get_image"
            alt="Colors"
          />
        </div>
        <h1
          @click="goToProduct(deck.id)"
          class="mt-4 text-gray-800 text-3xl font-bold cursor-pointer"
          style="word-wrap: break-word"
        >
          {{ deck.description }}
        </h1>
        <div class="my-4">
          <div class="flex space-x-1 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-indigo-600 mb-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <p>1:34:23 Minutes</p>
          </div>
          <div class="flex space-x-1 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-indigo-600 mb-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
            <p>3 Parts</p>
          </div>
          <div class="flex space-x-1 items-center">
            <!-- <span> -->
            <img
              src="https://www.svgrepo.com/show/5287/clover-cards.svg"
              class="h-6 w-6 mb-1.5 text-indigo-600"
            />
            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> -->
            <!-- <img src = 'https://www.svgrepo.com/show/5287/clover-cards.svg'> -->
            <!-- <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> -->
            <!-- </svg> -->

            <!-- </span> -->
            <p>64</p>
          </div>
          <button
            class="
              mt-4
              text-xl
              w-full
              text-white
              bg-indigo-600
              py-1.5
              rounded-xl
              shadow-lg
            "
            @click="addToCart(deck.id)"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
// import Toast from "vue-toastification";
// import "vue-toastification/dist/index.css";
export default {
  name: "Shop",

  data: function () {
    return {
      decks: [],
      cart: null,
      //       seen: false,
      //       menu:false
    };
  },
  methods: {
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
          console.log(response);
          if (response == false) {
            this.$toast.show(`Product already in cart`, {
              type: "success",
              position: "top",
              duration: 4000,
              useDefaultCss: false,
              class:
                "bg-red-500 border-red-700 py-2 px-3 shadow-md text-white text-2xl rounded-lg mt-10",
            });
          } else {
            this.$toast.show(`Product added to cart`, {
              type: "success",
              position: "top",
              duration: 4000,
              useDefaultCss: false,
              class:
                "bg-green-500 border-green-700 py-2 px-3 shadow-md text-white text-2xl rounded-lg mt-10",
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
  },
};
</script>
<style scoped>
#c-toast-container {
  background-color: blue;
}
@keyframes ping {
  75%,
  100% {
    transform: scale();
    opacity: 0;
  }
}
</style>
