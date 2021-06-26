const router = require('express').Router();
const itemRout = require()
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
// const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use()

module.exports = router;
