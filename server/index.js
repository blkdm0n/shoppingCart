const http = require('http');
const fs = require('fs');

//require express, invoke express function
const express = require('express');
const app = express();

//serves static files in client folder
app.use(express.static(__dirname + '/../client'));

//server is listening on 8080
app.listen(8080);

