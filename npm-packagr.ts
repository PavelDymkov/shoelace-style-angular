import {
    assets,
    badge,
    BadgeType,
    git,
    npmPackagr,
    npx,
    Pipe,
    publish,
    test,
} from "npm-packagr";

const project = require("./package.json").name;

npmPackagr({
    sourceDirectory: getSourceRootDirectory(),
    pipeline: [
        npx(`ng build ${project}`),

        test(),

        badge(BadgeType.Test),

        createShoelaceVersionBadge(),
        createAngularVersionBadge(),

        badge(BadgeType.License),

        ({ exec, packageDirectory, sourceDirectory }) => {
            exec("npm version patch", { cd: sourceDirectory });
            exec("npm version patch", { cd: packageDirectory });
        },

        assets("LICENSE", "README.md", "events"),

        git("commit", project),
        git("push"),

        publish({
            login: { account: "paveldymkov", email: "dymkov86@gmail.com" },
        }),
    ],
});

function getSourceRootDirectory(): string {
    const { projects } = require("./angular.json");

    return projects[project].root;
}

function createShoelaceVersionBadge(): Pipe {
    const { version } = require("@shoelace-style/shoelace/package.json");

    return badge("shoelace-version", {
        label: "tests with @shoelace-style/shoelace",
        message: String(version),
    });
}

function createAngularVersionBadge(): Pipe {
    const { version } = require("@angular/core/package.json");

    return badge("ng-version", {
        label: "tests with angular",
        message: String(version),
    });
}
