import { npmPackagr } from "npm-packagr";
import { assets, badge, npx, Pipeline } from "npm-packagr/pipelines";

npmPackagr({
    pipelines: [
        npx("ng build"),

        badge("tests", {
            label: "tests",
            message: "passing",
        }),

        createBadge(shoelaceVersion),
        createBadge(npmVersion),
        createBadge(license),

        assets("LICENSE", "README.md"),
    ],
});

function createBadge(pipeline: () => Pipeline): Pipeline {
    return context => {
        pipeline()(context);
    };
}

function shoelaceVersion(): Pipeline {
    const { version } = require("@shoelace-style/shoelace/package");

    return badge("shoelace-version", {
        label: "tests with @shoelace-style/shoelace",
        message: String(version),
    });
}

function npmVersion(): Pipeline {
    const { version } = require("./package/package");

    return badge("npm-version", {
        label: "npm",
        message: String(version),
        messageColor: "blue",
    });
}

function license(): Pipeline {
    const { license } = require("./package/package");

    return badge("license", {
        label: "license",
        message: String(license),
        messageColor: "green",
    });
}
