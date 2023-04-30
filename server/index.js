import express from "express";
import connection from "./databse/db.js";
import dotenv from "dotenv"
import Routes from "./routes/routes.js";
import cors from 'cors'
import bodyParser from "body-parser";
dotenv.config();
const app = express()
app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

//express server is made by listen function 
const PORT = 8000
const userName = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
connection(userName, password)

app.use('/', Routes)
app.listen(PORT, () => {

})