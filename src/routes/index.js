const UserRoute = require('./User');
const apiVer = '/api/v1';

module.exports = (app) => {
    UserRoute(apiVer, app);
};