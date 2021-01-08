const express = require('express');
const app = express();
const path = require('path');
const mongoose = require ("mongoose");
const dotenv = require ("dotenv");
const bcrypt = require('bcrypt');


const user = require("../models/users.js");


dotenv.config();


const public = path.join(__dirname, '../views')

app.use(express.static(public));
app.use(express.urlencoded({extended : true }));

//connection to db

mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
console.log("Connected to db!");

app.listen(3000, () => console.log("Server Up and running"));
});

app.set('view engine', 'ejs')

app.get('/', (req, res)=> {
    res.render('index.ejs');
})

app.get('/login', (req, res) => {
    res.render('login.ejs');
})
// enregistre des donnees
app.post('/login', (req, res) => {

})


app.get('/register', (req, res) => {
    res.render('register.ejs');
})

app.post('/register', async (req, res) => {
    console.log(req.body)

    let users= new user({

        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try{
        await users.save();
        res.redirect("/login")
    }
    catch{
        res.redirect("/login")
    }
})


