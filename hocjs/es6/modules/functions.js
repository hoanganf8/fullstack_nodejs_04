//Export
/*
Export Default -> Chỉ có 1
Export Named -> Có thể có nhiều
*/

export default function getMessage() {
  return "Hello F8";
}

export class User {
  constructor() {
    this.name = "Hoàng An";
    this.email = "hoangan.web@gmail.com";
  }
}

export const customer = { name: "Hoàng An" };

export const products = ["Product 1", "Product 2"];

// export default getMessage;
// export { User, customer };
