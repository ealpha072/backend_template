import express from "express";
import User from "../models/user.js"
const appRoute = express.Router();


appRoute.get("/", (req, res) => {
  res.send("Good morning Africa");
});

appRoute.get("/users", async (req, res, next) => {
  try {
    const users = await User.find()
    res.json({users:users})
  }catch (error) {
    next(error)
  }
})

export default appRoute;
