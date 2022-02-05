const Joi = require('joi');

class ExampleValidator {
  exampleFn = () => {
    return Joi.object().keys({
      id: Joi.string().required(),
    }).options({ allowUnknown: true, stripUnknown: true });
  }
}

module.exports = new ExampleValidator();