<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">登录</router-link> |
      <router-link to="/regist">注册</router-link> |
      <!-- <router-link to="/regist">注册</router-link> -->
      <router-link to="/">首页</router-link>  |
      <router-link to="/blog/post">发表文章</router-link> 
    </div>

    <router-view />
  </div>
</template>

<script>

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/* css reset 样式重置 */
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}

/* 通用样式 */
.container {
  width: 1200px;
  margin: 0 auto;
}
header {
  height: 50px;
  //background: #cccccc;
  display: flex;
  justify-content: space-between;
  align-items: right;
}
</style>
