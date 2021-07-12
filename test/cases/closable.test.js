const { $ } = require("puppeteer-shadow-selector");

describe("Closable Directive", () => {
    it("should check close output", async () => {
        await io({
            async input() {
                await page.goto(url("/closable"));

                const button = await $(
                    page,
                    `sl-tab::shadow-dom(sl-icon-button)`,
                );

                await button.click();
            },
            async output({ message }) {
                await message("SL-TAB dispatch sl-close");
            },
        });
    });
});
