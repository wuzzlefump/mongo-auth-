const express = require("express");
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
const uuid = require("uuid")
const openapi = require("@wesleytodd/openapi");
const _ = require("lodash");
//---------------------------- require statements--------------------
const PORT = 8080;
const app = express()

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());
//----------------------------Routing / route statements-------------


//----------------------------app listening---------------------------
app.listen(PORT, () => {
    console.log(`Cloud listening on ${PORT}`);
  });
  