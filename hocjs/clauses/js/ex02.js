/*
Câu lệnh rẽ nhánh switch case

- Chỉ chấp nhận so sánh bằng (===)
- Thường áp dụng trong trường hợp có quá nhiều nhánh
*/

var action = "remove";
switch (action) {
  case "create":
  case "insert":
  case "add":
    console.log("Thêm");
    break; //Ngắt nhánh

  case "edit":
  case "update":
    console.log("Sửa");
    break;

  case "delete":
  case "remove":
    console.log("Xóa");
    break;

  default:
    console.log("Danh sách");
    break;
}

if (action === "create" || action === "insert" || action === "add") {
  console.log("Thêm");
} else if (action === "edit" || action === "update") {
  console.log("Sửa");
} else if (action === "delete" || action === "remove") {
  console.log("Xóa");
} else {
  console.log("Danh sách");
}

/*
Trên thực tế:
switch case thường kết hợp với if else để bài toán linh hoạt hơn
*/
