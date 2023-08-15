const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const { connectMongoDB } = require("./connection");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

dotenv.config();
// Connection
connectMongoDB(process.env.MONGO_URL).then(() =>
  console.log("MongoDB Connected...")
);

// Using Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.json("Ok");
});

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

// Server Running
app.listen(8000, () => {
  console.log("server is running...");
});
