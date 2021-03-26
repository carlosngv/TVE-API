const { Router } = require('express');
const { createOxygen, getAll_oxygen, getOxygen } = require('../controllers/oxygen.controller');
const { createTemperature, getAll_temperature, getTemperature } = require('../controllers/temperature.controller');
const { createRhythm, getRhythm, getAll_rythem } = require('../controllers/rhythm.controller');
const { createUserTest } = require('../controllers/user.controller');
const { addVelocity,getVelocitiesByUser } = require('../controllers/velocity.controller');
const { createDistance, getDistanceByUser } = require('../controllers/distance.controller');
const { createRepetition, getRepetitionByUser } = require('../controllers/repetition.controller');
const { getRenditionsByUser, addRendition } = require('../controllers/rendition.controller');

const router = Router();

// http://localhost:PORT/api/v1/meditions/





// create , temperature , oxygen , rhythm
router.route('/oxygen').post(createOxygen);
router.route('/temperature').post(createTemperature);
router.route('/rhythm').post(createRhythm);

router.route('/test').post(createUserTest);

// Proyecto 1
router.post('/all/distance/new', createDistance);
router.get('/all/distance/:username', getDistanceByUser);

router.post('/all/repetition/new', createRepetition);
router.get('/all/repetition/:username', getRepetitionByUser);

router.post('/all/velocity/new', addVelocity);
router.get('/all/velocity/:username', getVelocitiesByUser);

router.post('/all/velocity/new', addRendition);
router.get('/all/velocity/:username', getRenditionsByUser);

// getAll
router.route('/all/oxygen/:id').get(getAll_oxygen);
router.route('/all/temperature/:id').get(getAll_temperature);
router.route('/all/rythm/:id').get(getAll_rythem);
// getOnlyOne
router.route('/oxygen/:id').get(getOxygen);
router.route('/temperature/:id').get(getTemperature);
router.route('/rhythm/:id').get(getRhythm);

// TODO: Distance, velocity


module.exports = router;
