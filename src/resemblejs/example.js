const compareImages = require("resemblejs/compareImages"),
    fs = require("mz/fs"),
    paths = require("../paths.js");

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

paths.imagesToCompare.forEach((it) => {
    findDifferences(it[0], it[1], paths.pathToResults + "resemblejs/resemblejs" + it[2])
});

async function findDifferences(pathToActual, pathToExpected, pathToResult) {
    const actual = await fs.readFile(pathToActual);
    const expected = await fs.readFile(pathToExpected);

    const result = await compareImages(actual, expected, optionsForResemblejs);

    await fs.writeFile(pathToResult, result.getBuffer());
}
