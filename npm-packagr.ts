import { npmPackagr } from "npm-packagr";
import {
    assets,
    badge,
    git,
    npx,
    Pipeline,
    publish,
    test,
} from "npm-packagr/pipelines";

npmPackagr({
    pipelines: [
        npx("ng build"),

        test(),

        badge("tests", {
            label: "tests",
            message: "passing",
        }),

        createBadge(shoelaceVersion),
        createBadge(license),

        assets("LICENSE", "README.md"),

        ({ exec, packageDirectory }) => {
            const projectDirectory = "projects/shoelace-style-angular";

            exec("npm version patch", { cd: projectDirectory });
            exec("npm version patch", { cd: packageDirectory });
        },

        createBadge(npmVersion),

        git("commit", "shoelace-style-angular"),
        git("push"),

        publish({
            login: { account: "paveldymkov", email: "dymkov86@gmail.com" },
        }),
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
