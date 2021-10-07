<template>
<div class="">
  <div class="flex items-center justify-center mt-6">
  <div class="w-full md:w-2/3 shadow p-5 rounded-lg bg-white ">
  <div class="relative ">
	<div class="absolute flex items-center ml-2 h-full">
	  <svg class="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
	  </svg>
	</div>

	<input type="text" placeholder="Search by listing, location, bedroom number..." class="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
	  </div>

	<div class="flex items-center justify-between mt-4">
	  <p class="font-medium">
		Filters
	  </p>

	  <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
		Reset Filter
	  </button>
	</div>

	<div>
	  <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
		<select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="">Country</option>
		  <option v-for="countrie in countries_filter" :value="countrie" :key="countrie">{{countrie}}</option>
		</select>

		<select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="">Furnish Type</option>
		  <option value="fully-furnished">Fully Furnished</option>
		  <option value="partially-furnished">Partially Furnished</option>
		  <option value="not-furnished">Not Furnished</option>
		</select>

		<select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="">Any Price</option>
		  <option value="1000">RM 1000</option>
		  <option value="2000">RM 2000</option>
		  <option value="3000">RM 3000</option>
		  <option value="4000">RM 4000</option>
		</select>

		<select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="">Floor Area</option>
		  <option value="200">200 sq.ft</option>
		  <option value="400">400 sq.ft</option>
		  <option value="600">600 sq.ft</option>
		  <option value="800 sq.ft">800</option>
		  <option value="1000 sq.ft">1000</option>
		  <option value="1200 sq.ft">1200</option>
		</select>

		<select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="">Bedrooms</option>
		  <option value="1">1 bedroom</option>
		  <option value="2">2 bedrooms</option>
		  <option value="3">3 bedrooms</option>
		  <option value="4">4 bedrooms</option>
		  <option value="5">5 bedrooms</option>
		</select>

		<select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="">Bathrooms</option>
		  <option value="1">1 bathroom</option>
		  <option value="2">2 bathrooms</option>
		  <option value="3">3 bathrooms</option>
		  <option value="4">4 bathrooms</option>
		  <option value="5">5 bathrooms</option>
		</select>

		<select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="">Bathrooms</option>
		  <option value="1">1 space</option>
		  <option value="2">2 space</option>
		  <option value="3">3 space</option>
		</select>
	  </div>
	</div>
  </div>
  </div>   
         <div v-if="loading" class="flex items-center justify-center pt-10">
    <div style="border-top-color:transparent"
        class="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"></div>
</div>

  <div class="flex flex-col pt-10"> 
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
        
          <table class="overflow-auto min-w-full divide-y divide-gray-200">
    
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Order id
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Tracking number
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  country
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="order in orders_data" :key="order.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ order.full_name }}
                      </div>
                      <div class="text-sm text-gray-500">
                        jane.cooper@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text text-gray-900">{{ order.order_id }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text text-gray-900">
                    {{ order.tracking_number }}1M909190GG401504X <a @click ="toggle_edit(order.id)" class="inline-flex cursor-pointer items-center justify-center w-14 h-14 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
</a>
<div  v-if="edit[order.id]" class="relative text-gray-700 hidden md:block">

  <input v-model="tracking_n[order.id]" class="w-50 h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Tracking Number"/>
  <button @click="toggle_show_tracking" class="relative mt-2 inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700">Save</button>
</div>

<div  v-if="edit[order.id]" class="relative text-gray-700 md:hidden lg:hidden">
  <input v-model="tracking_n[order.id]" class="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Tracking Number"/>
  <button @click="toggle_show_tracking" class="inset-y-0 mt-2 right-0 flex items-center px-4 font-bold text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700">Save</button>
</div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="
                      px-2
                      inline-flex
                      text
                      leading-5
                      font-semibold
                      rounded-full
                      bg-green-100
                      text-green-800
                    "
                  >
                    Shipped
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ order.country }}
                </td>
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-right text-sm
                    font-medium
                  "
                >
                  <a href="#" class="text-indigo-600 hover:text-indigo-900"
                    >Edit</a
                  >
                </td>
              </tr>

              <!-- More people... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <EditTrackingNumber v-if="showEditTracking" @toggle-modal="toggle_show_tracking"/>
</div>
</template>

<script>
import axios from "@/axios";
import EditTrackingNumber from "@/components/EditTrackingNumber.vue";
export default {
  /* eslint-disable */
  name: "AdminOrders",
    components: {
    EditTrackingNumber,
  },
  data: function () {
    return {
      showEditTracking:false,
      search: null,
      exists: false,
      not_found: false,
      orders_data: [],
      countries_filter:[],
      loading:false,
      edit:[],
      tracking_n:[],
    };
  },
  methods: {
    toggle_show_tracking(){
this.showEditTracking=!this.showEditTracking
    },
    toggle_edit(id){
      this.edit[id]=!this.edit[id]

    },
    save_tracking(id){
console.log(this.tracking_n[id])
    },
    async getOrders() {
    this.loading=true
      await this.$store.dispatch("refreshToken");
      let config = {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`
        }
      };

      await axios.get(`/orders/`, config).then((response) => {
        this.orders_data = response.data;
      response.data.forEach(element => {
        if (!this.countries_filter.includes(element.country)){
          this.countries_filter.push(element.country)
        } 
          console.log(this.countries_filter)
        });
      });
      this.loading=false
    }
  },
  mounted() {
    this.getOrders();
  }
};
</script>
