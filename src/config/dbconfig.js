// 引入数据库
//请求mysql
var mysql2 = require("mysql2");
//设置数据库连接信息

let db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "000000",
  port: "3306",
  database: "my_sql",
});

module.exports = {
  db,
};
