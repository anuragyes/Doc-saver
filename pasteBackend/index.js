import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "./server/Models/User.js"; // Ensure the path is correct

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

//  login concept
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password == password) {
        res.json("Success");
      } else {
        res.json("Password Wrong");
      }
    } else {
      res.json("NO Record Existed");
    }
  });
});
// Register endpoint
app.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user); // Send back the created user
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: `Something went wrong: ${err.message}` });
  }
});

// Home endpoints
app.get("/home", (req, res) => {
  res.send("Hello, World!");
});

app.get("/", (req, res) => {
  res.send("Home");
});

// Database connection and server start
const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://anuragpandey2202:SQGaHcChzyzUmUL3@clusterpaste.g3sji.mongodb.net/?retryWrites=true&w=majority&appName=Clusterpaste"
    );
    console.log(`MONGO Connected DB Host: ${mongoose.connection.host}`);

    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Error connecting to the database: ${error.message}`);
  }
};

start();
