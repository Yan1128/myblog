<template>
  <!-- <div class="note" :style="note"> -->
    <div class="container">
      <div class="container-header">
        <div class="container-content">
          <img src="../assets/img/6.png" alt="" />
          <p>List of blog posts</p>
        </div>
      </div>
      <div class="blog-list">
        <CommonHeader />
        <div class="blog" v-for="item in blogList" :key="item.blog_id">
          <h3 class="blog-title">
            <router-link :to="{ path: '/blog/Detail/' + item.blog_id }">{{
              item.title
            }}</router-link>
          </h3>
          <!-- <p class="blog-content">{{ item.content }}</p> -->
          <span class="post-time">{{ postBlogTime }}</span>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>
<script>
import CommonHeader from "../components/CommonHeader.vue";
export default {
  data() {
    return {
      blogList: [],
      postBlogTime: "",
      // note: {
      //   backgroundImage: "url(" + require("../assets/img/5.jpg") + ")",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "100% 100%",
    
      // },
    };
  },

  created() {
    this.getData();
  },
  components: {
    CommonHeader,
  },
  methods: {
    getData() {
      this.$http.get("/blogs/list").then((res) => {
        let { state } = res.data;
        if (state == "auth-fail") {
          alert("请求未授权-then!");
        } else if (state == "success") {
          let { results, postTime } = res.data;
          this.blogList = results;
          this.postBlogTime = postTime;
        }
      });
    },
  },
};
</script>

<style scoped>
.container {
  background:#f4f5f7;
  
}
/* .blog-list {
  width: 1000px;
  margin: auto;
}
.blog {
  background: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: .5rem;
} */
.blog-title,
.blog-content,
.post-time {
  margin: 20px 0;
}
img {
  width: 90px;
  height: 80px;
}
.container-header{
  height: 100px;
  background: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}
  
.container-content{
  display: flex;
  justify-items: flex-start;
  padding: 10px 20px;
  margin: 0 125px;
  line-height: 80px;
  
}
p{
  margin:0 30px;
  font-size: 1.5rem;
  color: #000;
}
</style>