<template>
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
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="
              shadow
              overflow-hidden
              border-b border-gray-200
              sm:rounded-lg
            "
          >
            <table class="overflow-auto min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
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
                    Description
                  </th>
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
                <tr v-for="categorie in categories_data" :key="categorie.id">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{ categorie.category }}
                        </div>
                        <div class="text-sm text-gray-500">
                          {{ categorie.description }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <!-- <div class="text text-gray-900">{{ order.order_id }}</div> -->
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
</template>

<script>
import axios from "@/axios";
import EditTrackingNumber from "@/components/EditTrackingNumber.vue";
export default {
  /* eslint-disable */
  name: "AdminOrders",
  components: {
    EditTrackingNumber
  },
  data: function () {
    return {
      name_to_search: null,
      showEditTracking: false,

      country_to_filter: "",
      status_to_filter: "",

      search: null,
      exists: false,
      not_found: false,
      categories_data: [],
      full_categories_data: [],
      countries_filter: [],
      loading: false,
      edit: [],
      tracking_n: []
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    reset_filters() {
      this.country_to_filter = "";
      this.status_to_filter = "";
    },

    async filter_database() {
      var string_to_search = `/orders/?`;
      var array_with_filters = [];

      const filters = {
        status: this.status_to_filter,
        country: this.country_to_filter
      };

      for (const [key, value] of Object.entries(filters)) {
        if (value != "") {
          array_with_filters.push(key + "=" + value.toLowerCase());
        }
      }

      if (this.name_to_search) {
        array_with_filters.push(`search=${this.name_to_search}`);
      }
      var string_to_search = "orders/?" + array_with_filters.join("&");
      if (string_to_search != "?") {
        this.categories_data = null;
        this.loading = true;
        //Refresh token
        await this.$store.dispatch("refreshToken");
        //Set headers
        let config = {
          headers: {
            Authorization: `Bearer ${this.$store.state.accessToken}`
          }
        };
        //Make the api call to filter
        await axios.get(string_to_search, config).then((response) => {
          this.categories_data = response.data;
          this.loading = false;
        });
      }
    },

    goToAdminOrder(order_id) {
      this.$router.push({ path: `/admin/order/${order_id}/` });
    },
    toggle_show_tracking() {
      this.showEditTracking = !this.showEditTracking;
    },
    toggle_edit(id) {
      this.edit[id] = !this.edit[id];
    },
    save_tracking(id) {
      console.log(this.tracking_n[id]);
    },
    async getCategories() {
      this.loading = true;
      await this.$store.dispatch("refreshToken");
      let config = {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`
        }
      };

      await axios.get(`/categories/`, config).then((response) => {
        this.categories_data = response.data;
        this.full_categories_data = response.data;
      });
      this.loading = false;
    },

    async search_orders() {
      this.loading = true;
      await this.$store.dispatch("refreshToken");

      let config = {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`
        }
      };

      await axios.get(`/categories/`, config).then((response) => {
        this.categories_data = response.data;

        // console.log(this.countries_filter);
      });
      this.loading = false;
    }
  },
  mounted() {
    this.getCategories();
  }
};
</script>
