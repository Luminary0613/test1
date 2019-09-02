<template>
  <div class="container">
    <header class="header">
      <router-link to="/home" tag="a">&lt;返回</router-link>
      <span class="title">发现</span>
      <span class="iconfont iconcart"></span>
    </header>
    <div class="content">
      <div class="today">
        <span class="tod_title">今日穿搭指南</span>
        <div class="tod_content">
          <div class="left">
            <div class="img"></div>
            <span class="more">了解详情</span>
          </div>
          <div class="right">
            <div class="img"></div>
            <span class="more">了解详情</span>
          </div>
        </div>
        <div class="weather">
          <div class="wea-left">
            <span class="tod">今天</span>
            <i class="iconfont iconai250"></i>
            <span class="du">9/21℃</span>
          </div>
          <div class="wea-right">
            <span class="tod">今天</span>
            <i class="iconfont iconai250"></i>
            <span class="du">9/21℃</span>
          </div>
        </div>
      </div>
      <div class="custom">
        <span class="cus_title">每天为你定制适合你的穿搭</span>
        <div class="cus_content">
          <div class="left">
            <span class="iconfont iconxin"></span>
          </div>
          <div class="right">
            <span class="iconfont iconxin"></span>
          </div>
        </div>
      </div>
      <div class="theme">
        <p class="the_left">
          <span>穿搭手册</span>
        </p>
        <p class="the_right">
          <span>问穿搭</span>
        </p>
      </div>
      <div class="course">
        <span class="cour_title">穿搭教程</span>
        <ul class="cour_content">
          <li>
            <div class="ban">成熟</div>
            <span>性感搭配</span>
          </li>
          <li>
            <div class="ban">韩系</div>
            <span>休闲搭配</span>
          </li>
          <li>
            <div class="ban">显瘦</div>
            <span>帅气搭配</span>
          </li>
        </ul>
        <ul class="cour_other">
          <li>
            <div class="oth_content">
              显高
            </div>
          </li>
          <li>
            <div class="oth_content">
              显瘦
            </div>
          </li>
          <li>
            <div class="oth_content">
              显白
            </div>
          </li>
        </ul>
      </div>
      <div class="star">
        <span class="star_title">明星搭配</span>
        <ul>
          <li>
            <div class="ban1"></div>
            <span>孙俪，女神搭</span>
          </li>
          <li>
            <div class="ban2"></div>
            <span>欧阳娜娜，女生节</span>
          </li>
        </ul>
      </div>
      <div class="fashion">
        <span class="fas_title">精选潮搭</span>
        <ul class="list">
          <li>
            <div class="li_left">
              <span class="iconfont iconxin"></span>
            </div>
            <span class="_tit">宽松卫衣+休闲长裤</span>
          </li>
          <li>
            <div class="li_right">
              <span class="iconfont iconxin"></span>
            </div>
            <span class="_tit">鱼尾裙高跟鞋，轻松打造你的职场小性感</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/lib/reset.scss";
  .header{
    @include rect(100%,0.3rem);
    @include flexbox();
    @include justify-content(space-between);
    @include align-items();
    padding:0 0.2rem;
    border:1px solid #aaa;
    a{
      color:#666;
    }
    .title{
      font-size:.16rem;

    }
  }
  .content{
    @include flex();
    @include rect(100%,auto);
    @include overflow(auto);
    .today{
      @include rect(100%,3rem);
      @include flexbox();
      @include flex-direction(column);
      .tod_title{
        @include rect(100%,.5rem);
        text-align:center;
        font:.14rem/.5rem '';
      }
      .tod_content{
        @include rect(100%,2rem);
        @include flexbox();
        @include justify-content(space-around);
        .left,.right{
          @include rect(1.5rem,2rem);
          @include flexbox();
          @include flex-direction(column);
          border:1px solid #999;
          .img{
            @include flex();
            @include rect(100%,auto);
          }
          .more{
            @include rect(1.48rem,.3rem);
            background: rgb(243, 242, 242);
            text-align:center;
            font:.14rem/.3rem '';
          }
        }
      }
      .weather{
        @include flex();
        @include rect(100%,auto);
        @include flexbox();
        @include justify-content();
        .wea-left,.wea-right{
          @include rect(1.5rem,100%);
          @include flexbox();
          @include justify-content();
          @include align-items();
          .du{
            margin-left:.2rem;
            margin-top:-.1rem;
          }
          .iconfont{
            margin-left:.02rem;
          }
        }
        .wea-right{
          margin-left:.27rem;
        }
      }
    }
    .custom{
      @include rect(100%,3rem);
      @include flexbox();
      @include flex-direction(column);
      .cus_title{
        @include rect(60%,.5rem);
        margin-left:20%;
        @include justify-content();
        text-align:center;
        font:.14rem/.5rem '';
        border-top:1px solid #666;
      }
      .cus_content{
        @include rect(100%,2rem);
        @include flexbox();
        @include justify-content(space-around);
        .left,.right{
          @include rect(1.52rem,2.3rem);
          @include flexbox();
          @include flex-direction(column);
          border:1px solid #999;
          position: relative;
          .iconfont{
            position: absolute;
            right:.02rem;
            bottom:0;
            font-size:.18rem;
          }
        }
      }
    }
    .theme{
      @include rect(100%,1.2rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      p{
        @include rect(0.8rem,0.8rem);
        border:1px solid #999;
        border-radius: 50%;
        text-align: center;
        span{
          font:.14rem/.8rem '';
          color:#666;
        }
      }
      .the_right{
        margin-left:.8rem;
      }
    }
    .course{
      @include rect(100%,3rem);
      @include flexbox();
      @include flex-direction(column);
      text-align:center;
      .cour_title{
        font-size:.14rem;
      }
      .cour_content{
        @include flexbox();
        @include justify-content();
        @include align-items();
        margin-top:.2rem;
        flex-wrap: nowrap;
        overflow: hidden;
        li{
          margin-right:.27rem;
          div{
            @include rect(1.62rem,1.5rem);
            border:1px solid #999;
          }
        }
        li:last-child{
          margin-right:0;
        }
      }
      .cour_other{
        @include flexbox();
        @include justify-content();
        @include align-items();
        margin-top:.1rem;
        flex-wrap: nowrap;
        overflow: hidden;
        li{
          margin-right:.23rem;
          div{
            @include rect(1.38rem,0.5rem);
            border:1px solid #999;
            font:.14rem/.5rem '';
          }
        }
        li:last-child{
          margin-right:0;
        }
      }
    }
    .star{
      @include rect(100%,2rem);
      @include flexbox();
      @include flex-direction(column);
      text-align:center;
       .star_title{
        font-size:.14rem;
      }
      ul{
        @include flexbox();
        @include justify-content();
        @include align-items();
        margin-top:.27rem;
        flex-wrap: nowrap;
        overflow: hidden;
        li{
          margin-right:.26rem;
          div{
            @include rect(1.83rem,1rem);
            border:1px solid #999;
          }
          span{
              font:.14rem/.3rem '';
          }
        }
        li:last-child{
          margin-right:0;
        }
      }
    }
    .fashion{
      @include rect(100%,auto);
      @include flexbox();
      @include flex-direction(column);
      text-align:center;
       .fas_title{
        font:.14rem/.4rem '';
      }
      ul{
        @include flexbox();
        @include justify-content();
        @include align-items();
        margin-top:.18rem;
        flex-wrap:wrap;
        li{
          div{
            @include rect(1.57rem,1.73rem);
            border:1px solid #999;
            position: relative;
            span{
              font-size:.18rem;
              position:absolute;
              right:.05rem;
              bottom:0;
            }
          }
          div.li_right{
            margin-left:.18rem
          }
          ._tit{
            text-align:center;
            font:.14rem/.3rem '';
            display:block;
            width:1.57rem;
            word-wrap:break-word;
          }
        }
      }
    }
  }
</style>