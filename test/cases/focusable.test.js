const { $ } = require("puppeteer-shadow-selector");

describe("Focusable Directive", () => {
    it("should check angular native focus and blur outputs", async () => {
        await io({
            async input() {
                await page.goto(url("/focusable"));

                const slInput = await $(page, `sl-input::part(input)`);

                await slInput.focus();

                const slButton = await $(page, `sl-button::part(base)`);

                await slButton.focus();

                const button = await page.$(`button`);

                await button.focus();
            },
            async output({ message }) {
                await message("SL-INPUT dispatch focus");
                await message("SL-INPUT dispatch blur");
                await message("SL-BUTTON dispatch focus");
                await message("SL-BUTTON dispatch blur");
            },
        });
    });
});
