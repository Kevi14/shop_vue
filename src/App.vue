<template>
  <div id="nav">
    <NavbarTest />
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
import NavbarTest from "@/components/NavbarTest.vue";
export default {
  name: "Home",
  components: {
    NavbarTest,
  },
};
</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
*/
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
