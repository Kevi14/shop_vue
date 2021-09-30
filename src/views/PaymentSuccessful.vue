<template>
  <div class="bg-gray-700 h-screen">
    <h1>This is an about page</h1>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <!-- component -->
    <div class="flex justify-center items-center w-screen pt-20">
      <!-- COMPONENT CODE -->
      <section class="w-full bg-green-400">
        <div class="container px-4 mx-auto">
          <div class="grid grid-cols-1 my-4 lg:grid-cols-1">
            <div
              class="
                flex flex-row
                text-center
                justify-center
                text-white
                my-auto
              "
            >
              <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white my-auto mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg> -->
              <!-- <h1 class="font-bold text-3xl">Payment Successful</h1> -->
            </div>
            <div class="text-center text-gray-200 my-auto">
              <h1 class="font-bold text-3xl">Payment Successful.</h1>
            </div>
            <div class="py-2 mx-4 lg:py-10">
              <div class="flex items-center justify-center">
                <h2 class="shadow-md text-xl">
                  Order id : {{ this.order_id }}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- COMPONENT CODE -->
    </div>

    <!-- BUY ME A PIZZA AND HELP SUPPORT OPEN-SOURCE RESOURCES -->
    <div
      class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10"
    >
      <div>
        <a
          title="Buy me a pizza"
          href="https://www.buymeacoffee.com/Dekartmc"
          target="_blank"
          class="
            block
            w-16
            h-16
            rounded-full
            transition-all
            shadow
            hover:shadow-lg
            transform
            hover:scale-110 hover:rotate-12
          "
        >
          <img
            class="object-cover object-center w-full h-full rounded-full"
            src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png"
          />
        </a>
      </div>
    </div>

    <div
      class="flex items-end justify-end fixed bottom-20 right-0 mb-4 mr-4 z-10"
    >
      <div>
        <a
          title="Buy me a pizza"
          href="https://www.buymeacoffee.com/Dekartmc"
          target="_blank"
          class="
            block
            w-16
            h-16
            rounded-full
            transition-all
            shadow
            hover:shadow-lg
            transform
            hover:scale-110 hover:rotate-12
          "
        >
          <img
            class="object-cover object-center w-full h-full rounded-full"
            src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PaymentSuccessful",
  data: function () {
    return {
      order_id: null,
    };
  },
  // components: {
  //   Shop,
  // },
  created() {
    //     this.products();
    // console.log(this.$route.query.token)
    axios
      .post("http://localhost:8000/capture_payment/", {
        id: this.$route.query.token,
      })
      .then((response) => {
        //   console.log(response.data.paypal_link)
        this.order_id = this.$route.query.token;
        console.log(response);
        axios
          .post("http://localhost:8000/register_order/", {
            id: this.$route.query.token,
          })
          .then((response) => {
            console.log(response);
          });
      });
    // this.$route.query.token
    //   },
  },
};
</script>
