<template>
  <div>
    <div class="footer">
      <router-link to="/homepage">首页</router-link>
      <router-link to="/type">分类</router-link>
      <router-link to="/shopcart">购物车</router-link>
      <router-link to="/myself">我的</router-link>
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
      designW = 640,
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
    };
  },
};

</script>

<style lang='less'>
.footer {
    position: fixed;
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
    }
    a.router-link-active{
      color: #ff6700;
    }
}
</style>