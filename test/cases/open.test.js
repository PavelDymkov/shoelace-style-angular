describe("Open Directive", () => {
    it("should check open two-way binding", async () => {
        await page.goto(url("/open"));

        await io({
            async input() {
                await page.click(`sl-button[id="open"]`);
            },
            async output({ message }) {
                await message("state is consistent");
                await message("dialog is open");
            },
        });

        await io({
            async input() {
                await page.click(`sl-button[id="close"]`);
            },
            async output({ message }) {
                await message("state is consistent");
                await message("dialog is close");
            },
        });
    });
});
