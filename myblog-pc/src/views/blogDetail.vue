<template>
  <div class="container">
    <div class="blog">
      <div class="blog-title">
        <h3>{{ blog && blog.title }}</h3>
        <span>{{ blog &&  blog.post_time }}</span>
      </div>
      <div class="blog-content">{{ blog &&  blog.content }}</div>
      <div class="comments">
        <h4>-------评论区-------</h4>
        <p>
          <input type="text" name="content" v-model="content">
          <button @click="postComment">添加评论</button>
        </p>
        <div class="comment" v-for="item in contentList" :key="item.comm_id">
          <div class="comment-content">{{ item.comm_content }}</div>
          <div class="comment-info">
            <span class="userinfo">{{ item.username }}</span>/
            <span class="post-time">{{ item.comm_post_time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
   data() {
    return {
      blog: null,
      contentList:[],
      content:''
    };
  },
  created() {
    this.getBlogDetail();
  },
  methods: {
    getBlogDetail() {
      let blogId = this.$route.params.blog_id;
      this.$http
        .get("/blogs/detail", {
          params: {
            blogId: blogId,
          },
        })
        .then((res) => {
          let { state, blog } = res.data;
          if (state == "success") {
            this.blog = blog;
            this.contentList = blog.comments;
          }
        })
        .catch(() => {
          // alert('请求未授权-catch!');
          this.$router.push("/login");
        });
    },
    postComment(){
      let blogId = this.$route.params.blog_id;
      let loginUser = this.$store.state.loginUser;
      if (loginUser) {
        this.$http
          .post("/blogs/postComment", 
          {
            blog_id:blogId,
            content:this.content,
            user_id: loginUser.user_id,
          })
          .then((res) => {
            let { state } = res.data;
            if (state == "success") {
              alert("发表评论成功!");
              //this.$router.push("/blog/Detail/");
              this.getBlogDetail();
              this.content=''
            } else {
              alert("发表评论失败!");
            }
          });
      }else{
          alert('没登录呢');
          this.$router.push('/login');
      }
    }
  },
};
</script>

<style scoped>
.blog {
  margin: 20px auto;
  padding: 20px;
  background: #cccccc;
}
.blog-title {
  padding: 10px;
}
.blog-content {
  padding: 10px;
}
.comment {
  padding: 20px;
}
.comment-info {
  float: right;
}
.comment-content{
  border: #000000 solid 1px;
}
</style>
