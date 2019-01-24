const PNG = require("pngjs").PNG,
    fs = require("fs"),
    pixelmatch = require("pixelmatch");

findDifferences('./images/windows_actual.png', './images/windows_expected.png',
    'pixelmatch-windows');

function findDifferences(pathToActual, pathToExpected, nameOfResultFile) {
    let actual = PNG.sync.read(fs.readFileSync(pathToActual));
    let expected = PNG.sync.read(fs.readFileSync(pathToExpected));

    let result = new PNG({width: expected.width, height: expected.height});

    // numberOfDiffs is a number, it can be logged or attached to the report
    let numberOfDiffs = pixelmatch(actual.data, expected.data, result.data, expected.width, expected.height);

    // create folder 'results' or provide permissions to create folders
    result.pack().pipe(fs.createWriteStream("./results/pixelmatch/"+ nameOfResultFile + ".png"));
}
