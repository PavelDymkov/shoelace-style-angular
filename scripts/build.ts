import { clean, createBadge } from "package-badges";
import { join } from "path";
import { exit } from "process";
import { cp, exec, rm, test } from "shelljs";

if (process.cwd() !== join(__dirname, "..")) exit(1);

if (test("-d", "package")) rm("-rf", "package");

exec("npx ng build");

clean();

createBadge("tests", () => ({
    label: "tests",
    message: "passing",
}));

createBadge("shoelace-version", () => {
    const { version } = require("@shoelace-style/shoelace/package");

    return {
        label: "tests with @shoelace-style/shoelace",
        message: String(version),
    };
});

createBadge("npm-version", () => {
    const { version } = require("../package/package");

    return {
        label: "npm",
        message: String(version),
        color: "blue",
    };
});

createBadge("license", () => {
    const { license } = require("../package/package");

    return {
        label: "license",
        message: String(license),
        color: "green",
    };
});

cp(["README.md", "LICENSE"], "package");
