var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

var course = {
  courseName: "Fullstack K4",
  teacher: "Hoàng An F8",
};

//Nối object course vào object user

// for (var key in course) {
//   user[key] = course[key];
// }

// console.log(user);

//Object.assign(target, source)
// var result = Object.assign(user, course);

var tmp = Object.assign({}, user);
var result = Object.assign(tmp, course);

console.log(user);
console.log(result);
