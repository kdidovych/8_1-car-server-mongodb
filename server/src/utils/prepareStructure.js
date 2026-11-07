const { mkdirSync } = require('fs');
const path = require('path');
const {LOG_DIR} = require('../config/logs');
const {LOGO_IMG_DIR} = require('../config/uploader');
const logsFolderPath = path.resolve(__dirname, '..', '..', LOG_DIR);
const logoFolderPath = path.resolve(__dirname, '..', '..', LOGO_IMG_DIR);

module.exports = () => {
    try {
        mkdirSync(logsFolderPath, { recursive: true });
        mkdirSync(logoFolderPath, { recursive: true });
    } catch (error) {
        console.error(`Error. Cannot create logs directory: ${logsFolderPath}`, error.message);
    }
}