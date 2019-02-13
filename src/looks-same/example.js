const paths = require("../paths.js"),
    looksSame = require("looks-same");

paths.imagesToCompare.forEach((pathsToImages) => {
    findDifferences(pathsToImages[0], pathsToImages[1], paths.pathToResults + "looks-same/looks-same" + pathsToImages[2])
});

async function findDifferences(pathToActual, pathToExpected, pathToResult) {

    // jpg/jpeg files are not processed because the package which is used for reading files is limited to png only
    if (pathToActual.endsWith(".jpg") || pathToExpected.endsWith(".jpg") || pathToResult.endsWith(".jpg")) {
        console.log("************************ LOOKS-SAME DOES NOT PROCESS JPG/JPEG FILES ************************");
        console.log(`******* Skipping ${pathToActual} with ${pathToExpected} comparison.`);
        console.log("************************************************");

        return null;
    }

    looksSame.createDiff({
        reference: pathToExpected,
        current: pathToActual,
        diff: pathToResult,
        highlightColor: '#ff00ff'
    }, () => {
        console.log('FINISHED');
    });
}
