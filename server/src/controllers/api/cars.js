// this time I will use functions in controllers for variability

const {Car} = require('../../models');
const ResponseError = require("../../errors/ResponseError");

module.exports.getAllPopulated = async (req, res, next) => {
    try {
        const {limit, offset} = req.data._pagination;
        const filters = req.data._filters;
        // Q13. is sort limit and skip goes after all data was collected and loaded (10M rows)? When promise executes?
        const result = await Car
            .find(filters) // only equals for now.
            .populate('typeId')
            .sort({_id: 1})
            .limit(limit)
            .skip(offset)
        // Q11. difference
        // res.status(200).json(result); // was in video example
        res.send({result}); // no word that this is json format
    } catch (error) {
        next(error);
    }
}

module.exports.getAllAggregated = async (req, res, next) => {
    try {
        const {limit, offset} = req.data._pagination;
        const filters = req.data._filters;
        const result = await Car.aggregate([
            {$match: filters},
            {$sort: {_id: 1}},
            {$skip: offset},
            {$limit: limit},
            // JOIN
            {
                $lookup: {
                    from: 'types',
                    localField: 'typeId',
                    foreignField: '_id',
                    as: 'type'
                }
            },
            // PREVENTING CLEAN UP
            // If the lookup finds no match, $unwind normally removes that car from the results.
            // Setting preserveNullAndEmptyArrays: true keeps it, with type as null/missing.
            {
                $unwind: {
                    path: '$type',
                    preserveNullAndEmptyArrays: true
                }
            }
        ]);
        res.send({result});
    } catch (error) {
        next(error);
    }
}

module.exports.getById = async (req, res, next) => {
    try {
        const result = await Car.findById(req.params.id)
            .populate('typeId');
        res.send({result});
    } catch (error) {
        next(error);
    }
}

module.exports.createOne = async (req, res, next) => {
    try {
        const result = await Car.create(req.body.data);
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
        const result = await Car.updateOne(
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
        const deletedCar = await Car.findByIdAndDelete(id);
        res.send({result: deletedCar});
    } catch (error) {
        next(error);
    }
}

module.exports.setLogo = async (req, res, next) => {
    const filename = req.file.filename;
    const id = req.body._id;
    try {
        const result = await Car.updateOne(
            {_id: id},                // Filter
            {$set: {logo: filename}}, // Update expression
            {runValidators: true}     // Options
        );
        if (!result) {
            return next(new ResponseError(`Item with id=${id} was not updated`, {code: 400, shouldBeLogged: true}));
        }
        res.send({result});
    } catch (error) {
        next(error);
    }
}
