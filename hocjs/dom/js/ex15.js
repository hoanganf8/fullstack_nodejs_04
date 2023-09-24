var checkAll = document.querySelector(".check-all");
var checkItems = document.querySelectorAll(".check-item");

var btn = document.createElement("button");
btn.disabled = true;
btn.innerText = "Xóa đã chọn (";
var number = document.createTextNode(0);
btn.append(number);
btn.append(")");
document.body.append(btn);

var count = 0;

checkAll.addEventListener("change", function () {
  //Lấy trạng thái checked của input
  var status = this.checked;
  if (status) {
    count = checkItems.length;
    btn.disabled = false;
  } else {
    count = 0;
    btn.disabled = true;
  }

  number.data = count;

  checkItems.forEach(function (checkItem) {
    checkItem.checked = status;
  });
});

checkItems.forEach(function (checkItem) {
  checkItem.addEventListener("change", function () {
    //Xử lý logic xem tất cả input có được check hay không?
    // Nếu có -> Gán checked của checkAll = true
    //Ngược lại -> Gán false
    // if (!this.checked) {
    //   checkAll.checked = false;
    //   return; //Thoát hàm
    // }
    // var status = Array.from(checkItems).every(function (checkItem) {
    //   return checkItem.checked;
    // });
    // checkAll.checked = status;

    if (this.checked) {
      count++;
    } else {
      count--;
    }

    //Nếu count với số lượng checkbox bằng nhau -> checkAll gán thành checked, và ngược lại
    if (count === checkItems.length) {
      checkAll.checked = true;
    } else {
      checkAll.checked = false;
    }

    //Cập nhật số lượng cho nút xóa
    number.data = count;
    if (count > 0) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  });
});
