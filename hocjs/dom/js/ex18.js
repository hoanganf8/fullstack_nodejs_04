var slider = document.querySelector(".slider");

//Tạo event
var finishEvent = new Event("finish");

slider.addEventListener("input", function () {
  var value = this.value;
  if (+value === 100) {
    finishEvent.abc = "xyz";
    //Gửi sự kiện vào element slider
    slider.dispatchEvent(finishEvent);
  }
});

slider.addEventListener("mousedown", function (e) {
  finishEvent.initialOffsetX = e.offsetX;
  finishEvent.initialOffsetY = e.offsetY;
});

//Khi nào có nhu cầu -> Lắng nghe sự kiện finish
slider.addEventListener("finish", function (e) {
  console.log(e);
  console.log("Hoàn thành");
});
