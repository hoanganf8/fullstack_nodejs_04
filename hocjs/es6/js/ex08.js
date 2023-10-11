//Classes
class User {
  constructor() {
    this.name = "Hoàng An";
    this.email = "hoangan.web@gmail.com";
  }

  getName() {
    return this.name;
  }

  static getFullName() {
    //Gọi đến hàm getName()
    // console.log(new this());
    return new this().getName();
  }

  static getFullEmail() {
    return new this().email;
  }

  getEmail() {
    //Gọi đến hàm getFullEmail()
    return this.constructor.getFullEmail();
  }
}

// console.log(User.getFullName());
// const user = new User();
// console.log(user.getEmail());

class F8 {
  //Thuộc tính private
  //   #email = "hoangan.web@gmail.com";
  #email; //Khai báo thuộc tính private

  constructor() {
    this.data = ["Item 1", "Item 2", "Item 3"];
    this.name = "Hoàng An";
    this.#email = "hoangan.web@gmail.com"; //Gán giá trị cho thuộc tính private
  }

  //getter
  get latest() {
    return this.data[this.data.length - 1];
  }

  //setter
  set latest(value) {
    this.data.push(value);
  }

  get _name() {
    return this.name;
  }

  //Dùng 1 phương thức để truy cập đến 1 thuộc tính private
  getEmail() {
    return this.#email;
  }

  get email() {
    return this.#email; //Truy cập vào thuộc tính private
  }

  set email(value) {
    this.#email = value;
  }
}

const f8 = new F8();
f8.email = "contact@fullstack.edu.vn";
console.log(f8.email);
// f8.latest = "Item 4";
// console.log(f8.latest);
// console.log(f8._name);
