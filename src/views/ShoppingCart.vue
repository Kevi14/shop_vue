<template>
  <div class="flex justify-center mt-">
    <div
      class="
        mt-20
        flex flex-col
        w-full
        p-8
        text-gray-800
        bg-white
        shadow-lg
        pin-r pin-y
        md:w-4/5
        lg:w-4/5
      "
    >
      <div class="flex-1">
        <table class="w-full text-sm lg:text-base" cellspacing="0">
          <thead>
            <tr class="h-12 uppercase">
              <th class="hidden md:table-cell"></th>
              <th class="text-left">Product</th>
              <th class="lg:text-right text-left pl-5 lg:pl-0">
                <span class="lg:hidden" title="Quantity">Qty</span>
                <span class="hidden lg:inline">Quantity</span>
              </th>
              <th class="hidden text-right md:table-cell">Unit price</th>
              <th class="text-right">Total price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in cartdata.items" :key="product.id">
              <td class="hidden pb-4 md:table-cell">
                <div class="flex items-center justify-center">
                  <a>
                    <img
                      :src="
                        'https://res.cloudinary.com/hayehilhw/' + product.image
                      "
                      class="w-20 rounded"
                      alt="Thumbnail"
                    />
                  </a>
                </div>
              </td>
              <td>
                <p class="mb-2 md:ml-4 mt-4">{{ product.title }}</p>

                <a>
                  <img
                    :src="
                      'https://res.cloudinary.com/hayehilhw/' + product.image
                    "
                    class="w-20 rounded md:hidden"
                    alt="Thumbnail"
                  />
                </a>
              </td>
              <td class="justify-center md:justify-end md:flex md:mt-4">
                <div class="w-20 h-10 flex items-center">
                  <div class="relative flex flex-row w-full h-8 mt-16">
                    <input
                      v-model="amount[product.id]"
                      type="number"
                      class="
                        w-full
                        font-semibold
                        text-center text-gray-700
                        bg-gray-200
                        outline-none
                        focus:outline-none
                        hover:text-black
                        focus:text-black
                      "
                      min="1"
                      @change="changeAmount(product.id)"
                    />
                  </div>
                </div>
              </td>
              <td class="hidden text-right md:table-cell">
                <span class="text-sm lg:text-base font-medium">
                  {{ product.price }}$
                </span>
              </td>
              <td class="text-right">
                <span class="text-lg lg:text-base font-medium">
                  {{ product.price * product.amount }}$
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <hr class="pb-6 mt-6" />
        <div class="my-4 mt-6 -mx-2 lg:flex">
          <div class="lg:px-2 lg:w-1/2">
            <div class="p-4">
              <div class="justify-center md:flex">
                <form action="" method="POST"></form>
              </div>
            </div>
            <div class="p-4 mt-6 bg-gray-100 rounded-full">
              <h1 class="ml-2 font-bold uppercase">Instruction for seller</h1>
            </div>
            <div class="p-4">
              <p class="mb-4 italic">
                If you have some information for the seller you can leave them
                in the box below
              </p>
              <textarea class="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
            </div>
          </div>
          <div class="lg:px-2 lg:w-1/2">
            <div class="p-4 bg-gray-100 rounded-full">
              <h1 class="ml-2 font-bold uppercase">Order Details</h1>
            </div>
            <div class="p-4">
              <p class="mb-6 italic">
                Shipping and additionnal costs are calculated based on values
                you have entered
              </p>
              <div class="flex justify-between border-b">
                <div
                  class="
                    lg:px-4 lg:py-2
                    m-2
                    text-lg
                    lg:text-xl
                    font-bold
                    text-center text-gray-800
                  "
                >
                  Subtotal
                </div>
                <div
                  class="
                    lg:px-4 lg:py-2
                    m-2
                    lg:text-lg
                    font-bold
                    text-center text-gray-900
                  "
                >
                  148,827.53€
                </div>
              </div>

              <div class="flex justify-between pt-4 border-b">
                <div
                  class="
                    lg:px-4 lg:py-2
                    m-2
                    text-lg
                    lg:text-xl
                    font-bold
                    text-center text-gray-800
                  "
                >
                  New Subtotal
                </div>
                <div
                  class="
                    lg:px-4 lg:py-2
                    m-2
                    lg:text-lg
                    font-bold
                    text-center text-gray-900
                  "
                >
                  14,882.75€
                </div>
              </div>
              <div class="flex justify-between pt-4 border-b">
                <div
                  class="
                    lg:px-4 lg:py-2
                    m-2
                    text-lg
                    lg:text-xl
                    font-bold
                    text-center text-gray-800
                  "
                >
                  Tax
                </div>
                <div
                  class="
                    lg:px-4 lg:py-2
                    m-2
                    lg:text-lg
                    font-bold
                    text-center text-gray-900
                  "
                >
                  2,976.55€
                </div>
              </div>
              <div class="flex justify-between pt-4 border-b">
                <div
                  class="
                    lg:px-4 lg:py-2
                    m-2
                    text-lg
                    lg:text-xl
                    font-bold
                    text-center text-gray-800
                  "
                >
                  Total
                </div>
                <div
                  class="
                    lg:px-4 lg:py-2
                    m-2
                    lg:text-lg
                    font-bold
                    text-center text-gray-900
                  "
                >
                  {{ total }}$
                </div>
              </div>
              <a @click="goToBilling">
                <button
                  class="
                    flex
                    justify-center
                    w-full
                    px-10
                    py-3
                    mt-6
                    font-medium
                    text-white
                    uppercase
                    bg-gray-800
                    rounded-full
                    shadow
                    item-center
                    hover:bg-gray-700
                    focus:shadow-outline focus:outline-none
                  "
                >
                  <svg
                    aria-hidden="true"
                    data-prefix="far"
                    data-icon="credit-card"
                    class="w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                    />
                  </svg>
                  <span class="ml-2 mt-5px">Procceed to checkout</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "ShoppingCart",
  // components: {

  // },
  data: function () {
    return {
      total: computed(() => this.$store.getters.getCartTotal),
      amount: [],
      cartdata: computed(() => JSON.parse(this.$store.getters.getCart)),
      //       //       menu:false
    };
  },
  methods: {
    goToBilling() {
      this.$router.push({ name: "billing" });
    },
    changeAmount(id) {
      this.$store.dispatch("updateAmount", { id: id, amount: this.amount[id] });
    },
  },
  created() {
    this.cartdata.items.forEach((element) => {
      this.amount[element.id] = element.amount;
    });
    // this.calcSum();
  },

  //   mounted() {

  //   },
};
</script>
