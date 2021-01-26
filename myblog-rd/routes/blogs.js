const router = require('koa-router')()
const { verifyToken } = require("../auth");

//引入控制器
let controller = require("../controllers/blogController");
router.prefix('/blogs')

router.get("/list",verifyToken,controller.welcome);

router.get("/detail",verifyToken,controller.getBlogDetail);

router.post("/postBlog",controller.postBlog);

router.post("/postComment",controller.postComment);


module.exports = router
