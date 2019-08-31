const path = require('path');
const fs = require('fs');

module.exports = (folder) => {
    folder = path.join(__dirname, "view");
    return (req, res, next) => {
        let fileName = req.path ? req.path : 'index.html';
        if (!isExtensionExist(fileName)) {
            fileName = fileName + '.html';
        }
        fileName = path.join(folder, fileName);
        if (fs.existsSync(fileName)) {
            res.sendFile(fileName);
        } else {
            next();
        }
    };
}

function isExtensionExist(fileName) {
    return fileName.indexOf('.') > -1;
}