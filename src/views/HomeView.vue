<template>
  <main class="container py-[50px]">
    <div class="head flex justify-between items-center">
      <h2 class="text-3xl text-gray-700">SuperMarket</h2>
      <div class="">
        <button
          class="btn py-2 mr-2 px-7 bg-yellow-400 text-white rounded hover:opacity-80"
          @click="showCart = true"
        >
          <i class="fa-solid fa-cart-shopping mr-2"></i>
          <span>Go to cart</span>
        </button>
        <button
          class="btn py-2 px-7 bg-blue-600 text-white rounded hover:opacity-80"
          @click="$router.push({ name: 'create-product' })"
        >
          <i class="fa-solid fa-plus mr-2"></i>
          <span>Add new</span>
        </button>
      </div>
    </div>
    <div class="wrapper flex flex-wrap justify-center gap-4 mt-5">
      <ProductCardSkeletonVue v-for="i in 8" :key="i" v-if="!products.length" />
      <ProductCard
        v-else
        v-for="item in products"
        :key="item.id"
        :products="item.data"
        @delete="productDelete = item.id"
        @edit="$router.push({ name: 'edit-product', params: { id: item.id } })"
        @cart="addToCart(item.id, item.data)"
      />
    </div>
    <PopupVue :show="productDelete">
      <div class="">
        <h3 class="text-2xl font-semibold text-center pb-5">Are you sure ?</h3>
      </div>
      <div class="actions flex gap-2">
        <button
          class="btn py-2 text-sm bg-slate-500 text-white w-1/2 rounded hover:opacity-80"
          @click="productDelete = null"
        >
          Cancel
        </button>
        <button
          class="btn py-2 text-sm bg-red-500 text-white w-1/2 rounded hover:opacity-80"
          @click="deleteProduct(productDelete)"
        >
          Delete
        </button>
      </div>
    </PopupVue>
    <CurtainPopupVue :show="showCart" @close="showCart = false">
      <div class="wrapper p-5">
        <h2 class="text-2xl font-semibold mb-5">Your Carts</h2>
        <div
          class="cart-item p-3 mb-2 shadow"
          v-for="item in cartItems"
          :key="item.cart_Id"
        >
          {{ item.data.name }}
        </div>
      </div>
    </CurtainPopupVue>
  </main>
</template>
<script>
import https from "../axios.config";
import { useToast } from "vue-toastification";
import PopupVue from "../components/Popup.vue";
import ProductCard from "../components/ProductCard.vue";
import ProductCardSkeletonVue from "../components/ProductCardSkeleton.vue";
import CurtainPopupVue from "../components/CurtainPopup.vue";
export default {
  data() {
    return {
      productDelete: null,
      products: [],
      cartItems: [],
      toast: useToast(),
      showCart: false,
    };
  },
  methods: {
    async fectProducts() {
      const response = await https.get("/products.json");
      const productList = [];
      Object.keys(response.data).forEach((key) => {
        productList.push({ id: key, data: response.data[key] });
      });
      this.products = productList;
    },
    async deleteProduct(id) {
      if (!id) return;
      await https.delete("/products/" + id + ".json");
      this.productDelete = null;
      this.fectProducts();
      this.toast.error("Your product has been created");
    },
    async addToCart(id, product) {
      const item = this.cartItems.find((product) => product.product_id === id);
      if (item) {
        this.toast.warning(
          product.name + " this product is already available !"
        );
        return;
      }
      const response = await https.post("/cart.json", {
        id: id,
        data: product,
      });
      this.toast.info(product.name + " product has been added to cart !");
      this.fetchCartItems();
    },
    async fetchCartItems() {
      const response = await https.get("/cart.json");
      const items = [];
      Object.keys(response.data).forEach((key) => {
        items.push({
          cart_Id: key,
          product_id: response.data[key].id,
          data: response.data[key].data,
        });
      });
      this.cartItems = items;
      this.fectProducts();
    },
  },
  mounted() {
    this.fectProducts();
    this.fetchCartItems();
  },
  components: {
    ProductCard,
    ProductCardSkeletonVue,
    PopupVue,
    CurtainPopupVue,
  },
};
</script>
