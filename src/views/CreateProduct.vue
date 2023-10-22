<template>
  <main class="container py-[50px]">
    <div class="head flex justify-between items-center">
      <h2 class="text-3xl text-gray-700">SuperMarket</h2>
      <button
        class="btn py-2 px-7 bg-blue-600 text-white rounded hover:opacity-80"
        @click="$router.push({ name: 'home' })"
      >
        <i class="fa-solid fa-home mr-2"></i>
        <span>Home</span>
      </button>
    </div>
    <form
      class="form w-full max-w-[400px] mx-auto p-5 rounded bg-white shadow"
      @submit.prevent="createProduct"
    >
      <h3 class="text-xl mb-2">New product</h3>
      <div class="form-control mb-3">
        <label class="inline-block w-full text-sm text-gray-400" for="name"
          >Product name</label
        >
        <input
          class="input"
          type="text"
          id="name"
          autocomplete="off"
          v-model.trim="product.name"
        />
        <p class="error-message text-xs text-red-400" v-if="errors.name">
          {{ errors.name }}
        </p>
      </div>
      <div class="form-control mb-3">
        <label
          class="inline-block w-full text-sm text-gray-400"
          for="description"
          >Product description</label
        >
        <input
          class="input"
          type="text"
          id="description"
          autocomplete="off"
          v-model.trim="product.description"
        />
        <p class="error-message text-xs text-red-400" v-if="errors.description">
          {{ errors.description }}
        </p>
      </div>
      <div class="form-control mb-3">
        <label class="inline-block w-full text-sm text-gray-400" for="price"
          >Product price</label
        >
        <input
          class="input"
          type="text"
          id="price"
          autocomplete="off"
          v-model.number="product.price"
        />
        <p class="error-message text-xs text-red-400" v-if="errors.price">
          {{ errors.price }}
        </p>
      </div>
      <div class="form-control mb-3">
        <label class="inline-block w-full text-sm text-gray-400" for="image"
          >Product image</label
        >
        <input
          class="input"
          type="text"
          id="image"
          autocomplete="off"
          v-model.trim="product.image"
        />
        <p class="error-message text-xs text-red-400" v-if="errors.image">
          {{ errors.image }}
        </p>
      </div>
      <div class="actions flex justify-end">
        <button class="btn px-5 py-2 text-white bg-blue-500 rounded">
          <i class="fa-solid fa-plus mr-2"></i>
          <span>Create</span>
        </button>
      </div>
    </form>
  </main>
</template>
<script>
export default {
  data() {
    return {
      errors: {
        name: "",
        description: "",
        price: "",
        image: "",
      },
      product: {
        name: "",
        description: "",
        price: "",
        image: "",
      },
    };
  },
  computed: {
    isValid() {
      if (
        !this.errors.name &&
        !this.errors.description &&
        !this.errors.price &&
        !this.errors.image
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    product: {
      handler(newValue) {
        if (newValue.name.length < 4) {
          this.errors.name = "Minimum length is 4 words";
        } else if (newValue.name.length > 15) {
          this.errors.name = "At least no more than 15 characters";
        } else {
          this.errors.name = "";
        }
        if (newValue.description.length < 4) {
          this.errors.description = "Minimum length is 4 words";
        } else if (newValue.description.length > 50) {
          this.errors.description = "At least no more than 50 characters";
        } else {
          this.errors.description = "";
        }
        if (newValue.price.length < 1) {
          this.errors.price = "Minimum length is 1";
        } else if (typeof newValue.price !== "number") {
          this.errors.price = "Write here only numbers";
        } else {
          this.errors.price = "";
        }
        const httpRegex =
          /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
        if (newValue.image.length < 1) {
          this.errors.image = "Minimum length is 1";
        } else if (httpRegex.test(newValue.image)) {
          this.errors.image = "Enter here correct URL";
        } else {
          this.errors.image = "";
        }
      },
      deep: true,
    },
  },
  methods: {
    createProduct() {
      this.isValid();
    },
  },
};
</script>
<style>
.input {
  @apply inline-block w-full rounded p-2 shadow outline-blue-400;
}
</style>
