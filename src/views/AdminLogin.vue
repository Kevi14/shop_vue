<template>
  <div>
    <div class="flex items-center justify-center">
      <ToasterNotifications
        @click="toggleToast"
        v-if="toaster_visibility"
        class="fixed top-0 mt-20 cursor-pointer z-99999"
        @toggle_toaster="toggleToast"
        v-bind:time="2500"
        v-bind:type="type_of_toaster"
        v-bind:message="toaster_message"
      />
    </div>
    <div class="w-full max-w-xs h-screen m-auto pt-80">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" ref="form">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            v-model="username"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            v-model="password"
            class="
              shadow
              appearance-none
              border border-red-500
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              mb-3
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            id="password"
            type="password"
            placeholder="******************"
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            v-on:click.prevent="submit"
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
              focus:outline-none focus:shadow-outline
            "
            type="button"
          >
            Sign In
          </button>
          <a
            class="
              inline-block
              align-baseline
              font-bold
              text-sm text-blue-500
              hover:text-blue-800
            "
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2021 Kebi Corp. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
import ToasterNotifications from "@/components/ToasterNotifications.vue";
// import {useStore} from 'vuex';

export default {
  name: "AdminLogin",
  components: {
    ToasterNotifications,
  },
  data: function () {
    return {
      username: null,
      password: null,
      //Toaster info
      toaster_message: null,
      toaster_visibility: true,
      type_of_toaster: null,
      //       seen: false,
      //       menu:false
    };
  },
  //   props: {
  //     msg: String,
  //   },

  methods: {
    toggleToast() {
      this.toaster_visibility = !this.toaster_visibility;
    },
    submit() {
      if (this.username != null && this.password != null) {
        this.$store
          .dispatch("userLogin", {
            username: this.username,
            password: this.password,
          })
          .then(() => {
            this.$router.push({ name: "Admin" });
          })
          .catch((error) => {
            this.toaster_message = error.response.data.detail;
            this.toaster_visibility = true;
            this.type_of_toaster = "error";
            console.log(error.response.data);
          });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
