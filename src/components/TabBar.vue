<template>
  <nav class="tab-bar">
    <router-link
      class="tab-item"
      v-for="item in list"
      :key="item.text"
      :to="item.path"
    >
      <!-- <img :src="item.selectedIcon" v-if="currentPath === item.path" />
      <img :src="item.icon" v-else /> -->
      <i
        class="icon"
        :style="
          currentPath === item.path
            ? `background-position: ${item.selectedIcon[0]}px ${item.selectedIcon[1]}px`
            : `background-position: ${item.icon[0]}px ${item.icon[1]}px`
        "
      ></i>

      <span>{{ item.text }}</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          text: "分类",
          selectedIcon: [0, -30],
          icon: [-30, -30],
          path: "/category",
        },
        {
          text: "购物车",
          selectedIcon: [0, 0],
          icon: [-30, 0],
          path: "/cart",
        },
        {
          text: "我的",
          selectedIcon: [-60, -60],
          icon: [-90, 0],
          path: "/center",
        },
      ],
    };
  },
  computed: {
    //获取当前的路由地址
    currentPath() {
      return this.$route.path;
    },
  },
  methods: {
    btnAction() {
      // console.log(this.$router);//获取当前的整个路由对象
      // console.log(this.$route); //当前路由的信息
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-bar {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 49px;
  display: flex;
  border-top: 1px solid #eee;
  .tab-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    flex-direction: column;
    font-size: 12px;
    text-decoration: none;
    img {
      width: 32px;
    }
    .icon {
      background-image: url("@/assets/icon/tab.png");
      display: inline-block;
      vertical-align: middle;
      width: 30px;
      height: 30px;
      background-repeat: no-repeat;
      background-size: calc(30px * 4) calc(30px * 3);
      // background-position: 0 0;
    }

    span {
      color: #000;
    }
    .router-link-active {
      color: red;
    }
  }
}
</style>
