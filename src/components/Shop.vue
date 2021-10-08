<template>

<div class="bg-white">
  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 pt-20">
    <h2 class="sr-only">Products</h2>

    <div class="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <a  v-for="deck in decks"
        :key="deck.id" @click="goToProduct(deck.id)" class="group">
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img v-bind:src="'https://res.cloudinary.com/hayehilhw/'+deck.image"   alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75">
        </div>
        <h3 class="mt-4 text-sm text-gray-700">
          {{deck.title}}
        </h3>
        <p class="mt-1 text-lg font-medium text-gray-900">
          {{deck.price}}
        </p>
      </a>

    

      <!-- More products... -->
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
    console.log(this.decks)
  },
};
</script>