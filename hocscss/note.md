# Ngôn ngữ tiền xử lý SCSS

## Cài trình biên dịch

1. Cài đặt NodeJS

=> Học viên tự cài

2. Cài đặt SASS

npm i sass -g

## Biên dịch SCSS sang CSS

1. Biên dịch cả folder

sass folder-nguon:folder-dich

Ví dụ:
sass scss:css

=> Biên dịch các file scss trong thư mục scss sang thư mục css

Watch Mode

sass folder-nguon:folder-dich --watch

2. Biên dịch 1 file

sass duong-dan-file-scss duong-dan-file-css

PS: Watch Mode tương tự như trên

3. Nén file css từ file scss

sass duong-dan-file-scss duong-dan-file-css --style compressed
