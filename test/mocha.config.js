module.exports = {
    spec: ["test/cases/**/*.test.js"],
    parallel: false,
    require: ["test/fixtures.js", "test/hooks.js"],
    globals: ["page", "io", "url", "delay"],
    // exit: true,
};
