const router = require('express').Router();

const apiRoutes = require('./api');
// const --somethin-- = require('./--somethin--');

// router.use('/', --somethin--);
router.use('/api', apiRoutes);

module.exports = router;
