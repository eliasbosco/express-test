const UserRoute = require('./user');
const apiVer = '/api/v1';

module.exports = (app) => {
    UserRoute(apiVer, app);
};