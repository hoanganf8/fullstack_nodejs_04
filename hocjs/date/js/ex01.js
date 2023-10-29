const today = new Date();
console.log(today);
console.log(today.getDay()); //Thứ (Bắt đầu từ 0, 0 = Chủ nhật)
console.log(today.getDate()); //Ngày
console.log(today.getMonth()); //Tháng (Bắt đầu từ 0)
console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());
console.log(today.getTime()); //timestamp

today.setDate(35);
console.log(today);
