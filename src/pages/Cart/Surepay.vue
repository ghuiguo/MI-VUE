<template>
  <div class="Surepay">
    <div class="Surepay-head">
      <i
        class="iconfont icon-you"
        style="margin-left: .2rem;
        position: unset;
        right: 2.5rem;
        font-size: .35rem;"
      @click="backtobefore()"
      ></i>
      <span class="Surepay-head-title">
        <i
          class="iconfont icon-umidd17"
          style="color: deepskyblue;
            vertical-align: top;
            font-size: .44rem;
            margin-right: .1rem;"
        ></i>确认付款
      </span>
      <i class="iconfont icon-question" style="
        color: dodgerblue;
        font-size: .34rem;"></i>
    </div>
    <div class="Surepay-main">
      <div class="main-money">￥2999.00</div>
      <div class="main-list">
        <span class="line-left">收款方</span>
        <span class="line-right">小米网</span>
      </div>
      <div class="main-list">
        <span class="line-left">订单信息</span>
        <span class="line-right">小米科技515656656565605号订单</span>
      </div>
      <div class="main-list">
        <span class="line-left">付款方式</span>
        <span class="line-right">
          支付宝
          <i class="iconfont icon-you1" style="vertical-align: middle;"></i>
        </span>
      </div>
    </div>
    <div class="Surepay-button">
      <span class="Surepay-button-item" @click="runToSuccess()">立即付款</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        backtobefore(){
            window.history.go(-1);
        },
        runToSuccess(){
            setTimeout(()=>{
              this.$router.push('successpay')
            },700)
        }
    }
};
</script>

<style>
</style>