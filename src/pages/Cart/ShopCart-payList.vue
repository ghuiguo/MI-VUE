<template>
  <div class="paylist">
    <div class="paylist-header">
      <i class="iconfont icon-you" @click="backtocart()"></i>
      订单配送至
    </div>
    <div class="payList-address">
      <span class="payList-address-detail">
        <span class="detail-name">
          <span class="detail-name-item">钟嘉意</span>
          <span class="detail-name-phone">18888888888</span>
        </span>
        <span class="detail-address">北京市昌平区回龙观东大街</span>
      </span>
      <span class="little-icon">
        <i class="iconfont icon-you1"></i>
      </span>
    </div>
    <div class="payList-menu">
      <div class="payList-menu-all">
        <div class="payList-menu-detail-goods">
          <div class="payList-menu-detail-goods-item">
            <img src="../../../public/assets/images/mobile2.jpg" alt />
            <span class="goods-word-title">小米CC 9e 全网通版 4GB+128GB 白色恋人 128GB</span>
            <strong class="goods-value">1199.00</strong>
          </div>
          <div class="payList-menu-detail-goods-item">
            <img src="../../../public/assets/images/mobile2.jpg" alt />
            <span class="goods-word-title">小米CC 9e 全网通版 4GB+128GB 白色恋人 128GB</span>
            <strong class="goods-value">1199.00</strong>
          </div>
          <div class="payList-menu-detail-goods-item">
            <img src="../../../public/assets/images/mobile2.jpg" alt />
            <span class="goods-word-title">小米CC 9e 全网通版 4GB+128GB 白色恋人 128GB</span>
            <strong class="goods-value">1199.00</strong>
          </div>
        </div>
        <span class="payList-menu-all-number">共5件</span>
      </div>
      <ul class="payList-menu-detail">
        <li>
          <span>商品总价</span>
          <span>￥2000</span>
        </li>
        <li>
          <span>运费</span>
          <span>包邮</span>
        </li>
        <li>
          <span>优惠券</span>
          <span>无可用</span>
        </li>
        <li>
          <span>礼品卡</span>
          <span>无可用</span>
        </li>
        <li class="Subtotal">
          <span>小计</span>
          <span>￥2000</span>
        </li>
        <li>
          <span>发票</span>
          <span>电子发票</span>
        </li>
      </ul>
    </div>
    <div class="payList-money">
      <div class="payList-money-detail">
        <span class="payList-money-detail-word">共5件,应付金额：</span>
        <span class="payList-money-detail-money">￥2000</span>
      </div>
      <div class="gotopaid">
        <a @click="runtopay()">去付款</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    backtocart() {
      window.history.go(-1);
    },
    runtopay(){
      this.$router.push('surepayfa/surepay')
    }
  }
};
</script>

<style>
</style>
