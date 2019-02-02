const PNG = require("pngjs").PNG,
    fs = require("fs"),
    pixelmatch = require("pixelmatch"),
    paths = require("../paths.js");

paths.paths.forEach((it) => {
    findDifferences(it[0], it[1], paths.pathToResults + "pixelmatch/pixelmatch" + it[2])
});

function findDifferences(pathToActual, pathToExpected, pathToResult) {

    // jpg/jpeg files are not processed because the package which is used for reading files is limited to png only
    if (pathToActual.endsWith(".jpg") || pathToExpected.endsWith(".jpg") || pathToResult.endsWith(".jpg")) {
        console.log("************************ PIXELMATCH DOES NOT PROCESS JPG/JPEG FILES ************************");
        console.log(`******* Skipping ${pathToActual} with ${pathToExpected} comparison.`);
        console.log("************************************************");

        return null;
    }

    const actual = PNG.sync.read(fs.readFileSync(pathToActual));
    const expected = PNG.sync.read(fs.readFileSync(pathToExpected));

    let result = new PNG({width: expected.width, height: expected.height});

    // numberOfDiffs is a number, it can be logged or attached to the report
    let numberOfDiffs = pixelmatch(actual.data, expected.data, result.data, expected.width, expected.height);

    result.pack().pipe(fs.createWriteStream(pathToResult));
}
