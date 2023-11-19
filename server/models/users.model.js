import { DataTypes } from "sequelize";
import db from "./../app/db.js";

const Users = db.define(
  "users",
  // Описание таблиц
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "no email",
    },
  },
  // Опции
  {
    timestamps: false,
  }
);
export { Users };
