describe("ShowHide Directive", () => {
    it("should check show/hide outputs", async () => {
        await io({
            async input() {
                await page.goto(url("/show-hide"));

                await page.click("#toggle");
            },
            async output({ message }) {
                await message("SL-ALERT dispatch sl-show");
                await message("SL-ALERT dispatch sl-after-show");
            },
        });

        await io({
            async input() {
                await page.click("#toggle");
            },
            async output({ message }) {
                await message("SL-ALERT dispatch sl-hide");
                await message("SL-ALERT dispatch sl-after-hide");
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
                await message("SL-TAB-GROUP dispatch sl-tab-hide with 1");
                await message("SL-TAB-GROUP dispatch sl-tab-show with 2");
            },
        });
    });
});
