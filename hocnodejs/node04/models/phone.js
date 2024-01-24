"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Phone.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "nguoidung",
      });
    }
  }
  Phone.init(
    {
      //Khai báo cột ở trong table
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      value: {
        type: Sequelize.STRING,
      },
    },
    {
      sequelize,
      modelName: "Phone",
      createdAt: "created_at",
      updatedAt: "updated_at",
      tableName: "phones",
    },
  );
  return Phone;
};
