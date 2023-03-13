// require('../config/passport');
const express = require('express');
// const passport = require('passport');
const router = express.Router();
// const passportJWT = passport.authenticate('jwt', {session: false});

// Controllers
const PlatformeControllers = require('../controllers/platforme');


// Routes
router.get('/:id',  PlatformeControllers.All);
router.post('/Add',  PlatformeControllers.Add);
router.post('/delete',  PlatformeControllers.delete);

module.exports = router;