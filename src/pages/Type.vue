
<template>
  <div class="type">
    <header class="header">
      <i class="i1"></i>
      <p class="text">分类</p>
      <i class="i2"></i>
    </header>
    <nav class="navDH">
      <ul class="navWrapper">
        <li>
          <span>
            新品
          </span>
        </li>
        <li>
          <span>
            众筹
          </span>
        </li>
        <li>
          <span>
            小米耳机
          </span>
        </li>
        <li>
          <span>
            Redmi手机
          </span>
        </li>
        <li>
          <span>
            黑鲨手机
          </span>
        </li>
        <li>
          <span>
            手机配件
          </span>
        </li>
        <li>
          <span>
            电视
          </span>
        </li>
        <li>
          <span>
          大家电
        </span>
        </li>
        <li>
          <span>
            电脑
          </span>
        </li>
        <li>
          <span>
            小爱智能
          </span>
        </li>
        <li>
          <span>
            路由器
          </span>
        </li>
        <li>
          <span>
            生活电器
          </span>
        </li>
        <li>
          <span>
            厨房电器
          </span>
        </li>
        <li>
          <span>
            智能穿戴
          </span>
        </li>
        <li>
          <span>
            智能家居
          </span>
        </li>
        <li>
          <span>
            车载出行
          </span>
        </li>
        <li>
          <span>
            个人健康
          </span>
        </li>
        <li>
          <span>
            数码配件
          </span>
        </li>
        <li>
          <span>
            日用百货
          </span>
        </li>
        <li>
          <span>
            有品精选
          </span>
        </li>
        <li>
          <span>
            生活电器
          </span>
        </li><li>
          <span>
            服务
          </span>
      </li>
        <li>
          <span>
            米粉卡
          </span>
        </li>
        <li>
          <span>
            生活电器
          </span>
        </li>
        <li>
          <span>
            零售店
          </span>
        </li>
      </ul>
    </nav>
    <div class="typeYM">
      <div  class="YMWrapper">
        <img src="../assets/classify/香薰.png" alt="">
        <div class="phone">
          <span class="phoneText" >-- 手机 -- </span>
        </div>
        <div class="typePhone">
          <div class="phoneBox">
            <div class="cc9Phone">
              <a href="">
                <div>
                  <img src="../assets/classify/cc9.png" alt="">
                  <p>小米CC9 Pro</p>
                </div>
              </a>
            </div>

            <div class="redmi8">
              <a href="">
                <div>
                  <img src="../assets/classify/redmi.png" alt="">
                  <p>Redmi 8</p>
                </div>
              </a>
            </div>

            <a href="">
              <div>
                <img src="../assets/classify/redmi8A.png" alt="">
                <p>Redmi 8A</p>
              </div>
            </a>


          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
    export default {
        components: {},
        data() {
            return {
            };
        },
    };
</script>

<style lang='less'>
  .type{
    position: relative;
    width: 7.5rem;
    height: 100%;
    .header{
      display: flex;
      width: 7.5rem;
      height: 1rem;
      background: #f2f2f2;

      .i1{
        margin: .2rem;
        display: block;
        width: .52rem;
        height: .52rem;
        line-height: .52rem;
        background: url(../assets/classify/i1.png) no-repeat;
        background-size: cover;

      }
      .text{
        margin: .32rem 0;
        color: #666666;
        text-align: center;
        font-size: .36rem;
        width: 5.4rem;
        height:.36rem;
        line-height: .36rem;
      }
      .i2{
        margin: .2rem;
        width: .62rem;
        height: .62rem;
        line-height: .62rem;
        background: url(../assets/classify/i2.png) no-repeat;
        background-size: cover;

      }

    }
    .navDH{

      width: 1.6rem;
      height: 100%;
      border-right: 1px solid #efefef;


      .navWrapper{
        width: 1.8rem;
        height: 100%;


      }
      .navWrapper>li{
        white-space: nowrap;
        overflow: hidden;
        width: 1.56rem;
        height: .92rem;
        line-height: .92rem;
        font-size: .32rem;
        text-align:center;
        color: #3c3c3c;

      }
      .navWrapper li:nth-child(1){
        color:#fb7d34;
      }


    }
    .typeYM{
      position: absolute;
      top: 1.3rem;
      left: 1.96rem;
      width: 5.24rem;
      height: 100%;

      .YMWrapper{
        width: 5.24rem;
        height: 100%;
        img{
          width: 5.2rem;
          height: 2.08rem;
        }
        .phone{
          background: #fff;
          font-size: .28rem;
          text-align: center;
          font-weight: 400;
          margin-top: .2rem;
          height: 1.28rem;
          line-height: 1.28rem;
          overflow: hidden;

          }


          }
      .typePhone{

        width: 5.24rem;
        height: 8.84rem;
        background: #63a35c;
      }
        }
      }




</style>