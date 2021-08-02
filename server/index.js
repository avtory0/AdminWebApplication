const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = require('./models');


const usersRouter = require("./routes/User");
app.use("/auth", usersRouter);


db.sequelize.sync().then(()=> {
    app.listen(3001, () =>{
        console.log('running on port 3001');
    });
});