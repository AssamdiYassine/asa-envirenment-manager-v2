const express = require("express");
 const passport = require('passport');
const passportJWT = passport.authenticate('jwt', {session: false});

const router = express.Router();
// require('../config/passport.js');

// const passportLocalSignUp = passport.authenticate('localSignUp', {session: false});
// const passportLocalSignIn = passport.authenticate('localSignIn', {session: false});
// Controllers
const UserControllers = require("../controllers/auth");
 
// const { validateBody, schemas } = require('../helpers/routeHelpers');
  
 


// Routers
 router.get("/",  UserControllers.auth);
// router.post("/SignUp",validateBody(schemas.signupSchema), passportLocalSignUp,  UserControllers.SignUp);

module.exports = router;
