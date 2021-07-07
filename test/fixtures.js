const { spawn } = require("child_process");

const { port } = require("./config");

let serveProcess;

module.exports = {
    async mochaGlobalSetup() {
        const sh = `npx ng serve test --configuration production --port ${port}`;
        const [command, ...args] = sh.split(/\s+/);

        console.log(`starting test server...`);

        serveProcess = spawn(command, args);

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
