"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "address", {
      type: Sequelize.STRING,
      //Có thể thiết lập khóa ngoại (Nếu có)
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "address");
  },
};
