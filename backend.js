const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(cors());
app.use(express.json());

// SQLite DB setup
const db = new sqlite3.Database(":memory:");
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS slots (id INTEGER PRIMARY KEY, date TEXT, time TEXT, booked INTEGER DEFAULT 0)");
  const slots = ["10:00", "11:00", "12:00", "14:00", "15:00"];
  slots.forEach((t) => {
    db.run("INSERT INTO slots (date,time) VALUES (?,?)", ["2025-08-20", t]);
  });
});

// Get slots
app.get("/slots", (req, res) => {
  db.all("SELECT * FROM slots", [], (err, rows) => res.json(rows));
});

// Book a slot
app.post("/book", (req, res) => {
  const { id } = req.body;
  db.get("SELECT booked FROM slots WHERE id=?", [id], (err, row) => {
    if (row && row.booked === 0) {
      db.run("UPDATE slots SET booked=1 WHERE id=?", [id]);
      res.json({ success: true });
    } else {
      res.json({ success: false, message: "Already booked" });
    }
  });
});

app.listen(4000, () => console.log("Backend running on 4000"));
