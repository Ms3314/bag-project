const express = require("express")
const app = express()
var cookieParser = require('cookie-parser')
const path = require("path");
const db = require("./config/mongoose-connection");
const ownerRouter = require("./routes/ownersRouter.js");
const usersRouter = require("./routes/userRouter.js");
const productsRouter = require("./routes/productsRouter.js");

console.log("hello")
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'public')));
// app.set("view engine", "ejs ")

// we are setting up routes so that after this .. they go to there type of thing ..xox seperating of concerns
app.use("/owner" , ownerRouter)
app.use("/users" , usersRouter)
app.use("/products" , productsRouter)
app.get("/" , (req ,res) => {
    res.send("hello moto")
})

app.listen(3000)