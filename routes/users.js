var express = require("express");
var router = express.Router();

require("../models/connection");
const User = require("../models/users");
const { checkBody } = require("../modules/checkBody");
const uid2 = require("uid2");
const bcrypt = require("bcrypt");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//route to check if username or email exists already on signup screen before opening the platform modal
router.post('/checkUser', async(req, res) => {
  if (!checkBody(req.body, ["username", "email"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }
  // Vérifier si le nom d'utilisateur existe déjà
  const userByUsername = await User.findOne({ username: req.body.username })
  
    if (userByUsername !== null) {
      res.json({ result: false, error: "Username already exists" });
      return;
    }
    // Vérifier si l'email existe déjà
    const userByEmail = await User.findOne({ email: req.body.email })
      if (userByEmail !== null) {
        res.json({ result: false, error: "Email already exists" });
        return;
      }
      res.json({result: true})
  })

//route signup // as explained below, in the previous route, which is called one level up, we have already checked if username or email have been used, so no need to do it twice
router.post("/signup", (req, res) => {
  if (!checkBody(req.body, ["username", "email", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }
  // we have already checked if the user or email already exist, no need to check again
  // Vérifier si le nom d'utilisateur existe déjà 
  // User.findOne({ username: req.body.username }).then((userByUsername) => {
  //   if (userByUsername !== null) {
  //     res.json({ result: false, error: "Username already exists" });
  //     return;
  //   }
  //   // Vérifier si l'email existe déjà
  //   User.findOne({ email: req.body.email }).then((userByEmail) => {
  //     if (userByEmail !== null) {
  //       res.json({ result: false, error: "Email already exists" });
  //       return;
  //     }

      // Si le nom d'utilisateur et l'email n'existent pas, créer un nouvel utilisateur
      const hash = bcrypt.hashSync(req.body.password, 10);

      const newUser = new User({
        token: uid2(32),
        username: req.body.username,
        email: req.body.email,
        password: hash,
        favouritePlatforms: req.body.favouritePlatforms,
        avatar: "",
      });
      console.log(req.body);
      newUser.save().then((newDoc) => {
        res.json({
          result: true,
          token: newDoc.token,
          username: newDoc.username,
        });
      });
    });

    //route signup // as explained below, in the previous route, which is called one level up, we have already checked if username or email have been used, so no need to do it twice
router.post("/signupWithGoogle", (req, res) => {
  if (!checkBody(req.body, ["username", "email"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }
  // we have already checked if the user or email already exist, no need to check again
  // Vérifier si le nom d'utilisateur existe déjà 
  // User.findOne({ username: req.body.username }).then((userByUsername) => {
  //   if (userByUsername !== null) {
  //     res.json({ result: false, error: "Username already exists" });
  //     return;
  //   }
  //   // Vérifier si l'email existe déjà
  //   User.findOne({ email: req.body.email }).then((userByEmail) => {
  //     if (userByEmail !== null) {
  //       res.json({ result: false, error: "Email already exists" });
  //       return;
  //     }

      // Si le nom d'utilisateur et l'email n'existent pas, créer un nouvel utilisateur
      const newUser = new User({
        token: uid2(32),
        username: req.body.username,
        email: req.body.email,
        favouritePlatforms: req.body.favouritePlatforms,
        avatar: "",
      });
      console.log(req.body);
      newUser.save().then((newDoc) => {
        res.json({
          result: true,
          token: newDoc.token,
          username: newDoc.username,
        });
      });
    });

//update userDocument by adding avatar 
router.post("/avatar/:token", (req, res) => {
  const avatar = req.body.avatar;
  if (!avatar) {
    return res.status(400).json({ result: false, error: "Avatar is required" });
  }
  User.findOneAndUpdate(
    { token: req.params.token },
    { avatar: avatar },
    { new: true }
  )
    .then((data) => {
      if (data) {
        res.json({ result: true, avatar: data.avatar });
      } else {
        res.json({ result: false, error: "User not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ result: false, error: err.message });
    });
});

//route signIn 
router.post("/signin", (req, res) => {
  if (!checkBody(req.body, ["username", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  User.findOne({ username: req.body.username }).then((data) => {
    if (data && bcrypt.compareSync(req.body.password, data.password)) {
      res.json({ result: true, token: data.token, email: data.email });
      console.log(data);
    } else {
      res.json({ result: false, error: "User not found or wrong password" });
    }
  });
});

//route signIn with Google //no pw
router.post("/signinWithGoogle", (req, res) => {
  if (!checkBody(req.body, ["email"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  User.findOne({ email: req.body.email }).then((data) => {
    if (data) {
      res.json({ result: true, token: data.token, username: data.username });
      console.log(data);
    } else {
      res.json({ result: false, error: "User not found or wrong password" });
    }
  });
});

//route to delete account
router.delete("/:token", (req, res) => {
  User.findOne({ token: req.params.token }).then((data) => {
    if (data && bcrypt.compareSync(req.body.password, data.password)) {
      User.deleteOne({
        token: req.params.token,
      }).then((deletedDoc) => {
        if (deletedDoc.deletedCount > 0) {
          User.find().then((data) => {
            res.json({ result: true, token: data.token });
          })
        } else {
          res.json({ result: false, error: "User not found" });
        }
      }
    )
    } else {
      res.json({ result: false, error: "Wrong password" });
    }
  });
});

//route to delete account with Google / delete account by username as no pw given for googlesignup
router.delete("/deleteWithGoogle/:token", (req, res) => {
  User.findOne({ token: req.params.token }).then((data) => {
    if (data && (req.body.username === data.username)) {
      User.deleteOne({
        token: req.params.token,
      }).then((deletedDoc) => {
        if (deletedDoc.deletedCount > 0) {
          User.find().then((data) => {
            res.json({ result: true, token: data.token });
          })
        } else {
          res.json({ result: false, error: "User not found" });
        }
      }
    )
    } else {
      res.json({ result: false, error: "Wrong password" });
    }
  });
});

//route user pour recuperer les plateformes favorites de l'utilisateur et faire un use effect dans home avec les données
router.get("/favouritePlatforms/:token", (req, res) => {
  User.findOne({
    token: req.params.token,
  }).then(data => {
    if (data) {
      res.json({ result: true, favouritePlatforms: data.favouritePlatforms });
    } else {
      res.json({ result: false, error: "User not found" });
    }
  });
});


// route to change password
router.post("/updatePassword/:token", (req, res) => {
  if (!checkBody(req.body, ["userpassword", "newPassword", "confirmNewPassword"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }
  User.findOne({ token: req.params.token }).then((data) => {
    if (data && bcrypt.compareSync(req.body.userpassword, data.password)) {
      const hash = bcrypt.hashSync(req.body.confirmNewPassword, 10);
      User.updateOne(
        { token: req.params.token },
        { password: hash },
        { new: true }
      ) 
      .then((data) => {
        if (data) {
          res.json({ result: true, token: data.token });
        } else {
          res.json({ result: false, error: "User not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ result: false, error: err.message });
      });
    } 
    else {
      res.json({ result: false, error: "User not found" });
      console.log('No')
    }
})
  });

  //route to update email // token as params
  router.post("/updateEmail/:token", async(req, res) => {
    if (!checkBody(req.body, ["email"])) {
      res.json({ result: false, error: "Missing or empty field" });
      return;
    }
    const userByEmail = await User.findOne({ email: req.body.email })
      if (userByEmail !== null) {
        res.json({ result: false, error: "Email already exists" });
        return;
      }
    const newEmail = req.body.email;
  if (!newEmail) {
    return res.status(400).json({ result: false, error: "New Email is required" });
  }
  User.findOneAndUpdate(
    { token: req.params.token },
    { email: newEmail },
    { new: true }
  )
    .then((data) => {
      if (data) {
        res.json({ result: true, email: data.email });
      } else {
        res.json({ result: false, error: "User not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ result: false, error: err.message });
    });
});
  
 //route to update username // token as params
router.post("/updateUsername/:token", async(req, res) => {
  if (!checkBody(req.body, ["username"])) {
    res.json({ result: false, error: "Missing or empty field" });
    return;
  }
  //checking if username is already taken
  const userByUsername = await User.findOne({ username: req.body.username })
  
  if (userByUsername !== null) {
    res.json({ result: false, error: "Username already exists" });
    return;
  }
  const newUsername = req.body.username;
if (!newUsername) {
  return res.status(400).json({ result: false, error: "New Username is required" });
}
User.findOneAndUpdate(
  { token: req.params.token },
  { username: newUsername },
  { new: true }
)
  .then((data) => {
    if (data) {
      console.log(data.username)
      res.json({ result: true, username: data.username });
    } else {
      res.json({ result: false, error: "User not found" });
    }
    console.log(data.username)
  })
  .catch((err) => {
    res.status(500).json({ result: false, error: err.message });
  });
});

module.exports = router;
