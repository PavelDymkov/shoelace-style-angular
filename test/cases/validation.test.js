describe("Validation", () => {
    it("should check angular validator", async () => {
        await page.goto(url("/validation"));

        await page.waitForSelector(`button[type="submit"][disabled]`);

        await page.click(`sl-checkbox`);

        await page.waitForSelector(`button[type="submit"]:not([disabled])`);
    });
});
