const router = require('express').Router();
const { User, Character } = require('../models');
const withAuth = require('../utils/auth');


//Renders Homepage
router.get('/', async (req, res) => {
  try {
    // const userData = await User.findAll({
    //   attributes: { exclude: ['password', 'email'] },
    // });

    // const users = userData.map((project) => project.get({ plain: true }));
console.log(req.session.logged_in);
    res.render('homepage', {logged_in: req.session.logged_in});
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
  console.log(req.session);
      res.render('race', {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Renders Class Page
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

//Renders npc Page
  router.get('/npc', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password]'] },
      });
      const characterData = await Character.findAll()
      
  
      const users = userData.map((project) => project.get({ plain: true }));
      const characters = characterData.map((project) => project.get({plain: true}));
  
      res.render('npc', {
        users,
        logged_in: req.session.logged_in,
        characters,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //Renders pc Page
  router.get('/pc', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password', 'email'] },
      });
  
      const characterData = await Character.findAll()

      const users = userData.map((project) => project.get({ plain: true }));
      const characters = characterData.map((project) => project.get({plain: true}));
  
      res.render('pc', {
        users,
        logged_in: req.session.logged_in,
        characters,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //Renders Stats Page
  router.get('/stats', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password', 'email'] },
      });
  
      const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('stats', {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //Renders Background page
  router.get('/background', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password', 'email'] },
      });
  
      const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('background', {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/charactersheet', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password', 'email'] },
      });
  
      const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('charactersheet', {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/users', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
      
      });
  
      const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('users', {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/api/users/characters', withAuth, async (req, res) => {
    try {
      const characterId = req.body.id;
      console.log(req.body.id);
      // Delete the character from the database
      await Character.destroy({ where: { id: characterId } });
  
      res.sendStatus(204); // Send a 204 No Content response to indicate successful deletion
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
