<template>
  <div class="product-card p-5 rounded bg-white shadow-sm w-[300px]">
    <div class="image">
      <Skeleton class="h-[250px] w-full object-cover rounded" />
    </div>
    <div class="text-content">
      <h3 class="product-name text-xl text-dark-800 my-4">
        <Skeleton class="h-[40px] w-[80%] rounded" />
      </h3>
      <p class="product-description text-gray-600">
        <Skeleton class="w-[70%] h-[20px] rounded" />
      </p>
      <div class="price">
        <p class="text-cyan-800 font-bold my-2 text-xl">
          <Skeleton class="w-[40%] h-[30px] rounded" />
        </p>
      </div>
    </div>
    <div class="actions flex gap-3">
      <Skeleton class="w-1/2 h-[40px] rounded" />
      <Skeleton class="w-1/2 h-[40px] rounded" />
    </div>
  </div>
</template>
<script>
import Skeleton from "./Skeleton.vue";
export default {
  components: { Skeleton },
};
</script>
<style scoped>
.btn {
  @apply py-2 text-white font-semibold w-1/2 rounded hover:opacity-80;
}
</style>
