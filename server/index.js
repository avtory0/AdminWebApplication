const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "host",
    database: "task4",
    password: "password"
});

const regdate = new Date()
app.post("/register", (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query("INSERT INTO user(login,email,password,regdate,lastonline) VALUES (?,?,?,?,?)",
    [username, email, password, regdate,regdate],
    (err, result) =>{
        console.log(err);
        console.log(result);

    }
    );
});
app.listen(3001, () =>{
    console.log('running on port 3001');
});