<template>
  <div class="home">
    <div class="headerbar">
      <div class="search">
        <img src="../assets/home/home.png" alt />
        <div class="app-header-middle">
          <span class="iconfont icon-jingli my"></span>
          搜索商品名称
        </div>
        <div class="app-header-right">
          <span class="iconfont icon-jingli my"></span>
        </div>
      </div>
      <ly-tab
        v-model="selectedId"
        :items="items"
        :options="options"
        class="fix"
        @change="handleChange"
      />
    </div>
    <!-- @change="handleChange" -->
    <router-view></router-view>
  </div>
</template>

<script>
import LyTab from "ly-tab";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      selectedId: 0,
      items: [
        { label: "推荐" },
        { label: "手机" },
        { label: "智能" },
        { label: "电视" },
        { label: "笔记本" },
        { label: "家电" },
        { label: "生活周边" }
      ],
      subRouteUrl: ["/homepage/recom", "/homepage/phone"],
      options: {
        activeColor: "rgb(237,91,0)", // 设置选中的颜色
        lineWidth: 2
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
  created(){
    this.subRouteUrl.forEach((item,index)=>{
      if(location.href.includes(this.subRouteUrl[index])){
        this.selectedId = index;
      }
    })
    
    console.log();
  },
  methods: {
    handleChange(item, index) {
      // console.log(item, index);
      this.selectedId = index;
      this.$router.replace(this.subRouteUrl[index]);
    }
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
  .headerbar {
    position: fixed;
    z-index: 31;
    left: 0;
    top: 0px;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    background: #f2f2f2;
    .search {
      width: 100%;
      height: 0.8rem;
      position: relative;
      img {
        margin: 0.2rem 0 0 0.2rem;
        width: 0.5rem;
      }
      .app-header-middle {
        display: inline-block;
        font-size: 0.25rem;
        color: rgba(0, 0, 0, 0.3);
        margin-left: 0.2rem;
        margin-top: 0.1rem;
        border: 1px solid #e5e5e5;
        width: 75%;
        height: 0.665rem;
        position: relative;
        top: -0.13rem;
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
<<<<<<< HEAD
        span {
          font-size: 0.45rem;
=======
        img {
          width: 100%;
        }
      }
      .floor-looper-item-content {
        display: flex;
        flex-wrap: wrap;
        .floor-looper-item-content-show {
          width: 3.5626rem;
          height: 5.066rem;
          margin-left: 0.125rem;
          margin-top: 0.1rem;
          img {
            width: 100%;
          }
          .floor-looper-item-content-show-info {
            .show-name {
              text-align: center;
              font-size: 0.28rem;
              color: rgba(0, 0, 0, 0.87);
            }
            .show-gongneng {
              text-align: center;
              margin-top: 0.06rem;
              font-size: 0.22rem;
              line-height: 0.3rem;
              color: rgba(0, 0, 0, 0.54);
            }
            .show-price {
              text-align: center;
              font-size: 0.28rem;
              color: #ea625b;
              height: 1.5em;
              line-height: 1.5em;
            }
            .show-goumai {
              margin-left: 0.78rem;
              text-align: center;
              width: 2rem;
              background: #ea625b;
              border-radius: 0.05rem;
              color: #fff;
              font-size: 0.24rem;
              padding: 0.16rem 0;
              box-sizing: border-box;
              font-weight: 700;
            }
          }
>>>>>>> 687eb5a2ec74a3c52c55bfaacd0e77df46a69197
        }
      }
    }
    .fix {
      background-color: #f2f2f2;
      box-shadow: -15px 0 15px 0 #f2f2f2;
      .ly-tabbar {
        background: #f2f2f2;
        height: 0.7rem;
        color: rgb(116, 116, 116);
      }
    }
  }
}
</style>