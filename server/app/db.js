import Sequelize from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(
  process.env.POSTGRE_DB,
  process.env.POSTGRE_USERNAME,
  process.env.POSTGRE_PASSWORD,
  {
    host: process.env.POSTGRE_HOST,
    dialect: process.env.POSTGRE_DIALECT,
  }
);
export default sequelize;
