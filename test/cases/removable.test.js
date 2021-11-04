const { $ } = require("puppeteer-shadow-selector");

describe("Removable Directive", () => {
    it("should check remove output", async () => {
        await io({
            async input() {
                await page.goto(url("/removable"));

                const button = await $(
                    page,
                    `sl-tag::shadow-dom(sl-icon-button)`,
                );

                await button.click();
            },
            async output({ message }) {
                await message("SL-TAG dispatch sl-remove");
            },
        });
    });
});
