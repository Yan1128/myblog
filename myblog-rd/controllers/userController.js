const model = require("../models/userModel")
const { createToken } = require('../auth');
module.exports = {
    async login(ctx) {
        let { username, password } = ctx.request.body;
        let results = await model.getUserByNameAndPwd(username, password);
        //let { user_id } = results[0];
        if (results.length > 0) {
            // 登录成功
            // 生成token
            let payload = {
                userId: Math.random(),
                username,
            };
            var token = createToken(payload);
            ctx.body = {
                state: "success",
                token,
                user: results[0]
            }
        } else {
            ctx.body = 'fail';
        }

    },
    async regist(ctx) {
        let { username, password, nickname } = ctx.request.body;
        if (username.trim().length == 0 || password.trim().length == 0 ||nickname.trim().length == 0 ) { //去掉空格
            ctx.body = {
                state: "fail",
            }
        } 
        else {
            let results = await model.saveUser({ username, password, nickname });
            if (results.insertId) {
                ctx.body = {
                    state: "success",
                }
            } else {
                ctx.body = {
                    state: "fail",
                }
            }
        }

    },
    async checkUser(ctx) {
        let { username } = ctx.query;
        let results = await model.getUserByUsername(username);
        //console.log(results);
        if (results.length > 0) {
            ctx.body = {
                state: "fail",
            }
        } else {
            ctx.body = {
                state: "success",
            }
        }
    }
};