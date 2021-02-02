const { authJwt } = require('../middlewares');
const UserController = require('../controllers/user');

module.exports = (apiVer, app) => {
   app.post(apiVer + '/users', [authJwt.verifyToken], UserController.post);
   app.put(apiVer + '/users/:id', [authJwt.verifyToken], UserController.put);
   app.delete(apiVer + '/users/:id', [authJwt.verifyToken], UserController.delete);
   app.get(apiVer + '/users', [authJwt.verifyToken], UserController.get);
   app.get(apiVer + '/users/:id', [authJwt.verifyToken], UserController.getById);
};
