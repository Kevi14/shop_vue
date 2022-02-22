<template>
  <div class="home bg-white h-screen overflow-auto">
    <div
      class="pt-32 flex items-center justify-center overflow-auto"
      style="z-index: -100"
    >
      <!-- <div class="pt-32"> -->
      <div
        class="rounded-lg shadow flex divide-x divide-gray-200"
        aria-label="Tabs"
      >
        <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" -->
        <a
          @click="openProducts"
          :class="this.components.shopAdminVisible ? 'text-gray-900' : ''"
          class="
            cursor-pointer
            text-gray-500
            rounded-l-lg
            group
            relative
            min-w-0
            bg-white
            py-4
            px-4
            text-base
            font-medium
            text-center
            hover:bg-gray-50
            focus:z-10
          "
          aria-current="page"
        >
          <span>Products</span>
          <span
            aria-hidden="true"
            class="absolute inset-x-0 bottom-0 h-0.5"
            :class="this.components.shopAdminVisible ? 'bg-indigo-500' : ''"
          >
          </span>
        </a>

        <a
          @click="openOrder"
          :class="this.components.adminOrdersVisible ? 'text-gray-900' : ''"
          class="
            cursor-pointer
            text-gray-500
            hover:text-gray-700
            group
            relative
            min-w-0
            bg-white
            py-4
            px-4
            text-base
            font-medium
            text-center
            hover:bg-gray-50
            focus:z-10
          "
        >
          <span>Orders</span>
          <span
            aria-hidden="true"
            :class="this.components.adminOrdersVisible ? 'bg-indigo-500' : ''"
            class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
          ></span>
        </a>

        <a
          @click="openCategories"
          class="
            text-gray-500
            hover:text-gray-700
            group
            relative
            min-w-0
            bg-white
            py-4
            px-4
            text-base
            font-medium
            text-center
            hover:bg-gray-50
            focus:z-10
          "
        >
          <span>Categories</span>
          <span
            aria-hidden="true"
            :class="this.components.categoriesVisible ? 'bg-indigo-500' : ''"
            class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
          ></span>
        </a>

        <a
          href="#"
          class="
            text-gray-500
            hover:text-gray-700
            rounded-r-lg
            group
            relative
            min-w-0
            flex-1
            bg-white
            py-4
            px-4
            text-base
            font-medium
            text-center
            hover:bg-gray-50
            focus:z-10
          "
        >
          <span>Billing</span>
          <span
            aria-hidden="true"
            class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
          ></span>
        </a>
        <!-- </div> -->
      </div>
    </div>

    <ShopAdmin v-if="components.shopAdminVisible" />
    <AdminOrders v-if="components.adminOrdersVisible" />
    <CategoriesAdmin v-if="components.categoriesVisible" />

    <!-- <AdminLogin/> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
// @ is an alias to /src
import ShopAdmin from "@/components/ShopAdmin.vue";
import AdminOrders from "@/components/AdminOrders.vue";
import CategoriesAdmin from "@/components/CategoriesAdmin.vue";

// import AdminLogin from '@/components/AdminLogin.vue';

export default {
  name: "Admin",
  data: function () {
    return {
      a: this.$store.state.cart,
      components: {
        shopAdminVisible: true,
        adminOrdersVisible: false,
        categoriesVisible: false,
      },

      // options: [shopAdminVisible, adminOrdersVisible, categoriesVisible],
    };
  },
  components: {
    ShopAdmin,
    AdminOrders,
    CategoriesAdmin,
  },
  methods: {
    hide_all() {
      for (const key in this.components) {
        this.components[key] = false;
      }
    },
    openOrder() {
      this.hide_all();
      this.components.adminOrdersVisible = true;
    },
    openProducts() {
      this.hide_all();
      this.components.shopAdminVisible = true;
    },
    openCategories() {
      this.hide_all();
      this.components.categoriesVisible = true;
    },
  },
  computed: mapState(["APIData"]),
};
</script>
