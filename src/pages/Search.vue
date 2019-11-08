<template>
  <div class="Search">
    <div class="Search-head">
      <span
        class="iconfont icon-you"
        style="
        position: unset;
        font-size: .5rem;
        width: .5rem;
        height: .5rem;"
        @click="backtoOne()"
      ></span>
      <input class="Search-box" type="text" placeholder="搜索商品名称" />
      <span
        class="iconfont icon-sousuo"
        style="
        position: unset;
        display: block;
            width: .6rem;
            height: .6rem;"
      ></span>
    </div>
    <div class="Search-main">
      <div class="Search-main-top">
        <span class="Search-main-top-title">热门搜索</span>
        <div class="Search-main-top-img">
          <img
            src="../../public/assets/images/SearchBanner.jpg"
            alt
            style="width: 100%;
                    display: block;"
          />
        </div>
      </div>
      <div class="Search-main-item">
        <a href>小米CC9 Pro</a>
        <a href>小米手表</a>
        <a href>小米9 Pro 5G</a>
        <a href>RedmiBook 14增强版</a>
        <a href>破壁料理机</a>
        <a href>Redmi 8A</a>
        <a href>Redmi Note 8</a>
        <a href>小米手环4</a>
      </div>
      <div class="Search-main-class">
        <span class="Search-main-class-title">常用分类</span>
        <div class="Search-main-class-item">
          <a href>手机</a>
          <a href>电视</a>
          <a href>笔记本</a>
          <a href>盒子</a>
          <a href>路由器</a>
          <a href>平板</a>
          <a href>手表</a>
          <a href>VR</a>
          <a href>穿戴</a>
          <a href>空气净化器</a>
          <a href>空调</a>
          <a href>耳机</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        backtoOne(){
            window.history.go(-1);
        }
    }
};
</script>

<style>
</style>