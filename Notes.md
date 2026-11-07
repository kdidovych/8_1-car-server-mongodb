N1. Structure of test folder
https://github.com/mongodb/sample-app-nodejs-mflix/tree/main/server/tests/controllers


N2. Why in config there are functions export?
https://github.com/mongodb/sample-app-nodejs-mflix/blob/main/server/src/config/database.ts


Q1. What is atlas and why is it recommended for local usage only?
https://www.mongodb.com/docs/get-started/?language=nodejs


N3. What about ubuntu 26.04?
https://www.mongodb.com/docs/v8.0/tutorial/install-mongodb-on-ubuntu/
```
Platform Support
MongoDB 8.0 Community Edition supports the following 64-bit Ubuntu LTS (long-term support) releases on x86_64 architecture:
24.04 LTS ("Noble")
22.04 LTS ("Jammy")
20.04 LTS ("Focal")
```
That was for version 8.0
https://www.mongodb.com/docs/manual/administration/install-community-linux/?linux-distro=ubuntu&linux-method=pkg
9.0 supports 26.04


N4. Was new to me (global functions for mongo?)
```
./server/src/.mongoshrc
```


Q2. dotenv ^18.0.9. 
Why it still supports only strings? What additional functionality it has over so many versions?


Q3. why mongo connection in video examples without username/password?
https://freshcode-training.kwiga.com/courses/javascript-developer-ru/183-mongoose-connection-data-types
7:30


Q4. How does that catch works?
https://www.mongodb.com/docs/drivers/node/current/connect/mongoclient/#std-label-node-mongoclient
```
export async function runStableAPIConnect() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const result = await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
    return result;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
runStableAPIConnect().catch(console.dir);
```


N5. there is no controller new object initialization as it exports functions, not classes:
https://github.com/mongodb/sample-app-nodejs-mflix/blob/main/server/src/controllers/movieController.ts


N6. winston (cigarettes - blue :D ) logger
https://github.com/mongodb/sample-app-nodejs-mflix/blob/main/server/src/utils/logger.ts


Q5. What is a decorator and how it works?
https://www.tiktok.com/@supabase.com/video/7691032192562007302?_r=1&_t=ZS-9AzIyYEiEEv


Q6. Why are we put mongoose to our array of models? (see in code 'Q6')
now models and mongoose are mixed together
https://freshcode-training.kwiga.com/courses/javascript-developer-ru/183-mongoose-connection-data-types
46:32


N7. when I opening src/models//cars.js my CPU become crazy
```
The likely CPU trigger is WebStorm analyzing Mongoose’s types, not the file running code. This file builds a schema with new Schema({...}) and passes it to mongoose.model(...); WebStorm’s JavaScript type engine may do expensive type inference for those calls. That fits the Activity Monitor’s lang.javascript.psi.types entry. The project is using Mongoose 9.11.4. I can’t confirm the exact expression without a profiler, but the 'String' value and comments are unlikely to explain that CPU usage.
To test a possible workaround, add /** @type {mongoose.Schema} */ immediately above const carsSchema = ... and reopen the file. Also change engine_type: 'String' to engine_type: String for a standard Mongoose schema definition. If CPU is still high, temporarily comment out mongoose.model('Cars', carsSchema) and reopen: if the spike stops, model type inference is the hotspot; if not, it’s likely schema type inference.
```


N8. Who create such logic?
https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose/mongoose-get-started/#where
```
Blog.findOne().where('author').equals('Jess Garcia');
```
why not 
```
Blog.findOne().where('author', 'Jess Garcia');
```


Q7. search in code Q7


Q8. where require('dotenv').config(); should be called? in each file/in global index.js/in app.js?


Q9. Why there is no await before connect in 
server/src/models/index.js
how all next sequence executed?


Q10. Pagination limit and offset. If there are lots of items in db, there will be long db request when offset is 1M


N11. As I understand, js is not evolved enough to namespaces level


Q11. search 'Q11' in code


N12. 
1) All parameters in cars are single values (nice to have examples with other objects inside)
2) create db, tables, seeds can be done with .mongodb files but nothing said


Q12. Why there is no app.js in call stack?
img-no-app-stack-trace.png


N13. What is wrong with prev code - cannot get to controller.
io.netty.handler.timeout.ReadTimeoutException
Answer: pagination example from practise-2 is incorrect as no next() was called. Was fixed in practise-3


Q13. search in code Q13


Q14. next(error) vs next() vs return next()
if change  validation schema to this
```
module.exports.CAR_VALIDATION_SCHEMA = yup.object().shape({
    _id: yup.string()
        .notRequired()
        .test(
            'is-valid-mongodb-id',
            '_id is not a valid MongoDB ObjectId',
            (value) => value !== undefined && mongoose.Types.ObjectId.isValid(value)
        ),
```
and run car create one , then I will run every next from this code
```
module.exports.validateCreateOne = async (req, res, next) => {
    try {
        const data = getRequestData(req, false);
        req.body.data = await CAR_VALIDATION_SCHEMA.validate(data, {abortEarly: false});
    } catch (error) {
        if (error.name === 'ValidationError') {
            next(generateValidationError(error));
        }
        next(error);
    }
    next();
};
```


Q15. .test vs .notRequired
```
    _id: yup.string()
        .test(
            'is-valid-mongodb-id',
            '_id is not a valid MongoDB ObjectId',
            (value) => value !== undefined && mongoose.Types.ObjectId.isValid(value)
        )
        .notRequired(),
```

N14. Путаница с офсетом и пейджом, в названиях переменних и параметров

Q16. I do not see difference between aggregated and populated results