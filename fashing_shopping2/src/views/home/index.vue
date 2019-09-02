<template>
  <div class="container">
    <header class="header">
      <button class="scan">扫描</button>
      <div class="search">
         <i class="iconfont iconsousuo"></i>
        <span>搜索</span>
        <input type="type" class="iptsearch"/>
      </div>
      <button class="msg">消息</button>
    </header>
    <div class="content">
      <div class="banner">banner</div>
      <div class="nav">
        <div class="nav-hot child">
          <router-link to="/hot" tag="span"></router-link>
          <p>热销榜</p>
        </div>
        <div class="nav-acc child">
          <router-link to="/acc" tag="span"></router-link>
          <p>配饰</p>
        </div>
        <div class="nav-custom child">
          <router-link to="/custom" tag="span"></router-link>
          <p>私人订制</p>
        </div>
      </div>
      <div class="kind">
        <div class="woman">
          <span>时尚女装</span>
        </div>
        <div class="man">
          <span>潮流男装</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/lib/reset.scss";
  .header{
    @include flexbox();
    @include justify-content(space-between);
    @include align-items();
    .scan,.msg{
      @include rect(0.57rem,0.5rem);
      border:1px solid #999;
      background: #fff;
      font:.14rem/.5rem '';
    }
    .search{
      @include rect(2.37rem,0.28rem);
      position: relative;
      .iptsearch{
        @include rect(100%,100%);
        border-radius:0.08rem;
        border:1px solid #999;
      }
      i{
        position: absolute;
        left:0.2rem;
        font:0.18rem/0.28rem '';
        color:#999
      }
      span{
        position: absolute;
        left:1rem;
        font:0.16rem/0.28rem '';
        color:#999
      }
    }
  }
  .content{
    @include flex();
    @include rect(100%,auto);
    @include flexbox();
    @include flex-direction(column);
    @include overflow(auto);
    .banner{
      @include rect(100%,0.9rem);
      border:1px solid #ccc;
    }
    .nav{
      @include rect(100%,1.26rem);
      @include flexbox();
      @include justify-content(space-around);
      .child{
        @include flexbox();
        @include flex-direction(column);
        @include rect(0.7rem,100%);
        @include justify-content();
        @include align-items(); 
        margin-top:.1rem;
        span{
          display: block;
          border:1px solid #ccc;
          border-radius:50%;
          @include rect(0.7rem,0.7rem);
        }
        p{
          font-size:0.14rem;
          color:#bbb;
          margin-top:0.06rem;
        }
      }
    }
    .kind{
      @include flex();
      @include rect(100%,auto);
      @include flexbox();
      @include flex-direction(column);
      @include justify-content();
      @include align-items(); 
      .woman,.man{
        @include rect(3rem,1.1rem);
        border:1px solid #bbb;
        text-align:center;
        span{
          font: .14rem/1.1rem '';
        }
      }
      .man{
        margin-top:0.2rem;
      }
    }
  }
</style>
