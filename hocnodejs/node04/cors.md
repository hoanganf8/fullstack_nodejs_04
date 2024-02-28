# CORS

A => B (Server)

A gửi từ server --> Không có vấn đề gì
B gửi từ client (trình duyệt)

- Trình duyệt kiểm tra xem gửi origin nào?
- Nếu origin trùng với origin của B --> Hoạt động tốt
- Nếu origin khác với origin của B --> Chặn Response

## Origin là gì?

protcol + domain + port

http://localhost:3000

## Cho phép CORS

- Thiết lập trên Server
- Trả về Response Header: Framework, Webserver (Nginx, Apache,...)
