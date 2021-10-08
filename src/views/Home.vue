<template>
  <div class="home">
    <Shop />
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <Navbar/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Shop from "@/components/Shop.vue";

export default {
  name: "Home",
  components: {
    Shop,
  },  data: function () {
    return {
      search: null,
      exists: false,
      not_found: false,
      product_data: [],

      //   people,
      // cartdata : computed(()=>JSON.parse(this.$store.getters.getCart)),
      //       seen: false,
      //       menu:false
    };
  },
};
</script>
