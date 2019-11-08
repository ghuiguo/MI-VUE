<template>
  <div class="settingContainer">
    <div class="commonHeader">
      <img src="../assets/images/turnBack.png" alt />
      <div class="commontitle">个人中心</div>
      <img src="../assets/images/search.png" alt />
    </div>

    <ol>
      <li v-for="(item,index) in settingList" :key="index">{{item.name}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      settingList:[
        {
          name:'地址管理',
          router:''
        },{
          name:'经营执照',
          router:''
        },{
          name:'协议规则',
          router:''
        },{
          name:'小米商城用户协议',
          router:''
        },{
          name:'小米商城隐私政策',
          router:''
        },{
          name:'小米账号使用协议',
          router:''
        },{
          name:'小米账号隐私政策',
          router:''
        }
      ]
    };
  },
  methods: {}
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
  ol {
    padding-top: 1rem;
    font-size: 0.3rem;
    margin-bottom: 0.3rem;
    li {
      width: 100%;
      display: inline-block;
      padding: 0.2rem;
      border-bottom: 1px solid #f6f6f6;
      box-sizing: border-box;
      position: relative;
      text-align: left;
      color: #3c3c3c;
    }
    li:after {
      content: " ";
      position: absolute;
      width: .14rem;
      height: .14rem;
      right: .14rem;
      top: 50%;
      margin-top: -.07rem;
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      transform: rotate(-45deg);
    }
  }
}
</style>