var inputRangeList = document.querySelectorAll('[type="range"]');

// var overEvent = new Event("over");
var overEvent = new CustomEvent("over", { detail: "F8" });

overEvent.detail = "abc";

if (inputRangeList.length) {
  inputRangeList.forEach(function (inputRange) {
    inputRange.addEventListener("mousemove", function (e) {
      var value = (e.offsetX * 100) / this.clientWidth;
      value = value.toFixed(2);
      this.data = value;
      this.dispatchEvent(overEvent);
    });
  });
}
