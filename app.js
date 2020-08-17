const express = require('express');
const app = express();
const PORT= process.env.PORT || 3000;

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