const UserController = require('../controllers/User');

module.exports = (apiVer, app) => {
   app.post(apiVer + '/users', UserController.post);
   app.put(apiVer + '/users/:id', UserController.put);
   app.delete(apiVer + '/users/:id', UserController.delete);
   app.get(apiVer + '/users', UserController.get);
   app.get(apiVer + '/users/:id', UserController.getById);
}
