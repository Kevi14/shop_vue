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

    <div class="flex justify-center items-center">
      <button
        @click="toggleAddModalfunction"
        class="
          mt-20
          px-6
          py-2
          font-medium
          leading-7
          text-center text-white
          uppercase
          transition
          bg-blue-700
          rounded-full
          shadow
          ripple
          hover:shadow-lg hover:bg-blue-800
          focus:outline-none
        "
        style=""
      >
        Add a product
      </button>
    </div>
    <div class="min-h-screen flex justify-center items-center py-20">
      <!-- <button class="absolute top-32 right-8"> Asdasd</button> -->
      <div
        class="
          md:px-4 md:grid md:grid-cols-2
          lg:grid-cols-3
          gap-20
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
              class="w-full min-h-60 max-h-60 rounded-xl"
              v-bind:src="'https://res.cloudinary.com/hayehilhw/' + deck.image"
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
              v-bind:src="'https://res.cloudinary.com/hayehilhw/' + deck.image"
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
      decks: [],
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
    async products() {
      this.$store.commit("setIsLoading", true);
      await axios.get("/decks/").then((response) => {
        // let data = JSON.parse(response.data);
        this.decks = response.data;
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
    this.products();
  },
};
</script>
