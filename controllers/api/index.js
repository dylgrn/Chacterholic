const router = require('express').Router();

const itemRoutes = require('./items-routes');
const userRoutes = require('./user-routes.js');


router.use('/users', userRoutes);
router.use('/items', itemRoutes);


module.exports = router;
