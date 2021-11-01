<template>
  <div class="bg-gray-50">
    <div class="flex items-center"></div>
    <main
      v-if="exists != false"
      class="max-w-2xl mx-auto pt-8 pb-24 sm:pt-16 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <!-- This is an example component -->

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
            Order # {{ order_data[0].order_id }}
          </h1>
        </div>
        <p class="text-sm text-gray-600">
          Order placed
          <time datetime="2021-03-22" class="font-medium text-gray-900">{{
            Date(order_data[0].created_at).substring(0, 21)
          }}</time>
        </p>
      </div>
      <div class="flex items-center justify-center">
        <section aria-labelledby="products-heading" class="mt-6 flex">
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
              <div class="py-6 px-4 sm:px-6">
                <div class="sm:flex lg:col-span-7">
                  <dl class="grid grid-cols-2 gap-x-6 text-sm">
                    <div>
                      <dt class="font-large text-gray-900">Delivery address</dt>
                      <dd class="mt-3 text-gray-500">
                        <span class="block">Floyd Miles</span>
                        <span class="block">7363 Cynthia Pass</span>
                        <span class="block">Toronto, ON N3Y 4H8</span>
                        <span class="block">
                          <p class="inline text-black">Test :</p>
                          {{ order_data[0] }}</span
                        >
                        <span class="block">
                          <p class="inline text-black">State :</p>
                          {{ order_data[0].state }}</span
                        >
                        <span class="block">
                          <p class="inline text-black">City :</p>
                          {{ order_data[0].city }}</span
                        >
                        <span class="block">
                          <p class="inline text-black">Address line 1 :</p>
                          {{ order_data[0].adress_line }}</span
                        >
                        <span class="block">
                          <p class="inline text-black">Zip Code :</p>
                          {{ order_data[0].zip_code }}</span
                        >
                      </dd>
                    </div>
                    <div>
                      <dt class="font-large text-gray-900">Shipping updates</dt>
                      <dd class="mt-3 text-gray-500 space-y-3">
                        <p>{{ order_data[0].contact_email }}</p>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <!-- More products... -->
          </div>
        </section>
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
                  <h3 class="text-base font-medium text-gray-900 mt-2">
                    <a href="#"> Amount : {{ product.amount }}</a>
                  </h3>
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
      <!-- Tracking number div -->
      <div class="flex justify-center items-center">
        <button
          @click="toggleTrackingEdit"
          class="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
            mb-10
          "
        >
          Add a tracking number
        </button>
      </div>
      <div class="flex items-center justify-center mb-4" v-if="tracking_edit">
        <input
          v-model="new_tracking_number"
          class="
            h-10
            pl-3
            pr-8
            text-base
            placeholder-gray-600
            border
            rounded-lg
            focus:shadow-outline
          "
          type="text"
          placeholder="Tracking Number"
        />

        <div class="m-3">
          <button
            @click="changeTrackingNumber"
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
            "
          >
            <span class="mr-2">Change</span>
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
      <!-- Status div -->
      <div class="flex justify-center items-center">
        <button
        @click="showStatusEdit"
          class="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
            mb-4
          "
        >
          Change status
        </button>
      </div>
         <div class="flex items-center justify-center mb-4 " v-if="status_edit">
        <select
          v-model="new_tracking_number"
          class="
            h-10
            pl-3
            pr-8
            text-base
            placeholder-gray-600
            border
            rounded-lg
            focus:shadow-outline
          "
          placeholder="Status"
        >
          <option value="processing" selected="selected">Processing</option>
  <option value="shipped">Shipped</option>
  <option value="delivered">Delivered</option>

        </select>
        <div class="m-3">
          <button
            @click="changeStatus"
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
            "
          >
            <span class="mr-2">Change</span>
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
          <p v-if="!order_data[0].tracking_number" class="mt-4 text-lg leading-6 text-white">
            Your tracking number has not been added yet. As soon as it does you
            will be able to view it here.
          </p>
          
           <div v-if="order_data[0].tracking_number" class="mt-4 text-lg leading-6 text-gray-50">
            <h2 class="text-3xl">{{order_data[0].tracking_number}}</h2>
          

            
           <p class="mt-3"> We suggest using parcelsapp for checking information upon your orders shipping details.</p>



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
      loading: false,
      order_data: null,
      order_status_value: null,
      tracking_edit: false,
      new_tracking_number: null,
      status_edit:false,
      //   people,
      // cartdata : computed(()=>JSON.parse(this.$store.getters.getCart)),
      //       seen: false,
      //       menu:false
    };
  },

  methods: {
    goToParcel(){
      window.open("https://parcelsapp.com/en/tracking/"+this.order_data[0].tracking_number)
      
    },
    toggleTrackingEdit() {
      this.tracking_edit = !this.tracking_edit;
    },
     showStatusEdit() {
      this.status_edit = !this.status_edit;
    },
    changeTrackingNumber() {
      this.$store.dispatch("refreshToken");
      let config = {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`
        }
      };
      axios.patch(
        `orders/${this.order_data[0].id}/`,
        { tracking_number: this.new_tracking_number },
        config
      );
    },
    getOrderDetails(order_id) {
      this.$store.dispatch("refreshToken");
      let config = {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`
        }
      };
      axios.get(`/orders/?order_id=${order_id}`, config).then((response) => {
        this.order_data = response.data;
        if (this.order_data[0].status === "Processing") {
          this.order_status_value = 1;
        }
        if (this.order_data[0].status === "Shipped") {
          this.order_status_value = 2;
        }
        if (this.order_data[0].status === "Delivered") {
          this.order_status_value = 4;
        }
      });
    },
    async getItemsOrderDetails(order_id) {
      this.loading = true;
      await axios
        .get(`/items_ordered/?order_id=${order_id}`)
        .then((response) => {
          console.log(response.data);
          if (response.data.length !== 0) {
            this.exists = true;
            // console.log(response.data[0].order_id);
            this.product_data = response.data;
          } else {
            this.exists = false;
            this.not_found = true;
          }
        });
      // console.log(this.search);
    }
  },
  mounted() {
    this.getItemsOrderDetails(this.$route.params.id);
    // console.log(this.$route.params.id)
    this.getOrderDetails(this.$route.params.id);
  }
};
</script>
