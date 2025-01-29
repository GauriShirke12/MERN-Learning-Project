// server.js
const express = require('express');
const connectDB = require('./config/database');
const taskRouter = require('./routes/tasks');

const app = express();
const port = 3000;

connectDB();

app.use(express.json());  // To parse JSON request bodies
app.use('/tasks', taskRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});