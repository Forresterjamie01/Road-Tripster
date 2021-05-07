const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./userRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
