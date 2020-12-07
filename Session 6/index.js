const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hr'
});

app.listen(port, (err) => {
    if (err) console.log(err);

    console.log("Server running");
})

app.get('/', (req, res) => {

    connection.query(`SELECT * FROM departments WHERE department_name = ? AND location_id = ? AND deleted_at IS NULL`, [req.body.department_name, req.body.location_id], function (error, results) {
        if (error) console.log(error);

        res.json(results)
    });
})
