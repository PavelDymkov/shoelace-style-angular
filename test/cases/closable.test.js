describe("Closable Directive", () => {
    it("should check close output", async () => {
        await io({
            async input() {
                await page.goto(url("/closable"));

                await page.click("#close");
            },
            async output({ message }) {
                await message("sl-tab closed");
            },
        });
    });
});
