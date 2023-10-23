<template>
  <main class="container py-[50px]">
    <div class="head flex justify-between items-center">
      <h2 class="text-3xl text-gray-700">SuperMarket</h2>
      <button
        class="btn py-2 px-7 bg-blue-600 text-white rounded hover:opacity-80"
        @click="$router.push({ name: 'create-product' })"
      >
        <i class="fa-solid fa-plus mr-2"></i>
        <span>Add new</span>
      </button>
    </div>
    <div class="wrapper flex flex-wrap justify-center gap-4 mt-5">
      <ProductCardSkeletonVue v-for="i in 8" :key="i" v-if="!products.length" />
      <ProductCard
        v-else
        v-for="item in products"
        :key="item.id"
        :products="item.data"
        @delete="productDelete = item.id"
      />
    </div>
    <PopupVue :show="productDelete">
      <div class="actions flex gap-2">
        <button
          class="btn py-2 text-sm bg-slate-500 text-white w-1/2 rounded hover:opacity-80"
          @click="productDelete = null"
        >
          Cancel
        </button>
        <button
          class="btn py-2 text-sm bg-red-500 text-white w-1/2 rounded hover:opacity-80"
        >
          Delete
        </button>
      </div>
    </PopupVue>
  </main>
</template>
<script>
import https from "../axios.config";
import PopupVue from "../components/Popup.vue";
import ProductCard from "../components/ProductCard.vue";
import ProductCardSkeletonVue from "../components/ProductCardSkeleton.vue";
export default {
  data() {
    return {
      productDelete: null,
      products: [],
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
  },
  mounted() {
    this.fectProducts();
  },
  components: {
    ProductCard,
    ProductCardSkeletonVue,
    PopupVue,
  },
};
</script>
