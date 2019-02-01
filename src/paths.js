const pathToImages = "./images/";
const pathToExampleImages = pathToImages + "from_examples/";

exports.pathToResults = "./results/";

exports.paths = [
    [pathToExampleImages + "opencv4nodejs/windows_actual.png", pathToExampleImages + "opencv4nodejs/windows_expected.png",
        "-windows.png"],
    [pathToExampleImages + "pixelmatch/map1_actual.png", pathToExampleImages + "pixelmatch/map1_expected.png",
        "-map1.png"],
    [pathToExampleImages + "pixelmatch/map2_actual.png", pathToExampleImages + "pixelmatch/map2_expected.png",
        "-map2.png"],
    [pathToExampleImages + "pixelmatch/pins_actual.png", pathToExampleImages + "pixelmatch/pins_expected.png",
        "-pins.png"],
    [pathToExampleImages + "resemblejs/people_actual.jpg", pathToExampleImages + "resemblejs/people_expected.jpg",
        "-people.png"]
];
