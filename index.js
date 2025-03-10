const express = require("express");
const app = express();
var cookieParser = require('cookie-parser');
const path = require("path");
const ejs = require("ejs");
const db = require("./config/mongoose-connection");
const ownerRouter = require("./routes/ownersRouter.js");
const usersRouter = require("./routes/userRouter.js");
const productsRouter = require("./routes/productsRouter.js");
const indexRouter = require("./routes/indexRouter.js");
const mongoose = require("mongoose");
const expressSession = require("express-session");
const flash = require("connect-flash");
require("dotenv").config();

app.use(cookieParser());
app.use(
    expressSession({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(flash());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

// Define routes without Multer middleware
app.use("/owner", ownerRouter);
app.use("/users", usersRouter);
app.use("/", indexRouter);

// Use Multer middleware only for routes that handle file uploads
app.use("/products", productsRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
