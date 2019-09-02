<template>
  <div id="app">
   <router-view></router-view>
   <router-view name='Footer'></router-view>
  </div>
</template>

<style lang="scss">
@import '@/lib/reset.scss';

html, body, #app{
  @include rect(100%, 100%);
}

#app{
  @include flexbox();
  @include flex-direction(column);
  .container {
    @include flex();
    @include rect(100%, auto);
    @include flexbox();
    @include flex-direction(column);
  }
}
.footer{
  @include rect(100%, .5rem);
  @include background-color('#ccc');
  ul{
    @include rect(100%, 100%);
    @include flexbox();
    li{
      @include flex();
      @include flexbox();
      @include flex-direction(column);
      @include justify-content();
      @include align-items();    
      span{
        display:block;
        font-size:.2rem;
      }
      p{
        font-size:0.16rem;
        color:rgba(170,170,170,1)
      }
    }
  }
}
</style>
