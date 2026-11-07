const {Types, Cars} = require('../models');
const {TYPES, CARS} = require('../consts/seeds');

async function insertData() {
    try {
        await Types.insertMany(TYPES);
        await Cars.insertMany(CARS);
        const carsWithTypes = await Cars.find().populate('typeId');
        if (carsWithTypes.count === 0) {
            console.error('Something goes wrong. No cars with types data.');
        }
    } catch (e) {
        console.error('Something goes wrong. Cars and Types data were not populated correctly', e);
    }
}

insertData();
