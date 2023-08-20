import express from "express";
import Cors from 'cors';
import dotenv from 'dotenv';

import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Route from "./routes/routes.js";


const app = express();
dotenv.config();

app.use(Cors());
app.use('/',Route);

const PORT = 8000;  

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;



Connection(username,password);


app.listen(PORT, () =>
  console.log(`server is running sucessfully on PORT ${PORT}`)
);

DefaultData();
