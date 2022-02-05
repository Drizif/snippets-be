exampleFn = () => {
  return Joi.object().keys({
    id: Joi.string().required(),
  }).options({ allowUnknown: true, stripUnknown: true });
}
