describe("Select Directive", () => {
    it("should check sl-select outputs", async () => {
        await io({
            async input() {
                await page.goto(url("/select"));

                await page.waitForSelector("#trigger");
                await delay(100);

                await page.click("#trigger");
            },
            async output({ message }) {
                await message("success");
            },
        });
    });
});
