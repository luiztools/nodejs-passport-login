const express = require('express');
const router = express.Router();

/* GET login page. */
router.get('/', (req, res, next) => {
  res.render('login', { title: 'Login', message: null });
});

module.exports = router;
