const ResponseError = require('../../../errors/ResponseError');
const {ID_SCHEMA, CAR_VALIDATION_SCHEMA, LOGO_SCHEMA} = require("../../../validationSchemes/models");

const generateIdError = () => {
    return new ResponseError('Incorrect required Id field', {code: 400});
}

const generateValidationError = (error) => {
    return new ResponseError(error.inner.join('.'), {code: 400});
}

const getRequestData = (req, isIdNeeded) => {
    const data = {...req.body};
    if (isIdNeeded) {
        if (!data._id) {
            throw generateIdError();
        }
    }
    if (!isIdNeeded && Object.hasOwn(data, "_id")) delete data._id;
    return data;
}

module.exports.validateGetById = async (req, res, next) => {
    try {
        if (!req.params.id || !(await ID_SCHEMA.isValid(req.params.id))) {
            return next(generateIdError());
        }
        // Q14
        next();
    } catch (error) {
        next(error);
    }
    // next();
};

module.exports.validateCreateOne = async (req, res, next) => {
    try {
        const data = getRequestData(req, false);
        req.body.data = await CAR_VALIDATION_SCHEMA.validate(data, {abortEarly: false});
    } catch (error) {
        if (error.name === 'ValidationError') {
            return next(generateValidationError(error));
        }
        return next(error);
    }
    next();
};

module.exports.validateUpdateOne = async (req, res, next) => {
    try {
        const data = getRequestData(req, true);
        req.body.data = await CAR_VALIDATION_SCHEMA.validate(data, { abortEarly: false });
        next();
    } catch (error) {
        if (error.name === 'ValidationError') {
            return next(generateValidationError(error));
        }
        next(error);
    }
};

module.exports.validateDeleteById = async (req, res, next) => {
    try {
        if (!req.params.id || !(await ID_SCHEMA.isValid(req.params.id))) {
            return next(generateIdError());
        }
        next();
    } catch (error) {
        next(error);
    }
};

module.exports.validateLogo = async (req, res, next) => {
    try {
        if (!req.body._id) {
            throw generateIdError();
        }
        const data = {
            _id: req.body._id,
            logo: req.file.filename
        }
        req.body.data = await LOGO_SCHEMA.validate(data, { abortEarly: false });
        next();
    } catch (error) {
        if (error.name === 'ValidationError') {
            return next(generateValidationError(error));
        }
        next(error);
    }
};

