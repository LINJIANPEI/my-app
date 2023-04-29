<template>
  <div>
    <div class="page">
      <router-link to="/" class="search">
        <span><i>11</i>搜索商品,共151413款好物</span>
        <!-- <router-link to="/category/goods-list">进入商品列表页面</router-link> -->
      </router-link>
      <div class="wrap">
        <div class="left">
          <router-link :to="item" v-for="item in left_list" :key="item.id">
            {{ item.name }}
          </router-link>
        </div>

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      left_list: [],
      right_list: [],
    };
  },
  created() {
    axios
      .get(
        "/item/cateList.json?csrf_token=1e355578b4254da426007bb196e2cb92&__timestamp=1682671819782&categoryId=1005000"
      )
      .then((response) => {
        // 侧边栏数据
        this.left_list = response.data.data.categoryL1List;
        console.log(response.data.data.categoryL1List);
        // 分类列表数据
        console.log(response.data.data.categoryGroupList);
      });
  },
};
</script>

<style lang="scss" scoped>
.page {
  .search {
    display: block;
    width: 100vw;
    padding: 2vw;
    text-decoration: none;
    box-sizing: border-box;
    span {
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 8vw;
      background: #ededed;
      color: #7a6670;
    }
  }
}
.wrap {
  display: flex;
  border: 1px red solid;
  .left {
    width: 18vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px red solid;

    a {
      display: block;
      width: 100%;
      height: 100%;
      padding: 10px 0;
      text-align: center;
      box-sizing: border-box;
      text-decoration: none;
      color: #000;
    }
  }
  .right {
    flex: 1;
  }
}
</style>