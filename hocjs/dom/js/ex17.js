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

    var currentTime = (value / 100) * audio.duration;
    audio.currentTime = currentTime;

    document.addEventListener("mousemove", handleDrag);
    initialClientX = e.clientX;
    currentValue = value;
    // handleInput(value);
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
  // handleChange(value);
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

  // handleInput(value);
};

//Nhận giá trị khi kéo, khi bấm chuột xuống

//1. Nhả chuột
// var handleChange = function (value) {
//   //   console.log(value);
// };

// //2. Bấm chuột xuống, kéo
// var handleInput = function (value) {
//   // console.log(value);
// };

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

//readyState của Audio
if (audio.readyState > 0) {
  durationEl.innerText = getTime(audio.duration);
}

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

//Xử lý Karaoke

var karaokeContent = document.querySelector(".karaoke-content");

console.log(lyric);
var currentIndex;
var handleKaraoke = function () {
  var currentTime = audio.currentTime * 1000;

  var index = lyric.findIndex(function (sentence) {
    var words = sentence.words;
    return (
      currentTime >= words[0].startTime &&
      currentTime <= words[words.length - 1].endTime
    );
  });

  handlePaintColor(currentTime);

  if (index !== -1 && currentIndex !== index) {
    if (index === 0) {
      //Khi bắt đầu hát
      var sentenceHtml = `
      <p>${getSentence(0)}</p>
      <p>${getSentence(1)}</p>
      `;
      karaokeContent.innerHTML = sentenceHtml;
    } else {
      /*
      index = 1 => Ẩn p thứ nhất
      index = 2 => Ẩn p thứ hai
      index = 3 => Ẩn p thứ nhất
      index = 4 => Ẩn p thứ hai
      */
      nextSentence(index);
    }

    currentIndex = index;
  }

  requestId = requestAnimationFrame(handleKaraoke);
};

var handlePaintColor = function (currentTime) {
  var wordEl = karaokeContent.querySelectorAll(".word");
  if (wordEl.length) {
    wordEl.forEach(function (wordItem, index) {
      var startTime = wordItem.dataset.startTime;
      var endTime = wordItem.dataset.endTime;

      if (currentTime > startTime && currentTime < endTime) {
        var rate = ((currentTime - startTime) / (endTime - startTime)) * 100;
        wordItem.children[0].style.width = `${rate}%`;
        if (index > 0) {
          wordEl[index - 1].children[0].style.width = `${rate}%`;
        }
      }

      // if (index > 0 && currentTime >= wordEl[index - 1].endTime) {
      //   wordEl[index - 1].children[0].style.width = `${rate}%`;
      // }
    });
  }
};

var nextSentence = function (index) {
  var lines = karaokeContent.children;
  if (index % 2 !== 0) {
    lines[0].style.transition = `opacity 0.4s linear`;
    lines[0].style.opacity = 0;

    setTimeout(function () {
      lines[0].style.opacity = 1;
      lines[0].innerHTML = getSentence(index + 1);
    }, 400);
  } else {
    lines[1].style.transition = `opacity 0.4s linear`;
    lines[1].style.opacity = 0;

    setTimeout(function () {
      lines[1].style.opacity = 1;
      lines[1].innerHTML = getSentence(index + 1);
    }, 400);
  }
};

var getSentence = function (index) {
  var words = lyric[index].words;
  var sentence = words
    .map(function (word) {
      return `<span class="word" data-start-time="${word.startTime}" data-end-time="${word.endTime}">${word.data}<span>${word.data}</span></span>`;
    })
    .join(" ");
  return sentence;
};

//setInterval() -> Không nên dùng

var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

var cancelAnimationFrame =
  window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var requestId;

audio.addEventListener("play", function () {
  requestId = requestAnimationFrame(handleKaraoke);
});

audio.addEventListener("pause", function () {
  cancelAnimationFrame(requestId);
});
