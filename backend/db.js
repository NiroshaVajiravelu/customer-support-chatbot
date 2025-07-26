import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./backend/data/conversations.sqlite"
});

export default sequelize;
