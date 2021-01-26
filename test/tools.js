const { port } = require("./config");

module.exports = {
    url(path) {
        return `http://localhost:${port}${path}`;
    },
};
