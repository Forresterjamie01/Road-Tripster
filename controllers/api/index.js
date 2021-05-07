const router = require('express').Router();
const userRoutes = require('./userRoutes');
const TriplogRoutes = require('./TriplogRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;

