# Redux

- Quản lý State Global cho các ứng JS
- Redux quản lý theo tư duy Reducer
- Các thành phần của redux

* Store --> Kho chứa state
* Reducer --> Hàm cập nhật State thông qua các Action
* Action --> Object mô tả hành động từ phía UI lên Reducer
* Dispatch --> Gửi Action từ UI lên Reducer
* Subscribe --> Lắng nghe các thay đổi state trên store redux
  ==> Để hiểu về subscribe, tìm hiểu observer pattern

# Redux WorkFlow

UI --> Dispatch --> Action --> Reducer --> Store --> Subscribe --> UI
