const { join } = require("path");

const { casesDirectory } = require("./config");

module.exports = {
    spec: [join(casesDirectory, "*.test.js")],
    parallel: false,
    require: [join("test", "fixtures.js"), join("test", "hooks.js")],
};
