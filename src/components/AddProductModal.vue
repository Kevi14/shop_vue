<template>
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
      <div class="">
        <!--body--><!-- component -->
        <div class="flex-grow bg-gray-200 items-center justify-center">
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

            <div class="flex justify-center">
              <div class="flex">
                <h1 class="text-gray-600 font-bold md:text-2xl text-xl">
                  Tailwind Form
                </h1>
              </div>
            </div>

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
                    :style="
                      selected
                        ? `background:url(${this.primaryPhotoUrl}) center/cover no-repeat;`
                        : ''
                    "
                  >
                    <div
                      v-if="this.selected != true"
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
                    "
                    :style="
                      typeof this.imageArray[i] !== 'undefined'
                        ? `background:url(${this.imageArrayUrl[i]}) center/cover no-repeat;`
                        : ''
                    "
                  >
                    <div
                      v-if="typeof this.imageArray[i] === 'undefined'"
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
                  </label>
                </div>
              </div>
            </div>

            <div
              class="flex items-center justify-center md:gap-8 gap-4 pt-5 pb-5"
            >
              <button
                @click="hideModalfunction"
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
                @click="addProduct"
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
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
// axios.defaults.baseURL = 'http://localhost:8000/';
export default {
  name: "AddProductModal",
  data: function () {
    return {
      selected: false,
      title: null,
      description: null,
      price: null,
      cart: null,
      imageArray: [],
      imageArrayUrl: [],
      showDeleteModal: false,
      showAddModal: false,
      primaryPhoto: null,
      primaryPhotoUrl: null,
      showEditModal: false,
      //       seen: false,
      //       menu:false
    };
  },
  methods: {
    hideModalfunction() {
      this.$emit("toggle-modal");
    },
    onPrimaryPicSelected(event) {
      //  console.log(event.target.files)
      this.primaryPhoto = event.target.files[0];
      // console.log(this.primaryPhoto)
      // let img = Array.from(event.target.files)
      this.primaryPhotoUrl = URL.createObjectURL(event.target.files[0]);
      this.selected = true;
      // console.log(this.primaryPhoto
    },
    onPicSelected(event, i) {
      //  console.log(event.target.files)
      this.imageArray[i] = event.target.files[0];
      // console.log(this.primaryPhoto)
      // let img = Array.from(event.target.files)
      this.imageArrayUrl[i] = URL.createObjectURL(event.target.files[0]);
      // this.selected = true
    },
    addImages(id) {
      const formData = new FormData();
      this.imageArray.forEach((element) => {
        formData.append("image", element);
        formData.append("product", id);
      });

      let config = {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      };
      axios.post(`/images/`, formData, config);
    },
    async addProduct() {
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("description", this.description);
      formData.append("price", this.price);
      if (this.primaryPhoto != null) {
        formData.append("image", this.primaryPhoto);
      }
      // console.log(this.primaryPhoto)
      await this.$store.dispatch("refreshToken");

      let config = {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
        },
      };

      await axios.post(`/decks/`, formData, config).then((response) => {
        this.addImages(response.data.id);
      });
    },
  },
};
</script>
<style scoped>
#img1 {
  background-size: 150px 105px;
}
</style>
