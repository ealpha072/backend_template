import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
const appRoute = express.Router();

appRoute.get("/", (req, res) => {
  res.send("Good morning Africa");
});

appRoute.get("/users", async (req, res, next) => {
  try {
    const users = await User.find();
    res.json({ users: users });
  } catch (error) {
    next(error);
  }
});

appRoute.post("/register", async (req, res, next) => {
  const { email, username, password } = req.body;

  try {
    //see if user exists
    const userExists = User.findOne({ email: email });
    if (!userExists) {
      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(saltRounds, password);
      const newUser = new User({ email, username, passwordHash });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } else {
      res.status(400).json({ error: "User already exists" });
    }
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

appRoute.get('/login', async(req, res, next) => {
  try {
    
  } catch (error) {
    console.log{error.message)
    next(error)
  }
});

export default appRoute;
