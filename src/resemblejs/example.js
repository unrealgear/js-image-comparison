const compareImages = require("resemblejs/compareImages"),
    fs = require("mz/fs");

const optionsForResemblejs = {
    // for examples of available options visit http://rsmbl.github.io/Resemble.js/
    output: {
        errorColor: {
            red: 255,
            green: 0,
            blue: 255
        },
        errorType: "flat",
        transparency: 1,
        largeImageThreshold: 2000,
        useCrossOrigin: false,
        outputDiff: true
    },
    scaleToSameSize: true,
    ignore: "less"
};

findDifferences('./images/windows_actual.png', './images/windows_expected.png',
    'resemblejs-windows');

async function findDifferences(pathToActual, pathToExpected, nameOfResultFile) {
    const actual = await fs.readFile(pathToActual);
    const expected = await fs.readFile(pathToExpected);

    const result = await compareImages(actual, expected, optionsForResemblejs);

    await fs.writeFile("./results/resemblejs/" + nameOfResultFile + ".png", result.getBuffer());
}
