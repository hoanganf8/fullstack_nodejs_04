//Storage -> Kho lưu trữ ở trình duyệt
/*
1. localStorage: Lưu trữ vĩnh viễn trên bộ nhớ trình duyệt
2. sessionStorage: Lưu trữ theo phiên của trình duyệt
-> Thuộc object Storage
-> Kích thước lưu trữ lớn

3. Cookie: Lưu trữ theo thời gian xác định (Thời gian cố định hoặc theo phiên)
-> Dung lưu trữ thấp
-> An toàn hơn localStorage, sessionStorage
-> Chia sẻ dữ liệu giữa các subdomain

=> Chỉ lưu trữ được text
*/

// localStorage.setItem("username", "hoangan.web");
// localStorage.setItem("email", "hoangan.web@gmail.com");
// localStorage.setItem("token", "123");

// localStorage.removeItem("username");

// const email = localStorage.getItem("email");
// console.log(email);

// localStorage.clear();

//Cookie
/*
Có 2 cách set cookie:
- Cách 1: Dùng document.cookie -> Dùng js
- Cách 2: Dùng server trả về 1 response header (Set-Cookie) -> Trình duyệt sẽ tự động set theo header trả về (Chỉ Server mới được phép chọn HttpOnly hay Secure)

Khi có 1 http request -> cookie sẽ tự động đính kèm vào request header -> Đó là lý do server đọc được cookie
*/
// document.cookie = `username=hoanganit19;expires=${new Date(
//   "2023-10-30 09:00:00",
// ).toUTCString()}`;
// document.cookie = "email=hoangan19@gmail.com;path=/";
// document.cookie = "email=hoangan@gmail.com;path=/hocjs";
// document.cookie = `username=;expires=${new Date().toUTCString()}`;
document.cookie = "open-popup=1;domain=localhost;path=/";
console.log(document.cookie);
