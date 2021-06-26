const router = require('express').Router();
const { Items } = require('../../models');

app.get('/items', (req, res) => {
    res.render('items', data);
  });

  module.exports = router;