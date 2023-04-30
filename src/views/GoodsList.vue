<template>
  <!-- <div class="page subpage"> -->
  <!-- <div class="">
    <button @click="$router.back()">返回</button>
    商品列表页面
  </div> -->
  <div class="right">
    <div v-for="item in right_list" :key="item.id">
      <h2>{{ item.name }}</h2>
      <div class="box_wrap">
        <router-link
          :to="items"
          class="box"
          v-for="items in item.categoryList"
          :key="items.id"
        >
          <img :src="items.wapBannerUrl" alt="" />
          <p>{{ items.name }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      right_list: [],
    };
  },
  created() {
    axios
      .get(
        `/item/cateList.json?csrf_token=1e355578b4254da426007bb196e2cb92&__timestamp=1682671819782&categoryId=${this.$route.params.id}`
      )
      .then((response) => {
        console.log(response.data.data);
        this.right_list = response.data.data.categoryGroupList;
      });
  },
};
</script>

<style lang="scss" scoped>
.right {
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 4vw;
  h2 {
    font-size: 4vw;
    border-bottom: 1px #ccc solid;
    padding: 5px 0;
  }
  .box_wrap {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 1;
    .box {
      text-decoration: none;
      color: #000;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: calc(100% / 3);
      margin-bottom: 14px;
      img {
        width: 80%;
      }
      p {
        font-size: 14px;
      }
    }
  }
}
</style>