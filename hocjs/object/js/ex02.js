var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  detail: {
    age: 31,
    job: "Teacher",
    histories: [
      {
        year: 2020,
        name: "Công việc 1",
      },
      {
        year: 2021,
        name: "Công việc 2",
      },
      {
        year: 2022,
        name: "Công việc 3",
      },
    ],
  },
  getInfo: function () {
    var current = this;
    return {
      username: this.name,
      address: "Hà Nội",
      getFull: function () {
        console.log(this);
        return `
        Name: ${current.name}
        Email: ${current.email}
        Địa chỉ: ${this.address}
        `;
      },
    };
  },
};
// console.log(user);
// console.log(user.detail.age);
// console.log(user.detail.histories[0].name);
// console.log(user.getInfo().address);
// console.log(user.getInfo().username);
console.log(user.getInfo().getFull());

Object.prototype.combine = function (...args) {
  //Nối giá trị các key trong object customer thành 1 mảng
  var current = this;

  return args.map(function (key) {
    //   console.log(key, current[key]);
    return current[key];
  });
};

Object.prototype.message = "F8 - Fullstack";

var customer = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 31,
};

// console.log(customer.combine("name", "email", "age"));
/*
[
    'Hoàng An',
    'hoangan.web@gmail.com',
    31
]
*/

var service = {
  name: "Đào tạo lập trình",
  teacher: "Hoàng An",
};
// console.log(service.combine("name", "teacher"));

//Prototype: Kế thừa phương thức, thuộc tính

//Mảng: Array

//Chuỗi: String

//Số: Number
// console.log(Array.prototype);
// console.log(String.prototype);
// console.log(Number.prototype);

String.prototype.getMsg = function () {
  return "Hello F8";
};

var users = [];
console.log(users.message);
var fullname = "Hoàng An";
console.log(fullname.message);
console.log(fullname.getMsg());
var age = 31;
console.log(age.message);
// console.log(age.getMsg());
