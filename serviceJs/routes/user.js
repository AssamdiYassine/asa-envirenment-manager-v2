require('../config/passport');
const express = require('express');
// const passport = require('passport');
const router = express.Router();
// const passportJWT = passport.authenticate('jwt', {session: false});


// Controllers
const UsersControllers = require('../controllers/user');

// Routes
router.post('/authorized',  UsersControllers.Autorized);
router.get('/access',  UsersControllers.role);

// router.post('/checkuser', passportJWT, UsersControllers.checkuser);
 

module.exports = router;