import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AdminLogin from "../views/AdminLogin.vue";
import Admin from "../views/Admin.vue";
import ProductDetail from "../views/ProductDetail.vue";
import CheckoutPage from "../views/CheckoutPage.vue";
import Billing from "../views/Billing.vue";
import PaymentSuccessful from "../views/PaymentSuccessful.vue";
import Order from "../views/Order.vue";
import AdminOrders from "../views/AdminOrders.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/admin-login",
    name: "AdminLogin",
    component: AdminLogin,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      requiresLogin: true,
    },
  },
  {
    path: "/product/:id",
    name: "product",
    component: ProductDetail,
  },
  {
    path: "/checkout/",
    name: "checkout",
    component: CheckoutPage,
  },
  {
    path: "/billing/",
    name: "billing",
    component: Billing,
  },
  {
    path: "/payment_successful/",
    name: "paymentsuccessful",
    component: PaymentSuccessful,
  },
  {
    path: "/order/",
    name: "order",
    component: Order,
  },
  {
    path: "/admin_order/",
    name: "adminOrder",
    component: AdminOrders,
    meta: {
      requiresLogin: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
