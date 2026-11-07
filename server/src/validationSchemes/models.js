const yup = require('yup');
const mongoose = require('mongoose');

// MODELS

module.exports.CAR_VALIDATION_SCHEMA = yup.object().shape({
    _id: yup.string()
        .test(
            'is-valid-mongodb-id',
            '_id is not a valid MongoDB ObjectId',
            (value) => value === undefined || mongoose.Types.ObjectId.isValid(value)
        )
        .notRequired(),
    brand: yup.string()
        .min(1)
        .max(255)
        .required('Brand is required field'),
    model: yup.string()
        .min(1)
        .max(255)
        .required('Model is required filed'),
    year: yup.number()
        .integer('year must be a whole number')
        .notRequired(),
    color: yup.string()
        .min(1)
        .max(255)
        .matches(/^[a-zA-Zа-яА-Я]+$/i)
        .required('Color is required filed'),
    engine_type: yup.string()
        .min(1)
        .max(255)
        .notRequired(),
    bodywork_type: yup.string()
        .min(1)
        .max(255)
        .notRequired(),
    gear_type: yup.string()
        .min(1)
        .max(255)
        .notRequired(),
    new: yup.boolean()
        .notRequired(),
    logo: yup.boolean()
        .nullable()
        .notRequired(),
    typeId: yup.string()
        .test(
            'is-valid-mongodb-id',
            'typeId is not a valid MongoDB ObjectId',
            (value) => value !== undefined && mongoose.Types.ObjectId.isValid(value)
        )
        .required('typeId is required')
});

module.exports.CAR_MODEL_VALIDATION_SCHEMA = yup.string()
    .min(1)
    .max(255)
    .required('Model is required field');

module.exports.LOGO_SCHEMA = yup.object().shape({
    _id: yup.string()
        .test(
            'is-valid-mongodb-id',
            '_id is not a valid MongoDB ObjectId',
            (value) => value !== undefined && mongoose.Types.ObjectId.isValid(value)
        )
        .required('Id is a required field'),
    logo: yup.string()
        .min(5)
        .max(255)
        .required('Id is a required field'),
    });

module.exports.CAR_FILTER_SCHEMA = yup.object().shape({
    brand: yup.string()
        .min(1)
        .max(255)
        .notRequired(),
    color: yup.string()
        .min(1)
        .max(255)
        .matches(/^[a-zA-Zа-яА-Я]+$/i)
        .notRequired()
});

module.exports.TYPE_VALIDATION_SCHEMA = yup.object().shape({
    _id: yup.string()
        .test(
            'is-valid-mongodb-id',
            '_id is not a valid MongoDB ObjectId',
            (value) => value === undefined || mongoose.Types.ObjectId.isValid(value)
        )
        .notRequired(),
    name: yup.string()
        .min(1)
        .max(255)
        .matches(/^[a-zA-Zа-яА-Я]+$/i)
        .required('Type Name is a required field')
});

// GENERAL

module.exports.ID_SCHEMA = yup.string()
    .test(
        'is-valid-mongodb-id',
        '_id is not a valid MongoDB ObjectId',
        (value) => value !== undefined && mongoose.Types.ObjectId.isValid(value)
    )
    .required('Id is a required field');

module.exports.PAGINATION_SCHEMA = yup.object().shape({
    limit: yup.number()
        .integer('Limit must be a whole number')
        .min(0)
        .notRequired(),
    offset: yup.number()
        .integer('Offset must be a whole number')
        .min(1)
        .notRequired()
});