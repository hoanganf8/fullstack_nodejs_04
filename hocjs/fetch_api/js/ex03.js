//1. Authentication
/*
Xác thực thông tin xem bạn là ai?
Đăng nhập
*/

//2. Authorization
/*
- Ủy quyền
- Cho phép bạn được làm gì và không được làm gì?

Các hình thức xác thực

1. Cookie-Based Authentication
- Cookie: Bộ nhớ lưu trữ tại trình duyệt, có thời gian sống nhất định
- Session: Phiên làm việc của trình duyệt, lưu trữ ở trên Server

Làm sao để server biết được phiên làm việc của trình duyệt?

=> Dựa vào cookie để biết được

--- Authentication
User => Nhập email, password => Server Verify => Tạo 1 session (lưu trữ thông tin user) => Trả về client 1 session_id => Trình duyệt lưu session_id vào cookie

---Authorization
Lần request sau => Trình duyệt gửi cookie đã lưu => Server đọc cookie gửi lên => Lấy nội dung theo session_id đã gửi lên trong Session Store => Trả về Client

Tình huống khi Scale Server

- User login => Request tới Server 1
- Lấy thông tin user => Request tới Server 2

2. Token-Based Authentication
*/
