const http = require('http');
const fs = require('fs');

//require express, invoke express function
const express = require('express');
const app = express();

//serves static files in client folder
app.use(express.static('client'))
app.set('views', './views');
app.set('view engine', 'ejs');

//import my render
import serverRender from './render';

//get request
app.get('/', (req, res) => {
  res.render('index', {content: serverRender()}); 
});

//server is listening on 8080
app.listen(8080);

