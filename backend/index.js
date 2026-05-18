const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
}));

// Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API running...");
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});