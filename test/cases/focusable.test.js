describe("Focusable Directive", () => {
    it("should check angular native focus and blur outputs", async () => {
        await io({
            async input() {
                await page.goto(url("/focusable"));
            },
            async output({ message }) {
                await message("focus: sl-input");
                await message("blur: sl-input");
                await message("focus: sl-button");
                await message("blur: sl-button");
            },
        });
    });
});
