const mongoose = require('mongoose');
const {Schema} = mongoose;

const typesSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: /^[a-zA-Zа-яА-ЯёЁ]+$/i
        }
    },
    {
        timestamps: false,
        versionKey: false
    }
);

module.exports = mongoose.model('Type', typesSchema);
