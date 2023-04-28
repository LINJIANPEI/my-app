<template>
  <div id="container">
    <router-view></router-view>
    <TabBar />
  </div>
</template>

<script>
import TabBar from "./components/TabBar.vue";
export default {
  components: {
    TabBar,
  },
};
</script>
