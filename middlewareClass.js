

class ExampleMiddleware {
  exampleFn = async (req, res, next) => {
    try {
      req.example = await ExampleValidator.exampleFn().validateAsync({
        ...req.headers,
        ...req.params,
        ...req.query,
        ...req.body
      });

      next();
    } catch (error) {
      res.status(400).json({ status: false, message: error.message || error, data: null });
    }
  }
}

module.exports = new ExampleMiddleware();