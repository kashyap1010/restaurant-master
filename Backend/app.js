const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
const path = require('path')
require("./Connection/connection")
const dotenv = require('dotenv')
const PORT = process.env.PORT || 9002
dotenv.config({ path: "././config.env" })
//hello from kashyap
var cors = require('cors')
const origin = ["https://restaurant-master-rose.vercel.app", "http://localhost:3000"]
app.use(cors({
    credentials: true,
    origin: origin,
    methods: ["GET", "POST"],
    preflightContinue: true,
}));

app.use(cookieParser())
app.use(express.json())


app.use(require('./router/auth'))


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Be Started at port ${process.env.PORT}`)
})
