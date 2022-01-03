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
  },
  data: function () {
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
<style scoped>
.imaget {
  content: url("../assets/1_wirf_01(1).jpg");
}

@keyframes loaderAnim {
  to {
    opacity: 1;
    transform: scale3d(0.5, 0.5, 1);
  }
}

.frame {
  padding: 3rem 5vw;
  text-align: center;
  position: relative;
  z-index: 1000;
}

.frame__title {
  font-size: 1.525rem;
  margin: 0 0 1rem;
  font-weight: normal;
  cursor: default;
}

.frame__tagline {
  color: #999;
  max-width: 300px;
  margin: 1rem auto;
}

.frame__links a:not(:last-child) {
  margin-right: 2rem;
}

.link {
  cursor: pointer;
  font-size: 18px;
  color: #ffefcf;
  position: relative;
  white-space: nowrap;
}

.link::before,
.link::after {
  position: absolute;
  width: 100%;
  height: 1px;
  /* ktyu */
  background: currentColor;
  top: 100%;
  left: 0;
  pointer-events: none;
}

.link::before {
  content: "";
  /* show by default */
}

.link--metis {
  font-family: bely-display, Catamaran, serif;
  /* text-transform: lowercase; */
}

.link--metis::before {
  transform-origin: 100% 50%;
  transform: scale3d(0, 1, 1);
  transition: transform 0.3s;
}

.link--metis:hover::before {
  transform-origin: 0% 50%;
  transform: scale3d(1, 1, 1);
}
</style>
