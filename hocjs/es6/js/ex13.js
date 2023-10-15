//Try catch -> Xử lý các lỗi ngoại lệ
//1. Try thực thi
//2. Nếu xảy ra lỗi -> Thực thi catch
//3. Nếu không xảy ra lỗi -> Bỏ qua catch
//4. Thực thi finally
// try {
//   //Code
//   //   console.log(a);
//   //   getA(); //-> Xảy ra lỗi
//   let a = 10;
//   if (a > 20) {
//     console.log(a);
//   } else {
//     throw new Error("a không được nhỏ hơn 20");
//   }
// } catch (exception) {
//   //   console.log([exception]);
//   console.error(exception.message);
//   //   if (exception.message.includes("not defined")) {
//   //     console.error("Đã xảy ra lỗi liên quan đến định nghĩa hàm");
//   //   }
// } finally {
//   console.log("Hoàn thành");
// }

// console.log("Hello F8");

// const getUser = () => Promise.resolve("Hello F8");
const getUser = () => Promise.reject("Lỗi mạng");
const showUser = async () => {
  try {
    const data = await getUser();
    console.log(data);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Đã xong");
  }
};

showUser();
