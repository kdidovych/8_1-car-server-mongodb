const {CAR_FILTER_SCHEMA} = require('../validationSchemes/models');
const CAR_QUERY_FILTER_ATTRS = {
    brand: 'brand',
    color: 'color'
};

module.exports.carFilters = async (req, res, next) => {
    const filters = {};
    Object.entries(CAR_QUERY_FILTER_ATTRS).forEach(([param, field]) => {
        if (param in req.query) {
            filters[field] = req.query[param];
        }
    });
    try {
        req.data._filters = await CAR_FILTER_SCHEMA.validate(filters, {abortEarly: false});
        next();
    } catch (e) {
        next(e);
    }
}