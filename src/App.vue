<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: none;
  .page {
    position: absolute;
    top: 0;
    left: 0;
    /* 隔开tabbar的位置 */
    bottom: 49px;
    width: 100%;
    background: #fff;
  }
  .subpage {
    bottom: 0;
    z-index: 10;
  }
}
</style>
