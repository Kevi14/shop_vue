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
