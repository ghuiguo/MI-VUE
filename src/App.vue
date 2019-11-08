<template>
  <div>
    <div class="footer" v-show="showFooter">
      <router-link to="/homepage">
        <span class="iconfont icon-guanliyuan"></span>
        <span>首页</span>
      </router-link>
      <router-link to="/type">
        <span class="iconfont icon-guanliyuan"></span>
        <span>分类</span>
      </router-link>
      <router-link to="/shopcart">
        <span class="iconfont icon-guanliyuan"></span>
        <span>购物车</span>
      </router-link>
      <router-link to="/myself">
        <span class="iconfont icon-guanliyuan"></span>
        <span>我的</span>
      </router-link>
    </div>

    <router-view></router-view>
  </div>
</template>


<script>
~(function() {
  let evt = "onorientationchange" in window ? "orientationchange" : "resize";

  function computed() {
    let HTML = document.documentElement,
      deviceW = HTML.clientWidth,
      designW = 750,
      ratio = (deviceW / designW) * 100;
    if (deviceW >= designW) ratio = 100;
    HTML.style.fontSize = ratio + "px";
  }
  computed();
  window.addEventListener(evt, computed);
})();


export default {
  components: {},
  data() {
    return {
      showFooter:true
    };
  },
  
  beforeUpdate(){
    let string = window.location.href;
    if(string.includes('login')||string.includes('paylist')||string.includes('surepayfa')){
      this.showFooter = false;
    }
    else{
      this.showFooter = true;
    }
  }
};

</script>

<style lang='less'>
.footer {
    position: fixed;
    z-index: 22;
    left: 0;
    bottom: -1px;
    background: #fff;
    width: 100%;
    height: 1.04rem;
    display: flex;
    align-items:center;
    justify-content: space-between;
    border-top: 1px solid #ddd;
    box-sizing: border-box;
    a {
      flex:1;
      text-align: center;
      color: #999;
      display: flex;
      flex-direction: column;
    }
    a.router-link-active{
      color: #ff6700;
    }
}
</style>