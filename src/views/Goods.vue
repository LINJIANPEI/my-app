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
    </header>
    <!-- 轮播图1 -->
    <div class="wrap">
      <div class="swiper rotograph">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in swiper"
            :key="index"
          >
            <img class="swiper-img" :src="item" alt="" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
      </div>
      <!-- 特价 -->
      <div class="special-price">
        <p>{{ alldata.promotionDesc }}</p>
        <!-- 现价 -->
        <div class="current-price">
          <span>￥</span>
          <span>{{ obj.basicPrice }}</span>
        </div>
        <!-- 原价 -->
        <div class="original-price">
          <span>￥</span>
          <span>{{
            obj.finalPrice ? obj.finalPrice.price : alldata.counterPrice
          }}</span>
        </div>
      </div>
      <!--  -->
      <div class="m-detailBaseInfo">
        <!-- 会员 -->
        <div class="spmc-banner" v-show="alldata.spmcBanner">
          <div class="spmcPrice">
            <img
              src="https://yanxuan.nosdn.127.net/08252a1e8acffc6e34e57e552bd1f5f2.png"
              alt=""
            />
            <span>{{
              alldata.spmcBanner ? alldata.spmcBanner.spmcDesc : ""
            }}</span>
            <span
              >￥{{
                alldata.spmcBanner ? alldata.spmcBanner.spmcPrice : ""
              }}</span
            >
            <i class="iconfont icon-tishi"></i>
          </div>
          <p>开通</p>
        </div>
        <!-- 商品信息 -->
        <div class="baseInfo">
          <div class="info">
            <div class="name">{{ alldata.name }}</div>
            <div class="simpleBrandInfo">
              <span class="span1" v-show="obj.ownType">自营</span>
              <img :src="obj.logoUrl" alt="" />
              <span class="span2">{{ obj.title }}</span>
            </div>
            <span>推荐理由</span>
          </div>
          <div class="comment" v-show="alldata.goodCmtRate">
            <p>
              <span> {{ alldata.goodCmtRate }}</span>
              <span>好评率</span>
            </p>
            <span>></span>
          </div>
        </div>
        <!-- 推荐理由 -->
        <div class="rcmdBanner">
          <ul>
            <li v-for="(item, index) in alldata.recommendReason" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <!--  -->
      <div class="information">
        <ul class="ul">
          <!-- 邮费 -->
          <li class="item1 li">
            {{ obj.postage_name }}：{{ obj.postage_content }}
            <i class="iconfont icon-dayuhao"></i>
          </li>
          <!-- 促销 -->
          <!-- <div class="item2">
                    <span>促销：</span>
                    <div>
                        <span class="span1">{{ this.obj.activityType }}</span>
                        <p>
                            <span>{{ this.obj.activity_name }}</span>
                            <span>{{ this.obj.promLimitDesc }}</span>
                        </p>
                    </div>
                    <i class="iconfont icon-dayuhao"></i>
                </div> -->
          <!-- 购物返 -->
          <li class="item3 li" v-show="alldata.shoppingReward">
            {{ obj.shoppingReward_name }}：{{ obj.rewardDesc
            }}<span>{{ obj.rewardValue }}</span>
            <i class="iconfont icon-dayuhao"></i>
          </li>
          <!-- 选择商品 -->
          <li class="item4 li" @click="btn">
            请选择规格数量
            <i class="iconfont icon-dayuhao"></i>
          </li>
          <!-- 地址 -->
          <li class="item5 li">
            配送：<span style="color: #ccc">请选择配送地址</span>
            <i class="iconfont icon-dayuhao"></i>
          </li>
          <!-- 备注 -->
          <li class="item6 li" v-show="obj.remarkTitle">
            {{ this.obj.remarkTitle }}
            <i class="iconfont icon-dayuhao"></i>
          </li>
          <!-- 服务 -->
          <li class="item7 li">
            <span>服务：</span>
            <ul class="item7-ul">
              <li v-for="(item, index) in service" :key="index">
                {{ item.title }}
              </li>
            </ul>
            <i class="iconfont icon-dayuhao"></i>
          </li>
        </ul>
      </div>
      <!-- 手动隔开--颜色 -->
      <div class="sb"></div>
      <!-- 轮播图2 -->
      <div class="swiper adBanners">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in swiper1"
            :key="index"
          >
            <img class="swiper1-img" :src="item.picUrl" alt="" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
      </div>
      <div class="sb"></div>
      <!-- 评论 -->
      <div class="review" v-show="alldata.commentCount">
        <div class="div1">
          <p>
            <span
              >用户评论({{
                alldata.commentCount ? alldata.commentCount : ""
              }})</span
            >
            <span>好评率</span>
            <span>{{ alldata.commentCount ? alldata.goodCmtRate : "" }}</span>
          </p>
          <i class="iconfont icon-dayuhao"></i>
        </div>
        <div class="div2">
          <h2>
            <img :src="obj.frontUserAvatar" alt="" />
            <span>{{
              alldata.commentCount ? alldata.comments[0].frontUserName : ""
            }}</span>
          </h2>
          <p class="p1">
            <span>{{ alldata.commentCount ? timestampToTime : "" }}</span
            >{{ alldata.commentCount ? specification11 : "" }}
          </p>
          <p class="p2">
            {{ alldata.commentCount ? alldata.comments[0].content : "" }}
          </p>
          <div>
            <img
              v-for="(item, index) in alldata.commentCount
                ? alldata.comments[0].picList
                : ''"
              :key="index"
              :src="item"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="sb"></div>
      <!-- 网易严选 -->
      <div class="m-brandInfo">
        <div class="left">
          <img :src="obj.logo1" alt="" />
        </div>
        <div class="right">
          <p>
            <span>{{ obj.brandInfo_title }}</span>
            <i class="iconfont icon-dayuhao"></i>
          </p>
          <p>{{ obj.brandInfo_desc }}</p>
        </div>
      </div>
      <div class="sb"></div>
      <!-- 商品参数 -->
      <div class="arguments">
        <div class="arguments-title">商品参数</div>
        <div
          class="arguments-list"
          v-for="(item, index) in alldata.attrList"
          :key="index"
        >
          <p class="arguments-left">{{ item.attrName }}</p>
          <p class="arguments-right">{{ item.attrValue }}</p>
        </div>
      </div>
      <!-- html结构--图片 -->
      <div class="detailHtml" v-html="content.detailHtml"></div>
      <!-- 懒得给底部以上标签添加bottom：50px -->
      <div style="height: 50px"></div>
      <!-- 底部 -->
      <footer>
        <p><i style="font-size: 20px" class="iconfont icon-kefu"></i></p>
        <p>立即购买</p>
        <p>加入购物车</p>
      </footer>
      <!-- 购物车弹窗 -->
      <div class="car-popover" :class="{ btn: type }">
        <div class="head">
          <span class="x" @click="btn">X</span>
          <img
            :src="
              alldata.skuSpecList[0].skuSpecValueList[0].picUrl
                ? alldata.skuSpecList[0].skuSpecValueList[0].picUrl
                : alldata.primaryPicUrl
            "
            alt=""
          />
          <!-- 特价 -->
          <div class="right">
            <span class="right-title">{{ alldata.promotionDesc }}</span>
            <div class="right-price">
              <!-- 现价 -->
              <div class="current-price">
                <span>价格：￥{{ obj.basicPrice }}</span>
              </div>
              <!-- 原价 -->
              <div class="original-price">
                <span
                  >￥{{
                    obj.finalPrice ? obj.finalPrice.price : alldata.counterPrice
                  }}</span
                >
              </div>
            </div>
            <p>已选择:<span>请选择规格数量</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swiper from "swiper/swiper-bundle.esm.js";
import "swiper/swiper-bundle.min.css";
import "../assets/iconfont/iconfont.css";
// import '../assets/css/base.css'
export default {
  name: "Goods",
  data() {
    return {
      //轮播图1
      swiper: [],

      //轮播图2
      swiper1: [],

      //html结构
      content: {},

      //所有数据
      alldata: [],

      //服务
      service: [],

      obj: {},

      //时间
      time: "",
      //规格
      specification: "",
      num: 0,
      type: false,
    };
  },
  async created() {
    try {
      const res = await axios.get(
        `/item/detail.json?csrf_token=488a4e0e372cb731535522b4baf07040&id=${this.$route.params.id}`
      );
      this.service = res.data.policyList;
      this.alldata = res.data.item;
      //轮播图+html结构
      this.swiper = res.data.item.itemDetail;
      this.swiper1 = res.data.item.adBanners;
    } catch (error) {
      console.error(error);
    }
    //html结构
    let { detailHtml } = this.swiper;
    this.content = { detailHtml };
    //轮播图
    delete this.swiper.detailHtml;
    delete this.swiper.videoInfo;

    //现价
    this.obj.basicPrice = this.alldata.price.basicPrice;

    //原价
    this.obj.counterPrice = this.alldata.price.counterPrice;

    //到手
    this.obj.finalPrice = this.alldata.price.finalPrice;

    //自营
    this.obj.ownType = this.alldata.simpleBrandInfo.ownType;

    //logo
    this.obj.logoUrl = this.alldata.simpleBrandInfo.logoUrl;

    //title
    this.obj.title = this.alldata.simpleBrandInfo.title;
    //邮费
    this.obj.postage_name = this.alldata.skuFreight.title;
    //邮费内容
    this.obj.postage_content = this.alldata.skuFreight.freightInfo;

    //促销
    // this.obj.activityType = this.alldata.hdrkDetailVOList ? this.alldata.hdrkDetailVOList[0].activityType : ''
    // this.obj.activity_name = this.alldata.hdrkDetailVOList ? this.alldata.hdrkDetailVOList[0].name : ''
    // this.obj.promLimitDesc = this.alldata.hdrkDetailVOList ? this.alldata.hdrkDetailVOList[0].promLimitDesc : ''

    // 购物返
    this.obj.shoppingReward_name = this.alldata.shoppingReward
      ? this.alldata.shoppingReward.name
      : "";
    this.obj.rewardDesc = this.alldata.shoppingReward
      ? this.alldata.shoppingReward.rewardDesc
      : "";
    this.obj.rewardValue = this.alldata.shoppingReward
      ? this.alldata.shoppingReward.rewardValue
      : "";

    // 备注
    this.obj.remarkTitle = this.alldata.remark
      ? this.alldata.remark.remarkTitle
      : "";

    //时间
    this.time = this.alldata.commentCount
      ? this.alldata.comments[0].createTime
      : 0;

    //规格
    this.specification = this.alldata.commentCount
      ? this.alldata.comments[0].skuInfo[0]
      : "";

    //logo1
    this.obj.logo1 = this.alldata.brandInfo.picUrl;

    //图像
    this.obj.frontUserAvatar = this.alldata.comments[0].frontUserAvatar
      ? this.alldata.comments[0].frontUserAvatar
      : "https://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png?type=webp&imageView&quality=75&thumbnail=60x60";

    //brandInfo_title
    this.obj.brandInfo_title = this.alldata.brandInfo.title;

    // brandInfo_desc
    this.obj.brandInfo_desc = this.alldata.brandInfo.desc;
  },
  computed: {
    //时间戳转时间
    timestampToTime() {
      let date = new Date(this.time);
      let Y = date.getFullYear() + "-";
      let M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      let D =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
      let h =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      let m =
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":";
      let s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m + s;
    },
    //规格-截取
    specification11() {
      let index = this.specification.indexOf(":");
      return this.specification.substring(index + 1);
    },
  },
  mounted() {
    let page = document.querySelector("#container .page");
    page.style.bottom = "0px";
    page.style.display = "block";

    //轮播图1
    var mySwiper = new Swiper(".rotograph", {
      //切换速度
      speed: 1000,

      //手掌变为掌心
      grabCursor: true,

      loop: true, // 循环模式选项
      autoplay: {
        disableOnInteraction: false,
        delay: 1000,
      },

      // 如果需要分页器
      // pagination: {
      //     el: '.swiper-pagination',
      //     bulletActiveClass: 'my-bullet',
      // },
    });
    //轮播图2
    var mySwiper = new Swiper(".adBanners", {
      //切换速度
      speed: 1000,

      //手掌变为掌心
      grabCursor: true,

      loop: true, // 循环模式选项
      autoplay: {
        disableOnInteraction: false,
        delay: 1000,
      },

      // 如果需要分页器
      // pagination: {
      //     el: '.swiper-pagination',
      //     bulletActiveClass: 'my-bullet',
      // },
    });
  },
  methods: {
    btn() {
      this.num++;
      // console.log(this.num);
      if (this.num % 2 != 0) {
        this.type = true;
        // console.log(this.type);
        return;
      }
      this.type = false;
      // console.log(this.type);
    },
  },
};
</script>

<style  lang="scss">
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
}
.wrap {
  background: #fff;
  height: 100%;
  overflow-y: auto;
}
.rotograph {
  overflow: hidden;
  margin-top: 45px;
  height: 375px;
}

/* 轮播图 */
.swiper-img {
  width: 100%;
  height: 375px;
}

/* 特价 */
.special-price {
  height: 66px;
  padding: 8px 0 0 15px;
  background-color: red;
}

.special-price p {
  color: #fff;
  font-size: 14px;
  margin-bottom: 5px;
}

/* 现价 */
.special-price .current-price,
.special-price .original-price {
  display: inline-block;
}

.special-price .current-price :nth-child(1) {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}

.special-price .current-price :nth-child(2) {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}

/* 原价 */
.special-price .original-price {
  font-size: 12px;
  text-decoration: line-through;
  color: #fff;
}

.m-detailBaseInfo {
  padding: 12px 0 12px 15px;
  width: 360px;
  background-color: #fff;
}

/* 会员 */
.spmc-banner {
  margin: 8px 0 12px 0;
  padding: 0 10px;
  width: 325px;
  height: 40px;
  background-color: #fff1d2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.spmcPrice img {
  width: 21px;
  height: 12px;
}

.spmcPrice span:nth-child(2) {
  font-weight: bold;
}

.spmcPrice span:nth-child(3) {
  color: red;
  font-weight: bold;
}

.spmcPrice .icon-tishi {
  font-size: 12px;
}

.spmc-banner p {
  color: #f3ca84;
  background-color: black;
  padding: 0 12px;
  border-radius: 10px;
}

/* 商品信息 */
.baseInfo {
  width: 360px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}

.info .name {
  font-weight: bold;
  width: 254px;
}

.info .simpleBrandInfo {
  display: flex;
  height: 28px;
  align-items: center;
}

.info .simpleBrandInfo .span1 {
  display: inline-block;
  width: 32px;
  height: 16px;
  color: #fff;
  background-color: red;
  border-radius: 8px;

  text-align: center;
  margin-right: 4px;
}

.info .simpleBrandInfo img {
  height: 14px;
  width: 14px;
  margin-right: 4px;
  vertical-align: middle;
}

.info span {
  font-size: 12px;
  color: #333;
}

/* 好评率 */
.baseInfo .comment {
  padding-right: 20px;
  display: flex;
  align-items: center;
}

.baseInfo .comment p {
  display: flex;
  flex-direction: column;
  margin-right: 5px;
}

.baseInfo .comment p span:nth-child(1) {
  color: red;
  font-weight: bold;
}

/* 推荐理由 */
.rcmdBanner {
  width: 323px;
  padding: 7px 10px;
  margin-top: 6px;
  border: 1px solid #ccc;
  background-color: #eeeeee94;
}

.rcmdBanner li {
  list-style-type: decimal;
  margin-left: 10px;
  font-size: 14px;
}

.rcmdBanner li::marker {
  color: red;
}

/* .information {
    margin-top: 10px;
} */

.information .ul {
  background-color: #eee;
  padding-top: 10px;
}

.information .li {
  width: 344px;
  height: 50px;
  padding: 0 14px 0 15px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  line-height: 50px;
}

/* 邮费 */
.information ul i {
  float: right;
}

/* 促销 */
/* .information .item2 {
    width: 344px;
    padding: 0 14px 0 15px;
    background-color: #fff;
    display: flex;
    height: 71px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
}

.information .item2 div {
    width: 283px;
    display: flex;
    align-items: center;

}

.information .item2 .span1 {
    border: 1px solid red;
    border-radius: 8px;
    color: red;
    padding: 0 3px;
    margin-right: 10px;
}

.information .item2 div p {
    display: flex;
    flex-direction: column;
}
.information p span {
    font-size: 12px;
}
.information p span:nth-child(2) {
   color: #ccc;
} */

/* 购物返 */
.information .item3 span {
  color: red;
}

/* 选择商品 */
.information .item4 {
  margin-top: 10px;
}

/* 地址 */
/* .information .item5 {
    margin-top: 10px;
} */

/* 服务 */
.information .item7 {
  display: flex;
  justify-content: space-between;
}

.item7-ul {
  width: 280px;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}

.item7-ul li {
  font-size: 12px;
  line-height: 12px;
  margin: 0 8px;
}

.item7-ul li::marker {
  color: red;
}

/* 轮播图1 */
.swiper1-img {
  width: 100%;
  height: 100px;
}

/* 评论 */
.review .div1 {
  display: flex;
  padding: 15px 14px 15px 15px;
  height: 15px;
  width: 346px;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  align-items: center;
}

.review .div1 p {
  width: 346px;
}

.review .div1 p span:nth-child(2) {
  float: right;
}

.review .div1 p span:nth-child(3) {
  color: red;
  float: right;
}

.review .div2 {
  width: 345px;
  padding: 0 15px;
}

.review .div2 h2 {
  display: flex;
  align-items: center;
  padding-top: 15px;
}

.review .div2 h2 img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
}

.review .div2 h2 span {
  font-weight: 100;
  font-size: 12px;
}

.review .div2 .p1 {
  color: #111111cd;
  font-size: 12px;
}

.review .div2 .p1 span {
  margin-right: 10px;
}

.review .div2 .p2 {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 330px;
  margin: 5px 0;
}

.review .div2 div img {
  width: 72px;
  height: 72px;
  border-radius: 8px;
  margin-right: 10px;
}

/* 网易严选 */
.m-brandInfo {
  width: 100%;
  height: 88px;
  padding-bottom: 15px;
  display: flex;
}

.m-brandInfo .left {
  width: 90px;
  height: 88px;
}

.m-brandInfo .left img {
  width: 48px;
  height: 48px;
  margin: 25px 20px 0 22px;
}

.m-brandInfo .right {
  width: 270px;
  height: 88px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.m-brandInfo .right p:nth-child(1) {
  display: flex;
  justify-content: space-between;
}

.m-brandInfo .right span {
  font-weight: bold;
}

.m-brandInfo .right p:nth-child(2) {
  font-size: 12px;
}

/* 商品参数 */

.arguments {
  padding: 15px;
}

.arguments div {
  width: 345px;
}

.arguments div:nth-child(1) {
  padding: 20px 0 12px 0;
}

.arguments div ~ div {
  border-top: 1px #ccc dashed;
  overflow: auto;
}

.arguments-list {
  display: flex;
  font-size: 12px;
  padding: 5px 15px 5px 0;
}

.arguments-left {
  width: 74px;
  color: #ccc;
}

.arguments-right {
  flex: 1;
}

/* html结构--图片 */
// .detailHtml {
//   width: 100%;
// }
.detailHtml img {
  display: block;
  width: 100vw;
}

/* 底部 */
footer {
  height: 50px;
  display: flex;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 20;
  background-color: #fff;
}

footer p {
  text-align: center;
  height: 100%;
  line-height: 50px;
}

footer p:nth-child(1) {
  width: 77px;
  border-right: 1px solid #ccc;
}

footer p:nth-child(2) {
  flex: 1;
  border-right: 1px solid #ccc;
}

footer p:nth-child(3) {
  flex: 1;
  background-color: red;
  color: #fff;
}

/* 购物车弹窗 */
.car-popover {
  width: 345px;
  padding: 16px 15px 13px 15px;
  height: 60%;
  position: fixed;
  z-index: 200;
  bottom: 50px;
  left: 0;
  background-color: #fff;
  display: none;
}

/* 头部 */
.car-popover .head {
  display: flex;
  align-items: center;
  margin-bottom: 21px;
}
.car-popover .head .x {
  position: absolute;
  top: 10px;
  right: 10px;
}
.car-popover .right-title {
  background-color: #f48f18;
  padding: 0 6px;
  border-radius: 10px;
}

.car-popover img {
  height: 99px;
  width: 98px;
}

.btn {
  display: block;
}

/* 
         
*/
</style>