var express = require("express");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require("cors");
var morgan = require("morgan");
const mongoose = require("mongoose");
var bcrypt = require("bcrypt-inzi")
var jwt = require('jsonwebtoken'); 
const { json } = require("body-parser");

var app = express();
 app.use(cors());
 app.use(morgan("dev"));
 app.use(bodyParser.json());
 