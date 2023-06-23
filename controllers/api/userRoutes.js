const router = require('express').Router();
const { User, Character, Race, Monster } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/characters', async (req, res) => {

  try {
    const dbUserData = await Character.create({
      characterclass: req.body.characterclass,
      race: req.body.race,
      background: req.body.background,
      name: req.body.name,
      strength: req.body.strength,
      dexterity: req.body.dexterity,
      constitution: req.body.constitution,
      intelligence: req.body.intelligence,
      wisdom: req.body.wisdom,
      charisma: req.body.charisma,
      user_id: req.session.user_id
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/races', async (req, res) => {

  try {
    const dbUserData = await Race.create({
      race: req.body.race,
      description: req.body.description,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/monsters', async (req, res) => {

  try {
    const dbUserData = await Monster.create({
      name: req.body.name,
      beastType: req.body.beastType,
      challengeRating: req.body.challengeRating,
      alignment: req.body.alignment,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.post('/characters/stats', async (req, res) => {

//   try {
//     const dbUserData = await Stats.create({
//       strength: req.body.strength,
//       dexterity: req.body.dexterity,
//       constitution: req.body.constitution,
//       intelligence: req.body.intelligence,
//       wisdom: req.body.wisdom,
//       charisma: req.body.charisma
//     });

//     req.session.save(() => {
//       req.session.loggedIn = true;

//       res.status(200).json(dbUserData);
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.post('/login', async (req, res) => {
  try {
    console.log("BODY", req.body);
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    console.log("PASSWORD", req.body.password);
    const validPassword = await userData.checkPassword(req.body.password);
    console.log("Valid Password?", validPassword);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;