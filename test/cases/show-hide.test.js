describe("ShowHide Directive", () => {
    it("should check show/hide outputs", async () => {
        await io({
            async input() {
                await page.goto(url("/show-hide"));

                await page.click("#toggle");
            },
            async output({ message }) {
                await message("sl-alert show");
                await message("sl-alert after show");
            },
        });

        await io({
            async input() {
                await page.click("#toggle");
            },
            async output({ message }) {
                await message("sl-alert hide");
                await message("sl-alert atfer hide");
            },
        });
    });

    it("should check tabs show/hide outputs", async () => {
        await io({
            async input() {
                await page.goto(url("/show-hide"));

                await page.click("#switch-tab");
            },
            async output({ message }) {
                await message("sl-tab-hide: panel 1");
                await message("sl-tab-show: panel 2");
            },
        });
    });
});
