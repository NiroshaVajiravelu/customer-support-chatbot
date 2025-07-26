import express from "express";
import cors from "cors";
import sequelize from "./db.js";
import Conversation from "./models/Conversation.js";
import Message from "./models/Message.js";
import chatRoutes from "./routes/chat.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);

await sequelize.sync();

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
