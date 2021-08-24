const { $ } = require("puppeteer-shadow-selector");

describe("Toast Directive", () => {
    it("should check show/hide", async () => {
        await io({
            async input() {
                await page.goto(url("/toast"));

                await page.click("button");
            },
            async output({ message }) {
                await message("SL-ALERT dispatch sl-show");
                await message("SL-ALERT dispatch sl-hide");
            },
        });
    });

    it("should check closable", async () => {
        await io({
            async input() {
                await page.goto(url("/toast"));

                await page.click("button");
            },
            async output({ message }) {
                await message("SL-ALERT dispatch sl-show");

                await $(page, `sl-alert::shadow-dom(.alert__close)`);
            },
        });
    });
});
