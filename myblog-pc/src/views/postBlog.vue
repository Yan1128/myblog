<template>
  <div class="container">
    <div class="blog-list">
       <CommonHeader />
      <div class="blog">
        <h1>发表文章</h1>
        <p>标题：<input type="text" name="title" v-model="title" /></p>
        <p>内容：<input type="text" name="content" v-model="content" /></p>
        <p><button @click="postBlog">发表</button></p>
      </div>
    </div>
  </div>
</template>
<script>
import CommonHeader from "../components/CommonHeader.vue";
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  created() {},
  components: {
    CommonHeader,
  },
  methods: {
    postBlog() {
      let loginUser = this.$store.state.loginUser;
      if (loginUser!=null && loginUser!='') {
        this.$http
          .post("/blogs/postBlog", {
            title: this.title,
            content: this.content,
            user_id: loginUser.user_id,
          })
          .then((res) => {
            let { state } = res.data;
            if (state == "success") {
              this.$router.push("/");
            } else {
              alert("发表文章失败!");
            }
          });
      } else {
        alert("没登录呢");
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped>
.blog {
  padding: 20px;
  background: #cccccc;
}
.blog-list {
  width: 815px;
  margin: 20px auto;
}
</style>

