<template>
  <div class="Shopcart">
    <div class="cart-header">
      <span class="iconfont icon-sousuo"></span>
      <h2 class="cart-header-title">购物车</h2>
      <span class="cart-header-edit">编辑</span>
    </div>

    <div class="cart-main">
      <div class="cart-main-list">
        <ul class="cart-main-list-item" :key="item" v-for="item in shoppingList">
          <li class="cart-main-list-item-section">
            <span
              class="cart-main-list-item-check"
              :class="{active:item.isSelect}"
              @click="selectgoods(item)"
            ></span>
            <img class="cart-main-list-item-image" :src="item.images" alt />
            <span class="cart-main-list-item-handle">
              <span class="cart-main-list-item-handle-name" v-html="item.title"></span>
              <span class="cart-main-list-item-handle-price" v-text="item.money"></span>
              <span class="cart-main-list-item-handle-number">
                <span class="cart-main-list-item-handle-number-operate">
                  <span class="iconfont icon-jian"></span>
                  <span class="amount" v-text="item.num"></span>
                  <span class="supnum iconfont icon-jia"></span>
                </span>
                <span class="delete iconfont icon-shanchu-copy-copy"></span>
              </span>
            </span>
          </li>
        </ul>
        <div class="prompt">
          <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
        </div>
      </div>

      <div class="cart-main-another">
        <div class="lovely-promote">
          <img src="../assets/images/gessulike.jpg" alt />
        </div>
        <div class="cart-main-another-list">
          <div class="cart-main-another-list-item">
            <a href>
              <div class="goods-img-box">
                <img src="../assets/images/phone1.jpg" alt />
              </div>
              <div class="goods-info">
                <div class="goods-info-detail">小米9 Pro 5G 12GB+256GB</div>
                <span>￥4099</span>
              </div>
            </a>
          </div>
          <div class="cart-main-another-list-item">
            <a href>
              <div class="goods-img-box">
                <img src="../assets/images/phone3.jpg" alt />
              </div>
              <div class="goods-info">
                <div class="goods-info-detail">小米9 Pro 5G 12GB+256GB</div>
                <span>￥4099</span>
              </div>
            </a>
          </div>
          <div class="cart-main-another-list-item">
            <a href>
              <div class="goods-img-box">
                <img src="../assets/images/mobile2.jpg" alt />
              </div>
              <div class="goods-info">
                <div class="goods-info-detail">小米9 Pro 5G 12GB+256GB</div>
                <span>￥4099</span>
              </div>
            </a>
          </div>
          <div class="cart-main-another-list-item">
            <a href>
              <div class="goods-img-box">
                <img src="../assets/images/item1.jpg" alt />
              </div>
              <div class="goods-info">
                <div class="goods-info-detail">小米9 Pro 5G 12GB+256GB</div>
                <span>￥4099</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-foot">
      <div class="cart-foot-all">
        <span class="cart-foot-all-button" :class="{active:allSelect}" @click="selectall()"></span>
        <span>全选</span>
      </div>
      <div class="cart-foot-count">
        <span>合计：</span>
        <span class="cart-foot-count-number">￥0.00</span>
      </div>
      <div class="cart-foot-account">
        结算 &nbsp;共(
        <span v-html="num"></span> )件
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      shoppingList: [
        {
          images: "assets/images/mobile2.jpg",
          title: "小米9 Pro 5G 8GB+256GB",
          money: "2699",
          num: 1,
          isSelect: true
        },
        {
          images: "assets/images/phone4.jpg",
          title: "Redmi K20 Pro 尊享版 12GB+512GB",
          money: "2999",
          num: 1,
          isSelect: false
        },
        {
          images: "../assets/images/phone3.jpg",
          title: "小米CC9e 4GB+128GB",
          money: "1199",
          num: 1,
          isSelect: true
        }
      ],
      allSelect: false,
      sum: 0
    };
  },
  methods: {
    selectgoods(item) {
      item.isSelect = !item.isSelect;
      this.allSelect = false;
      if (item.isSelect == true) {
        this.sum = this.sum + item.money * item.num;
      } else {
        this.sum = this.sum - item.momey * item.num;
      }
    },
    selectall() {
      this.allSelect = !this.allSelect;
      if (this.allSelect == true) {
        this.sum = 0;
        for (let i = 0; i < this.shoppingList.length; i++) {
          this.shoppingList[i].isSelect = true;
          this.num = parseInt(
            this.num + this.shoppingList[i].money * this.shoppingList[i].num
          );
        }
      } else {
        for (let i = 0; i < this.shoppingList.length; i++) {
          this.num = 0;
          this.shoppingList[i].isSelect = false;
        }
      }
    }
  }
};
</script>

<style>
</style>