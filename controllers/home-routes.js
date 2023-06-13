const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

//Renders Homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password', 'email'] },
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Renders Login Page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

//Renders Race Page
router.get('/race', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password', 'email'] },
      });
  
      const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('race', {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.get('/class', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password', 'email'] },
      });
  
      const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('class', {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/npc', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password', 'email'] },
      });
  
      const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('npc', {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/pc', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password', 'email'] },
      });
  
      const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('pc', {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;
