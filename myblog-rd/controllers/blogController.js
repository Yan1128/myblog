const model = require("../models/blogModel")

module.exports = {
  async welcome(ctx) {
    //查询数据库
    let results = await model.getBlogs();
    //let loginUser = ctx.session.loginUser;
    ctx.body = {
      state: "success",
      results
    };

  },
  async getBlogDetail(ctx) {
    let { blogId } = ctx.query;
    let results = await model.getBlogById(blogId);
    if (results.length > 0) {
      let { blog_id, title, content, post_time } = results[0];
      let blogInfo = {
        blog_id,
        title,
        content,
        post_time,
      };
      blogInfo.comments = [];
      for (let i = 0; i < results.length; i++) {
        let obj = results[i];
        blogInfo.comments.push({
          comm_id: obj.comm_id,
          comm_content: obj.comm_content,
          comm_post_time: obj.comm_post_time,
          username: obj.username
        });
      }
      //let loginUser = ctx.session.loginUser;
      ctx.body = {
        state: "success",
        blog: blogInfo,
      };
    }
  },
  async postBlog(ctx) {
    let { title, content, userId } = ctx.request.body;
    let user_id=userId;
    let results = await model.saveBlogs({ title, content, user_id });
    //let loginUser = ctx.session.loginUser;
    if (results.insertId) {
      ctx.body = {
        state: "success"
      };
    } else {
      ctx.body = {
        state: "fail"
      };
    }


  },
  async postComment(ctx) {
    let { blog_id, content, user_id } = ctx.request.body;
    let results = await model.saveBlogsComment({ blog_id, content, user_id });
    //let loginUser = ctx.session.loginUser;
    if (results.insertId) {
      ctx.body = {
        state: "success"
      };
    } else {
      ctx.body = {
        state: "fail"
      };
    }


  },
  

}