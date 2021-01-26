<template>
  <div class="container">
    <div class="blog-list">
       <CommonHeader />
      <div class="blog" v-for="item in blogList" :key="item.blog_id">
        <h3 class="blog-title">
          <router-link :to="{ path: '/blog/Detail/' + item.blog_id }">{{
            item.title
          }}</router-link>
        </h3>
        <p class="blog-content">{{ item.content }}</p>
        <span class="post-time">{{ postBlogTime }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import CommonHeader from "../components/CommonHeader.vue";
export default {
  data() {
    return {
      blogList: [],
      postBlogTime:''
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
          let { results,postTime } = res.data;
          this.blogList = results;
          this.postBlogTime=postTime;
        }
      });
    },
  },
};
</script>

<style scoped>
.blog-list {
  width: 815px;
  margin: auto;
}
.blog {
  background: #cccccc;
  padding: 20px;
  margin-bottom: 20px;
}
.blog-title,
.blog-content,
.post-time {
  margin: 20px 0;
}
</style>