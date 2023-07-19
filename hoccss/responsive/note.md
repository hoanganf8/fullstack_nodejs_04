# Responsive Web Design

## Adaptive

- Tạo ra 1 phiên bản giao diện khác
- Dựa vào thiết bị

## Responsive

- Thiết kế web đáp ứng
- Dùng CSS
- Dựa vào kích thước trình duyệt

## Breakpoint

- Điểm dừng kích thước màn hình mà tại đó giao diện sẽ thay đổi để chuyển qua thiết bị khác
- Không có breakpoint cố định cho tất cả các dự án
- Các breakpoint phổ biến:

* 576px
* 768px
* 992px
* 1200px
* 1400px

## Media Queries

```css
@media all|screen|print and (min-width|max-width: breakpoint) {
  selector {
    property: value;
  }
}
```
