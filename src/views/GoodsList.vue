<template>
  <div class="page subpage">
    <button @click="$router.back()">返回</button>
    商品列表页面
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {},
  methods: {},
  created() {
    console.log(this.$route.params);
  },
};
</script>

<style lang="scss" scoped>
</style>