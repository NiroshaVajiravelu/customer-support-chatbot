const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const chatRoutes = require('./routes/chat');

const app = express();
app.use(express.json());
app.use(cors()); // ✅ Enable CORS for frontend-backend communication

connectDB();

app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



