'use strict';

const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const bootstrap = require("./Utils/bootstrap");

mongoose.connect("mongodb://localhost:27017/chatapp", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then(() => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use("/", routes);

    app.listen(5000, () => {
        console.log("Server has started!");
        bootstrap.addData();
    });
});