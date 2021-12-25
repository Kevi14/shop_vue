<template>
  <div class="bg-gray-50">
    <div class="flex items-center">
      <div
        class="
          pt-8
          mx-auto
          text-gray-600
          max-w-2xl
          mx-auto
          pt-8
          pb-24
          sm:pt-16 sm:px-6
          lg:max-w-7xl lg:px-8
        "
      >
        <input
          v-model="search"
          class="
            mt-20
            border-2 border-gray-300
            bg-white
            h-10
            px-5
            pr-16
            rounded-lg
            text-sm
            focus:outline-none
          "
          type="search"
          name="search"
          placeholder="Search"
          @keyup.enter="searchForProduct"
        />
        <button @click="searchForProduct" type="submit" class="mt-5 ml-8">
          <svg
            class="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style="enable-background: new 0 0 56.966 56.966"
            xml:space="preserve"
            width="512px"
            height="512px"
          >
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div>
      <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
        <div
          class="
            bg-white
            lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg
          "
        >
          <div class="lg:w-1/2">
            <div
              id="image_box"
              class="h-64 bg-cover lg:rounded-lg lg:h-full"
            ></div>
          </div>
          <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
            <h2 class="text-3xl text-gray-800 font-bold">
              Use the above search bar to search for your awsome package.
            </h2>
            <p class="mt-4 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </p>
          </div>
        </div>
      </div>
    </div>

    <main
      v-if="exists != false"
      class="max-w-2xl mx-auto pt-8 pb-24 sm:pt-16 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <!-- This is an example component -->

      <div
        class="
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
          <time datetime="2021-03-22" class="font-medium text-gray-900"
            >March 22, 2021</time
          >
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
              style="width: calc((0 * 2 + 1) / 8 * 100%)"
            ></div>
          </div>
          <div
            class="
              hidden
              sm:grid
              grid-cols-4
              text-sm
              font-medium
              text-gray-600
              mt-6
            "
          >
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
/* eslint-disable */
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import { computed }  from 'vue';

export default {
  /* eslint-disable */
  name: "CheckoutPage",
  data: function () {
    return {
      search: null,
      exists: false,
      not_found: false,
      product_data: [],
      email: null

      //   people,
      // cartdata : computed(()=>JSON.parse(this.$store.getters.getCart)),
      //       seen: false,
      //       menu:false
    };
  },

  methods: {
    goToParcel() {
      window.open(
        "https://parcelsapp.com/en/tracking/" +
          this.order_data[0].tracking_number
      );
    },
    async searchForProduct() {
      await axios
        .get(`/items_ordered/?order_id=${this.search.replace(/\s+/g, "")}`)
        .then((response) => {
          if (response.data.length !== 0) {
            this.exists = true;
            // console.log(response.data[0].order_id);
            this.product_data = response.data;
          } else {
            this.exists = false;
            this.not_found = true;
          }
        });
      let email = this.product_data[0].order.contact_email.split("@");
      this.email = email[0].slice(0, 3) + "*".repeat(8) + email[1];
    }
  }
};
</script>

<style scoped>
#image_box {
  background-image: url("../assets/1_wirf_01(1).jpg");
}
</style>
