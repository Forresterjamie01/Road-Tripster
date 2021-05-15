const router = require('express').Router();
const userRoutes = require('./userRoutes');
const TriplogRoutes = require('./Triplog');

router.use('/users', userRoutes); //   /api/users
router.use('/triplog', TriplogRoutes);

module.exports = router;

