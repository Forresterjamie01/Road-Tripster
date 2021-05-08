const router = require('express').Router();
const userRoutes = require('./userRoutes');
<<<<<<< HEAD
const projectRoutes = require('./Triplog');
=======
const TriplogRoutes = require('./TriplogRoutes');
>>>>>>> e822b5b05559d06f2d78dad8a86220e49e83562c

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;

