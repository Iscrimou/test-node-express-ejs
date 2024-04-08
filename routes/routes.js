const app = require('express').Router();

app.get('/', (req, res) => {
  res.render('index', { quantity: 1 });
});

module.exports = app