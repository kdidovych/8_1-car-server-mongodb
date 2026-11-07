const express = require('express');
const router = express.Router({ caseSensitive: true, strict: true });
const carsController = require('../../controllers/api/cars');
const typesController = require('../../controllers/api/types');
const paginate = require('../../middlewares/pagination');
const { carFilters } = require('../../middlewares/filters');
const carsValidators = require('../../middlewares/validators/api/cars.mw');
const typesValidators = require('../../middlewares/validators/api/types.mw');
const multerUploader = require('../../middlewares/imageUpload.mw');

router
    .get('/carsPopulated', paginate, carFilters, carsController.getAllPopulated)
    .get('/carsAggregated', paginate, carFilters, carsController.getAllAggregated)
    .get('/cars/:id', carsValidators.validateGetById, carsController.getById)
    .post('/cars', carsValidators.validateCreateOne, carsController.createOne)
    .post('/carlogo', multerUploader.single('logo'), carsValidators.validateLogo, carsController.setLogo)
    .put('/cars', carsValidators.validateUpdateOne, carsController.updateOne)
    .delete('/cars/:id', carsValidators.validateDeleteById, carsController.deleteById)

    .get('/types', paginate, typesController.getAll)
    .get('/types/:id', typesValidators.validateGetById, typesController.getById)
    .post('/types', typesValidators.validateCreateOne, typesController.createOne)
    .put('/types', typesValidators.validateUpdateOne, typesController.updateOne)
    .delete('/types/:id', typesValidators.validateDeleteById, typesController.deleteById);

module.exports = router;
