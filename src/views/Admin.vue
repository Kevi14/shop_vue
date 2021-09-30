<template>
  <div class="home">
    <ShopAdmin />
    <p>{{ a }}</p>
    <!-- <AdminLogin/> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
// @ is an alias to /src
import ShopAdmin from "@/components/ShopAdmin.vue";
// import AdminLogin from '@/components/AdminLogin.vue';

export default {
  name: "Admin",
  data: function () {
    return {
      a: this.$store.state.cart,
    };
  },
  components: {
    ShopAdmin,
  },
  computed: mapState(["APIData"]),
};
</script>
