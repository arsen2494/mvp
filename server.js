const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const request = require("request");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.listen(3030, err => {
    if (err) console.log(err);
    else console.log('Runnign on port 3030');
});