<template>
  <div class="about">
    <div class="flex flex-col pt-40 w-full h-screen">
      <!-- component -->
      <div class="flex justify-center items-center">
        <div class="leading-loose">
          <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
            <p class="text-gray-800 font-medium">Billing information</p>
            <div class="">
              <label class="block text-sm text-gray-00" for="cus_name"
                >Name</label
              >
              <input
                v-model="name"
                class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                id="cus_name"
                name="cus_name"
                type="text"
                required=""
                placeholder="Your Name"
                aria-label="Name"
              />
            </div>

            <div class="mt-2">
              <label class="block text-sm text-gray-600" for="cus_email"
                >Email</label
              >
              <input
                v-model="email"
                class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="Your Email"
                aria-label="Email"
              />
            </div>

            <div class="mt-2">
              <label class="block text-sm text-gray-600" for="cus_email"
                >Address</label
              >

              <input
                v-model="city"
                class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                id="cus_name"
                name="cus_name"
                type="text"
                required=""
                placeholder="Your City"
                aria-label="City"
              />

              <input
                v-model="address_line"
                class="w-full mt-2 px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="Address Line"
                aria-label="Email"
              />
            </div>

            <div class="inline-block mt-2 w-1/2 pr-1">
              <label class="hidden block text-sm text-gray-600" for="cus_email"
                >Country</label
              >
              <country-select
                @change="changeState"
                v-model="country"
                class="w-full px-2 h-12 py-2 text-gray-700 bg-gray-200 rounded"
                topCountry="US"
              />
            </div>
            <div class="inline-block mt-2 w-1/2 pr-1">
              <label class="hidden block text-sm text-gray-600" for="cus_email"
                >State</label
              >

              <region-select
                v-model="state"
                :country="country"
                :region="region"
                class="w-full px-2 py-2 h-12 text-gray-700 bg-gray-200 rounded"
              />
            </div>
            <div class="flex items-center justify-center">
              <div class="inline-block -mx-1 pl-1 w-1/2 pt-7">
                <label
                  class="hidden block text-sm text-gray-600"
                  for="cus_email"
                  >Zip</label
                >
                <input
                  @change="ls"
                  v-model="zip_code"
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="Zip"
                />
              </div>
            </div>
            <div class="mt-4 flex items-center justify-center pt-4">
              <button
                @click="paypalLink"
                class="
                  px-4
                  py-1
                  text-white
                  font-light
                  tracking-wider
                  bg-gray-900
                  rounded
                "
                type="button"
              >
                Pay with paypal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- <region-select /> -->
  </div>
</template>
<script>
// import {watch} from "vue"
import axios from "@/axios";

/* eslint-disable */
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import { computed }  from 'vue';

export default {
  /* eslint-disable */
  name: "Billing",
  // setup(){
  //   let country = ref("country");
  //   watch(country, () => {
  //     console.log("A")
  //   })
  //   return {
  //     country:null
  //   }
  // },
  data: function () {
    return {
      email: null,
      city: null,
      name: null,
      zip_code: null,
      address_line: null,
      state: null,
      country: null
      //   people,
      // cartdata : computed(()=>JSON.parse(this.$store.getters.getCart)),
      //       seen: false,
      //       menu:false
    };
  },
  watch:{
    country(newCountry){
      if(newCountry==="United States"){
        console.log("A")
      }
    }
  },

  methods: {
    ls(){
      console.log(this.country)
    },
    changeState(){
      if(this.country=='US'){
        console.log("A")
      }
    },
    paypalLink() {
      axios
        .post("http://localhost:8000/paypal_payment", {
          cart: JSON.parse(this.$store.getters.getCart),
          billing: {
            name: this.name,
            zip_code: this.zip_code,
            address_line: this.address_line,
            state: this.state,
            country: this.country,
            email: this.email,
            city: this.city,
          }
        })
        .then((response) => {
          //   console.log(response.data.paypal_link)
          window.location.href = response.data.paypal_link;
        });
    }
    //     this.cartdata.items.forEach(element => {
    //         this.amount[element.id]=element.amount

    //     });
  }
  //   components: {

  //   },
};
</script>
<style scoped>
.about{

  background-image: url("../assets/imazh2.jpg");
    background-size: 1000px;
    /* background-repeat: no-repeat; */

}
</style>

