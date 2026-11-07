const {ALLOWED_IMG_TYPES, LOGO_IMG_DIR} = require('../config/uploader');
const multer = require('multer');
const crypto = require('crypto');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, LOGO_IMG_DIR);
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(16, function (err, raw) {
            if (err) return cb(err);
            cb(null, file.fieldname + '-' + raw.toString('hex'));
        })
    }
});

const fileFilter = (req, file, cb) => {
    if (ALLOWED_IMG_TYPES.includes(file.mimetype)) {
        return cb(null, true);
    }
    cb(null, false);
}

module.exports = multer({storage, fileFilter});