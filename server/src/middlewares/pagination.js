const {PAGINATION_SCHEMA} = require('../validationSchemes/models');
const {PAGINATION_LIMIT} = require('../consts/app');

module.exports = async (req, res, next) => {
    const {page, limit} = req.query;
    const defaultPagination = {
        limit: PAGINATION_LIMIT,
        offset: 0
    };
    const pagination = {
        limit: limit ?? PAGINATION_LIMIT,
        offset: (page - 1) * limit || 0
    }
    if (!('data' in req.query)) {
        req.data = {};
    }
    try {
        req.data._pagination = await PAGINATION_SCHEMA.isValid(pagination)
            ? pagination
            : defaultPagination;
        next();
    } catch (e) {
        next(e);
    }
}