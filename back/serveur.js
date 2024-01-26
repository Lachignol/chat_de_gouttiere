
const express = require('express');
const routes = require("./route/routes.js");
const session = require('express-session');
const path = require('path');
const app = express();
const port=3000;
const db =require('./config/database');
const router = require("./route/routes");
const multer  = require('multer');
const cors = require("cors")

require("dotenv").config()
app.use(cors({credentials:true, origin:"http://localhost:5173"}))

app.listen(port,() => console.log(port,"serveur ok "))
db()

app.use('/images', express.static('images'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(session({
    name: process.env.SESSION_NAME,
    resave : false,
    saveUninitialized: true,
    secret : process.env.SESSION_SECRET,
    cookie:{
        maxAge : 1000 * 60 * 60* 24 * 7,
        secure : false,
    }
    
    //ajouter un store (sur la bdd si app mis en prod)
}))
app.use(routes);





