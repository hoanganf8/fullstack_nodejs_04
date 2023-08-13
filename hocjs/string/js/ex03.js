var content = `text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

var keyword = "Ipsum1";

//Xử lý
/*
Ý tưởng triển khai: 
- Tìm vị trí xuất hiện đầu tiên của keyword
- Cắt bỏ chuỗi từ đầu đến hết keyword (keyword phải bọc span)
- Phần cắt bỏ sẽ lưu vào biến result

Tìm lại từ đầu với content mới => Lặp lại bước trên
*/
var result = "";
var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var count = 0;
while (position !== -1) {
  result +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>`;

  content = content.slice(position + keyword.length);

  position = content.toLowerCase().indexOf(keyword.toLowerCase());

  count++;
}

result += content; //Nối phần content còn lại vào result

var heading = `<p>Tìm kiếm với từ khóa: ${keyword}</p>`;

var footer = `<p>Đã tìm thấy ${count} kết quả với từ khóa: ${keyword}</p>`;

document.write(heading + result + footer);
