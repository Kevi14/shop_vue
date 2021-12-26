<template>
  <div>
    <div
      class="
        min-w-screen
        h-screen
        animated
        fadeIn
        faster
        fixed
        left-0
        top-0
        flex
        justify-center
        items-center
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-no-repeat bg-center bg-cover
      "
      id="modal-id"
      style="overflow-y: auto"
    >
      <div class="absolute bg-black opacity-80 inset-0 z-0"></div>

      <div
        class="p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
        style="flex-grow: 0.2"
      >
        <!--content-->
        <div class="" style="overflow-y: auto">
          <!--body--><!-- component -->
          <div
            class="flex-grow bg-gray-200 items-center justify-center"
            style="overflow-y: auto"
          >
            <div class="grid bg-white rounded-lg">
              <div class="flex justify-center py-4">
                <div
                  class="
                    flex
                    bg-purple-200
                    rounded-full
                    md:p-4
                    p-2
                    border-2 border-purple-300
                  "
                >
                  <svg
                    class="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    ></path>
                  </svg>
                </div>
              </div>

              <!-- <div class="flex justify-center">
              <div class="flex">
                <h1 class="text-gray-600 font-bold md:text-2xl text-xl">
                  Tailwind Form
                </h1>
              </div>
            </div> -->

              <div class="grid grid-cols-1 mt-5 mx-7">
                <label
                  class="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                  >Title</label
                >
                <input
                  v-model="title"
                  class="
                    py-2
                    px-3
                    rounded-lg
                    border-2 border-purple-300
                    mt-1
                    focus:outline-none
                    focus:ring-2
                    focus:ring-purple-600
                    focus:border-transparent
                  "
                  type="text"
                  placeholder="Title"
                />
              </div>
              <div class="grid grid-cols-1 mt-5 mx-7">
                <label
                  class="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                  >Description</label
                >
                <textarea
                  v-model="description"
                  class="
                    py-2
                    px-3
                    rounded-lg
                    border-2 border-purple-300
                    mt-1
                    focus:outline-none
                    focus:ring-2
                    focus:ring-purple-600
                    focus:border-transparent
                  "
                  type="text"
                  placeholder="Description"
                />
              </div>

              <div class="grid grid-cols-1 mt-5 mx-7">
                <label
                  class="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                  >Price</label
                >
                <input
                  v-model="price"
                  class="
                    py-2
                    px-3
                    rounded-lg
                    border-2 border-purple-300
                    mt-1
                    focus:outline-none
                    focus:ring-2
                    focus:ring-purple-600
                    focus:border-transparent
                  "
                  type="number"
                  placeholder="Price"
                />
              </div>

              <div class="grid grid-cols-1 mt-5 mx-7">
                <label
                  class="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                  >Number of cards</label
                >
                <input
                  class="
                    py-2
                    px-3
                    rounded-lg
                    border-2 border-purple-300
                    mt-1
                    focus:outline-none
                    focus:ring-2
                    focus:ring-purple-600
                    focus:border-transparent
                  "
                  type="text"
                  placeholder="Another Input"
                />
              </div>
              <div
                class="
                  md:px-4 md:grid md:grid-cols-2
                  lg:grid-cols-3
                  gap-12
                  space-y-4
                  md:space-y-0
                "
              >
                <div class="grid grid-cols-1 mt-5 mx-7">
                  <label
                    class="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                      mb-1
                      flex
                      items-center
                      justify-center
                    "
                    >Primary Image</label
                  >
                  <div class="flex items-center justify-center w-full">
                    <label
                      id="img1"
                      class="
                        flex flex-col
                        border-4 border-dashed
                        w-40
                        h-32
                        hover:bg-gray-100 hover:border-purple-300
                        group
                      "
                      :style="`background:url(${this.primaryPhotoUrl}) center/cover no-repeat;`"
                    >
                      <input
                        @change="onPrimaryPicSelected"
                        type="file"
                        class="hidden w-full h-full"
                      />
                    </label>
                  </div>
                </div>

                <div v-for="i in 5" :key="i" class="grid grid-cols-1 mt-5 mx-7">
                  <label
                    class="
                      uppercase
                      md:text-sm
                      text-xs text-gray-500 text-light
                      font-semibold
                      mb-1
                      flex
                      items-center
                      justify-center
                    "
                    >Photo {{ i }}</label
                  >
                  <div class="flex items-center justify-center w-full">
                    <label
                      id="img1"
                      class="
                        flex flex-col
                        border-4 border-dashed
                        w-40
                        h-32
                        hover:bg-gray-100 hover:border-purple-300
                        group
                        relative
                      "
                      :style="`background:url(${this.imageArrayUrl[i]}) center/cover no-repeat;`"
                    >
                      <div
                        v-if="typeof this.imageArrayUrl[i] === 'undefined'"
                        class="flex flex-col items-center justify-center pt-7"
                      >
                        <svg
                          class="
                            w-10
                            h-10
                            text-purple-400
                            group-hover:text-purple-600
                          "
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <p
                          class="
                            lowercase
                            text-sm text-gray-400
                            group-hover:text-purple-600
                            pt-1
                            tracking-wider
                          "
                        >
                          Select a photo
                        </p>
                      </div>
                      <input
                        @change="onPicSelected($event, i)"
                        type="file"
                        class="hidden w-full h-full"
                      />
                      <button @click="deleteImage(i)">
                        <svg
                          class="svg-icon w-10 h-10 absolute -inset-y-5"
                          viewBox="0 0 20 20"
                          style="fill: #ff0000; left: 8.23rem; right: 8rem"
                        >
                          <path
                            d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"
                          ></path>
                        </svg>
                      </button>
                    </label>
                  </div>
                </div>
              </div>

              <div
                class="
                  flex
                  items-center
                  justify-center
                  md:gap-8
                  gap-4
                  pt-5
                  pb-5
                "
              >
                <button
                  @click="hideEditModalfunction"
                  class="
                    w-auto
                    bg-gray-500
                    hover:bg-gray-700
                    rounded-lg
                    shadow-xl
                    font-medium
                    text-white
                    px-4
                    py-2
                  "
                >
                  Cancel
                </button>
                <button
                  @click="editProduct"
                  class="
                    w-auto
                    bg-purple-500
                    hover:bg-purple-700
                    rounded-lg
                    shadow-xl
                    font-medium
                    text-white
                    px-4
                    py-2
                  "
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DeleteImageModal
      v-if="showDeleteImageModal"
      @toggle-modal="hideDeleteImageModalfunction"
      @toggle-deleted="removeImageAndToggle"
      v-bind:imageId="this.imageId"
    />
  </div>
</template>

<script>
import DeleteImageModal from "@/components/DeleteImageModal.vue";
import axios from "@/axios";
export default {
  name: "EditProductModal",
  props: ["idToChange"],
  components: {
    DeleteImageModal,
  },
  data: function () {
    return {
      imageId: null,
      showDeleteImageModal: false,
      price: null,
      title: null,
      description: null,
      decks: [],
      cart: null,
      arrayid: null,
      primaryPhoto: null,
      primaryPhotoUrl: null,
      imageArray: [null],
      imageArrayUrl: [null],

      //       seen: false,
      //       menu:false
    };
  },
  methods: {
    hideEditModalfunction() {
      this.$emit("toggle-modal");
    },
    hideDeleteImageModalfunction() {
      this.showDeleteImageModal = !this.showDeleteImageModal;
    },
    async editProduct() {
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("description", this.description);
      if (this.primaryPhoto != null) {
        formData.append("image", this.primaryPhoto);
      }

      await this.$store
        .dispatch("editProduct", {
          id: this.idToChange,
          form: formData,
          //   password: this.password,
        })
        .then(() => {
          this.showEditModal = !this.showEditModal;
          this.updateImages(this.idToChange);
          this.$toast.show(`Changes made successfully`, {
            type: "success",
            position: "top",
            duration: 2000,
            useDefaultCss: false,
            class:
              "bg-green-500 border-green-700 py-2 px-3 shadow-md text-white text-2xl rounded-lg mt-10",
            style: "z-index: 7000;",
            queue: true,
          });
          this.hideEditModalfunction();
          //   this.$router.push({ name: "Admin" });
        });
    },
    async updateImages(id) {
      const formData = new FormData();
      this.imageArray.forEach((element) => {
        if (element != null) {
          if (!element.id) {
            formData.append("image", element);
            formData.append("product", id);
          }
        }
      });

      let config = {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      };
      await axios.post(`/images/`, formData, config);
    },

    deleteImage(id) {
      if (this.imageArray[id]) {
        if (this.imageArray[id].id) {
          this.arrayid = id;
          this.imageId = this.imageArray[id].id;
          this.showDeleteImageModal = !this.showDeleteImageModal;
        } else {
          delete this.imageArrayUrl[id];
          delete this.imageArray[id];
        }
      }
    },
    removeImageAndToggle() {
      delete this.imageArrayUrl[this.arrayid];
      delete this.imageArray[this.arrayid];
      this.showDeleteImageModal = !this.showDeleteImageModal;
    },
    onPrimaryPicSelected(event) {
      this.primaryPhoto = event.target.files[0];
      this.primaryPhotoUrl = URL.createObjectURL(event.target.files[0]);
    },
    onPicSelected(event, i) {
      this.imageArray[i] = event.target.files[0];
      this.imageArrayUrl[i] = URL.createObjectURL(event.target.files[0]);
    },
  },

  mounted() {
    const cloudinary_url = "https://res.cloudinary.com/hayehilhw/";

    axios.get(`/decks/${this.idToChange}/`).then((response) => {
      let data = response.data;
      this.title = data.title;
      this.description = data.description;
      this.price = data.price;
      this.primaryPhotoUrl = cloudinary_url + data.image;
    });
    axios.get(`/images/?product_id=${this.idToChange}`).then((response) => {
      response.data.forEach((element) => {
        this.imageArrayUrl.push(cloudinary_url + element.image);
        this.imageArray.push(element);
        // this.imageArray[index] =element
      });
    });
    // delete this.imageArrayUrl[0];
  },
};
</script>
