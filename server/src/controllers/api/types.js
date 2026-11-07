// this time I will use functions in controllers for variability

const {Type} = require('../../models');
const ResponseError = require("../../errors/ResponseError");

module.exports.getAll = async (req, res, next) => {
    try {
        const {limit, offset} = req.data._pagination;
        const result = await Type
            .find()
            .sort({_id: 1})
            .limit(limit)
            .skip(offset)
        res.send({result});
    } catch (error) {
        next(error);
    }
}

module.exports.getById = async (req, res, next) => {
    try {
        const result = await Type.findById(req.params.id);
        res.send({result});
    } catch (error) {
        next(error);
    }
}

module.exports.createOne = async (req, res, next) => {
    try {
        const result = await Type.create(req.body.data);
        res.send({result});
    } catch (error) {
        next(error);
    }
}

module.exports.updateOne = async (req, res, next) => {
    const rowData = {...req.body.data};
    const id = rowData._id;
    delete rowData._id;
    try {
        const result = await Type.updateOne(
            {_id: id},                // Filter
            {$set: rowData},          // Update expression
            {runValidators: true}     // Options
        );
        if (!result) {
            return next(new ResponseError(`Item with id=${id} was not found`, {code: 400, shouldBeLogged: true}));
        }
        res.send({result});
    } catch (error) {
        next(error);
    }
}

module.exports.deleteById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deletedCar = await Type.findByIdAndDelete(id);
        res.send({result: deletedCar});
    } catch (error) {
        next(error);
    }
}
