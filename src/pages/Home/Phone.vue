<template>
  <div class="phone">
    <!-- 展示组件 -->
    <div class="phone-show-top">
      <img :src="phoneShowTop" alt />
    </div>
    <div class="phone_liner"></div>
    <div class="phone-show-down">
      <img :src="phoneShowDown" alt />
    </div>
    <div class="phone_liner"></div>
    <!-- 轮播组件 -->
    <div class="phone-sell"></div>
    <div class="phone_liner"></div>
    <!-- 手机组件 -->
    
    <!-- 福利组件 -->
    <div class="phone-welfare">
      <div class='phone-welfare-top'><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4680750ff3a08e7381e191f5c4c57b8.jpg?thumb=1&w=720&h=91" alt=""></div>
      <div class="phone_liner"></div>
      <div class="phone-welfare-item" :key="index" v-for="(item,index) in phoneWelfare">
        <img :src="item" alt />
      </div>
      <div class="phone-welfare-item-floor">
        <img :src="phoneWelfareFloor" alt />
      </div>
    </div>
    <div class="phone_liner"></div>
    <!-- sell组件 -->
    <div class="phone-sell-table"></div>
    <div class="phone_liner"></div>
    <!-- 循环展示组件 -->
    <div class="phone-floor-show">
      <div class="phone-floor-show-top">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce1fa43295944d9f007e222242b4303c.jpg?thumb=1&w=720&h=104"
          alt
        />
      </div>
      <div class="phone_liner"></div>
      <div class="phone-floor-show-middle">
        <div class="phone-floor-show-middle-item" :key="index" v-for="(item,index) in phoneFloorShowMiddle" >
          <img :src="item" alt="">
        </div>
      </div>
      <div class="phone_liner"></div>
      <div class="phone-floor-show-down"><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb91d74f2e912568ceb834b9fbd828e0.jpg?thumb=1&w=720&h=280" alt=""></div>
    </div>
    <!-- 底部图片组件 -->
    <div class="phone-floor"></div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneShowTop:
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7242a6f64a85451435401a9c91ab6c5c.jpg?thumb=1&w=720&h=743",
      phoneShowDown:
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d14ef6575c3f5f1ed66753ffe13ee702.jpg?thumb=1&w=720&h=91",
      phoneWelfare: [
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c302fb8cdf79e5be0cff62854f5b4d56.jpg?thumb=1&w=240&h=270",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0847b87c19528c03fda1a2f3360506b3.jpg?thumb=1&w=240&h=270",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/38b4c00c3eb729ab337226c58cef0f5d.jpg?thumb=1&w=240&h=270",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aae3e2db7d6d4407d758770a133ecf59.jpg?thumb=1&w=240&h=235",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/81a39cb087ce35a4822c713c19389369.jpg?thumb=1&w=240&h=235",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac64333ba8ddf7981291a05587e4dfe6.jpg?thumb=1&w=240&h=235",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/26108ab1c68f8c51197fca0cc15d0f7b.jpg?thumb=1&w=240&h=240",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/07eeec9d0fe379609415a6696747fa7a.jpg?thumb=1&w=240&h=240",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/428c00050135e0b284c7e602c1f7d3ff.jpg?thumb=1&w=240&h=240"
      ],
      phoneWelfareFloor:
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/86f6f18daed9d0fdf46eaf0e2ca7cc40.jpg?thumb=1&w=720&h=135",
      phoneFloorShowMiddle:['//cdn.cnbj1.fds.api.mi-img.com/mi-mall/960e1b2fefe6ef6c621857ea4298b9db.jpg?thumb=1&w=360&h=323','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9aa0431e0e2918b1bf2ca54442388dda.jpg?thumb=1&w=360&h=323','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2827d76cb767b80fde616ba97c665d1f.jpg?thumb=1&w=360&h=327','//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac429b480e6af8366df2d31dc8f0a6a9.jpg?thumb=1&w=360&h=327']
    };
  }
};
</script>

<style lang='less'>
.phone {
  font-size: 0;
  width: 7.5rem;
  .phone_liner {
    width: 100%;
    height: 0.111rem;
    background-color: rgb(37, 1, 104);
  }
  .phone-show-top {
    padding-top: 1.475rem;
    width: 100%;
    img {
      width: 100%;
    }
  }
  .phone-show-down {
    margin-top: 0;
    width: 100%;
    img {
      width: 100%;
    }
  }
  .phone-sell {
    height: 5.2rem;
    background: red;
  }
  .phone-welfare {
    display: flex;
    flex-wrap: wrap;
    .phone-welfare-top{
      img{
        width: 100%;
      }
    }
    .phone-welfare-item {
      width: 33.3333%;

      img {
        width: 100%;
      }
    }
    .phone-welfare-item-floor {
      img {
        width: 100%;
      }
    }
  }
  .phone-sell-table{
    height: 5rem;
    background: #ffffff
  }
  .phone-floor-show {
    .phone-floor-show-top {
      img {
        width: 100%;
      }
    }
    .phone-floor-show-middle {
      display: flex;
      flex-wrap: wrap;
      .phone-floor-show-middle-item {
        width: 50%;
        img {
          width: 100%;
        }
      }
    }
    .phone-floor-show-down{
      img{
        width: 100%
      }
    }
  }
  .phone-floor {
    height: 5.2rem;
  }
}
</style>