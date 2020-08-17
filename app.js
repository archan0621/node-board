const express = require('express');
const app = express();
const PORT= process.env.PORT || 3000;

const mongoose = require('mongoose');

//DB연결
let url = "mongodb://localhost:27017/board";
mongoose.connect(url, {useNewUrlParser : true});

// routes
const indexRoute      = require("./routes/index");

// 뷰엔진 설정
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

// use routes
app.use("/", indexRoute);

app.listen(PORT, function () {
    console.log('Server is running on',PORT);
})

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));