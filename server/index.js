const express = require('express');
const cors = require('cors');
require ("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const db = require('./models');


const usersRouter = require("./routes/User");
app.use("/auth", usersRouter);

db.sequelize.sync().then(()=> {
    app.listen(process.env.PORT || 3001, () =>{
        console.log('running on port 3001');
    });
});