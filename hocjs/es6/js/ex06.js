//Classes
class User {
  //Định nghĩa các phương thức và thuộc tính

  //Hàm khởi tạo: constructor()
  constructor(name, email) {
    console.log("Hàm này sẽ chạy khi object được khởi tạo");
    //Định nghĩa các thuộc tính
    this.name = name;
    this.email = email;
  }

  //Định nghĩa các phương thức
  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  //   showInfo() {
  //     return this.getInfo();
  //   }
}

class Authentication extends User {
  constructor(name, email) {
    console.log("Authentication Constructor");
    super(name, email); //Chạy constructor của class cha
    this.isLogin = true;
  }
  getInfo() {
    return this.getName() + " - " + this.getEmail();
  }
}

class Authorization extends Authentication {
  constructor(name, email) {
    super(name, email);
    this.role = "subscriber";
  }

  getRole() {
    return this.role;
  }
}

// const authorize = new Authorization("Hoàng An", "hoangan.web@gmail.com");
// console.log(authorize.getRole());
// console.log(authorize.getEmail());

//Expression Class

// const Customer = class {
//   constructor() {
//     this.name = "Hoàng An";
//     this.email = "hoangan.web@gmail.com";
//   }
// };

// const customer = new Customer();
// console.log(customer);

// customElements.define(
//   "hello-world",
//   class extends HTMLElement {
//     connectedCallback() {
//       this.innerText = `Hello F8`;
//     }
//   },
// );
