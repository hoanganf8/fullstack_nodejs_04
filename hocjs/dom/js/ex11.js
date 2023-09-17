//Tạo element
var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

var progressBarWidth = progressBar.clientWidth;
var initialClientX;
var value;
var currentValue = 0;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    // -> Lấy offsetX -> tính phần trăm theo chiều rộng
    value = (e.offsetX * 100) / progressBarWidth;

    progress.style.width = `${value}%`;

    document.addEventListener("mousemove", handleDrag);
    initialClientX = e.clientX;
    currentValue = value;
    handleInput(value);
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handleDrag);
  initialClientX = e.clientX;
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
  currentValue = value;
  handleChange(value);
});

var handleDrag = function (e) {
  //   console.log(initialClientX, e.clientX);
  var moveWidth = e.clientX - initialClientX;
  value = (moveWidth * 100) / progressBarWidth + currentValue;

  if (value < 0) {
    value = 0;
  }

  if (value > 100) {
    value = 100;
  }

  progress.style.width = `${value}%`;

  handleInput(value);
};

//Nhận giá trị khi kéo, khi bấm chuột xuống

//1. Nhả chuột
var handleChange = function (value) {
  //   console.log(value);
};

//2. Bấm chuột xuống, kéo
var handleInput = function (value) {
  console.log(value);
};

var audio = document.querySelector(".audio");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;
var playBtn = document.querySelector(".player .play-btn");
var playIcon = `<i class="fa-solid fa-play"></i>`;
var pauseIcon = `<i class="fa-solid fa-pause"></i>`;

var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60); //Lấy được phút

  seconds = Math.floor(seconds - mins * 60); // Tính số giây còn lại

  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};
//Lăng nghe sự kiện loadeddata -> Khi nào file audio tải xong
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    // this.innerHTML = pauseIcon;
  } else {
    audio.pause();
    // this.innerHTML = playIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  currentTimeEl.innerText = getTime(audio.currentTime);
  var value = (audio.currentTime * 100) / audio.duration;
  progress.style.width = `${value}%`;
});

audio.addEventListener("play", function () {
  playBtn.innerHTML = pauseIcon;
});

audio.addEventListener("pause", function () {
  playBtn.innerHTML = playIcon;
});
