const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
require('dotenv').config();

// db setup

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

const port = process.env.PORT || 3002;

app.get("/", (req, res)=> {
  res.send("Home");
})

app.listen(port, ()=> {
  console.log(`Server running at ${port}`);
})