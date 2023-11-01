# Regex

=> Website Test: https://regex101.com/

## Các ký tự cơ bản

- string -> Khớp chuỗi string nằm trong chuỗi cần kiểm tra
- ^ (Đầu biểu thức) -> Khớp biểu thức nằm ở đầu chuỗi
- $ (Cuối biểu thức) -> Khớp biểu thức nằm ở cuối chuỗi
- [A-Z] -> Khớp chữ hoa
- [a-z] -> Khớp chữ thường
- [0-9] -> Khớp số
- [charlist] -> Danh sách các ký tự

=> Các biểu thức nằm trong cùng cặp ngoặc [] sẽ kết hợp theo hình thức HOẶC
Ví dụ: [A-Za-z0-9@] -> Chữ hoa hoặc chữ thường hoặc số hoặc ký tự @

Khớp độ dài: Các biểu thức trong Regex mặc định là 1 ký tự

- {min,max} -> Độ dài từ min đến max
- {min,} -> Độ dài >=min
- {value} -> Độ dài cố định value

## Các ký hiệu viết tắt liên quan đến độ dài

```
+ -> {1,}
* -> {0,}
? -> {0,1}
```

## Các ký hiệu viết tắt khác

- \d -> Đại diện cho số
- \D -> Không phải là số
- \w -> Đại diện cho: chữ hoa, thường, số, gạch dưới
- \W -> Ngược lại của \w
- \s -> Khoảng trắng
- \S -> Không phải khoảng trắng

Lưu ý: Khi gặp các ký hiệu của Regex mà vẫn muốn kiểm tra -> Thêm ký hiệu (escape) \ phía trước
. [ ] / +

## Phủ định và hoặc

- ^ -> Phủ định
- | -> Hoặc

## Capturing Group

-> Kỹ thuật lấy 1 phần trong biểu thức chính quy tìm được
-> Không áp dụng với global

## Non-Capturing Group

-> Loại bỏ giá trị trong cặp ngoặc tròn ra khỏi kết quả
-> Áp dụng khi phải gom nhóm nhưng lại không muốn kết quả được hiển thị

Ký hiệu: (?:regex)

## Greedy, Lazy

- Tham lam khi sử dụng dấu . để đại diện cho tất cả các ký tự
- Khắc phục nó bằng cách thêm dấu ? vào phía sau biểu thức (Sau độ dài)

## Đối sánh chuỗi khi thay thế

- Capturing 1 -> $1
- Capturing 2 -> $2
- Capturing 3 -> $3
- Capturing n -> $n
