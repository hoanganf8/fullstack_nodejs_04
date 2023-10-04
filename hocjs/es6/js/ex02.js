//Arrow function

//1. Arrow function không tham số

// const getMessage = () => {
//   console.log("Hello F8");
// };
// getMessage();

//2. Arrow function có 1 tham số
// const getMessage = msg => {
//     console.log(msg);
// }

// getMessage('F8')

//3. Arrow function nhiều tham số
// const getTotal = (a, b) => {
//     console.log(a + b);
// }
// getTotal(5, 10);

//4. Arrow function có return
const sum = (a, b) => a + b;
console.log(sum(10, 20));

const getUser = () => ({name: 'Hoàng An', email: 'hoangan.web@gmail.com'})
console.log(getUser());

//Ví dụ: Áp dụng callback
const users = [
    {
        id: 1,
        name: 'User 1'
    },
    {
        id: 2,
        name: 'User 2'
    },
    {
        id: 3,
        name: 'User 3'
    }
]
const id = 2; 
//Lấy thông tin user có id = 2
const info = users.find((user) => user.id === id);
console.log(info);

// setTimeout(() => {
//     console.log('Hello F8');
// }, 1000);

//Arrow function với Closure
const div = (a) => (b) => a / b;
var result = div(10);
console.log(result(5));
console.log(result(2));

//Arrow Function với IIFE
(() => {
    console.log('ABC');
})();

/*
Nguyên tắc khi làm việc với Arrow function
- Arrow function không dùng để thay thế function truyền thống
- Arrow function không binding được this
- Arrow function không binding được arguments
- Arrow function không nên sử dụng làm method của object
- Arrow function không có hoisting
- Arrow function KHÔNG ĐƯỢC sử dụng xây dựng hàm tạo (Function Constructor)
- Arrow function không có thuộc tính prototype
*/

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     console.log(this);
//     console.log(e.target);
// })

// const getMax = (...args) =>  {
//     // ...args => rest parameter
//     // console.log(arguments);
//     console.log(args);
// }
// getMax(5, 10, 15);

// const customer = {
//     name: 'Hoàng An',
//     email: 'hoangan.web@gmail.com',
//     getInfo: function() {
//         return this.name + ' - ' + this.email;
//     }
// }

// console.log(customer.getInfo());

// const Customer = () => {
//     this.name = 'Hoàng An';
//     this.email = 'hoangan.web@gmail.com'
// }
// Customer.prototype.message = 'Hello';

// const customer = new Customer;
//=> Sai

Array.prototype.getLength = function(){
    console.log(this);
}
const lists = [1,2,3];
lists.getLength();

/*
1. Destructuring
2. Spread Operator
3. Enhance Object Literal
4. Classes
- Cú pháp
- Kế thừa: extends
- Static
- Setter, Getter
*/