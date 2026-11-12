const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get("/product", (req, res) => {
  res.send("This is Product Page");
})

app.get("/item", (req, res) => {
  res.send("This is Item Page");
})

app.get("/health", (req, res) => {
  res.send("Everything is OK");
})

app.listen(8080, () => console.log("Sever is listening on Port 8080"))
