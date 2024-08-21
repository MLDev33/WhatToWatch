var express = require('express');
var router = express.Router();

require('../models/connection');
const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');
const uid2 = require('uid2');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', (req, res) => {
  if (!checkBody(req.body, ['username', 'email', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }
  // Vérifier si le nom d'utilisateur existe déjà
  User.findOne({ username: req.body.username }).then(userByUsername => {
    if (userByUsername !== null) {
      res.json({ result: false, error: 'Username already exists' });
      return;
    }
    // Vérifier si l'email existe déjà
    User.findOne({ email: req.body.email }).then(userByEmail => {
      if (userByEmail !== null) {
        res.json({ result: false, error: 'Email already exists' });
        return;
      }
      // Si le nom d'utilisateur et l'email n'existent pas, créer un nouvel utilisateur
      const hash = bcrypt.hashSync(req.body.password, 10);
      
      const newUser = new User({
        token: uid2(32),
        username: req.body.username,
        email: req.body.email,
        password: hash,
        favouritePlatforms: req.body.favouritePlatforms
      });
      console.log(req.body)
      newUser.save().then(newDoc => {
        res.json({ result: true, token: newDoc.token, username: newDoc.username });
      });
    });
  });
});

router.post('/signin', (req, res) => {
  if (!checkBody(req.body, ['username', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

  User.findOne({ username: req.body.username }).then(data => {
    if (data && bcrypt.compareSync(req.body.password, data.password)) {
      res.json({ result: true, token: data.token, email: data.email });
      console.log(data)
    } else {
      res.json({ result: false, error: 'User not found or wrong password' });
    }
  });
});


router.delete("/:token", (req, res) => {
  User.deleteOne({
    token: req.params.token,
  }).then(deletedDoc =>{
      if (deletedDoc.deletedCount > 0) {
      User.find().then(data => {
        res.json({ result: true, token: data.token });
      })
    } else {
      res.json({ result: false, error: "User not found" });
    }
  }
    
  );
});


module.exports = router;
