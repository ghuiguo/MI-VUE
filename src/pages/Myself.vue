<template>
  <div class="myselfContent">
    <header>
      <div class="user ui-flex align-center">
        <div class="img">
          <img src="../assets/images/mine/myselfAvatar.png" />
        </div>
        <div class="name">登录/注册</div>
      </div>
    </header>

    <div class="b1 ui-flex align-center justify-space-between">
      <div class="cite">我的订单</div>
      <div class="span ui-flex align-center">
        <a class>全部订单</a>
      </div>
    </div>

    <ul class="b2 ui-flex align-center justify-space-between">
      <li class="dfk">
        <a>
          <div class="icon"></div>
          <span>待付款</span>
        </a>
      </li>
      <li class="dah">
        <a>
          <div class="icon"></div>
          <span>待付款</span>
        </a>
      </li>
      <li class="thx">
        <a>
          <div class="icon"></div>
          <span>待付款</span>
        </a>
      </li>
    </ul>

    <div class="ui-line"></div>

    <ul class="items">
      <li class="i-member">
        <a>
          <span>会员中心</span>
        </a>
      </li>
      <li class="i-wallet">
        <a>
          <span>我的优惠</span>
        </a>
      </li>
    </ul>

    <div class="ui-line"></div>

    <ul class="items">
      <li class="i-service">
        <a>
          <span>服务中心</span>
        </a>
      </li>
      <li class="i-mihome">
        <a>
          <span>小米之家</span>
        </a>
      </li>
    </ul>

    <div class="ui-line"></div>

    <ul class="items">
      <li class="i-fcode">
        <a>
          <span>我的F码</span>
        </a>
      </li>
      <li class="i-gift">
        <a>
          <span>礼物码兑换</span>
        </a>
      </li>
    </ul>

    <div class="ui-line"></div>

    <ul class="items">
      <li class="i-setting">
        <a>
          <span>我的F码</span>
        </a>
      </li>
    </ul>


  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang='less'>
.align-center {
  align-items: center;
}
.ui-flex {
  display: flex;
}
.justify-space-between {
  justify-content: space-between;
}
.ui-line {
  height: 0.2rem;
  background: #f5f5f5;
  overflow: hidden;
  clear: both;
}
.b1 {
  background-color: #fff;
  height: 0.8rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.54);
  position: relative;
  padding-right: 0.56rem;
  .cite {
    font-size: 0.28rem;
    padding: 0 0 0 0.32rem;
    color: rgba(0, 0, 0, 0.87);
  }
  a {
    font-size: 0.24rem;
    color: rgba(0, 0, 0, 0.87);
  }
}
.b1:after {
  content: "";
  position: absolute;
  right: 5.12px;
  right: 0.32rem;
  top: 50%;
  width: 3.2px;
  width: 0.2rem;
  height: 3.2px;
  height: 0.2rem;
  border-left: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: translate3d(0, -50%, 0) rotate(135deg);
  -webkit-transform: translate3d(0, -50%, 0) rotate(135deg);
}
.b2 {
  padding: 0 0.8rem;
  background-color: #fff;
  li {
    display: flex;
    align-content: space-between;
    position: relative;
    padding: 0.4rem 0;
    .icon {
      width: 0.48rem;
      height: 0.48rem;
      margin: 0 auto 0.16rem;
      background: url(../assets/images/mine/myselefIcon1.png) no-repeat center 0;
      background-size: 100% auto;
    }
    span {
      color: rgba(0, 0, 0, 0.87);
    }
  }
}
.myselfContent {
  box-sizing: border-box;
  padding-bottom: 1.04rem;
  header {
    background: url(../assets/images/mine/myselfHeaderBackPic.png) center 0
      #f37d0f;
    background-size: auto 100%;
    padding: 0.32rem 0;
    .ui-flex {
      .img {
        margin: 0 0.16rem 0 0.32rem;
        width: 0.96rem;
        height: 0.96rem;
        overflow: hidden;
        box-sizing: border-box;
        border-radius: 100%;
        border: 3px solid hsla(0, 0%, 100%, 0.4);
        text-align: center;
        img {
          width: auto;
          height: 100%;
          margin: 0 auto;
        }
      }
      .name {
        color: #fff;
        font-size: 0.24rem;
        text-align: left;
      }
    }
  }
}
.items li {
    position: relative;
    color: rgba(0,0,0,.54);
    background: url(../assets/images/mine/myselefIcon1.png) no-repeat .32rem;
    background-size: .48rem auto;
    border-bottom: 1px solid rgba(0,0,0,.15);
    line-height: 0;
    list-style: none;
}
.items li>a {
    display: block;
    padding-right: .56rem;
    padding-left: 1.12rem;
    height: 1.04rem;
    line-height: 1.04rem;
    font-size: .28rem;
    font-style: normal;
    color: rgba(0,0,0,.87);
}
.items li:after {
    content: "";
    position: absolute;
    right: 5.12px;
    right: .32rem;
    top: 50%;
    width: 3.2px;
    width: .2rem;
    height: 3.2px;
    height: .2rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotate(135deg);
}
li.i-member {
  background-image: url(../assets/images/mine/myselefListP3.png);
}
li.i-wallet {
  background-image: url(../assets/images/mine/myselefListP4.png);
}
li.i-service {
  background-image: url(../assets/images/mine/myselefListP5.png);
}
li.i-mihome {
  background-image: url(../assets/images/mine/myselefListP6.png);
}
li.i-fcode {
  background-image: url(../assets/images/mine/myselefListP7.png);
}
li.i-gift {
  background-image: url(../assets/images/mine/myselefListP2.png);
}
// li.i-setting {
//   background-image: url(../assets/images/mine/myselefListP3.png);
// }
</style>