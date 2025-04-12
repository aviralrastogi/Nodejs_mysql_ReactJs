import mysql from 'mysql2';
import express from "express";

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const cors = require('cors');

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "tony",
    password: "aviral@7210810728",
    database: "test"
});

app.use(express.json());
app.use(cors());




app.get("/", (req, res) => {
    res.json("Hello this is backend");
});

// Get all books
app.get("/books", (req, res) => {
    const query = "SELECT * FROM test_book";
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Add a new book
app.post("/books", (req, res) => {
    const query = "INSERT INTO test_book(`title`,`desc`,`price`,`cover`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover
    ];

    db.query(query, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Delete a book
app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const query = "DELETE FROM test_book WHERE id = ?";

    db.query(query, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been deleted successfully");
    });
});

// update 
app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const query = "UPDATE test_book SET `title`=?, `desc`=?, `price`=?, `cover`=? WHERE id = ?";

    console.log(query);
    const values = [req.body.title, req.body.desc, req.body.price, req.body.cover];
    console.log(query);
    db.query(query, [...values,bookId], (err, data) => {
        if (err) {
            console.error("Error updating book:", err);
            return res.status(500).json({ error: "An error occurred while updating the book." });
        }
        return res.json("Book has been UPDATED successfully");
    });

    
});

app.listen(8800, () => {
    console.log("Connected to backend");
});
