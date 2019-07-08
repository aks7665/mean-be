const express = require('express');
require('./db/db.js');
const bodyParser = require('body-parser');

// Routes
const postRoutes = require('./routes/posts');

const app = express();
const port = process.env.PORT;

// ToJSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());

// CORS 
app.use((req,res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PATCH, DELETE, PUT");
    next();
});

// Routes
app.use("/api/posts", postRoutes);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});