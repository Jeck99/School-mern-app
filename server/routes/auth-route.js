const authRoute = require('express').Router();
const authCtrl = require('../controllers/auth-ctrl');

authRoute.post('/register', authCtrl.register);
authRoute.post('/login', authCtrl.login);

module.exports = authRoute;