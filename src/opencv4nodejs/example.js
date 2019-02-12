const cv = require("opencv4nodejs"),
    paths = require("../paths.js");

paths.imagesToCompare.forEach((it) => {
    findDifferences(it[0], it[1], paths.pathToResults + "opencv4nodejs/opencv4nodejs" + it[2])
});

async function findDifferences(pathToActual, pathToExpected, pathToResult) {
    const actual = await cv.imreadAsync(pathToActual);
    const expected = await cv.imreadAsync(pathToExpected);

    const result = actual.absdiff(expected);

    cv.imwrite(pathToResult, result);
}
