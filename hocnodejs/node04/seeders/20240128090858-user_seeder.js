"use strict";
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        fullname: "Hoàng An",
        email: "hoangan.web@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        status: true,
        address: "Hà Nội",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        fullname: "Hoàng An F8",
        email: "hoangan@fullstack.edu.vn",
        password: bcrypt.hashSync("123456", 10),
        status: false,
        address: "Hà Nội",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    // const data = [];
    // for (let i = 0; i < 50; i++) {
    //   const user = {
    //     fullname: faker.person.fullName(),
    //     email: faker.internet.email(),
    //     password: faker.internet.password(),
    //     status: faker.datatype.boolean(),
    //     address: faker.location.streetAddress(),
    //     created_at: faker.date.past(),
    //     updated_at: faker.date.past(),
    //   };
    //   data.push(user);
    // }
    await queryInterface.bulkInsert("users", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users");
  },
};
