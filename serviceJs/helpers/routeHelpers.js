const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {

  validateBody: (schema) => {
    return (req, res, next) => {
      const result = schema.validate(req.body);
      if (result.error) {
        return res.status(200).send({error: result.error.details[0]})
      }

      if (!req.value) { req.value = {}; }
      req.value['body'] = result.value;
      next();

    }
  },

  schemas: {
    loginSchema: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required()//.pattern(new RegExp(pattern))
    }),
    signupSchema: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),//.pattern(new RegExp(pattern))
      firstname: Joi.string().max(15).required(),
      lastname: Joi.string().max(15).required(),
       

      
    }),
  }
}