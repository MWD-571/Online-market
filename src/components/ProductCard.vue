<template>
  <div class="product-card p-5 rounded bg-white shadow-sm w-[300px]">
    <div class="image">
      <img
        class="h-[250px] w-full object-cover rounded"
        src="https://images.uzum.uz/cia47ib6edfostihhq40/t_product_540_high.jpg#1697896756530"
        alt="product-image"
      />
    </div>
    <div class="text-content">
      <h3 class="product-name text-xl text-dark-800 my-4">Product name</h3>
      <p class="product-description text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        amet deserunt itaque suscipit accusamus a, neque soluta accusantium
        reiciendis harum?
      </p>
      <div class="price">
        <p class="text-cyan-800 font-bold my-2 text-xl">$5600</p>
      </div>
    </div>
    <div class="actions flex gap-3">
      <button class="btn edit bg-yellow-500">
        <i class="fa-solid fa-pen-to-square"></i>
        <span class="ml-2">Edit</span>
      </button>
      <button class="btn delete bg-red-500">
        <i class="fa-solid fa-trash"></i>
        <span class="ml-2">Delete</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.btn {
  @apply py-2 text-white font-semibold w-1/2 rounded hover:opacity-80;
}
</style>
