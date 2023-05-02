<template>
  <div class="wrapper" ref="wrapper">
    <div class="wrappers">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Iscroll from "@/assets/js/iscroll-master/build/iscroll-probe";
export default {
  name: "ScrollView",
  mounted() {
    this.iscroll = new Iscroll(this.$refs.wrapper, {
      mouseWheel: true,
      interactiveScrollbars: true,
      bounceEasing: "elastic",
      probeType: 2,
    });
  },
  methods: {
    scrolling() {
      this.iscroll.scrollTo(0, 0, 0);
      setTimeout(() => {
        this.iscroll.refresh();
      }, 1000);
    },
  },
  updated() {
    this.$nextTick(this.scrolling());
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100%;

  .wrappers {
    min-height: calc(100% + 1px);
  }
}
</style>