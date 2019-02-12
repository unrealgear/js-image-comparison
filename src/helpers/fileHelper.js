const fs = require('fs'),
    path = require('path');

exports.getFilesInDir = function getFilesInDir(pathToDirectory) {
    return fs.readdirSync(pathToDirectory).reduce((files, file) => {
        const name = path.join(pathToDirectory, file);
        return fs.statSync(name).isDirectory() ? [...files, ...getFilesInDir(name)] : [...files, "./" + name];
    }, []);
};
