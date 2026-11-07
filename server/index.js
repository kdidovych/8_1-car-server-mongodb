require('dotenv').config();
require('./src/utils/prepareStructure')();
const http = require('http');
const app = require('./src/app');
const PORT = parseInt(process.env.SERVER_PORT) || 5000;

http.createServer(app).listen(PORT, (e) => {
    if (e) {
        console.error("Failed to start server:", e);
    } else {
        console.log(`Server started on PORT=${PORT}`)
    }
});
