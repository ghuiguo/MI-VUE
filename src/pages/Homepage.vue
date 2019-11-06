<template>
  <div class="home">
    <div class="search">
      <img src="../assets/home/home.png" alt />
      <div class="app-header-middle">
        <span class='iconfont icon-jingli my'></span>
        搜索商品名称
      </div>
      <div class="app-header-right"><span class='iconfont icon-jingli my'></span></div>
    </div>
    <ly-tab
      v-model="selectedId"
      :items="items"
      :options="options"
      
      class="fix"
    />
    <!-- @change="handleChange" -->
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="swapper">
        <img src="../assets/home/swiper/s1.jpg" alt />
      </swiper-slide>
      <swiper-slide class="swapper">
        <img src="../assets/home/swiper/s2.jpg" alt />
      </swiper-slide>
      <swiper-slide class="swapper">
        <img src="../assets/home/swiper/s3.jpg" alt />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>-->
    </swiper>
    <!-- <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../assets/home/swiper/s1.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../assets/home/swiper/s2.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../assets/home/swiper/s3.jpg" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>-->
    <div class="main-cell">
      <a href>
        <!-- <img src=".././assets/cell/1." alt /> -->
      </a>
      <a href>
        <img src alt />
      </a>
      <a href>
        <img src alt />
      </a>
      <a href>
        <img src alt />
      </a>
      <a href>
        <img src alt />
      </a>
    </div>
  </div>
</template>

<script>
import LyTab  from "ly-tab";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      selectedId:0,
      items:[
          {label: '热门'},
          {label: '服饰'},
          {label: '鞋包'},
          {label: '母婴'},
          {label: '百货'},
          {label: '食品'},
          {label: '内衣'},
          {label: '男装'},
          {label: '电器'}
        ],
        options: {
          activeColor: '#e9232c', // 设置选中的颜色
        },
      lunbo: [
        "../assets/home/swiper/s1.jpg",
        "../assets/home/swiper/s2.jpg",
        "../assets/home/swiper/s3.jpg"
      ],
      swiperOption: {
        //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        notNextTick: true, // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        autoplay: false,
        loop: false,
        direction: "horizontal",
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: {
          el: ".swiper-pagination"
        },
        centeredSlides: true,
        paginationClickable: true,
        keyboard: true,
        mousewheelControl: true,
        observeParents: true, // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang='less'>
.home {
  width: 100%;
  height: 100%;
  .search {
    width: 100%;
    height: 0.7rem;
    position: relative;
    img {
      margin: 0.2rem 0 0 0.2rem;
      width: 0.4262rem;
    }
    .app-header-middle {
      display: inline-block;
      font-size: 0.25rem;
      color: rgba(0, 0, 0, 0.3);
      margin-left: 0.2rem;
      margin-top: 0.1rem;
      border: 1px solid #e5e5e5;
      width: 4.62rem;
      height: 0.45rem;
      position: relative;
      top: -0.05rem;
      line-height: 0.45rem;
    }
    .app-header-right {
      width: 0.5rem;
      height: 0.5rem;
      display: inline-block;
      position: absolute;
      right: 0.15rem;
      top: -0.1rem;
      margin-top: 0.2rem;
      span{
        font-size: 0.45rem;
        
      }
    }
  }
  .fenlei {
    text-align: center;
    display: flex;
    li {
      width: 0.92rem;
      height: 0.52rem;
    }
  }
  .swiper-container {
    width: 100%;
  }
  swiper {
    touch-action: none;
  }
  .swapper {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .swiper-pagination-bullet-active {
    background: #ffffff;
  }
  .main-cell{
    display: flex;
  }
}
</style>