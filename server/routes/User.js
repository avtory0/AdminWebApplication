const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try{
  const { login,email, password} = req.body;
  bcrypt.hash(password, 10).then((hash) => {
   Users.create({
      login: login,
      email: email,
      password: hash,
      
    });
    res.json("SUCCESS");
  });
  } catch(err) {
    console.log(err);
  }

});

router.post("/login", async (req, res) => {
  try{
  const { login, password } = req.body;

  const user = await Users.findOne({ where: { login: login } });

  if (!user) res.json({ error: "User Doesn't Exist" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "Wrong Username And Password Combination" });

    res.json("YOU LOGGED IN!!!");
  });
}catch(err) {
  console.log(err);
}
});

module.exports = router;