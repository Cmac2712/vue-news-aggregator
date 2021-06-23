const express = require('express');
const app = express()
const axios = require('axios');
const port = process.env.PORT || 5000;
let items = [];
var sources = [];
var normalizedPath = require("path").join(__dirname, "scrapers");
const FETCH_INTERVAL = 36000;

// Automatically require all modules in scrapers/ directory
require("fs").readdirSync(normalizedPath).forEach(function(file) {
  sources.push(require("./scrapers/" + file));
});

app.listen(port, () => {
  console.log('Server running on port ' + port);
});

// Get all news
app.get("/news", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");

  res.json(items);
});

// Get data
setInterval(() => {

  console.log('Fetching data...');

  sources.forEach(source => {

    source.scraper().then(promises => {
      Promise.all(promises).then(data => items.push(...data))
        .catch(e => console.log(e))
    })

  });

}, FETCH_INTERVAL);
