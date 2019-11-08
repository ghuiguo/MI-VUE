<template>
    <div class="type">
        <header class="header">
            <i class="i1" @click="backtoOne()"></i>
            <p class="text">分类</p>
            <router-link class="i2" :to="{path:'search'}"></router-link>
        </header>
        <!-- 侧边导航 -->
        <nav class="navDH">
            <ul class="navWrapper">
                <li :key="index"  v-for="(item,index) in items" :class="{active:chooseIndex==index}" @click="handleChange(index)">
                    <span v-html="item.label" ></span>
                </li>
            </ul>
        </nav>

        <div class="typeYM">
            <div class="YMWrapper">
                <img src="../assets/classify/香薰.png" alt="" @click="pages()">
                <div class="phone">
                    <span class="phoneText">-- 手机 -- </span>
                </div>
                <div class="typePhone">

                    <div class="typePhoneBox">
                        <div class="cc9Phone product">
                            <a href="">
                                <div>
                                    <img src="../assets/classify/cc9.png" alt="">
                                    <p>小米CC9 Pro</p>
                                </div>
                            </a>
                        </div>
                        <div class="redmi8 product">
                            <a href="">
                                <div>
                                    <img src="../assets/classify/redmi.png" alt="">
                                    <p>Redmi 8</p>
                                </div>
                            </a>
                        </div>
                        <div class="Redmi8A product">
                            <a href="">
                                <div>
                                    <img src="../assets/classify/redmi8A.png" alt="">
                                    <p>Redmi 8A</p>
                                </div>
                            </a>
                        </div>

                        <div class="cc9Phone product">
                            <a href="">
                                <div>
                                    <img src="../assets/classify/cc9.png" alt="">
                                    <p>小米CC9 Pro</p>
                                </div>
                            </a>
                        </div>
                        <div class="redmi8 product">
                            <a href="">
                                <div>
                                    <img src="../assets/classify/redmi.png" alt="">
                                    <p>Redmi 8</p>
                                </div>
                            </a>
                        </div>
                        <div class="Redmi8A product">
                            <a href="">
                                <div>
                                    <img src="../assets/classify/redmi8A.png" alt="">
                                    <p>Redmi 8A</p>
                                </div>
                            </a>
                        </div>
                        <div class="cc9Phone product">
                            <a href="">
                                <div>
                                    <img src="../assets/classify/cc9.png" alt="">
                                    <p>小米CC9 Pro</p>
                                </div>
                            </a>
                        </div>
                        <div class="redmi8 product">
                            <a href="">
                                <div>
                                    <img src="../assets/classify/redmi.png" alt="">
                                    <p>Redmi 8</p>
                                </div>
                            </a>
                        </div>
                        <div class="Redmi8A product">
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
    </div>

</template>

<script>

    export default {
        components: {},
        data() {
            return {
                chooseIndex:0,
                items: [
                    {label: "新品"},
                    {label: "众筹"},
                    {label: "小米耳机"},
                    {label: "Redmi手机"},
                    {label: "黑鲨手机"},
                    {label: "手机配件"},
                    {label: "电视"},
                    {label: "大家电"},
                    {label: "电脑"},
                    {label: "小爱智能"},
                    {label: "路由器"},
                    {label: "生活电器"},
                    {label: "厨房电器"},
                    {label: "智能穿戴"},
                    {label: "智能家居"},
                    {label: "车载出行"},
                    {label: "个人健康"},
                    {label: "数码配件"},
                    {label: "有品精选"},
                    {label: "生活电器"},
                    {label: "服务"},
                    {label: "米粉卡"},
                    {label: "生活电器"},
                    {label: "零售店"}

                ],


                phoneList: [
                    {
                        images: "../assets/classify/cc9.png",
                        name: "小米CC9 Pro"
                    }, {
                        images: "../assets/classify/redmi.png",
                        name: "Redmi 8"
                    }, {
                        images: "../assets/classify/redmi8A.png",
                        name: "Redmi 8A"
                    }],
                applianceList: [
                    {
                        images: "../assets/classify/tv.png",
                        name: "全面屏电视E55A"
                    }, {
                        images: "../assets/classify/tv2.png",
                        name: "壁画电视65英寸"
                    }, {
                        images: "../assets/classify/tv3.png",
                        name: "电视4X65英寸"
                    }]


            }

        },
        methods:{

            /* 路由返回到上次进入的前一页 */
            backtoOne(){
                window.history.go(-1);
            },
            /* 页面导航选中样式 */
            handleChange(index){
                window.console.log(index);
                this.chooseIndex=index;
            }
        }
    };
</script>

<style lang='less'>
    .type {
        position: relative;
        width: 7.5rem;
        height: 100%;
        .header {
            display: flex;
            width: 7.5rem;
            height: 1rem;
            background: #f2f2f2;

            .i1 {
                margin: .2rem;
                display: block;
                width: .52rem;
                height: .52rem;
                line-height: .52rem;
                background: url(../assets/classify/i1.png) no-repeat;
                background-size: cover;

            }
            .text {
                margin: .32rem 0;
                color: #666666;
                text-align: center;
                font-size: .36rem;
                width: 5.4rem;
                height: .36rem;
                line-height: .36rem;
            }
            .i2 {
                margin: .2rem;
                width: .62rem;
                height: .62rem;
                line-height: .62rem;
                background: url(../assets/classify/i2.png) no-repeat;
                background-size: cover;

            }

        }
        .navDH {

            width: 1.6rem;
            height: 100%;
            border-right: 1px solid #efefef;

            .navWrapper {
                width: 1.8rem;
                height: 100%;

            }
            .navWrapper > li {
                white-space: nowrap;
                overflow: hidden;
                width: 1.56rem;
                height: .92rem;
                line-height: .92rem;
                font-size: .32rem;
                text-align: center;
                color: #3c3c3c;

            }

        }
        .typeYM {
            position: absolute;
            top: 1.3rem;
            left: 1.96rem;
            width: 5.24rem;
            height: 100%;

            .YMWrapper {
                width: 5.24rem;
                height: 100%;
                img {
                    width: 5.2rem;
                    height: 2.08rem;
                }
                .phone {
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
            .typePhone {
                width: 5.24rem;
                height: 8.84rem;
                background: #ffffff;

                .typePhoneBox {
                    width: 5.24rem;
                    height: 100%;
                }
                .typePhoneBox .product {
                    margin: .4rem 0 .6rem 0;
                    width: 33.333%;
                    height: 1.58rem;
                    float: right;

                    img {
                        display: block;
                        margin: 0 auto;
                        width: 1rem;
                        height: 1rem;
                        background: #fff;
                        overflow: hidden;
                    }

                    p{
                        display: block;
                        margin-top: .28rem;
                        white-space: nowrap;
                        font-size: .23rem;
                        text-align:center;
                        color: rgba(0, 0, 0, .54);
                    }

                }

            }
        }
        .navWrapper li.active{
            color: #fb7d34;
        }

    }




</style>