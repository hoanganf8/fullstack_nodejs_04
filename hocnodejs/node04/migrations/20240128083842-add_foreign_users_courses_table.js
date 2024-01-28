"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("users_courses", {
      name: "users_courses_user_id_foreign",
      type: "foreign key",
      fields: ["user_id"], //Khóa ngoại
      references: {
        table: "users",
        field: "id",
      },
    });
    await queryInterface.addConstraint("users_courses", {
      name: "users_courses_course_id_foreign",
      type: "foreign key",
      fields: ["course_id"], //Khóa ngoại
      references: {
        table: "courses",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "users_courses",
      "users_courses_user_id_foreign",
    );
    await queryInterface.removeConstraint(
      "users_courses",
      "users_courses_course_id_foreigns",
    );
  },
};
