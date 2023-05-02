<template>
  <div class="page subpage">
    <div class="header">
      <div>
        <i @click="$router.back()">返回</i>
      </div>
      <h3>网易严选</h3>
      <div>
        <i>1</i>
        <i>2</i>
      </div>
    </div>
    <nav>
      <li v-for="item in top_list" :key="item.id"></li>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      top_list: [],
    };
  },
  methods: {},
  created() {
    axios
      .get(
        `/item/list.json?csrf_token=1e355578b4254da426007bb196e2cb92&__timestamp=1682671819782&categoryId=${this.$route.params.index}&subCategoryId=${this.$route.params.id}&categoryType=0`
      )
      .then((response) => {
        console.log(response.data.data);
      });
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 49px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
  padding: 0 20px;
  border-bottom: 1px solid #dfdfdf;
  div {
    width: 15vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>