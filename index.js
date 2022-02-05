const fs = require('fs');

const controllerClass = fs.readFileSync('./controllerClass.js', { encoding: 'utf-8' });
const controller = fs.readFileSync('./controller.js', { encoding: 'utf-8' });

const middlewareClass = fs.readFileSync('./middlewareClass.js', { encoding: 'utf-8' });
const middleware = fs.readFileSync('./middleware.js', { encoding: 'utf-8' });

const validatorClass = fs.readFileSync('./validatorClass.js', { encoding: 'utf-8' });
const validator = fs.readFileSync('./validator.js', { encoding: 'utf-8' });

const output = {
  controllerClass,
  controller,
  middlewareClass,
  middleware,
  validatorClass,
  validator,
}
fs.writeFileSync('./output.json', JSON.stringify(output, null, 2), { encoding: 'utf-8' });