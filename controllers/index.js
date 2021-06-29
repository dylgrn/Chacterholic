const router = require('express').Router();
const itemRout = require('./api/items-routes')
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
// const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/api/items-routes', itemRout)

module.exports = router;
