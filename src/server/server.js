let projectData = {};

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
