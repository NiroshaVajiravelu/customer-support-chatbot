import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Conversation from "./Conversation.js";

const Message = sequelize.define("Message", {
  sender: DataTypes.STRING,
  content: DataTypes.TEXT
});

Conversation.hasMany(Message);
Message.belongsTo(Conversation);

export default Message;
