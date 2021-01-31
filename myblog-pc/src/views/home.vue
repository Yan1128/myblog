<template>
  <div>
    <!-- <div id="container">
      <div id="img-box">
        <img src="imgs/1.jpg" alt="" />
        <img src="imgs/2.jpg" alt="" />
        <img src="imgs/3.jpg" alt="" />
        <img src="imgs/4.jpg" alt="" />
        <img src="imgs/5.jpg" alt="" />
      </div>
      <span class="btn" id="prev">&lt;</span>
      <span class="btn" id="next">&gt;</span>
      <div class="text">
        <h1>欢迎来到我的个人网站</h1>
        <p>这里有一些我平时发表的博客，进来看看吧</p>
        <p>桃李不言 下自成蹊</p>
        <router-link to="/login">登录</router-link> |
        <router-link to="/regist">注册</router-link>
      </div>
    </div> -->
    <div>
      <div class="img"><img src="../assets/img/3.jpg" alt="" /></div>
      <div class="text">
        <h1>欢迎来到个人博客网站</h1>
        <p>这里有一些发表的博客文章，进来看看吧</p>
        <router-link to="/login">起步→</router-link> 
        <!-- <router-link to="/regist">注册</router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
img{
    width: 100%;
    height: 600px;
   
}
body{
     background-image: url(../assets/img/1.jpg);
    background-size:80px 60px;
}
</style>