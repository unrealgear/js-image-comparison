# js-image-comaprison

Examples of using [Resemble.js](https://github.com/rsmbl/Resemble.js), [pixelmatch](https://github.com/mapbox/pixelmatch), 
[looks-same](https://github.com/gemini-testing/looks-same) and [opencv4nodejs](https://github.com/justadudewhohacks/opencv4nodejs/) for pixel-to-pixel image comparison.

## Prerequisites

### 1. node v8

The examples were tested using node v8.15.0. and npm v6.5.0.

To find your version of `node` run:
```
node -v
```
To find your version of `npm` run:

```
npm -v
```
### 2. cmake

[cmake](https://cmake.org/) has to be installed on your machine.

### For macOS

> [Homebrew](https://brew.sh/) (also known as brew) has to be installed.

Execute in terminal:
```
brew install cmake
```  

Export path by executing:
```
export PATH="/usr/local/bin:$PATH"
```

### For other platforms

Follow official [installation guide](https://cmake.org/install/).

## How to run

Install dependencies by running (installation will take some time as OpenCV for `opencv4nodejs` will be downloaded and compiled on your machine): 
```
npm install
```

There are 4 main commands available:
```
npm generate:resemblejs
```
```
npm generate:pixelmatch
```
```
npm generate:looks-same
```
```
npm generate:opencv4nodejs
```

The commands above will generate result files for the given library.

## Where to find results

Generated result files with marked differences are placed in `./results/xxx/` where `xxx` is the name of the library 
which generated the file. 

## Useful links

#### Resemble.js

[GitHub repository](https://github.com/rsmbl/Resemble.js)  
[Link to npm](https://www.npmjs.com/package/resemblejs)  
[Official examples](https://github.com/rsmbl/Resemble.js/tree/master/nodejs-tests)  
[Examples of different options](http://rsmbl.github.io/Resemble.js/)  

#### pixelmatch

[GitHub repository](https://github.com/mapbox/pixelmatch)  
[Link to npm](https://www.npmjs.com/package/pixelmatch)  
[Official examples](https://github.com/mapbox/pixelmatch/tree/master/test)  

### looks-same
[GitHub repository](https://github.com/gemini-testing/looks-same)
[Link to npm](https://www.npmjs.com/package/pixelmatch)  
[Official examples](https://github.com/gemini-testing/looks-same/blob/master/test/test.js)

#### opencv4nodejs

[GitHub repository](https://github.com/justadudewhohacks/opencv4nodejs/)  
[Link to npm](https://www.npmjs.com/package/opencv4nodejs)  
[Official examples](https://github.com/justadudewhohacks/opencv4nodejs/tree/master/examples) 

#### repos with other examples

[Examples of using opencv4nodejs](https://github.com/unrealgear/js-opencv4nodejs-example)  
[Examples of using resemblejs and pixelmatch](https://github.com/unrealgear/old-js-image-comparison)  
