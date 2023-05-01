<template>
  <div id="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import Iscroll from "@/assets/js/iscroll-probe";
export default {
  name: "ScrollView",
  mounted() {
    this.iscroll = new Iscroll(this.$refs.wrapper, {
      mouseWheel: true,
      interactiveScrollbars: true,
      bounceEasing: "elastic",
    });
    let observer = new MutationObserver((mutationList, observer) => {
      this.iscroll.refresh();
    });
    const config = {
      childList: true, // 观察目标子节点的变化，添加或者删除
      subtree: true, // 默认为 false，设置为 true 可以观察后代节点
      attributeFilter: ["height", "offsetHeight"], // 观察特定属性
    };
    observer.observe(this.$refs.wrapper, config);
  },
};
</script>

<style lang="scss" scoped>
#wrapper {
  position: relative;
  overflow: hidden;
}
</style>