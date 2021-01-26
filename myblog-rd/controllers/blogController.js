const model = require("../models/blogModel")
const utils = require("../utils/dateTimeUtil")
module.exports = {
  async welcome(ctx) {
    //查询数据库
    let results = await model.getBlogs();
    let {post_time}=results[0];
    let postTime=await utils.formatTime(post_time);
    //let loginUser = ctx.session.loginUser;
    ctx.body = {
      state: "success",
      results,
      postTime
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
      let postTime=await utils.formatTime(post_time);
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
      // let times=[];
      // for(let i=0;i<comments.length;i++){
      //   let {comm_post_time,comm_id}=comment[i];
      //   times.push({
      //     time:comm_post_time,
      //     id:comm_id
      //   })
      // }

      //let postCommTime=await utils.formatTime(post_time);
      //let loginUser = ctx.session.loginUser;
      ctx.body = {
        state: "success",
        blog: blogInfo,
        postTime,
        //times
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