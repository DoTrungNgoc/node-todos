const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config');
const mongoose = require('mongoose');
const app = express();

const setupController = require('./api/controllers/setupController');
const todoController =  require('./api/controllers/todoController');

const port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.set('view engine', 'ejs');

console.log(config.getDBConnectionString());
mongoose
    .connect(config.getDBConnectionString(), {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

setupController(app);
todoController(app);

app.get("/", function (req, res) {
    res.render('index');
})

app.listen(port, () => {
    console.log('listening on port' + port);
})