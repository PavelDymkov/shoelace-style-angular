const { $ } = require("puppeteer-shadow-selector");

describe("Overlay Directive", () => {
    it("should check sl-drawer outputs", async () => {
        await io({
            async input() {
                await page.goto(url("/overlay"));

                await page.click("#open");

                const closeButton = await $(
                    page,
                    `sl-drawer::shadow-dom(.drawer__close)`,
                );

                await closeButton.click();
            },
            async output({ message }) {
                await message("initialFocus");
                await message("requestClose");
            },
        });
    });
});
