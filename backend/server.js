const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully.");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Routes
const todoRoutes = require("./routes/todoRouters");
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
