const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const path = express.Router()

const clusterURL = "mongodb+srv://canacademy:cana9875sh@canacademy.a2xbmdz.mongodb.net/OpenWorldX"

app.use(cors());
app.use(express.json());
mongoose.connect(clusterURL)  
app.use('/api', path)

path.use("/auth", require("./content/api/routes/auth/auth.controller"));

app.listen(8000, function() {
    console.log("Server was up")
})