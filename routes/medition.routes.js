const { Router } = require('express');
const { validateFields } = require('../middlewares/fiel-validators');
const { check } = require('express-validator');
const { createOxygen, getAll_oxygen, getOxygen } = require('../controllers/oxygenController');
const { createTemperature, getAll_temperature, getTemperature } = require('../controllers/temperatureController');
const { createRhythm, getRhythm, getAll_rythem } = require('../controllers/rhythmController');
const { createUserTest } = require('../controllers/userController');
const { createMedition, getMeditionsByUsername } = require('../controllers/meditions');
const router = Router();

// http://localhost:PORT/api/v1/meditions/

router.post('/', [
    check('type', 'Type is required').not().isEmpty(),
    check('username', 'Username is required').not().isEmpty(),
    validateFields
], createMedition);


router.get('/', getMeditionsByUsername);

// create , temperature , oxygen , rhythm
router.route('/oxygen').post(createOxygen);
router.route('/temperature').post(createTemperature);
router.route('/rhythm').post(createRhythm);
router.route('/test').post(createUserTest);

// getAll
router.route('/all/oxygen/:id').get(getAll_oxygen);
router.route('/all/temperature/:id').get(getAll_temperature);
router.route('/all/rythm/:id').get(getAll_rythem);
// getOnlyOne
router.route('/oxygen/:id').get(getOxygen);
router.route('/temperature/:id').get(getTemperature);
router.route('/rhythm/:id').get(getRhythm);

// TODO: Distance, velocity


// recovery


module.exports = router;
