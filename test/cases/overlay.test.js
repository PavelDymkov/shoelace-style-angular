describe("Overlay Directive", () => {
    it("should check sl-drawer outputs", async () => {
        await io({
            async input() {
                await page.goto(url("/overlay"));

                await page.click("#open");
            },
            async output({ message }) {
                await message("initialFocus");
            },
        });
    });
});
