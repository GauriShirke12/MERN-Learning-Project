const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log("MongoDB Connected"))
   .catch(err => console.log(err));

const taskRoutes = require("./routes/taskRoutes");
app.use("/tasks", taskRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
