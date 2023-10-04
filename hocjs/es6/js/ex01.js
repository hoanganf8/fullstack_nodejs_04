//Phạm vi toàn cục: Global Scope
var a = 10;

function sum() {
  //Phạm vi hàm: Function Scope
  var total = 0;

  if (total <= 0) {
    //Phạm vi khối: Block Scope
    return -1;
  }
}

/*
let, const
- Chỉ hoạt động trong phạm vi mà biến được khai báo và các phạm vi con
- Chỉ được khai báo 1 lần trong 1 phạm vi

let: Được phép thay đổi

const: Không được phép thay đổi, khai báo phải gán luôn
*/

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// console.log(i);

const user = {
  name: "Hoàng An",
};

user.name = "Hoàng an F8";

// user = "Hello";

console.log(c);
let c = 10;
