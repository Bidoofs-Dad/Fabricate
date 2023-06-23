const router = require('express').Router();
const { User, Character, Race, Class, Background, Monster } = require('../models');
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

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

//Renders Race Page
router.get('/race', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password', 'email'] },
      });

      const raceData = await Race.findAll();
  
      const users = userData.map((project) => project.get({ plain: true }));
      const races = raceData.map((project) => project.get({ plain: true }));
  console.log(req.session);
      res.render('race', {
        users,
        logged_in: req.session.logged_in,
        races,
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

    const classData = await Class.findAll();

    const users = userData.map((project) => project.get({ plain: true }));
    const classes = classData.map((project) => project.get({ plain: true }));
    
    res.render('class', {
      users,
      logged_in: req.session.logged_in,
      classes,
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

    const bgData = await Background.findAll();

    const users = userData.map((project) => project.get({ plain: true }));
    const backgrounds = bgData.map((project) => project.get({ plain: true }));

    res.render('background', {
      users,
      logged_in: req.session.logged_in,
      backgrounds,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Renders npc Page
  router.get('/npc', withAuth, async (req, res) => {
    try {
      const characterData = await Character.findAll({
        where: { user_id: req.session.user_id },
      });
  
      const characters = characterData.map((project) => project.get({plain: true}));
  
      res.render('npc', {
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
      const characterData = await Character.findAll({
        where: { user_id: req.session.user_id },
      });

      const characters = characterData.map((project) => project.get({plain: true}));
  
      res.render('pc', {
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

  router.get('/bestiary', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password', 'email'] },
      });

      const monsterData = await Monster.findAll();
  
      const users = userData.map((project) => project.get({ plain: true }));
      const monsters = monsterData.map((project) => project.get({ plain: true }));
  console.log(req.session);
  console.log("monsters", monsters);
      res.render('bestiary', {
        users,
        logged_in: req.session.logged_in,
        monsters,

      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
