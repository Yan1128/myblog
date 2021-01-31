<template>
  <div class="container">
    <!-- <div class="img"><img src="../assets/img/8.jpg" alt="" /></div> -->
    <div class="login-form">
      <div class="img"><img src="../assets/img/8.jpg" alt="" /></div>
      <h3>个人博客，请登录账号密码</h3>
      <p>用户名：<input type="text" name="username" v-model="username" /></p>
      <p>密码：<input type="password" name="password" v-model="password" /></p>
      <p>
        <button @click="doLogin" class="btn">登录</button>
      </p>
      <div class="regist"><router-link to="/Regist">没有账号？去注册</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    doLogin() {
      this.$http
        .post("/users/login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          let { state, token, user } = response.data;
          if (state == "success") {
            //   登录成功
            // 存储token
            this.$store.commit("storeLoginUser", user);
            this.$store.dispatch("setToken", token);
            this.$router.push("/Index");
          } else {
            //   登录失败
            alert("用户名或密码不正确!");
          }
        });
    },
  },
};
</script>

<style scoped>

.login-form {
  /* width: 650px;
  background: #cccccc;
  margin: 40px auto;
  padding: 20px 0;
  text-align: center; */
  /* position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */

  width: 500px;
  margin: auto;
  /* padding: 20px 0; */
  text-align: center;
  
  background-color: #faeee7;
  /* border: 1px solid #e5e5e5; */
  /* border-radius: 10px; */
}
.login-form p {
  padding: 20px 0;
}

.btn {
  width: 70px;
  /* color: #ffffff;
 
  background-color: #006dcc;
  background-repeat: repeat-x;
  background-image: linear-gradient(to bottom, #0088cc, #0044cc);
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0);
  padding: 11px 19px;
  font-size: 17.5px;
  border-radius: 6px;
  display: inline-block;
  margin-bottom: 0;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05); */
}
.img {
  margin-top: 50px;
}
img {
  width: 500px;
  height: 250px;
}
input{
  padding: 5px 10px;
  border-radius: .5rem;
  /* box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05); */
    border:1px solid #b8baba;
    background: #ffffff;
}

</style>