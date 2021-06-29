const router = require('express').Router();


router.get('/character', (req, res) => {
  res.render('character');
});

module.exports = router;
