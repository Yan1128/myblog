const db=require("../models/db")
module.exports={
    getBlogs(){
        let sql = "select * from t_blog order by post_time desc";
        return db.query(sql);
    },
    getBlogById(blogId){
        return db.query(`
        SELECT blog.*, comm.comm_id, comm.content as comm_content, comm.post_time as comm_post_time, usr.username
        FROM t_blog blog  LEFT JOIN t_comment comm 
        ON comm.blog_id=blog.blog_id 
        LEFT JOIN t_user usr ON comm.user_id=usr.user_id
        WHERE blog.blog_id=? order by comm.post_time desc`, [blogId]);
    },
    saveBlogs(blog){
        let sql = "insert into t_blog set ?";
        let values = blog;
        return db.query(sql, values);
    },
    saveBlogsComment(blog){
        let sql = "insert into t_comment set ?";
        let values = blog;
        return db.query(sql, values);
    }
}