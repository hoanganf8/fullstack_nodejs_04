//Static: Thuộc tính, phương thức

class F8 {
  constructor() {
    //Thuộc tính non-static
    this.name = "F8";
    this.email = "contact@fullstack.edu.vn";
  }

  //Phương thức non-static
  getName() {
    console.log(this);
    return this.name;
  }

  //Thuộc tính static
  static ceo = "Sơn Đặng";

  //Phương thức static
  static getCEO() {
    console.log(this);
    return this.ceo;
  }
}

/*
Phương thức, thuộc tính non-static => Truy cập từ object, phụ thuộc vào object

Phương thức và thuộc tính static không phụ thuộc vào object, truy cập từ tên class
*/
console.log(F8.ceo);
console.log(F8.getCEO());
const f8 = new F8();
console.log(f8.getName());
