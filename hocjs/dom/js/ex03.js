//DOM HTML

// var content = document.querySelector(".content");

//1. Lấy nội dung thẻ html
//1.1. innerHTML => Lấy nội dung bên trong của thẻ html (bao gồm các thẻ html và khoảng trắng)
// console.log(content.innerHTML);

//1.2. innerText => Lấy nội dung bên trong thẻ html (Chỉ lấy text và loại bỏ khoảng trắng)
// console.log(content.innerText);

//1.3. textContent => Lấy nội dung bên trong thẻ html (Chỉ lấy text và không loại bỏ khoảng trắng)
// console.log(content.textContent);

//1.4. outerHTML => Lấy nội dung bên trong bao gồm các element đang tác động
// console.log(content.outerHTML);

// console.log(content.outerText);

//2. Cập nhật nội dung cho thẻ html
// content.innerHTML = '<h2>Hoàng An</h2>';

// content.innerText = '<h2>Hoàng An</h2>';

// content.outerHTML = '<h2>Hoàng An</h2>';

// content.outerText = '<h2>Hoàng An</h2>';

var upBtn = document.querySelector('.up');
var downBtn = document.querySelector('.down');
var countEl = document.querySelector('.count');

upBtn.addEventListener('click', function() {
    countEl.innerText++;
});

downBtn.addEventListener('click', function() {
    countEl.innerText--;
})