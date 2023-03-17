const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3000;

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db = mysql.createPool({
    host: "localhost", // write your sql server link here
    user: "root", // write your sql server username here
    password: "TheSql@69", // write your sql server password here
    database: "fullstack_app" // write your sql database here
});

app.post("/addRecords", (req, res) => {
    const { name, adress, phone } = req.body;
    const iQuery = "INSERT INTO userData (name,adress,phone) VALUES(?,?,?)";
    db.query(iQuery, [name, adress, phone], (error, result) => {
        if (error) {
            console.log(error);
        }
        console.log(result);
    })
})


app.get("/", (req, res) => {
    res.send("Hello")
    console.log(db)
});

app.listen(port, () => {
    console.log("Listening at " + port)
})