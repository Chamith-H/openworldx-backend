const express = require("express");
const router = express.Router();
const authServices = require("./auth.service");

router.route("/register").post(async (req, res) => {
  const response = await authServices.register(req.body);

  res.header("Authorization", response.token);
  res.json(response.data);
});

router.route("/login").post(async (req, res) => {
  const response = await authServices.login(req.body);

  res.header("Authorization", response.token);
  res.json(response.data);
});

router.route("/verify").post(async (req, res) => {
  const response = await authServices.verify(req.body);

  res.header("Authorization", response.token);
  res.json(response.data);
});

module.exports = router;
