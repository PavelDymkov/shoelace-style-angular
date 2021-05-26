const { $ } = require("puppeteer-shadow-selector");

describe("Clearable Directive", () => {
    it("should check clear output", async () => {
        await io({
            async input() {
                await page.goto(url("/clearable"));

                const button = await $(
                    page,
                    `sl-tag::shadow-dom(sl-icon-button)`,
                );

                await button.click();
            },
            async output({ message }) {
                await message("sl-tag cleared");
            },
        });
    });
});
