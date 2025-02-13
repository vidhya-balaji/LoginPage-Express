const express = require("express")
const cors=require("cors")
const app = express();
const uname = "vidhya";
const passname = 1234;

app.use(express.urlencoded({ extended: true }))
app.use(cors())
//app.use(express)
app.get("/login", function (req, res) {
    console.log(req.query.username);
    
    if (req.query.username === uname && req.query.password == passname) {
        res.send(true)
    }
    else {
        res.send(false)

    }
})
app.listen("5000", function () {
    console.log("Server Started....");

})

