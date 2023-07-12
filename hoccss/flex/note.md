# Flex = Flexible Box Module

## Các thuộc tính trong nhóm Flex Container

- display: flex | inline-flex => Kích hoạt flex
- flex-direction: Chọn hướng cho trục chính

* row => Mặc định, nằm ngang
* row-reverse => Nằm ngang, đảo ngược
* column => Nằm dọc
* column-reverse => Nằm dọc, đảo ngược

- justify-content: Căn chỉnh các item theo hướng song song với trục chính

* flex-start
* center
* flex-end
* space-around
* space-evenly
* space-between

- align-items: Căn chỉnh các item theo hướng vuông góc với trục chính (song song với trục cross)

* stretch: Mặc định
* flex-start
* flex-end
* center
* baseline

- flex-wrap: Wrap các item

* nowrap
* wrap
* wrap-reverse

- align-content: Căn chỉnh các hàng (cột) theo hướng vuông góc với trục chính

* stretch: Mặc định
* flex-start
* center
* flex-end
* space-around
* space-evenly
* space-between

=> Chỉ áp dụng khi có nhiều hàng (Nhiều cột)

- gap

## Các thuộc tính trong nhóm Flex Item

- flex-grow: Dãn đều các item để lấp đầy phần còn trống của flex container
- flex-shrink: Tự động co lại các item khi kích thước vượt ra ngoài flex container
- flex-basis: Thiết lập kích thước ban đầu cho item

* Chặn bởi min-width, max-width nếu flex-direction là row
* Chặn bởi min-height, max-height nếu flex-direction là column
* Khi dùng flex-basis thuộc tính width, height sẽ không ghi đè được

- flex: grow shrink basis

- order: Sắp xếp các item
