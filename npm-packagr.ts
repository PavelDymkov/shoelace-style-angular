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

import { createEventsDeclaration } from "./projects/events-declaration/create";

const project = require("./package.json").name;

npmPackagr({
    sourceDirectory: getSourceRootDirectory(),
    pipeline: [
        git("commit", project),

        npx(`ng build ${project}`),

        ({ packageDirectory }) => createEventsDeclaration(packageDirectory),

        test(),

        badge(BadgeType.Test),

        createShoelaceVersionBadge(),
        createAngularVersionBadge(),

        ({ exec, packageDirectory, sourceDirectory }) => {
            exec("npm version patch", { cd: sourceDirectory });
            exec("npm version patch", { cd: packageDirectory });
        },

        createLicenseBadge(),

        assets("LICENSE", "README.md"),

        git("commit", "shoelace-style-angular"),
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

function createLicenseBadge(): Pipe {
    return context => {
        const { license } = require("./package/package");

        const pipe = badge("license", {
            label: "license",
            message: String(license),
            messageColor: "green",
        });

        pipe(context);
    };
}
