const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

// parse application/json
app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'manhwa_api'
});

//connect to database
conn.connect((err) => {
    if (err) throw err;
    console.log('Connected ....');
});

//show all manhwa list
app.get('/api/manhwarec', (req, res) => {
    let sql = "SELECT * FROM manhwa";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "response": results
        }));
    });
});

//show manhwa by id
app.get('/api/manhwarec/:id', (req, res) => {
    let sql = "SELECT * FROM manhwa WHERE id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "response": results
        }));
    });
});


//Server listening
app.listen(3000, () => {
    console.log('Server started on port 3000...');
});