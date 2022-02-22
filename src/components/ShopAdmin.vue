<template>
  <div class="">
    <div
      v-if="this.$store.state.isLoading"
      class="pt-20 flex justify-center items-center"
    >
      <div
        class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
      ></div>
    </div>

    <div class="">
      <div class="flex items-center justify-center mt-6"></div>
      <div v-if="loading" class="flex items-center justify-center pt-10">
        <div
          style="border-top-color: transparent"
          class="
            w-16
            h-16
            border-4 border-blue-400 border-solid
            rounded-full
            animate-spin
          "
        ></div>
      </div>

      <div class="flex flex-col pt-10">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="
                shadow
                overflow-hidden
                border-b border-gray-200
                sm:rounded-lg
              "
            >
              <table
                class="
                  overflow-auto
                  min-w-full
                  divide-y divide-gray-200
                  absolute
                "
              >
                <thead class="bg-gray-50">
                  <!-- <input
                    class="absolute right-0"
                    type="button"
                    id="lockList"
                    name="lockList"
                    value="Lock WL"
                  /> -->
                  <a @click="goToProduct">
                    <button
                      class="
                        bg-blue-500
                        hover:bg-blue-700
                        text-white
                        font-bold
                        py-2
                        px-4
                        rounded-full
                        absolute
                        right-0
                      "
                    >
                      Add product
                    </button>
                  </a>
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
                      Category
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
                      On sale
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
                      Sale percentage
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
                      Sale percentage
                    </th>
                    <!-- <td>asdadasd<input type="submit" /></td> -->

                    <!-- <th
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
                    Tracking number
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
                    Status
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
                    country
                  </th> -->

                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="product in products" :key="product.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-20 w-20">
                          <img
                            class="h-20 w-20"
                            v-bind:src="
                              'https://res.cloudinary.com/hayehilhw/' +
                              product.image
                            "
                            alt=""
                          />
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ product.title }}
                          </div>
                          <div class="text-sm text-gray-500">
                            <!-- {{ product.contact_email }} -->
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text text-gray-900">
                        {{ product.category }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text text-gray-900">
                        {{ product.price }}
                      </div>
                    </td>

                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="
                          px-2
                          inline-flex
                          text
                          leading-5
                          font-semibold
                          rounded-full
                          bg-green-100
                          text-green-800
                        "
                      >
                        {{ product.on_sale }}
                      </span>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {{ product.sale_percentage }}
                    </td>
                    <td
                      class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-right text-sm
                        font-medium
                        cursor-pointer
                      "
                    >
                      <a
                        @click="goToAdminOrder(order.order_id)"
                        class="text-indigo-600 hover:text-indigo-900"
                        >Edit</a
                      >
                    </td>
                  </tr>

                  <!-- More people... -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <EditTrackingNumber
        v-if="showEditTracking"
        @toggle-modal="toggle_show_tracking"
      />
    </div>

    <div
      class="
        max-w-2xl
        mx-auto
        py-16
        px-4
        sm:py-24 sm:px-6
        lg:max-w-7xl lg:px-8
        pt-20
      "
    >
      <h2 class="sr-only">Products</h2>

      <div
        class="
          grid grid-cols-2
          gap-y-10
          sm:grid-cols-2
          gap-x-6
          lg:grid-cols-3
          xl:grid-cols-4 xl:gap-x-8
        "
      >
        <a
          v-for="deck in decks"
          :key="deck.id"
          @click="goToProduct(deck.id)"
          class="
            group
            outline-double outline-offset-2 outline-white
            border-solid
          "
        >
          <div
            class="
              w-full
              aspect-w-1 aspect-h-1
              bg-gray-200
              rounded-lg
              overflow-auto
              xl:aspect-w-7 xl:aspect-h-8
            "
          >
            <img
              v-bind:src="
                'https://res.cloudinary.com/hayehilhw/' + product.image
              "
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              class="
                w-full
                h-full
                object-center object-cover
                group-hover:opacity-75
              "
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700 dark:text-gray-700">
            {{ deck.title }}
          </h3>
          <p class="mt-1 text-lg font-medium text-gray-900 dark:text-gray-900">
            ${{ deck.price }}
          </p>
        </a>

        <!-- More products... -->
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
    <AddProductModal
      v-if="showAddModal"
      @toggle-modal="toggleAddModalfunction"
    />

    <ToasterNotifications
      @click="toggleToast"
      v-if="toaster_visibility"
      class="absolute top-0 mt-20 cursor-pointer"
      @toggle_toaster="toggleToast"
      v-bind:time="2000"
      v-bind:type="type_of_toaster"
    />
  </div>
</template>

<script>
import axios from "@/axios";
import DeleteProductModal from "@/components/DeleteProductModal.vue";
import EditProductModal from "@/components/EditProductModal.vue";
import AddProductModal from "@/components/AddProductModal.vue";
import ToasterNotifications from "@/components/ToasterNotifications.vue";
export default {
  name: "ShopAdmin",
  components: {
    DeleteProductModal,
    EditProductModal,
    AddProductModal,
    ToasterNotifications,
  },
  data: function () {
    return {
      type_of_toaster: null,
      title: null,
      description: null,
      products: [],
      cart: null,
      showDeleteModal: false,
      showAddModal: false,
      idToChange: null,
      primaryPhoto: null,
      primaryPhotoUrl: null,
      showEditModal: false,
      toaster_visibility: true,
      //       seen: false,
      //       menu:false
    };
  },
  methods: {
    toggleToast() {
      this.toaster_visibility = !this.toaster_visibility;
    },
    async get_products() {
      this.$store.commit("setIsLoading", true);
      await axios.get("/decks/").then((response) => {
        // let data = JSON.parse(response.data);
        this.products = response.data;
      });
      this.$store.commit("setIsLoading", false);
    },
    // removeProducts(product) {
    //     axios.delete("http://127.0.0.1:8000/decks/"+product+"/");
    //   },
    goToProduct(id) {
      this.$router.push({ path: `/admin/product/${id}/` });
    },
    showDeleteModalfunction(id) {
      this.showDeleteModal = !this.showDeleteModal;
      this.idToChange = id;

      //
    },
    hideEditModalfunction() {
      this.showEditModal = !this.showEditModal;
      this.idToChange = null;
      //
    },
    showEditModalfunction(id) {
      this.showEditModal = !this.showEditModal;
      this.idToChange = id;
      //
    },
    toggleAddModalfunction() {
      this.showAddModal = !this.showAddModal;
    },
    goToAddProduct() {
      this.$router.push({ path: `/admin/add_product/` });
    },
    hideDeleteModalfunction() {
      this.showDeleteModal = !this.showDeleteModal;
      this.idToChange = null;
    },
    onPrimaryPicSelected(event) {
      this.primaryPhoto = event.target.files[0];
      this.primaryPhotoUrl = URL.createObjectURL(event.target.files[0]);
    },
  },

  mounted() {
    this.get_products();
  },
};
</script>
