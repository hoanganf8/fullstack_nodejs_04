//Javascript là ngôn ngữ lập trình bất đồng bộ

// const getA = () => {
//   setTimeout(() => {
//     console.log("getA");
//   }, 1000);
// };

// const getB = () => {
//   console.log("getB");
// };

// const getC = () => {
//   console.log("getC");
// };

// getA();
// getB();
// alert();
// getC();

/*
Đồng bộ: Chạy 3 hàm, mỗi hàm mất 1 giây -> Tổng 3 giây để hoàn thành -> Nhược: Chậm
Bất đồng bộ: Mất 1 giây -> Ưu điểm: Nhanh

Với bất đồng bộ: Xử lý chờ đợi với các tiến trình có độ trễ (Lấy dữ liệu từ Server, Gửi dữ liệu lên Server chờ phản hồi)

Ví dụ: Download ảnh => Chờ tải tải xong => hiển thị thông báo

3 cách để xử lý bất đồng bộ

- Callback function (ES5)
- Promise (ES6)
- Async Await Function (ES7)
*/

// const downloadImage = (callback) => {
//   setTimeout(() => {
//     console.log("Đã tải ảnh");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 1000);
// };

// const showMessage = () => {
//   console.log("Tải ảnh thành công");
// };

// downloadImage(showMessage);

// const download1 = (callback) => {
//   setTimeout(() => {
//     console.log("Ảnh 1");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 1000);
// };

// const download2 = (callback) => {
//   setTimeout(() => {
//     console.log("Ảnh 2");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 1500);
// };

// const download3 = (callback) => {
//   setTimeout(() => {
//     console.log("Ảnh 3");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 500);
// };

// download1(() => {
//   download2(() => {
//     download3(() => {
//       console.log("Đã tải xong ảnh");
//     });
//   });
// });

//a().b().c() -> Chaining

//Promise: Object dùng để xử lý các tiến trình bất đồng bộ
/*
Tên object: Promise -> Khởi tạo bằng từ khóa new
Trạng thái của Promise: 
+ pending: Chờ xử lý
+ fulfilled: Xử lý hoàn thành
+ reject: Xử lý thất bại
*/

const getUsers = () => {
  const users = ["User 1", "User 2", "User 3"];
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //Phụ thuộc vào logic để gọi resolve hoặc reject
      resolve(users);
      //Giả sử lấy users thất bại -> gọi reject
      reject("Lỗi mạng");
    }, 1000);
  });
  return promise;
};

// getUsers()
//   .then((users) => {
//     console.log(users);
//     console.log("Lấy users thành công");
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Hoàn thành");
//   });

const download1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   reject("Lỗi ảnh 1");
      resolve("Ảnh 1");
    }, 1000);
  });
};

const download2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ảnh 2");
    }, 1500);
  });
};

const download3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ảnh 3");
    }, 500);
  });
};

// download1().then((res) => {
//   console.log(res);
//   download2().then((res) => {
//     console.log(res);
//     download3().then((res) => {
//       console.log(res);
//     });
//   });
// });

//Promise Chaining
download1()
  .then((response) => {
    console.log(response);
    return download2(); //promise
  })
  .catch((error) => {
    console.log(error);
  })
  .then((response) => {
    console.log(response);
    return download3();
  })
  .then((response) => {
    console.log(response);
  });

//Xử lý promise trong vòng lặp
//Promise.all()
//Async Await
//Fetch API
