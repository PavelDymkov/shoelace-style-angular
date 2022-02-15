describe("Autofocus Directive", () => {
    it("should check autofocus", async () => {
        await io({
            async input() {
                await page.goto(url("/autofocus"));
            },
            async output({ message }) {
                await message("SL-INPUT dispatch sl-focus");
            },
        });

        await io({
            async input() {
                await page.click("button#hide");
                await page.click("button#show");
            },
            async output({ message }) {
                await message("SL-INPUT dispatch sl-focus");
            },
        });
    });
});
