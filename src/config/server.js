//server.js

/* // express使用cors跨域
// CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。只要服务器实现了CORS接口，就可以跨源通信。
 */

//1.导入express包
const express = require("express");
//2.创建web服务器
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { findUser, findById } = require("./users");
const jwt = require("jsonwebtoken");
const { db } = require("./dbconfig");

//设置静态文件路径
app.use(express.static("public"));
app.use(cookieParser());
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
//express内置的json转换方法，用来解析post请求的参数
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// 处理跨域
app.use(cors());
// 设置全局字符集编码
app.use(function (req, res, next) {
  res.set("Content-Type", "text/html;charset=utf-8");
  next();
});

// 拦截get请求，post请求同理
//在浏览器中访问localhost:3000,默认打开login.html页面
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "login.html");
});

//在浏览器中访问localhost:3000/register.html,打开register.html页面
app.get("/register.html", function (req, res) {
  res.sendFile(__dirname + "/" + "register.html");
});
//创建实现注册功能的路由
app.get("/process_get", function (req, res) {
  //获取用户输入的账号，密码，姓名
  var response = {
    username: req.query.username,
    password: req.query.password,
    address: req.query.address,
    phone: req.query.phone,
  };
  //创建增加数据的sql语句实现注册功能
  var addSql =
    "INSERT INTO user(username,password,address,phone) VALUES(?,?,?,?)";
  //获取用户输入的数据
  var addSqlParams = [
    req.query.username,
    req.query.password,
    req.query.address,
    req.query.phone,
  ];
  // connection.query(addSql, addSqlParams, function (err, result) {
  db.query(addSql, addSqlParams, function (err, result) {
    //如果插入数据失败，则注册失败，否则注册成功
    if (err) {
      console.log("[INSERT ERROR] - ", err.message);
      res.end("注册失败");
      //如果失败就直接return不会执行下面的代码
      return;
    } else {
      res.cookie("username", req.query.username, {
        maxAge: 1000 * 60 * 3, //3分钟cookie过期
      });
      res.send("注册成功");
      console.log("注册成功");
    }
  });
  console.log(response);
});

//创建实现登录功能的路由
app.get("/login", function (req, res) {
  // res.cookie("name", "admin");
  //获取用户输入的账号，密码
  var response = {
    username: req.query.username,
    password: req.query.password,
  };

  //创建查询数据的sql语句实现登录功能，查询账号和密码并且与用户输入的账号密码完全一致
  var selectSQL =
    "select username,password from user where username = '" +
    req.query.username +
    "' and password = '" +
    req.query.password +
    "'";
  // 进行数据库操作
  db.query(selectSQL, function (err, result) {
    //打印错误信息
    if (err) {
      console.log("[login ERROR] - ", err.message);
      return;
    }
    //如果查询结果为空，则登录失败，否则登录成功
    if (result == "") {
      console.log("帐号密码错误");
      res.end("帐号密码错误");
    } else {
      console.log("登录成功");
      // res.end("登录成功");
      res.redirect("http://127.0.0.1:5173/");
    }
  });
  console.log(response);
});
// // 查询所有的用户
app.get("/user/findAll", (req, res) => {
  // res 是成功后的回调函数
  findUser((result) => {
    // 将从数据库里面查询出来的数据返回给前端
    res.end(JSON.stringify(result));
  });
});
// // 根据id查询用户信息
app.get("/user/findById", (req, res) => {
  // res 是成功后的回调函数
  // findById(req.query.id, (result) => {
  findById((result) => {
    // 将从数据库里面查询出来的数据返回给前端
    res.end(JSON.stringify(result));
  });
});
//创建服务器
app.listen(3000, function () {
  console.log("访问地址为 localhost:3000");
});

// // 登录页面
// app.post("/", (req, res) => {
//   res.render("login");
// });
// app.get("/", (req, res) => {
//   res.render("login");
// });
// app.post("/login", (req, res) => {
//   // 获取用户的用户名和密码
//   const { username, password } = req.body;
//   if (username === "admin" && password === "123123") {
//     // 登录成功后，将用户信息放入到session中
//     // 这里仅仅是将loginUser添加到了内存中的session中
//     //  而没有将值写入到文件中
//     req.session.loginUser = username;

//     // 为了使得session可以立刻存储，需要手动调用save
//     req.session.save(() => {
//       // res.redirect("/students/list");
//       res.send("成功");
//     });
//   } else {
//     res.send("用户名或密码错误");
//   }
// });
// // 查询所有的用户
// app.get("/user/findAll", (req, res) => {
//   // res 是成功后的回调函数
//   findUser((result) => {
//     // 将从数据库里面查询出来的数据返回给前端
//     res.end(JSON.stringify(result));
//   });
// });

// // 拦截get请求，post请求同理

// // 拦截get请求，post请求同理
// // 根据id删除用户
// app.get("/user/deleteById", (req, res) => {
//   // res 是成功后的回调函数
//   deleteById(req.query.id, (result) => {
//     // 将从数据库里面查询出来的数据返回给前端
//     res.end(JSON.stringify(result));
//   });
// });
// // 新增用户或修改用户
// app.post("/user/saveOrUpdate", (req, res) => {
//   // res 是成功后的回调函数
//   saveUser(req.body, (result) => {
//     console.log("增加用户参数：", req.body);
//     res.send(JSON.stringify(result));
//   });
// });
