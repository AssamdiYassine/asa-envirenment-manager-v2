const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
var path = require("path");
const fs = require("fs");
 
 const hashPassword = async (password) => {
 
    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Generate a password hash (salt + hash)
    const passwordHash = await bcrypt.hash(password, salt);

    // Re-assign the password with password hash
    return passwordHash;
 
}
 
function buildPath() {
  return path.join(process.cwd(), "dataJson", "user.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

// Models
const filePath = buildPath();
const User = extractData(filePath);
 
// JSON WEB TOKENS STRATEGY
 
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.JWT_SECRET, 
}, async (payload, done) => {
  try {
 
    // Find the user specified in token
    const user = await User.map((el)=>{
      if (el.id === payload.sub) {
        return el ; 
      }
    })
 
    // If the user doesn't exist handle it
 
    if (!user) {
      return done(null, { error: { code: 402, message: "you are not  user !!!" } });
    }
    // Otherwise, return the user
    done(null, user);

  } catch (error) {
    done(error, false)
  }
}));

// EMAIL SIGNUP STARTEGY
passport.use('localSignUp', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  firstname: 'firstname',
  lastname: 'lastname',
  passReqToCallback: true
}, async (req, email, password, done) => {
  try {

//     let {firstname, lastname,} = req.body;
//     // Check wether the current user exists in our DB
//     const existingUser = await User.find((el)=> el.email.toLowerCase() === email);

//     // if not, handle it
//     if (!existingUser) {
//       // otherwise create user
//       let hashedPassword = await hashPassword(password);
//       const newUser = new User({
       
//         email: email.toLowerCase(),
//         password: hashedPassword,
      
//         role: "master",
       
//         firstname :firstname,
//         lastname :lastname,
      
//       });
// console.log('hi');
//       await newUser.save();
// console.log('hello');
//       // Send Verification Email
//       // const email_token = await generateAuthToken(newUser);
//       // await sendConfirmationEmail({ toUser: { firstname: newUser.firstname, lastname: newUser.lastname  , email: newUser.email }, hash: email_token })

//       return done(null, newUser);
//     }

//     // Otherwise, return email exists
//     return done(null, { error: { code: 402, message: "user already exists" } });
  } catch (error) {
    done(error, null, error.message);
  }
}));

// EMAIL SIGNIN STARTEGY
passport.use('localSignIn', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  try {
 
    // Check wether the current user exists in our DB
    const existingUser = await User.find((el)=> {
      if
     ( el.email.toLowerCase() === email){
       return el;
     }
  
    });
      // if not, handle it
    if (!existingUser) {{ email: email.toLowerCase()}
      return done(null, { error: { code: 402, message: "user email is not  exists" } });
    }
     // Check if password correct
    const matchPassword = await existingUser.password === password;
     // if not, handle it
    if (!matchPassword) {
      return done(null, { error: { code: 403, message: "password is not match" } });
    }
    // Otherwise, return the user
    return done(null, existingUser);
  } catch (error) {
    done(error, null, error.message);
   
  }
})); 

