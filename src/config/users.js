// 封装dao层
const { db } = require("./dbconfig");

// 查询所有的用户
// let findUser = (callback) => {
//   db.connect((err, connection) => {
//     if (err) {
//       console.log(err);
//     } else {
//       let sql = "select * from user";
//       connection.query(sql, (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           callback(result);
//           connection.release();
//           connection.destroy();
//         }
//       });
//     }
//   });
// };

let findUser = (callback) => {
  {
    let sql = "select * from user";
    db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        callback(result);
      }
    });
  }
};
// 根据id查询用户信息
let findById = (callback) => {
  {
    let sql = "select * from user where id=15";
    db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        callback(result);
      }
    });
  }
};

// let findUser2 = () => {
//   db.query("select * from user", function (err, results, fields) {
//     console.log(results); // 结果集
//     // console.log(fields); // 额外的元数据（如果有的话）
//   });
// };
// 根据id查询用户信息
// let findById = (id, callback) => {
//   db.connect((err, connection) => {
//     if (err) {
//       console.log(err);
//     } else {
//       let sql = "select * from user where id=?";
//       connection.query(sql, [id], (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           callback(result);
//           connection.release();
//           connection.destroy();
//         }
//       });
//     }
//   });
// };

// 新增用户或修改用户
// let saveUser = (data, callback) => {
//   db.connect((err, connection) => {
//     if (err) {
//       console.log(err);
//     } else {
//       if (data.id) {
//         // 修改
//         let sql =
//           "update user set username=?,password=?,adress=?,phone=? where id=?";
//         connection.query(
//           sql,
//           [data.username, data.password, data.adress, data.id, data.phone],
//           (err, result) => {
//             if (err) {
//               console.log(err);
//             } else {
//               result.code = 200;
//               result.message = "编辑成功";
//               callback(result);
//               connection.release();
//               connection.destroy();
//             }
//           }
//         );
//       } else {
//         // 保存
//         let sql =
//           "insert into user(id,username,password,adress,phone) values(?,?,?,?)";
//         connection.query(
//           sql,
//           [null, data.username, data.password, data.adress, data.phone],
//           (err, result) => {
//             if (err) {
//               console.log(err);
//             } else {
//               result.code = 200;
//               result.message = "添加成功";
//               callback(result);
//               connection.release();
//               connection.destroy();
//             }
//           }
//         );
//       }
//     }
//   });
// };

// // 根据id删除用户
// let deleteById = (id, callback) => {
//   db.connect((err, connection) => {
//     if (err) {
//       console.log(err);
//     } else {
//       let sql = "delete from user where id = ?";
//       connection.query(sql, [id], (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           callback(result);
//           connection.release();
//           connection.destroy();
//         }
//       });
//     }
//   });
// };

module.exports = {
  findUser,
  findById,
  // saveUser,
  // deleteById,
};
