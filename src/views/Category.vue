<template>
  <div>
    <div class="page">
      <router-link to="/" class="search">
        <span><i>11</i>搜索商品,共151413款好物</span>
        <!-- <router-link to="/category/goods-list">进入商品列表页面</router-link> -->
      </router-link>

      <div class="wrap">
        <nav class="left">
          <li
            v-for="item in left_list"
            :key="item.id"
            @click="request(item.id)"
          >
            <div :class="item.id == index ? 'active' : ''">
              {{ item.name }}
            </div>
          </li>
        </nav>

        <ScrollView>
          <div class="right">
            <div class="banner"><img :src="banner" alt="" /></div>
            <div v-for="item in right_list" :key="item.id">
              <h2 v-if="item.name">{{ item.name }}</h2>
              <div class="box_wrap">
                <router-link
                  :to="`/category/goods-list/${items.id}`"
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
        </ScrollView>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ScrollView from "@/components/ScrollView.vue";
import axios from "axios";
export default {
  data() {
    return {
      left_list: [],
      index: 11,
      right_list: [],
      banner: "",
    };
  },
  components: {
    ScrollView,
  },
  methods: {
    request(index) {
      this.index = index;
      axios
        .get(
          `/item/cateList.json?csrf_token=1e355578b4254da426007bb196e2cb92&__timestamp=1682671819782&categoryId=${index}`
        )
        .then((response) => {
          // 侧边栏数据
          this.left_list = response.data.data.categoryL1List;
          this.banner = response.data.data.currentCategory.bannerList[0].picUrl;
          this.right_list = response.data.data.categoryGroupList;
        });
    },
  },
  created() {
    this.request(this.index);
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
      padding: 15px 0;
      text-align: center;
      div {
        width: 18vw;
        padding: 5px 10px;
        text-decoration: none;
        color: #000;
      }
      .active {
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
  .right {
    width: 100%;
    // flex: 1;
    box-sizing: border-box;
    padding: 4vw;
    .banner {
      width: 100%;
      height: 100px;
      margin-bottom: 15px;
      img {
        width: 100%;
        height: 100%;
      }
    }
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
}
</style>