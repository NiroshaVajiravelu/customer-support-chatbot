import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Conversation = sequelize.define("Conversation", {
  userId: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Conversation;
