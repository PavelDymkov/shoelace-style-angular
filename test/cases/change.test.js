describe("Change Directive", () => {
    it("should check change output", async () => {
        await io({
            async input() {
                await page.goto(url("/change"));

                await page.click("sl-checkbox");
            },
            async output({ message }) {
                await message("SL-CHECKBOX dispatch sl-change");
            },
        });
    });
});
