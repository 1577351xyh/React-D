/**
 * call 异步请求
 * put 状态更新
 * takeEvery 监听
 */

// import { call, put, takeEvery } from "redux-saga/effects";


// // 模拟登录
// const UserService = {
//   login(uname) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (uname === "Jerry") {
//           resolve({ id: 1, name: "Jerry", age: 18 });
//         } else {
//           reject("用户名或密码错误");
//         }
//       }, 1000);
//     });
//   }
// };