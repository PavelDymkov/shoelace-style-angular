const { spawn, spawnSync } = require("child_process");

const { port } = require("./config");

let serveProcess;

module.exports = {
    async mochaGlobalSetup() {
        spawnSync("npx", args("ng build"), {
            stdio: ["inherit", "inherit", "inherit"],
        });

        console.log(`starting test server...`);

        serveProcess = spawn(
            "./node_modules/.bin/ng",
            args(`serve test --configuration production --port ${port}`),
        );

        serveProcess.stdout.on("data", data => {
            process.stdout.write(data);
        });

        serveProcess.stderr.on("data", data => {
            process.stderr.write(data);
        });

        serveProcess.once("close", code => {
            if (code) throw new Error();
        });

        return new Promise(resolve => {
            serveProcess.stdout.on("data", data => {
                const message = String(data);

                if (message.includes("Compiled successfully")) {
                    console.log("test server started");

                    resolve();
                }
            });
        });
    },

    async mochaGlobalTeardown() {
        serveProcess.kill();
    },
};

function args(source) {
    return source.split(/\s+/);
}
