const { $ } = require("puppeteer-shadow-selector");

describe("Openable Directive", () => {
    it("should check bubbling", async () => {
        await page.goto(url("/openable"));

        await io({
            async input() {
                await page.click(`sl-button[id="run-test"]`);
            },
            async output({ message }) {
                await message("SL-DIALOG dispatch sl-after-show");
            },
        });

        await io({
            async input() {
                await page.click(`sl-button[id="toogle-tooltip"]`);
            },
            async output({ message }) {
                await message("SL-TOOLTIP dispatch sl-after-show");
            },
        });

        await io({
            async input() {
                await page.click(`sl-button[id="toogle-tooltip"]`);
            },
            async output({ message }) {
                await message("SL-TOOLTIP dispatch sl-hide");
            },
        });

        await io({
            async input() {
                const closeButton = await $(
                    page,
                    `sl-dialog::part(close-button)`,
                );

                await closeButton.click();
            },
            async output({ message }) {
                await message("SL-DIALOG dispatch sl-hide");
                await message("SL-DIALOG dispatch sl-hide");
            },
        });
    });
});
