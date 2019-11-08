<template>
  <div class="Shopcart">
    <div class="cart-header">
      <span class="iconfont icon-sousuo" @click="toSearch()"></span>
      <h2 class="cart-header-title" style="    line-height: 1rem;
    text-align: center;
    margin: 0 auto;
    font-size: .3rem;
    font-weight: 500;">购物车</h2>
      <span class="cart-header-edit" style="font-size: .26rem;">编辑</span>
    </div>

    <div class="cart-main">
      <div v-if="hasdata==1" class="cart-main-list">
        <ul class="cart-main-list-item" :key="index" v-for="(item,index) in shoppingList">
          <li class="cart-main-list-item-section" v-if="item.state===1">
            <span
              class="cart-main-list-item-check"
              :class="{active:item.isSelect}"
              @click="selectgoods(item)"
            ></span>
            <img class="cart-main-list-item-image" :src="item.images" alt />
            <span class="cart-main-list-item-handle">
              <span class="cart-main-list-item-handle-name" v-html="item.title"></span>
              <span class="cart-main-list-item-handle-price">￥{{item.money}}</span>
              <span class="cart-main-list-item-handle-number">
                <span class="cart-main-list-item-handle-number-operate">
                  <span class="iconfont icon-jian" @click="oppNum(item)"></span>
                  <span class="amount" v-text="item.num"></span>
                  <span class="supnum iconfont icon-jia" @click="supNum(item)"></span>
                </span>
                <span class="delete iconfont icon-shanchu-copy-copy" @click="deletegoods(item)"
                style="font-size: .38rem;
                color: darkgrey;"></span>
              </span>
            </span>
          </li>
        </ul>
        <div class="prompt">
          <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
        </div>
      </div>

      <div v-if="hasdata==2" class="cart-main-list-appendix">
        <span class="empty-cart">购物车还是空的</span>
        <a href="/" class="gotomain">去逛逛</a>
      </div>

      <div class="cart-main-another">
        <div class="lovely-promote">
          <img src="../assets/images/gessulike.jpg" alt />
        </div>
        <div class="cart-main-another-list">
          <div class="cart-main-another-list-item" :key="index" v-for="(item,index) in likeList" style="    width: 49.3%;">
            <a href>
              <div class="goods-img-box">
                <img :src="item.images" alt />
              </div>
              <div class="goods-info">
                <div class="goods-info-detail" v-html="item.title"></div>
                <span>￥{{item.money}}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="cart-foot">
      <div class="cart-foot-all">
        <span
          class="cart-foot-all-button"
          :class="{active:allSelect}"
          @click="selectall(shoppingList)"
        ></span>
        <span>全选</span>
      </div>
      <div class="cart-foot-count">
        <span>合计：</span>
        <span class="cart-foot-count-number">
          ￥
          <span>{{this.sum}}</span>
        </span>
      </div>
      <div class="cart-foot-account" @click="Settlement()">结算</div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      hasdata: 0,
      shoppingList: [
        {
          images: "assets/images/mobile2.jpg",
          title: "小米9 Pro 5G 8GB+256GB",
          money: 2699,
          num: 1,
          isSelect: false,
          state: 1
        },
        {
          images: "assets/images/phone4.jpg",
          title: "Redmi K20 Pro 尊享版 12GB+512GB",
          money: 2999,
          num: 1,
          isSelect: false,
          state: 1
        },
        {
          images: "../assets/images/phone3.jpg",
          title: "小米CC9e 4GB+128GB",
          money: 1199,
          num: 1,
          isSelect: false,
          state: 1
        }
      ],
      likeList: [
        {
          images: "../assets/images/item1.jpg",
          title: "AirPOP防雾霾口罩",
          money: 349
        },
        {
          images: "../assets/images/item2.jpg",
          title: "小米手环4复联限量版",
          money: 299
        },
        {
          images: "../assets/images/phone4.jpg",
          title: "Redmi Note 7 Pro",
          money: 1199
        },
        {
          images: "../assets/images/tv.jpg",
          title: "小米电视4S 75英寸",
          money: 6999
        },
        {
          images: "../assets/images/item2.jpg",
          title: "小米手环4复联限量版",
          money: 299
        },
        {
          images: "../assets/images/phone4.jpg",
          title: "Redmi Note 7 Pro",
          money: 1199
        }
      ],
      allSelect: false,
      sum: 0
    };
  },
  beforeMount() {
    this.getData();
  },
  methods: {
    getData() {
      if (1 > 0) {
        this.hasdata = 1;
      } else this.hasdata = 2;
    },
    selectgoods(item) {
      item.isSelect = !item.isSelect;
      this.allSelect = false;
      let sum = (item.sum = item.num * item.money);
      if (item.isSelect == true) {
        this.sum = this.sum + item.money * item.num;
      }
      if (item.isSelect == false) {
        this.sum = this.sum - item.money * item.num;
      }
    },
    selectall(shoppingList) {
      this.allSelect = !this.allSelect;
      if (this.allSelect == true) {
        let sum = 0;
        for (let i = 0; i < this.shoppingList.length; i++) {
          this.shoppingList[i].isSelect = true;
          // console.log(sum);
          sum += this.shoppingList[i].money * this.shoppingList[i].num;
        }

        this.sum = sum;
        console.log(this.sum);
      }
      if (this.allSelect == false) {
        for (let i = 0; i < this.shoppingList.length; i++) {
          this.sum = 0;
          this.shoppingList[i].isSelect = false;
        }
      }
    },
    oppNum(item) {
      item.num--;
      if (item.num <= 1) {
        item.num = 1;
        return;
      }
      if (item.isSelect == true) {
        this.sum = this.sum - item.money;
      }
    },
    supNum(item) {
      item.num++;
      if (item.num >= 10) {
        item.num = 10;
        return;
      }
      if (item.isSelect == true) {
        let sum = this.sum + item.money;
        this.sum = sum;
      }
    },
    deletegoods(item) {
      this.state = item.state = 0;
      this.num = item.num;
      if(this.sum!==0){
        this.sum = this.sum - this.num * item.money;
      }
    },
    Settlement() {
      if(this.sum!==0){
        this.$router.push("paylist");
      } 
    },
    toSearch(){
      this.$router.push('/search');
    }
  }
};
</script>

<style>
</style>