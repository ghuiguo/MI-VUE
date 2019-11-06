<template>
  <div class="loginContent">
    <div class="lgnheader">
      <img src="../assets/images/loginLogo.jpg" />
      <h4 class="header_tit_txt">小米账号登录</h4>
    </div>
    <label class="labelBox label_user">
      <div class="cityList">
        +86
        <i></i>
      </div>
      <input class="item_account" autocomplete="off" type="tel" name="user" placeholder="手机号码" />
      <div class="clear_link_panel">
        <span class="clear_link"></span>
      </div>
    </label>

    <label class="labelBox label_cmsCode">
      <input class="item_account" autocomplete="off" type="number" name="user" placeholder="短信验证码" />
      <div class="code_panel">
        <a class="send_ticket" href="javascript:;" id="getSMSCode">获取验证码</a>
      </div>
    </label>

    <div class="actionButton loginRegisBtn">立即登录/注册</div>
    <div class="actionButton loginTypeChange">用户名密码登录</div>

    <div class="other_login_type sns-login-container">
      <fieldset class="oth_type_tit">
        <div class="oth_type_txt">其他方式登录</div>
      </fieldset>

      <div class="oth_type_links">
        <a class="icon_type btn_weibo sns-login-link">
          <i class="btn_sns_icontype icon_default_weibo"></i>
        </a>
        <a class="icon_type btn_alipay sns-login-link">
          <i class="btn_sns_icontype icon_default_alipay"></i>
        </a>
        <a class="icon_type btn_weixin sns-login-link">
          <i class="btn_sns_icontype icon_default_weixin"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang='less'>
.loginContent {
  width: 100%;
  margin: 0 auto 0.6rem;
  padding: 0 0.4rem;
  position: relative;
  box-sizing: border-box;
  .lgnheader {
    padding: 0.6rem 0 0.2rem;
    box-sizing: border-box;
    h4 {
      font-size: 0.36rem;
      color: #000;
      font-weight: normal;
      text-align: center;
    }
    img {
      width: 0.96rem;
      height: 0.96rem;
      display: block;
      margin: 0 auto 0.3rem;
    }
  }
  .labelBox {
    display: flex;
    border-bottom: 1px solid #d3d3d3;
    background: #fff;
    align-items: center;
    input {
      padding: 0.32rem 0;
      line-height: normal;
      display: block;
      font-size: 0.36rem;
      border: none;
    }
  }
  .labelBox i {
    margin-left: 0.03rem;
    display: block;
    width: 0.16rem;
    height: 0.16rem;
    border-width: 0.01rem;
    border-style: solid;
    border-color: transparent transparent #9b9b9b #9b9b9b;
    transform: rotate(-135deg);
  }
  .cityList {
    display: flex;
    align-items: center;
    margin-right: 0.2rem;
    color: #9b9b9b;
    font-size: 0.32rem;
    padding: 0 0.2rem 0 0;
    box-sizing: border-box;
  }
  .clear_link_panel {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    padding: 0.04rem;
    width: 0.22rem;
    height: 0.22rem;
    display: flex;
    .clear_link {
      width: 0.22rem;
      height: 0.22rem;
      display: block;
      position: relative;
    }
  }
  .item_account {
    width: 100%;
  }
  .btn_turn:before,
  .btn_turn:after,
  .clear_link:before,
  .clear_link:after {
    content: "";
    width: 100%;
    height: 0.01rem;
    background-color: rgba(0, 0, 0, 0.3);
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
  }
  .btn_turn:before,
  .clear_link:before {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .clear_link:before,
  .clear_link:after {
    background: #fff;
  }
  .btn_turn:after,
  .clear_link:after {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .code_panel {
    padding: 0.2rem;
    a {
      color: #2ea5e5;
      font-size: 0.3rem;
      width: 1.8rem;
      display: block;
      text-align: center;
    }
  }
  .actionButton {
    width: 100%;
    padding: 0.2rem 0;
    display: block;
    margin-bottom: 0.28rem;
    text-align: center;
    font-size: 0.36rem;
    color: #fff;
    cursor: pointer;
    border-radius: 0.12rem;
    overflow: hidden;
    background-color: #ff6700;
  }
  .loginRegisBtn {
    margin-top: 0.6rem;
  }
  .loginTypeChange {
    background: #fff;
    margin-top: 0.48rem;
    border: 1px solid #d3d3d3;
    color: #000;
  }
  .other_login_type {
    padding-top: 0.8rem;
    text-align: center;
  }
  .oth_type_tit {
    border: 0;
    border-top: 1px solid #f2f2f2;
    padding-top: 0.2rem;
  }
  .oth_type_txt {
    font-size: 0.12rem;
    color: #b0b0b0;
    width: 1.8rem;
    margin: 0 auto;
    position: relative;
    top: -0.4rem;
  }
}
</style>