<template>
  <div class="container">
    <header class="header">
      <div class="search">
         <i class="iconfont iconsousuo"></i>
        <span>大家都在搜“连衣裙”</span>
        <input type="type" class="iptsearch"/>
      </div>
      <ul class="nav">
        <li class="active">全部</li>
        <li>关注</li>
        <li>小个子</li>
        <li>网红</li>
        <li>素人</li>
        <li><i class="iconfont iconcaidan"></i></li>
      </ul>
    </header>
    <div class="content">
      <ul class="list">
        <li class="miao">
          <div class="li_top">
            <img src=""/>
            <div class="text">
              <h5>喵喵酱</h5>
              <p>网络红人 170cm/55kg</p>
            </div>
          </div>
          <div class="banner">
             <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in bannerlist" :key="index">
                  <img v-lazy="image" />
                </van-swipe-item>
            </van-swipe>
          </div>
          <div class="li_bottom">
            <p class="title">#假两件连衣裙</p>
            <div class="handle">
              <p>
                <i class="iconfont iconxin">喜欢</i>
                <i class="iconfont iconshare">分享</i>
              </p>
              <span class="iconfont icontubiaozhizuo-"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import 'vant/lib/index.css'
import { Swipe, SwipeItem, Lazyload, List, PullRefresh, Icon } from 'vant'
Vue.use(Swipe).use(SwipeItem)
Vue.use(Lazyload)
export default {
  data () {
    return {
      bannerlist: []
    }
  },
  mounted () {
    axios.get('https://www.daxunxun.com/banner').then(res => {
      console.log(res.data)
      let arr = []
      res.data.map(item => {
        arr.push('https://www.daxunxun.com' + item)
      })
      console.log(arr)
      this.bannerlist = arr
    })
  }
}
</script>
<style lang="scss" scoped>
  @import "@/lib/reset.scss";
  .header{
    @include rect(100%,1.2rem);
    @include flexbox();
    @include flex-direction(column);
    @include justify-content();
    @include align-items();
    border-bottom:1px solid #999;
    .search{
      @include rect(3.25rem,0.5rem);
      position: relative;
      margin-top:.2rem;
      .iptsearch{
        @include rect(100%,100%);
        border-radius:0.25rem;
        border:1px solid #999;
      }
      i{
        position: absolute;
        left:0.25rem;
        font:800 0.24rem/0.5rem '';
        color:#999
      }
      span{
        position: absolute;
        margin-left:.7rem;
        font:0.16rem/0.5rem '';
        color:#aaa
      }
    }
    .nav{
      margin-top:.2rem;
      @include rect(100%,.3rem);
      @include flexbox();
      @include justify-content(space-around);
      li{
        font:.18rem/.25rem '';
        i{
          font-size:.24rem;
        }
      }
      li.active{
        border-bottom:4px solid #999;
      }
    }
  }
  .content{
    @include flex();
    @include rect(100%,auto);
    .list{
      @include flexbox();
      @include flex-direction(column);
      li{
        @include rect(100%,3.3rem);
        @include flexbox();
        @include flex-direction(column);
        .li_top{
          @include rect(100%,.7rem);
          @include flexbox();
          @include align-items();
          img{
            @include rect(.44rem,.44rem);
            background: #999;
            margin:0 .11rem 0 .25rem;
          }
          h5{
            font-size:.16rem;
          }
          p{
            font-size: .14rem;
          }
        }
        .banner{
          @include rect(100%,2rem);
          background: #efefef;
          img{
            width:100%;
            height:2rem;
          }
        }
        .li_bottom{
          @include flex();
          @include rect(100%,auto);
          .title{
            margin-top:.12rem;
            font:.18rem/.18rem '';
            color:#999;
          }
          .handle{
            margin-top:.07rem;
            @include flexbox();
            @include justify-content(space-between);
            p{
              margin-left:.25rem;
              i{
                font-size:.16rem;
              }
            }
            span{
              font-size:.2rem;
              margin-right:.25rem;
            }
          }
        }
      }
    }
  }
</style>