require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

//SETUP EXPRESS
const publicPath = path.join(__dirname, '..', 'client', 'public');
const PORT = process.env.PORT || 3010
const app = express();

app.use('/', express.static(publicPath));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})