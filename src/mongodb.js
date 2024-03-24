const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/Login-Sigup")

.then(()=> {
    console.log("mongodb connected")
})
.catch(()=> {
    console.log("failed to connect")
})

const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collection = new mongoose.model("LoginCollection", logInSchema)

module.exports = collection