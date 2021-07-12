describe("Animation Directive", () => {
    it("should check start and finish output", async () => {
        await io({
            async input() {
                await page.goto(url("/animation"));

                await page.click("#test1");
            },
            async output({ message }) {
                await message("SL-ANIMATION dispatch sl-start");
                await message("SL-ANIMATION dispatch sl-finish");
            },
        });
    });

    it("should check start and cancel output", async () => {
        await io({
            async input() {
                await page.goto(url("/animation"));

                await page.click("#test2");
            },
            async output({ message }) {
                await message("SL-ANIMATION dispatch sl-start");
                await message("SL-ANIMATION dispatch sl-cancel");
            },
        });
    });
});
