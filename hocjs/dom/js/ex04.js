//DOM HTML: Làm việc với thuộc tính
/*
1. Thuộc tính có sẵn của thẻ html
tenElement.tenthuoctinh => Lấy giá trị thuộc tính
tenElement.tenthuoctinh = giatri => Thiết lập giá trị mới cho thuộc tính

2. Thuộc tính không có sẵn của thẻ html
Data Attribute: 
data-*

Ví dụ: data-index, data-count
*/

var img = document.querySelector('img');

//Đọc nội dung các thuộc tính
console.log(img.src);
console.log(img.title);
console.log(img.alt);
// console.log(img.href);
console.log(img.width);
console.log(img.height);

//Thay đổi giá trị thuộc tính
img.src = `https://fastly.picsum.photos/id/1008/536/354.jpg?hmac=jRXiYRokK5-dKnJuk47J08qs1ooWzWXmbtg8vKzxF5g`;

//Truy cập data attribute
console.log(img.getAttribute('data-count'));

console.log(img.dataset);
console.log(img.dataset.count); //data-count
console.log(img.dataset.numberIndex);

//Cập nhật giá trị cho data attribute
img.setAttribute('data-count', 10);
img.dataset.numberIndex = 'ahihi';

//Xóa thuộc tính
img.removeAttribute('src');

//Xóa thẻ html
img.remove();