const express = require("express");
const db = require("../db");
require("dotenv").config();

const router = express.Router();

// getting all favorite stocks
router.get("/", (req, res) => {
  const sql = "SELECT * FROM items";
  db.all(sql, [], (err, results) => {
    if (err) throw err;
    console.log(results);
    res.status(200).json({
      favorites: results,
    });
  });
});

//for adding stocks to favorite
router.post("/", (req, res) => {
  const { symbol, companyName, latestPrice } = req.body;

  db.get("SELECT * FROM items WHERE symbol = ?", symbol, (err, row) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    }

    if (row) {
      // Symbol already exists in the database
      res.sendStatus(409); // Conflict
      return;
    }

    const sql = `INSERT INTO items (symbol,companyName,latestPrice) VALUES (?, ?, ?)`;
    db.run(sql, [symbol, companyName, latestPrice], (err) => {
      if (err) throw err;
      res.status(201).json({ message: "Item created successfully" });
    });
  });
});

//Removing favorite stock
router.delete("/:symbol", (req, res) => {
  const symbol = req.params.symbol;
  const sql = `DELETE FROM items WHERE symbol = ?`;
  db.run(sql, symbol, (err) => {
    if (err) throw err;
    res.status(200).json({ message: "Item deleted successfully" });
  });
});

module.exports = router;
