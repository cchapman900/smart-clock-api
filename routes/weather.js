const express = require('express');
const router = express.Router();

const fetch = require("node-fetch");

/* GET weather update. */
router.get('/', async function(req, res, next) {
  const {lat, long} = req.query;

  if (!lat || !long) {
    res.status(400);
    return res.send(JSON.stringify({message: 'Error: You must provide Lat and Long'}))
  }

  const apiUri = `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${lat},${long}/?extend=hourly`;
  const weatherResponse = await fetch(apiUri);
  const weatherJson = await weatherResponse.json();

  res.send(weatherJson);

});

module.exports = router;
