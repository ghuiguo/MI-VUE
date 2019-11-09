<template>
  <div class="settingContainer">
    <div class="commonHeader">
      <img @click="toBack()" src="../assets/images/turnBack.png" alt />
      <div class="commontitle">商品订单</div>
      <img src="../assets/images/search.png" alt />
    </div>

    <div class="orderContent">
      <ol class="tab">
        <li>
          <a :class="{active:type==0}" @click="changeType(0)" href="javascript:;">全部</a>
        </li>
        <li>
          <a :class="{active:type==1}" @click="changeType(1)" href="javascript:;">待付款</a>
        </li>
        <li>
          <a :class="{active:type==2}" @click="changeType(2)" href="javascript:;">待收货</a>
        </li>
      </ol>

      <div class="listContainer">
        <div class="content"></div>
        <div class="emptyBox">
          <img src="../assets/images/empty.png" alt />
          <p class="title">您还没有 订单</p>
        </div>
      </div>
    </div>

    <MayBeLikeList></MayBeLikeList>
  </div>
</template>

<script>
import MayBeLikeList from "./components/MayBeLikeList";
export default {
  components: {
    MayBeLikeList
  },
  data() {
    return {
      type: 0
    };
  },
  methods: {
    toBack() {
      window.history.go(-1);
    },
    changeType(typeIndex) {
      console.log(typeIndex);
      this.type = typeIndex;
    }
  },
  mounted() {
    console.log(this.$route.params.type, "+++++");
    if (this.$route.params.type) {
      this.type = this.$route.params.type;
    }
  }
};
</script>

<style lang='less'>
.settingContainer {
  padding-top: 1rem;
  .commonHeader {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: 1rem;
    background: #f2f2f2;
    color: #666;
    padding: 0;
    img {
      width: 0.6rem;
      height: 0.6rem;
      display: block;
      margin: 0 0.2rem;
    }
    .commontitle {
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      text-align: center;
      font-size: 0.3rem;
    }
  }
  .tab {
    border-bottom: 0.01rem solid #ececec;
    position: fixed;
    width: 100%;
    background: #fff;
    z-index: 2;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      width: 33.33%;
      text-align: center;
      padding: 0 !important;
      a {
        color: #3c3c3c;
        font-size: 0.26rem;
        padding: 0 0.1rem;
        display: inline-block;
        line-height: 0.6rem;
      }
    }
    li a.active {
      color: #ff6700;
      border-bottom: 1px solid #ff6700;
    }
    li:after {
      display: none;
    }
  }
  .listContainer {
    padding-top: 0.6rem;
    padding-bottom: 0.3rem;
    color: rgba(60, 60, 60, 0.87);
    .emptyBox {
      font-size: 0.3rem;
      text-align: center;
      color: #999;
      margin: 0.8rem 1rem 0;
      img {
        width: 2rem;
        height: 2rem;
      }
      p {
        margin-top: 0.3rem;
      }
    }
  }
}
</style>