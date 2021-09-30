<template>
  <div class="home bg-gradient-to-tr from-red-300 to-yellow-200 h-screen overflow-auto">
    

    <div class="pt-32  items-center justify-center"  style="z-index:-100;">
  <!-- <div class="pt-32"> -->
    <div class="rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
      <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" -->
      <a @click="openProducts" :class="this.shopAdminVisible ? 'text-gray-900' :''" class="text-gray-500 rounded-l-lg group relative min-w-0 flex-1  bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10" aria-current="page">
        <span>Products</span>
        <span aria-hidden="true" class=" absolute inset-x-0 bottom-0 h-0.5" :class="this.shopAdminVisible ? 'bg-indigo-500' :''"> </span>
      </a>

      <a  @click="openOrder" :class="this.adminOrdersVisible ? 'text-gray-900' :''"  class="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
        <span>Orders</span>
        <span aria-hidden="true" :class="this.adminOrdersVisible ? 'bg-indigo-500' :''" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
      </a>

      <a href="#" class="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1  bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
        <span>Team Members</span>
        <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
      </a>

      <a href="#" class="text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
        <span>Billing</span>
        <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
      </a>
    <!-- </div> -->
  </div>
</div>

    <ShopAdmin v-if="shopAdminVisible" />
    <AdminOrders v-if="adminOrdersVisible"/>

    <!-- <AdminLogin/> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
// @ is an alias to /src
import ShopAdmin from "@/components/ShopAdmin.vue";
import AdminOrders from "@/components/AdminOrders.vue";
// import AdminLogin from '@/components/AdminLogin.vue';

export default {
  name: "Admin",
  data: function () {
    return {
      a: this.$store.state.cart,
      shopAdminVisible:true,
      adminOrdersVisible:false
      
    };
  },
  components: {
    ShopAdmin,
    AdminOrders,
  },
  methods:{
    openOrder(){
      this.shopAdminVisible = false
      this.adminOrdersVisible = true
    },
    openProducts(){
            this.shopAdminVisible = true
      this.adminOrdersVisible = false
    }
  },
  computed: mapState(["APIData"]),
};
</script>
