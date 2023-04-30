<template>
  <div>
    <div class="page">
      <router-link to="/" class="search">
        <span><i>11</i>搜索商品,共151413款好物</span>
        <!-- <router-link to="/category/goods-list">进入商品列表页面</router-link> -->
      </router-link>

      <div class="wrap">
        <nav class="left">
          <li v-for="item in left_list" :key="item.id">
            <router-link :to="`/category/goods-list/${item.id}`">
              {{ item.name }}
            </router-link>
          </li>
        </nav>
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
        "/item/cateList.json?csrf_token=1e355578b4254da426007bb196e2cb92&__timestamp=1682671819782&categoryId=11"
      )
      .then((response) => {
        // 侧边栏数据
        this.left_list = response.data.data.categoryL1List;
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
    border-bottom: 1px #ccc solid;
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
  height: calc(100% - 49px);
  .left {
    list-style: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px #ccc solid;
    li {
      padding: 10px 0;
      text-align: center;
      a {
        width: 18vw;
        padding: 0 10px;
        text-decoration: none;
        color: #000;
      }
      .router-link-exact-active {
        position: relative;
        color: #ab2d2b;
        &::before {
          position: absolute;
          content: "";
          left: 0;
          top: 0;
          width: 2px;
          height: 100%;
          background: #ab2d2b;
        }
      }
    }
  }
}
</style>