
<template>
  <div
    class="
      flex flex-col
      pt-60
      bg-gradient-to-r
      from-green-300
      via-blue-500
      to-purple-600
      w-full
      h-screen
    "
  >
    <div class="-my-2 sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Image
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Title
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Price
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Amount
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Item Total
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="product in cartdata.items" :key="product.id">
                <td class="px-6 py-4 whitespace-nowrap w-52">
                  <div class="flex" style="">
                    <img
                      class="rounded-xl"
                      :src="product.get_image"
                      alt=""
                      style=""
                    />
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-lg text-gray-900">{{ product.title }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  $ {{ product.price }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <!-- // eslint-disable-next-line -->
                  <input
                    v-model="amount[product.id]"
                    class="
                      py-2
                      px-3
                      rounded-lg
                      border-2 border-gray-300
                      mt-1
                      focus:outline-none
                      text-lg
                      focus:border-transparent
                    "
                    type="number"
                    placeholder="Price"
                    min="1"
                    @change="changeAmount(product.id)"
                  />
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-lg text-gray-900">
                    {{ product.amount * product.price }}
                  </div>
                </td>
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-right text-sm
                    font-medium
                  "
                >
                  <a href="#" class="text-indigo-600 hover:text-indigo-900"
                    >Edit</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mt-10 space-y-20 cursor-pointer">
        <div class="w-full">
          <div @click="goToBilling" class="flex-1 h-full w-96 mx-auto">
            <div class="flex bg-white shadow rounded-lg py-4 px-16">
              <p
                class="
                  m-auto
                  inset-0
                  text-xl
                  font-semibold
                  leading-7
                  text-center text-gray-800
                "
              >
                Procced to billing
              </p>
              <div class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { computed } from "vue";

export default {
  /* eslint-disable */
  name: "CheckoutPage",
  data: function () {
    return {
      amount: [],
      decks: [],
      cart: null,
      //   people,
      cartdata: computed(() => JSON.parse(this.$store.getters.getCart)),
      //       seen: false,
      //       menu:false
    };
  },

  methods: {
    goToBilling() {
      this.$router.push({ name: "billing" });
    },
    changeAmount(id) {
      this.$store.dispatch("updateAmount", { id: id, amount: this.amount[id] });
    },
    removeFromCartf(id) {
      this.$store.dispatch("removeFromCart", { id: id });
    },
  },
  created() {
    this.cartdata.items.forEach((element) => {
      this.amount[element.id] = element.amount;
    });
  },
  //   components: {

  //   },
};
</script>


