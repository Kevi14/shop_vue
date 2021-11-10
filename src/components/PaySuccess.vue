<template>
  <div v-if="product_data[0]" class="bg-gray-50">
    <div class="flex items-center"></div>
    <main
      class="max-w-2xl mx-auto pt-8 pb-24 sm:pt-16 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <!-- This is an example component -->

      <!-- This example requires Tailwind CSS v2.0+ -->
      <div v-if="banner" class="bg-indigo-600">
        <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <span class="flex p-2 rounded-lg bg-indigo-800">
                <!-- Heroicon name: outline/speakerphone -->
                <svg
                  class="h-6 w-6 text-white"
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
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </span>
              <p class="ml-3 font-medium text-white">
                Please save your Order Id which u can use to check your order
                status at any time in the order menu.
              </p>
            </div>
            <div
              class="
                order-3
                mt-2
                flex-shrink-0
                w-full
                sm:order-2 sm:mt-0 sm:w-auto
              "
            ></div>
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                @click="closeBanner"
                type="button"
                class="
                  -mr-1
                  flex
                  p-2
                  rounded-md
                  hover:bg-indigo-500
                  focus:outline-none focus:ring-2 focus:ring-white
                  sm:-mr-2
                "
              >
                <span class="sr-only">Dismiss</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6 text-white"
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
          </div>
        </div>
      </div>

      <div
        class="
          mt-10
          px-4
          space-y-2
          sm:px-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0
        "
      >
        <div class="flex sm:items-baseline sm:space-x-4">
          <h1
            class="
              text-2xl
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-3xl
            "
          >
            Order # {{ product_data[0].order.order_id }}
          </h1>
        </div>
        <p class="text-sm text-gray-600">
          Order placed
          <time datetime="2021-03-22" class="font-medium text-gray-900">{{
            Date(product_data[0].order.created_at).substring(0, 21)
          }}</time>
        </p>
      </div>
      <div
        class="
          bg-white
          border-t border-b border-gray-200
          shadow-sm
          sm:border sm:rounded-lg
        "
      >
        <div class="py-6 px-4 sm:px-6">
          <div class="sm:flex lg:col-span-7 flex items-center justify-center">
            <dl class="">
              <div>
                <dt class="font-large text-gray-900">Shipping details:</dt>
                <dd class="mt-3 text-gray-500 space-y-3">
                  {{ email }}
                  <!-- <p>{{ order_data[0].contact_email }}</p> -->
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <!-- Products -->
      <section
        aria-labelledby="products-heading"
        class="mt-6"
        v-for="product in product_data"
        :key="product.id"
      >
        <h2 id="products-heading" class="sr-only">Products purchased</h2>

        <div class="space-y-8">
          <div
            class="
              bg-white
              border-t border-b border-gray-200
              shadow-sm
              sm:border sm:rounded-lg
            "
          >
            <div
              class="
                py-6
                px-4
                sm:px-6
                lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8
              "
            >
              <div class="sm:flex lg:col-span-7">
                <div
                  class="
                    flex-shrink-0
                    w-full
                    aspect-w-1 aspect-h-1
                    rounded-lg
                    overflow-hidden
                    sm:aspect-none sm:w-40 sm:h-40
                  "
                >
                  <img
                    :src="
                      'https://res.cloudinary.com/hayehilhw/' +
                      product.product.image
                    "
                    alt="Insulated bottle with white base and black snap lid."
                    class="
                      w-full
                      h-full
                      object-center object-cover
                      sm:w-full sm:h-full
                    "
                  />
                </div>

                <div class="mt-6 sm:mt-0 sm:ml-6">
                  <h3 class="text-base font-medium text-gray-900">
                    <a href="#">{{ product.product.title }}</a>
                  </h3>
                  <p class="mt-2 text-sm font-medium text-gray-900">
                    ${{ product.product.price }}
                  </p>
                  <p class="mt-3 text-sm text-gray-500">
                    {{ product.product.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- More products... -->
        </div>
      </section>
      <div class="border-t border-gray-200 py-6 px-4 sm:px-6 lg:p-8">
        <h4 class="sr-only">Status</h4>
        <!-- <p class="text-sm font-medium text-gray-900">Preparing to ship on <time datetime="2021-03-24">March 24, 2021</time></p> -->
        <div class="mt-6" aria-hidden="true">
          <div class="bg-gray-200 rounded-full overflow-hidden">
            <div
              class="h-2 bg-indigo-600 rounded-full"
              :style="`width: calc((${order_status_value} * 2 + 1) / 8 * 100%)`"
            ></div>
          </div>
          <div class="grid grid-cols-4 text-sm font-medium text-gray-600 mt-6">
            <div class="text-indigo-600">Order placed</div>
            <div class="text-center text-indigo-600">Processing</div>
            <div class="text-center">Shipped</div>
            <div class="text-right">Delivered</div>
          </div>
        </div>
      </div>

      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="bg-indigo-700">
        <div
          class="
            max-w-2xl
            mx-auto
            text-center
            py-16
            px-4
            sm:py-20 sm:px-6
            lg:px-8
          "
        >
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            <span class="block">Your tracking number :</span>
            <!-- <span class="block">Start using Workflow today.</span> -->
          </h2>
          <p
            v-if="!product_data[0].order.tracking_number"
            class="mt-4 text-lg leading-6 text-white"
          >
            Your tracking number has not been added yet. As soon as it does you
            will be able to view it here.
          </p>

          <div
            v-if="product_data[0].order.tracking_number"
            class="mt-4 text-lg leading-6 text-gray-50"
          >
            <h2 class="text-3xl">
              {{ product_data[0].order.tracking_number }}
            </h2>

            <p class="mt-3">
              We suggest using parcelsapp for checking information upon your
              orders shipping details.
            </p>

            <div class="m-3">
              <button
                @click="goToParcel"
                class="
                  bg-white
                  text-gray-800
                  font-bold
                  rounded
                  border-b-2 border-green-500
                  hover:border-green-600 hover:bg-green-500 hover:text-white
                  shadow-md
                  py-2
                  px-6
                  inline-flex
                  items-center
                  mt-2
                "
              >
                <span class="mr-2">Go to parcelsapp</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentcolor"
                    d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Billing -->
    </main>
  </div>
</template>

<script>
import axios from "@/axios";
export default {
  name: "PaySuccess",
  data: function () {
    return {
      product_data: [],
      email: null,
      order_id: null,
      banner: true,
      order_status_value: null,
    };
  },

  methods: {
    setOrderStatusNumber(status_to_check) {
      if (status_to_check === "Processing") {
        this.order_status_value = 1;
      }
      if (status_to_check === "Shipped") {
        this.order_status_value = 2;
      }
      if (status_to_check === "Delivered") {
        this.order_status_value = 4;
      }
    },
    closeBanner() {
      this.banner = false;
    },
    // goToParcel() {
    //   window.open(
    //     "https://parcelsapp.com/en/tracking/" +
    //       this.order_data[0].tracking_number
    //   );
    // },
    async displayOrderDetails() {
      await axios
        .get(`/items_ordered/?order_id=${this.$route.query.token}`)
        .then((response) => {
          if (response.data.length !== 0) {
            // console.log(response.data[0].order_id);
            this.product_data = response.data;
          } else {
            // this.exists = false;
            // this.not_found = true;
          }
        });
      this.setOrderStatusNumber(this.product_data[0].order.status);
      let email = this.product_data[0].order.contact_email.split("@");
      this.email = email[0].slice(0, 3) + "*".repeat(8) + email[1];
    },
  },
  // components: {
  //   Shop,
  // },
  mounted() {
    //     this.products();
    // console.log(this.$route.query.token)
    axios
      .post("/capture_payment/", {
        id: this.$route.query.token,
      })
      .then(() => {
        //   console.log(response.data.paypal_link)
        this.order_id = this.$route.query.token;
        // console.log(response);
      });

    axios
      .post("/register_order/", {
        id: this.$route.query.token,
      })
      .then(() => {
        this.displayOrderDetails();
      });
    this.$store.dispatch("emptyCart");
    // this.$route.query.token
    //   },
  },

  updated() {
    this.$emit("toggleLoading");
  },
};
</script>
