
// require('../config/passport');
const express = require('express');
// const passport = require('passport');
// const passportJWT = passport.authenticate('jwt', {session: false});
const router = express.Router();
// Controllers
const enviControllers = require("../controllers/enveronment");
// Routers
router.get("/environment", enviControllers.environment);
//deve
router.get("/developement/:id", enviControllers.developement);
router.post("/delete_deve", enviControllers.deleteDeve);
router.post("/add_deve", enviControllers.addDeve);


// test
router.get("/test/:id", enviControllers.test);
router.post("/delete_test", enviControllers.deleteTest);
router.post("/add_test", enviControllers.addTest);

//perf
router.get("/performance/:id", enviControllers.performance);
router.post("/delete_perf", enviControllers.deletePerf);
router.post("/add_perf", enviControllers.addPerf);


//demo
router.get("/demo/:id", enviControllers.demo);
router.post("/identity-environment", enviControllers.IdentityEnvironment);
router.post("/upload", enviControllers.upload);
router.get("/delete/:id", enviControllers.delete);
router.post("/delete_demo", enviControllers.deleteDemo);
//edit 
router.post("/edit_demo", enviControllers.editDemo);

module.exports = router;