<template>
  <div class="settingContainer">
    <div class="commonHeader">
      <img @click="toBack()" src="../assets/images/turnBack.png" alt />
      <div class="commontitle">商品订单</div>
      <img src="../assets/images/search.png" alt />
    </div>
 <MayBeLikeList></MayBeLikeList>
  </div>



</template>

<script>
import MayBeLikeList from './components/MayBeLikeList'
export default {
  components: {
    MayBeLikeList
  },
  data() {
    return {
     
    };
  },
  methods: {
    toBack(){
      window.history.go(-1);
    }
  }
};
</script>

<style lang='less'>
.settingContainer {
  .commonHeader {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: 1rem;
    background: #f2f2f2;
    color: #666;
    padding: 0;
    img {
      width: 0.6rem;
      height: 0.6rem;
      display: block;
      margin: 0 0.2rem;
    }
    .commontitle {
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      text-align: center;
      font-size: 0.3rem;
    }
  }
 
}
</style>