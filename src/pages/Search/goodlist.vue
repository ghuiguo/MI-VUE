// 这个是搜索结果的列表的商品
<template>
    <div class="good-list">
      <div class="item-box">
        <a href="">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/07270cc09689eb9b13b29aa9f6bc41eb.jpg" alt="" style="width: 2.53rem;
                  height: 2.53rem;
                  position: relative;">
        </a>
        <div class="item-detail">
          <h3>小米CC9 Pro</h3>
          <p>1亿像素超清主摄 / 后置全场景五摄像头 / 双闪光双柔光四闪光灯 / 3200万像素超清前置相机 / 10倍混合光学变焦，50倍数字变焦 / 5260mAh大电量 / 标配30W疾速快充 / 小米首款超薄屏下指纹 / 德国莱茵低蓝光认证 / 多功能NFC / 红外万能遥控 / 1216 超线性扬声器</p>
          <div class="item-detail-list" style="flex: 1;">
            <span>骁龙730G</span>
            <span>10800万+2000万+1200万+500万+200万像素</span>
            <span>6.47英寸</span>
          </div>
          <div style="    color: #ff6700;
    font-size: .36rem;
    line-height: 1;
    margin-top: .22rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;">2799￥</div>
        </div>
    </div>
      
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
body{
  background: #eee;
}
.item-box{
  display: flex;
    padding: .28rem 0;
    padding-right: .28rem;
    min-height: 2.53rem;
    position: relative;
    background: #fff;
    border:1px solid #bbb;
    margin-bottom: .2rem;
    }
.item-box a{
      display: block;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    padding: .28rem 0;
    padding-right: .28rem;
    min-height: 2.53rem;
    position: relative;
    background: #fff;
}
h3{
      font-size: .28rem;
    color: rgba(0,0,0,.87);
    line-height: .38rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-weight: 400;
}

.item-detail p{
      font-size: .2rem;
    line-height: .27rem;
    color: rgba(0,0,0,.54);
    margin-top: .05rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.item-detail-list span{
      color: rgba(0,0,0,.4);
    font-size: .3rem;
    line-height: .27rem;
    height: .27rem;
    overflow: hidden;
}
    
</style>