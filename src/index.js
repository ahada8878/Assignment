const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection = require("./mongodb")

const templatePath = path.join(__dirname, "../templates")

app.use(express.json())
app.set("view engine", "hbs");
app.set("views", templatePath)
app.use(express.urlencoded({extended: false}))

app.get("/", (req,res) => {
    res.render("login")
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password
    }
    await collection.insertMany([data])
    res.render("home")
})
app.post("/login", async (req, res) => {
    try{
       const check = await collection.findOne({name: req.body.name})
       if(check.password === req.body.password){
        res.render("home")
       }else {
        res.send("Wrog Password!")
       }
    }
    catch{
        res.send("Wrong Detail!")
    }
})


app.listen(8081, () => {
    console.log("Port connected")
})