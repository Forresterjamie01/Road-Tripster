const router = require('express').Router();
const { Triplog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const TriplogData = await Triplog.findAll({ // get all projects and join with JSON
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const Triplogs = TriplogData.map((Triplog) => Triplog.get({ plain: true }));

    res.render('homepage', { 
      Triplogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/Triplog/:id', async (req, res) => {
  try {
    const TriplogData = await Triplog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const Triplog = TriplogData.get({ plain: true });

    res.render('Triplog', {
      ...Triplog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/profile', withAuth, async (req, res) => { // Use withAuth middleware to prevent access to route
  try {
    const userData = await User.findByPk(req.session.user_id, { // Find the logged in user based on the session ID
      attributes: { exclude: ['password'] },
      include: [{ model: Triplog }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => { // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;