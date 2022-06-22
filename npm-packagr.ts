import { npmPackagr } from "npm-packagr";
import {
    assets,
    badge,
    BadgeType,
    git,
    npx,
    Pipe,
    publish,
    test,
} from "npm-packagr/pipes";

import { createEventsDeclaration } from "./projects/events-declaration/create";

const projectName = "shoelace-style-angular";

npmPackagr({
    sourceDirectory: getSourceRootDirectory(),
    pipeline: [
        git("commit", "shoelace-style-angular"),

        npx(`ng build ${projectName}`),

        ({ packageDirectory }) => createEventsDeclaration(packageDirectory),

        test(),

        badge(BadgeType.Test),

        createShoelaceVersionBadge(),
        createAngularVersionBadge(),

        ({ exec, packageDirectory, sourceDirectory }) => {
            exec("npm version patch", { cd: sourceDirectory });
            exec("npm version patch", { cd: packageDirectory });
        },

        badge(BadgeType.License),

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

    return projects[projectName].root;
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
