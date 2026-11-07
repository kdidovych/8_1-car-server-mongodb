const {Type, Car, mongoose} = require('../models');
const {TYPES, CARS} = require('../consts/seeds');

/** Q7: review this file and ./db_initial.js with mentor */
async function initializeDatabase() {
    try {
        await mongoose.connection.asPromise();

        const databaseName = mongoose.connection.name;
        const collections = await mongoose.connection.db.listCollections().toArray();

        if (collections.length === 0) {
            console.log(`Database '${databaseName}' does not exist. Creating it.`);
            await mongoose.connection.db.createCollection(Type.collection.name);
            await mongoose.connection.db.createCollection(Car.collection.name);
        } else {
            console.log(`Database '${databaseName}' already exists.`);
        }

        await Type.bulkWrite(TYPES.map(type => ({
            updateOne: {
                filter: {_id: type._id},
                update: {$set: {name: type.name}},
                upsert: true
            }
        })));
        await Car.bulkWrite(CARS.map(car => ({
            updateOne: {
                filter: {brand: car.brand, model: car.model},
                update: {$set: car},
                upsert: true
            }
        })));

        const carsWithTypes = await Car.find().populate('typeId');
        if (carsWithTypes.length === 0) {
            throw new Error('No cars with types were found after seeding.');
        }

        console.log(`Seeded ${TYPES.length} types and ${CARS.length} cars.`);
    } finally {
        await mongoose.disconnect();
    }
}

initializeDatabase().catch(error => {
    console.error('Database initialization failed.', error);
    process.exitCode = 1;
});
