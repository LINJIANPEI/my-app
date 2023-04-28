<template>
<div>
  <div class="page">
    分类的内容
    <router-link to="/category/goods-list">进入商品列表页面</router-link>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
import axios from 'axios'
export default {
  created(){
    axios.get('/item/cateList.json?csrf_token=1e355578b4254da426007bb196e2cb92&__timestamp=1682671819782&categoryId=1005000')

    .then(response=>{
      // 侧边栏数据
      console.log(response.data.data.categoryL1List);

      // 分类列表数据
      console.log(response.data.data.categoryGroupList);
    })
  }
}
</script>

<style>

</style>