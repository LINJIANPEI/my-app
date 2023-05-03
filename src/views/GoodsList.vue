<template>
  <div class="page subpage">
    <header>
      <div class="header">
        <div>
          <i @click="$router.back()">返回</i>
        </div>
        <h3>网易严选</h3>
        <div>
          <i class="iconfont icon-fangdajing"></i>
          <i class="iconfont icon-gouwuche"></i>
        </div>
      </div>
      <nav ref="dd">
        <li
          v-for="item in top_list"
          :key="item.id"
          :class="item.id == obj.id ? 'active' : ''"
          :ref="item.id == obj.id ? 'cc' : ''"
          @click="request(item.id)"
        >
          <!-- <router-link to="ii">{{ item.name }}</router-link> -->
          {{ item.name }}
        </li>
      </nav>
    </header>
    <main>
      <h2>{{ obj.name }}</h2>
      <div class="content">
        <router-link
          :to="`/category/Goods/${item.id}`"
          v-for="item in list"
          :key="item.id"
          class="box"
        >
          <img :src="item.listPicUrl" alt="" />
          <p class="title">
            <img
              src="https://yanxuan.nosdn.127.net/static-union/16698631101bcf18.png"
              alt=""
            />
            {{ item.name }}
          </p>
          <p class="price">
            ￥<span>{{ item.retailPrice }}</span>
          </p>
          <p v-if="item.finalPriceInfoVO.banner != null" class="info">
            <span>{{ item.finalPriceInfoVO.banner.title }}</span>
            {{ item.finalPriceInfoVO.banner.content }}
          </p>
        </router-link>
      </div>
    </main>

    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import axios from "axios";
import "../assets/iconfont/iconfont.css";
export default {
  data() {
    return {
      top_list: [],
      obj: {},
      list: [],
    };
  },
  methods: {},
  created() {
    this.request(this.$route.params.id);
  },
  methods: {
    async request(id) {
      this.obj.id = id;
      await axios
        .get(
          `/item/list.json?csrf_token=1e355578b4254da426007bb196e2cb92&__timestamp=1682671819782&categoryId=${this.$route.params.index}&subCategoryId=${id}&categoryType=0`
        )
        .then((response) => {
          console.log(response.data.data);
          this.obj = response.data.data.categoryItems.category;
          this.top_list = response.data.data.categoryL2List;
          this.list = response.data.data.categoryItems.itemList;
        });
    },
  },
  updated() {
    // console.log(this.$refs.dd.scrollWidth);
    // console.log(this.$refs.cc[0].offsetLeft);
    this.$refs.dd.scrollLeft = this.$refs.cc[0].offsetLeft;
    // this.$refs.cc[0].scrollIntoView(true, {
    //   behavior: "smooth", // 平滑过渡
    //   inline: "start", // 上边框与视窗顶部平齐。默认值
    // });
  },
};
</script>

<style lang="scss" scoped>
.page {
  height: 100%;
  background: #eeeeee;
  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    .header {
      box-sizing: border-box;
      width: 100%;
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
      height: 40px;
      border-bottom: 1px solid #dfdfdf;
      align-items: center;
      list-style: none;
      overflow: auto;
      background: #fff;
      scroll-behavior: smooth;
      &::-webkit-scrollbar {
        display: none;
      }
      // .router-link-exact-active {
      //   color: red;
      //   position: relative;
      //   &::before {
      //     content: "";
      //     position: absolute;
      //     bottom: 0;
      //     left: 0;
      //     width: 100%;
      //     height: 2px;
      //     background: red;
      //   }
      // }
      .active {
        color: red;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: red;
        }
      }
      li {
        margin: 0 auto;
        text-align: center;
        white-space: nowrap;
        // padding: 0 20px;
        padding: 10px 20px;
        &:not(:only-child) {
          float: left;
        }
        // a {
        //   display: block;
        //   width: 100%;
        //   height: 100%;
        //   padding: 10px 2px;
        //   color: #000;
        //   text-decoration: none;
        // }
      }
    }
  }
  main {
    height: calc(100% - 100px);
    overflow: auto;
    margin-top: 100px;
    background: #fff;
    &::-webkit-scrollbar {
      display: none;
    }
    h2 {
      text-align: center;
      font-size: 1rem;
      padding: 10px 0;
    }
    .content {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      .box {
        text-decoration: none;
        color: #000;
        margin-left: 4vw;
        width: 44vw;
        display: flex;
        flex-direction: column;
        padding: 20px 0;
        img {
          width: 100%;
          // border-radius: 15px;
        }
        .title {
          font-size: 14px;
          img {
            width: 14px;
            height: 14px;
          }
        }
        .price {
          color: red;
          font-size: 12px;
          padding: 5px 0;
          span {
            font-size: 18px;
            font-weight: 800;
          }
        }
        .info {
          background: #ffe9eb;
          border-radius: 24px;
          font-size: 12px;
          color: red;
          padding: 2px 0;
          span {
            color: #fff;
            padding: 2px 5px;
            border-radius: 24px;
            background: red;
          }
        }
      }
    }
  }
}
</style>