const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, './public/images');
   },
   filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const filename = file.fieldname + '-' + uniqueSuffix;
      cb(null, filename);
   },
});

const fileFilter = (req, file, cb) => {
   const extName = path.extname(file.originalname);
   const allowedExt = /jpg|png/;
   if (!allowedExt.test(extName)) {
      return cb(new Error('Only Use Allowed Extension (JPG, PNG)'), false);
   }
   cb(null, true);
};

const upload = multer({
   storage: storage,
   fileFilter,
   limits: {
      fileSize: 2097152, // 2MB
   },
});

module.exports = {
   upload,
};
