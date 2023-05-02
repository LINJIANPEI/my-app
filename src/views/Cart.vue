<template>
  <div class="page">
    购物车的内容
    {{ cartData }}
    <button @click="addAction">按钮</button>
  </div>
</template>

<script>
export default {
  computed: {
    cartData() {
      return this.$root.cartList;
    },
  },
  methods: {
    addAction() {
      this.$root.cartList.push(4);
    },
  },
};
</script>

<style>
</style>