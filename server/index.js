const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = require('./models');

const usersRouter = require("./routes/User");
app.use("/auth", usersRouter);

// const regdate = new Date()
// app.post("/register", (req, res) => {
//     const username = req.body.username;
//     const email = req.body.email;
//     const password = req.body.password;

//     db.query("INSERT INTO user(login,email,password,regdate,lastonline) VALUES (?,?,?,?,?)",
//     [username, email, password, regdate,regdate],
//     (err, result) =>{
//         console.log(err);
//         console.log(result);

//     }
//     );
// });

// app.post("/login", async (req,res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     const user = await Users.findOne({ where: { username: username } && {password: password} });
//     if (!user) res.json({ error: "User Doesn't Exist" });
    
// });
db.sequelize.sync().then(()=> {
    app.listen(3001, () =>{
        console.log('running on port 3001');
    });
});