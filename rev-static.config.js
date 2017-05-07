module.exports = {
    inputFiles: [
        "demo/foo.js",
        "demo/bar.css",
        "demo/test.png",
        "demo/*.ejs.html",
    ],
    outputFiles: file => file.replace(".ejs", ""),
    json: "demo/variables.json",
    ejsOptions: {
        rmWhitespace: true
    },
    sha: 256,
    customNewFileName: (filePath, fileString, md5String, baseName, extensionName) => baseName + "-" + md5String + extensionName,
    noOutputFiles: [
        "demo/worker.js",
    ],
    es6: "demo/variables.ts",
};
