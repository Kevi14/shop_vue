<template>
  <div>
    <div class="flex items-center justify-center">
      <div v-if="loading" class="pt-24">
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
    </div>
    <div class="flex items-center justify-center">
      <div class="text-lg font-bold">
        Please do not close this page as your order is being processed
      </div>
    </div>

    <div>
      <PaySuccess @toggle-loading="toggleLoading" />
    </div>
  </div>
</template>

<script>
import PaySuccess from "@/components/PaySuccess.vue";
// import axios from "@/axios";
export default {
  name: "PaymentSuccessful",
  data: function () {
    return {
      loading: true,
      product_data: [],
      email: null,
      order_id: null,
    };
  },
  components: {
    PaySuccess,
  },

  methods: {
    toggleLoading() {
      this.loading = false;
    },
    //     // goToParcel() {
    //     //   window.open(
    //     //     "https://parcelsapp.com/en/tracking/" +
    //     //       this.order_data[0].tracking_number
    //     //   );
    //     // },
    //     async displayOrderDetails() {
    //       await axios
    //         .get(`/items_ordered/?order_id=${this.$route.query.token}`)
    //         .then((response) => {
    //           if (response.data.length !== 0) {
    //             // console.log(response.data[0].order_id);
    //             this.product_data = response.data;
    //           } else {
    //             // this.exists = false;
    //             // this.not_found = true;
    //           }
    //         });
    //       let email = this.product_data[0].order.contact_email.split("@");
    //       this.email = email[0].slice(0, 3) + "*".repeat(8) + email[1];
    //     },
    //   },
    //   // components: {
    //   //   Shop,
    //   // },
    //   created() {
    //     //     this.products();
    //     // console.log(this.$route.query.token)
    //     axios
    //       .post("/capture_payment/", {
    //         id: this.$route.query.token,
    //       })
    //       .then(() => {
    //         this.order_id = this.$route.query.token;
    //         // console.log(response);
    //       });

    //     axios
    //       .post("/register_order/", {
    //         id: this.$route.query.token,
    //       })
    //       .then(() => {
    //         this.displayOrderDetails();
    //       });
    //     // this.$route.query.token
    //     //   },
  },
};
</script>
