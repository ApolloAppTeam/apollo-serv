/*
 app.js
 http server, uses express to statically serve assets
 author: Aaron Romel
 */

const path = require('path');
const express = require('express');

const PORT = process.env.PORT || process.env.NODE_PORT || 3000;
const app = express();

// serve home page so user doesn't have to request 'index.html',
// all other assets are statically served
app.use(express.static(path.resolve(`${__dirname}/../client`)));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../client/index.html`));
});

// initialize express app
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
