const { projects } = require("../angular.json");
const { TestServer } = require("./server/test-server");
const { casesDirectory, port } = require("./config");

const server = new TestServer({
    staticRoot: projects.test.architect.build.options.outputPath,
    casesDirectory,
    port,
});

module.exports = {
    mochaGlobalSetup() {
        return server.run();
    },

    mochaGlobalTeardown() {
        return server.shutdown();
    },
};
