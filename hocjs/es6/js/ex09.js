//ES6 Module

// import getMessage, {
//   User as User2,
//   customer as customer2,
//   products,
// } from "../modules/functions.js";

import * as functions from "../modules/functions.js";
const { User, customer } = functions;

// console.log(getMessage());
// console.log(new User());
// console.log(customer);
// console.log(customer2);
// console.log(new User2());
// console.log(products);

//import React, {useState} from "react"

console.log(new User());
console.log(customer);

//index.js => App.js => Home.js => Products.js => ProductItem.js
