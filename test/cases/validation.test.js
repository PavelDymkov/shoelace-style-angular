const { $ } = require("puppeteer-shadow-selector");

describe("Validation", () => {
    it("should check angular validator", async () => {
        await page.goto(url("/validation"));

        await page.waitForSelector(disabled(".form-1"));

        await page.click(`sl-checkbox`);

        await page.waitForSelector(enabled(".form-1"));
    });

    it("should check status change for sl-input event", async () => {
        await page.goto(url("/validation"));

        await page.waitForSelector(disabled(".form-2"));

        const input = await $(page, `sl-input::part(input)`);

        input.type("X");

        await page.waitForSelector(enabled(".form-2"));
    });
});

function disabled(formSelector) {
    return `${formSelector} button[type="submit"][disabled]`;
}

function enabled(formSelector) {
    return `${formSelector} button[type="submit"]:not([disabled])`;
}
