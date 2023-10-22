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
      <ProductCard v-for="item in 10" :key="item" />
    </div>
  </main>
</template>
<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    ProductCard,
  },
};
</script>
<style></style>

ProductCard
