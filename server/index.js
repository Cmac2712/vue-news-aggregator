const express = require('express');
const app = express()
const axios = require('axios');
const port = process.env.PORT || 5000;
let items = [];
var sources = [];
var normalizedPath = require("path").join(__dirname, "scrapers");
//const FETCH_INTERVAL = 60 * 1000 * 60 * 6; // 6 hours
const FETCH_INTERVAL = 60 * 1000 * 60;

const fetchData = () => {
  console.log('Fetching data...');

  sources.forEach(source => {

    source.scraper().then(promises => {
      Promise.all(promises).then(data => items.push(...data))
        .catch(e => console.log(e))
    });
  })
}

// Automatically require all modules in scrapers/ directory
require("fs").readdirSync(normalizedPath).forEach(function(file) {
  sources.push(require("./scrapers/" + file));
})

app.listen(port, () => {
  console.log('Server running on port ' + port);
})

// Get all news
app.get("/news", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");

  if (items.length) {
    res.json(items);
  } else {
    res.send('<p>awaiting results...</p>');
  }

});

fetchData()

setInterval(fetchData, FETCH_INTERVAL)
