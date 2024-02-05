# Xác thực người dùng

Kiểm tra email và password -> Hợp lệ --> Lưu thông tin user vào session hoặc token

Mật khẩu: Mã hóa

- Mã hóa 1 chiều: md5, sha1 --> Không an toàn (Cùng 1 password --> Chuỗi mã hóa không thay đổi)
  `SELECT * FROM users WHERE email='admin@gmail.com' AND passwors=MD5('123456')`
- Mã hóa bằng hàm băm (hash): bcrypt --> An toàn (Cùng 1 password --> Chuỗi mã hóa khác nhau)

* Bước 1: Truy vấn lấy mật khóa mã hóa trên database bằng email
* Bước 2: So sánh password từ request với lại mật khẩu mã hóa bằng thuật toán so sánh

# Đăng nhập thông qua Google

- Lợi dụng thông tin ở tài khoản Google để lưu vào Database
- Nếu thông tin đã có --> Lấy thông tin trong database để set session
- Nếu thông tin chưa có --> Insert vào database và lấy thông tin vừa insert để set session

Luồng xử lý

- Chuyển hướng về trang Google để login
- Trả về callback URL --> Lấy thông tin từ google sau khi login --> Xử lý insert vào database --> Đăng nhập (Passport)

## Database

Table providers

- id
- name

Table users

- id
- name
- email
- password
- provider_id

2 tư duy khi xây dựng chức năng đăng nhập thông qua mạng xã hội

- Email trong users là duy nhất
- Email của mỗi provider là khác nhau
