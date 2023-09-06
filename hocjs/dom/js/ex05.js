var title = document.querySelector('.title');
console.log(title);

// console.log(title.className);

console.log(title.classList);

//Các phương thức xử lý class

//1. add() => Thêm class vào element
title.classList.add('title5', 'title6');

//2. remove() => Xóa class trong element
title.classList.remove('title2', 'title3');

//3. contains() => Kiểm tra class tồn tại
console.log(title.classList.contains('title5'));

//4. toggle()
/*
- Thêm class nếu không tồn tại
- Xóa class nếu tồn tại
*/
title.classList.toggle('title6');
title.classList.toggle('title6');

var btn = document.querySelector('.btn');
var content = document.querySelector('.content');
btn.addEventListener('click', function() {
    if (!content.classList.contains('hide')) {
        content.classList.add('hide');
        this.innerText = 'Hiện';
    } else {
        content.classList.remove('hide');
        this.innerText = 'Ẩn'
    }
});