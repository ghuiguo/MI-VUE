<template>
  <div class="productDetailContainer">
    <div class="productDetailHeader">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="item in lunbo" :key="item.id" class="swapper">
          <img :src="item.src" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <img class="headerActionPic toBack" @click="toBack()" src="../assets/images/detailBack.png" alt />
      <img class="headerActionPic share" src="../assets/images/detailShare.png" alt />
    </div>
    <div class="section section-detail">
      <div class="product_info_product_name" v-text="productInfo.name"></div>
      <div class="product_info_product_desc" v-text="productInfo.desc"></div>
      <div class="product_info_product_price">
        ￥
        <div class="price cur-price" v-text="productInfo.price"></div>
      </div>
    </div>
    <div class="productIntrpduceList">
      <img v-for="item in productIntroList" :key="item.id" :src="item.url" />
    </div>
    <footer>
      <div class="fill-height layout align-center bgw">
        <a href="/" class="footer-btn router-link-active">
          <img class="footer-icon" src="../assets/images/homeIcon.png" alt />
          <span>首页</span>
        </a>
        <a href="/" class="footer-btn router-link-active">
          <img class="footer-icon" src="../assets/images/shopIcon.png" alt />
          <span>购物车</span>
        </a>
        <div class="action-box flex">
          <a class="btn buy-btn">加入购物车</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from '../api/index';
export default {
  data() {
    return {
      lunbo: [
        {
          id: 1,
          src: "../assets/home/swiper/s1.jpg"
        },
        {
          id: 2,
          src: "../assets/home/swiper/s2.jpg"
        },
        {
          id: 3,
          src: "../assets/home/swiper/s3.jpg"
        },
        {
          id: 4,
          src: "../assets/home/swiper/s5.jpg"
        },
        {
          id: 5,
          src: "../assets/home/swiper/s4.jpg"
        }
      ],
      swiperOption: {
        notNextTick: true,
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
        observeParents: true,
        debugger: true
      },
      productIntroList: [
        { id: 1, url: "../assets/images/productDetail/productIntroduce1.jpg" },
        { id: 2, url: "../assets/images/productDetail/productIntroduce2.jpg" },
        { id: 3, url: "../assets/images/productDetail/productIntroduce3.jpg" },
        { id: 4, url: "../assets/images/productDetail/productIntroduce4.jpg" },
        { id: 5, url: "../assets/images/productDetail/productIntroduce5.jpg" }
      ],
      productInfo:{
        name:'',
        desc:'',
        price:''
      }

    };
  },
  methods: {
    toBack(){
      window.history.go(-1);
    }
  },
  mounted() {
    let id = this.$route.params.productId;
    axios.get('/product/info',{
      params :{
        productId:id
      }
    }).then(result => {
      if (parseInt(result.code) === 0) {
        this.items = result.data;
        this.productInfo = result.data;
        }
    })

  },
  created(){

  }
};
</script>

<style lang='less'>
.productDetailHeader {
  position: relative;
  .swapper {
    width: 100%;
    height: 7.92rem !important;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .headerActionPic {
    position: absolute;
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    color: #ddd;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    box-sizing: border-box;
    padding: 0.1rem;
    top: 0.2rem;
    left: 0.2rem;
    z-index: 9;
  }
  .share {
    left: auto;
    right: 0.2rem;
  }
}
.section .product_info_product_name {
  padding: 0.32rem 0.32rem 0;
  line-height: 1.5em;
  font-size: 0.4rem !important;
}
.product_info_product_desc {
  padding: 0 0.32rem;
  line-height: 1.5em;
  word-break: break-all;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.24rem !important;
}
.product_info_product_price {
  padding: 0.2rem 0.32rem 0.32rem;
  color: #ff6700;
  font-size: 0.4rem;
  .cur-price {
    position: relative;
    // padding-left: 0.5em;
    font-size: 0.48rem;
    display: inline-block;
    line-height: 1em;
  }
}
.productIntrpduceList img {
  width: 100%;
}
.productDetailContainer {
  footer {
    padding: 0 0.16rem 0.16rem;
    background: transparent;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    .bgw {
      background-color: hsla(0, 0%, 100%, 0.96) !important;
      width: 100%;
      height: 1.04rem;
      border: 1px solid #e5e5e5;
      border-radius: 0.16rem;
      overflow: hidden;
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
        0 4px 5px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12);
      display: flex;
    }
    .footer-btn {
      position: relative;
      display: flex;
      text-decoration: none;
      width: auto;
      margin-left: 0.5rem;
      color: rgba(0, 0, 0, 0.54);
      flex-direction: column;
      span {
        color: rgba(0, 0, 0, 0.54);
      }
    }
    .action-box {
      margin-right: 0.32rem;
      margin-left: 0.4rem;
      text-align: right;
      flex: 1;
      .buy-btn {
        display: inline-block;
        width: auto;
        max-width: 4rem;
        overflow: hidden;
        padding: 0 0.48rem;
        height: 0.64rem;
        line-height: 0.64rem;
        border-radius: 0.32rem;
        background: #ff6700;
        color: #fff;
        text-align: center;
      }
    }
    .footer-icon {
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto 0.04rem;
    }
  }
}
</style>