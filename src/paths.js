const fileHelper = require('./helpers/fileHelper.js');

const pathToImages = "./images/";

let imagesToCompare = [
    [pathToImages + "opencv4nodejs/windows_actual.png", pathToImages + "opencv4nodejs/windows_expected.png",
        "-windows.png"],
    [pathToImages + "pixelmatch/map1_actual.png", pathToImages + "pixelmatch/map1_expected.png",
        "-map1.png"],
    [pathToImages + "pixelmatch/map2_actual.png", pathToImages + "pixelmatch/map2_expected.png",
        "-map2.png"],
    [pathToImages + "pixelmatch/pins_actual.png", pathToImages + "pixelmatch/pins_expected.png",
        "-pins.png"],
    [pathToImages + "resemblejs/people_actual.jpg", pathToImages + "resemblejs/people_expected.jpg",
        "-people.png"]
];

generateAndAddPathToImagesFrom(pathToImages + "github/", pathToImages + "baseline/github.png");
generateAndAddPathToImagesFrom(pathToImages + "google/", pathToImages + "baseline/google.png");

function generateAndAddPathToImagesFrom(pathToDir, pathToBaseLine, arrayToAddPathsTo = imagesToCompare) {

    // read files from given dir, return array of strings, where string - is a paths to file
    let filesInDirectory = fileHelper.getFilesInDir(pathToDir);

    // initialize new empty array to write paths to actual, expected image and the name for the image
    let arrayOfPathsToImages = [];

    // generate and pushes the new array where [0] is a path to actual image, [1] is a path to expected image,
    // [2] is a name of the file
    filesInDirectory.forEach(function (pathToImage) {
        arrayOfPathsToImages.push([pathToImage, pathToBaseLine,
            "-" + pathToImage.substring(pathToImage.lastIndexOf("/") + 1)])
    });

    // pushes the new array with paths to the predefined one
    arrayOfPathsToImages.forEach(function (arrayEntry) {
        arrayToAddPathsTo.push(arrayEntry)
    })
}

exports.pathToResults = "./results/";
exports.imagesToCompare = imagesToCompare;
