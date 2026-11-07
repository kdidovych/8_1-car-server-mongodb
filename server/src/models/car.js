/** @docs https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose/mongoose-get-started/ */
const mongoose = require("mongoose");
const {Schema} = mongoose;
const {CAR_MODEL_VALIDATION_SCHEMA} = require('../validationSchemes/models');
const currentYear = new Date().getFullYear();

/**
 * Available types:
 * String
 * Number
 * Date
 * Buffer
 * Boolean
 * Mixed
 * ObjectId (Schema.Types.ObjectId)
 * Array
 * Int32
 * Decimal128
 * Double
 * Map
 *
 * @type {mongoose.Schema}
 */
const carsSchema = new Schema(
    {
        brand: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true,
            validate: {
                validator: (value) => {CAR_MODEL_VALIDATION_SCHEMA.isValidSync(value)}
            }
        },
        year: {
            type: Number, // changed from "Date" I was planning to use initially
            min: 1900,
            max: currentYear, // this may be bad logic, but I am just making an example with dynamic validation
            required: true
        },
        color: {
            type: String,
            required: true,
            lowercase: true,
        },
        engine_type: String, // in quotes to check different definition variants
        bodywork_type: String,
        gear_type: String,
        new: {
            type: Boolean,
            default: true,
        },
        logo: String,
        typeId: {
            type: Schema.Types.ObjectId,
            ref: 'Type',
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Car', carsSchema);
