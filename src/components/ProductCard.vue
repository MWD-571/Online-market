<template>
  <div class="product-card p-5 rounded bg-white shadow-sm w-[300px]">
    <div class="image">
      <img
        class="h-[250px] w-full object-cover rounded"
        :src="products.image"
        :alt="products.name"
      />
    </div>
    <div class="text-content">
      <h3 class="product-name text-xl text-dark-800 my-4">
        {{ products.name }}
      </h3>
      <p class="product-description text-gray-600">
        {{ products.description }}
      </p>
      <div class="price">
        <p class="text-cyan-800 font-bold my-2 text-xl">
          ${{ products.price }}
        </p>
      </div>
    </div>
    <div class="actions flex gap-3">
      <button class="btn delete bg-blue-500" @click="$emit('cart')">
        <i class="fa-solid fa-cart-shopping"></i>
        <span class="ml-2">Cart</span>
      </button>
      <button class="btn edit bg-yellow-400" @click="$emit('edit')">
        <i class="fa-solid fa-pen-to-square"></i>
        <span class="ml-2">Edit</span>
      </button>
      <button class="btn delete bg-red-500" @click="$emit('delete')">
        <i class="fa-solid fa-trash"></i>
        <span class="ml-2">Delete</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    products: {
      type: Object,
      default: {},
    },
  },
};
</script>
<style scoped>
.btn {
  @apply py-2 text-white font-semibold w-1/3 rounded hover:opacity-80;
}
</style>
