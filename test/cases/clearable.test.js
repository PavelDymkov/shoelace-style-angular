describe("Clearable Directive", () => {
    it("should check clear output", async () => {
        await io({
            async input() {
                await page.goto(url("/clearable"));

                await page.click("#clear");
            },
            async output({ message }) {
                await message("sl-tag cleared");
            },
        });
    });
});
