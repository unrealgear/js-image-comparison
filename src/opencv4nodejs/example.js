const cv = require("opencv4nodejs");

findDifferences('./images/windows_actual.png', './images/windows_expected.png',
    'absdiff-windows');

async function findDifferences(pathToActual, pathToExpected, nameOfResultFile) {
    const actual = await cv.imreadAsync(pathToActual);
    const expected = await cv.imreadAsync(pathToExpected);

    let result = actual.absdiff(expected);

    cv.imwrite('./results/opencv4nodejs/' + nameOfResultFile + '.png', result);
}
