import express from "express";
const appRoute = express.Router();

appRoute.get("/", (req, res) => {
  res.send("Good morning Africa");
});

appRoute.get("/users", (req, res) => {
  res.status(200).send('This is a list of all users')
})


export default appRoute;
