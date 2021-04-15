const { Router } = require('express'); // ** estrenando router :v
const routerQueries = Router();
const { getUSER , getUsersAvailable , getMyUsers,asignarUser, setWeight } = require('../controllers/user.controller');



routerQueries.route('/:user').get(getUSER).put(asignarUser);
routerQueries.route('/search/getUsersAvailable').get(getUsersAvailable);
routerQueries.route('/search/getMyUsers/:user').get(getMyUsers);
routerQueries.post('/user/weight', setWeight);

module.exports = {
    routerQueries,
};
