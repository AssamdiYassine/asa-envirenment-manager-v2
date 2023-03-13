const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fs = require("fs");
var path = require("path");
// async function isValidPassword(newPassword) {
//   try {
//     return await bcrypt.compare(newPassword, this.password);
//   } catch (error) {
//     throw new Error(error);
//   }
// }

function buildPath() {
  return path.join(process.cwd(), "dataJson", "role.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

function generateAuthToken(user) {
  const token = JWT.sign(
    {
      iss: "ASA-DEV-TEAM",
      sub: user.id,
      iat: Math.floor(new Date().getTime() / 1000), //current date
      exp: Math.floor(new Date().setDate(new Date().getDate() + 1) / 1000), //current date + 1 day ahead
    },
    process.env.JWT_SECRET
  );
  return token;
}

module.exports = {
  SignUp: async (req, res, next) => {
    try {
      // Check if Error
      if (req.user.error) {
        res.status(200).json(req.user);
        return;
      }

      // Generate token
      // const token = req.user.generateAuthToken();

      // Response with token and user
      let user = req.user.toObject();
      delete user.password;
      res.status(200).json({ user, token });
    } catch (error) {
      throw error;
    }
  },

  SignIn: async (req, res, next) => {
    try {
      // Check if Error
      if (req.user.error) {
        res.status(200).json(req.user);
        return;
      }

      //  Generate token
      //   const token = generateAuthToken(req.user);

      //  Response with token and user
      let user = req.user;
      //  delete user.password;
      const newUser = {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
      };

      res.status(200).json({ user: newUser });
    } catch (error) {
      throw error;
    }
  },
  Autorized: async (req, res, next) => {

     const filePath = buildPath();
    const AllData = extractData(filePath);

    try {
      if (req.body.param === process.env.ACCESS_KEY ) {

        const newDemo = {
          role: "master"
        };
        const newAllEvents = AllData.map((ev) => {
          return newDemo;
        });
      
        fs.writeFileSync(filePath, JSON.stringify(newAllEvents));

      } else {
        const newDemo = {
          role: "user"
        };
        const newAllEvents = AllData.map((ev) => {
          return newDemo;
        });
  
        fs.writeFileSync(filePath, JSON.stringify(newAllEvents));
      }
     } catch (error) {
      throw error;
    }
  },
  role: async (req, res, next) => {
    const filePath = buildPath();
    const AllData = extractData(filePath);
   
      res.status(200).json(AllData[0]);

  


  }
};
