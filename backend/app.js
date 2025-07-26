const express = require('express');
const connectDB = require('./db');
const chatRoutes = require('./routes/chat');

const app = express();
app.use(express.json());

connectDB();

app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
