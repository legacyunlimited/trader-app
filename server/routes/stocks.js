const express = require('express');
const db = require('../db');
const axios = require('axios');
require("dotenv").config()

const router = express.Router();


// Fetchinh Data from External API and sending it to frontend as json to update most active stocks
router.get('/', async (req, res) => {
  const apiKey = process.env.APIKEY;
  const url = `https://cloud.iexapis.com/stable/stock/market/list/mostactive?token=${apiKey}`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    res.status(200).json({ data: data, message: 'Data fetched' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});


module.exports = router