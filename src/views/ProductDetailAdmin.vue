<template>
  <div class="bg-white">
    <div class="flex justify-center items-center">
      <ToasterNotifications
        @click="toggleToast"
        v-if="toaster_visibility"
        class="fixed top-0 mt-20 cursor-pointer"
        @toggle_toaster="toggleToast"
        v-bind:time="2000"
        v-bind:type="type_of_toaster"
        v-bind:message="toaster_message"
      />
    </div>
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        <!-- Image gallery -->
        <div class="flex flex-col-reverse">
          <!-- Image selector -->
          <div class="mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
            <div
              class="grid grid-cols-4 gap-6"
              aria-orientation="horizontal"
              role="tablist"
            >
              <button
                v-for="img in image_array"
                :key="img"
                @click="change_img(img)"
                id="tabs-1-tab-1"
                class="
                  relative
                  h-24
                  bg-white
                  rounded-md
                  flex
                  items-center
                  justify-center
                  text-sm
                  font-medium
                  uppercase
                  text-gray-900
                  cursor-pointer
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring
                  focus:ring-offset-4
                  focus:ring-opacity-50
                "
                aria-controls="tabs-1-panel-1"
                role="tab"
                type="button"
              >
                <span class="absolute inset-0 rounded-md overflow-hidden">
                  <img
                    :src="img"
                    alt=""
                    class="w-full h-full object-center object-cover"
                  />
                </span>

                <!-- Selected: "ring-indigo-500", Not Selected: "ring-transparent" -->
                <span
                  class="
                    ring-transparent
                    absolute
                    inset-0
                    rounded-md
                    ring-2 ring-offset-2
                    pointer-events-none
                  "
                  aria-hidden="true"
                ></span>
              </button>

              <!-- More images... -->
            </div>
          </div>

          <div class="w-full aspect-w-1 aspect-h-1">
            <!-- Tab panel, show/hide based on tab state. -->
            <div
              id="tabs-1-panel-1"
              aria-labelledby="tabs-1-tab-1"
              role="tabpanel"
              tabindex="0"
            >
              <img
                :src="primary_image"
                alt="Angled front view with bag zipped and handles upright."
                class="w-full h-full object-center object-cover sm:rounded-lg"
              />
            </div>

            <!-- More images... -->
          </div>
        </div>

        <!-- Product info -->
        <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">
            {{ product.title }}
          </h1>

          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl text-gray-900">${{ product.price }}</p>
          </div>

          <!-- Reviews -->
          <div class="mt-3">
            <h3 class="sr-only">Reviews</h3>
          </div>

          <div class="mt-6">
            <h3 class="sr-only">Description</h3>

            <div class="text-base text-gray-700 space-y-6">
              <pre style="white-space: pre-line">
                {{ product.description }}
              </pre>
            </div>
          </div>
          <button
            class="
              mt-4
              text-xl
              w-full
              text-white
              bg-red-600
              py-1.5
              rounded-xl
              shadow-lg
            "
            @click="showDeleteModalfunction()"
          >
            Delete
          </button>
          <button
            @click="showEditModalfunction()"
            class="
              mt-4
              text-xl
              w-full
              text-white
              bg-blue-400
              py-1.5
              rounded-xl
              shadow-lg
            "
          >
            Update
          </button>
          <form class="mt-6">
            <!-- Colors -->

            <div class="mt-10 flex sm:flex-col1">
              <button
                type="button"
                @click="addToCart"
                class="
                  max-w-xs
                  flex-1
                  bg-indigo-600
                  border border-transparent
                  rounded-md
                  py-3
                  px-8
                  flex
                  items-center
                  justify-center
                  text-base
                  font-medium
                  text-white
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-offset-gray-50
                  focus:ring-indigo-500
                  sm:w-full
                "
              >
                Add to bag
              </button>

              <button
                type="button"
                class="
                  ml-4
                  py-3
                  px-3
                  rounded-md
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:bg-gray-100 hover:text-gray-500
                "
              >
                <!-- Heroicon name: outline/heart -->
                <svg
                  class="h-6 w-6 flex-shrink-0"
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span class="sr-only">Add to favorites</span>
              </button>
            </div>
          </form>

          <section aria-labelledby="details-heading" class="mt-12">
            <h2 id="details-heading" class="sr-only">Additional details</h2>

            <div class="border-t divide-y divide-gray-200">
              <div>
                <h3>
                  <!-- Expand/collapse question button -->
                  <button
                    type="button"
                    class="
                      group
                      relative
                      w-full
                      py-6
                      flex
                      justify-between
                      items-center
                      text-left
                    "
                    aria-controls="disclosure-1"
                    aria-expanded="false"
                  >
                    <!-- Open: "text-indigo-600", Closed: "text-gray-900" -->
                    <span class="text-gray-900 text-sm font-medium">
                      Details
                    </span>
                    <span class="ml-6 flex items-center">
                      <!--
                      Heroicon name: outline/plus-sm

                      Open: "hidden", Closed: "block"
                    -->
                      <svg
                        class="
                          block
                          h-6
                          w-6
                          text-gray-400
                          group-hover:text-gray-500
                        "
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
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <!--
                      Heroicon name: outline/minus-sm

                      Open: "block", Closed: "hidden"
                    -->
                      <svg
                        class="
                          hidden
                          h-6
                          w-6
                          text-indigo-400
                          group-hover:text-indigo-500
                        "
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
                          d="M18 12H6"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div class="pb-6 prose prose-sm" id="disclosure-1">
                  <ul role="list">
                    <li>Multiple strap configurations</li>

                    <li>Spacious interior with top zip</li>

                    <li>Leather handle and tabs</li>

                    <li>Interior dividers</li>

                    <li>Stainless strap loops</li>

                    <li>Double stitched construction</li>

                    <li>Water-resistant</li>
                  </ul>
                </div>
              </div>

              <!-- More sections... -->
            </div>
          </section>
        </div>
      </div>
    </div>

    <DeleteProductModal
      v-if="showDeleteModal"
      @toggle-modal="hideDeleteModalfunction"
      v-bind:idToChange="this.idToChange"
    />
    <EditProductModal
      v-if="showEditModal"
      @toggle-modal="hideEditModalfunction"
      v-bind:idToChange="this.idToChange"
    />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import Shop from "@/components/Shop.vue";
import ToasterNotifications from "@/components/ToasterNotifications.vue";
import DeleteProductModal from "@/components/DeleteProductModal.vue";
import EditProductModal from "@/components/EditProductModal.vue";
import axios from "@/axios";
export default {
  name: "ProductDetail",
  components: {
    ToasterNotifications,
    DeleteProductModal,
    EditProductModal,
  },

  data: function () {
    return {
      toaster_message: null,
      toaster_visibility: true,
      type_of_toaster: null,
      product: null,
      primary_image: null,
      image_array: [],
      showDeleteModal: false,
      showEditModal: false,
      idToChange: null,

      //       seen: false,
      //       menu:false
    };
  },
  methods: {
    toggleToast() {
      this.toaster_visibility = !this.toaster_visibility;
    },
    change_img(i) {
      let temp = this.primary_image;
      let img_to_be_primary = this.image_array.find((image_) => image_ == i);
      this.primary_image = img_to_be_primary;
      this.image_array[this.image_array.findIndex((image_) => image_ == i)] =
        temp;
    },
    showDeleteModalfunction() {
      this.showDeleteModal = !this.showDeleteModal;
      this.idToChange = this.$route.params.id;

      //
    },
    hideEditModalfunction() {
      this.showEditModal = !this.showEditModal;
      //
    },
    showEditModalfunction() {
      this.showEditModal = !this.showEditModal;
      this.idToChange = this.$route.params.id;
      //
    },

    hideDeleteModalfunction() {
      this.showDeleteModal = !this.showDeleteModal;
    },
    addToCart() {
      this.$store
        .dispatch("addToCart", {
          id: this.$route.params.id,
          amount: 1,
        })
        .then((response) => {
          if (response == false) {
            this.toaster_message = "Product already in cart";
            this.toaster_visibility = true;
            this.type_of_toaster = "error";
          } else {
            this.toaster_message = "Product addded to cart";
            this.toaster_visibility = true;
            this.type_of_toaster = "success";
          }
        });
      this.cart = this.$store.getters.cartLength;
    },
  },
  created() {
    const cloudinary_url = "https://res.cloudinary.com/hayehilhw/";
    axios.get("/decks/" + this.$route.params.id + "/").then((response) => {
      // let data = JSON.parse(response.data);
      this.product = response.data;
      // console.clear();
      this.primary_image = cloudinary_url + this.product.image;
    });
    axios
      .get(`/images/?product_id=${this.$route.params.id}`)
      .then((response) => {
        response.data.forEach((element) => {
          // this.imageArrayUrl.push(cloudinary_url + element.image);
          this.image_array.push(cloudinary_url + element.image);

          // this.imageArray[index] =element
        });
      });
    // this.products();
    // this.cart = this.$store.getters.cartLength
  },
};
</script>
